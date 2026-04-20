// Load environment variables
import { config as dotenvConfig } from "dotenv";
import { resolve } from "path";

dotenvConfig({ path: resolve(process.cwd(), ".env") });

import { S3Client, PutBucketCorsCommand } from "@aws-sdk/client-s3";

// Configuration from environment variables
const config = {
  accountId: process.env.R2_ACCOUNT_ID || "",
  accessKeyId: process.env.R2_ACCESS_KEY_ID || "",
  secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || "",
  bucketName: process.env.R2_BUCKET_NAME || "",
  endpoint: process.env.R2_ENDPOINT || `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
};

// Initialize S3 client for R2
const s3Client = new S3Client({
  region: "auto",
  endpoint: config.endpoint,
  credentials: {
    accessKeyId: config.accessKeyId,
    secretAccessKey: config.secretAccessKey,
  },
});

/**
 * Configure CORS for R2 bucket to allow HLS video streaming
 */
async function setupCORS() {
  console.log("🔧 Setting up CORS configuration for R2 bucket...\n");

  // Validate configuration
  if (!config.accountId || !config.accessKeyId || !config.secretAccessKey || !config.bucketName) {
    console.error("❌ Missing required environment variables!");
    console.error("Please set in .env:");
    console.error("  - R2_ACCOUNT_ID");
    console.error("  - R2_ACCESS_KEY_ID");
    console.error("  - R2_SECRET_ACCESS_KEY");
    console.error("  - R2_BUCKET_NAME");
    process.exit(1);
  }

  try {
    // CORS configuration for HLS video streaming
    const corsConfiguration = {
      CORSRules: [
        {
          AllowedHeaders: ["*"],
          AllowedMethods: ["GET", "HEAD"],
          AllowedOrigins: [
            "*", // Allow all origins (you can restrict this to specific domains in production)
            // Examples for production:
            // "https://www.life-first.in",
            // "https://life-first.in",
            // "http://localhost:3000", // For local development
          ],
          ExposeHeaders: [
            "Content-Length",
            "Content-Type",
            "Content-Range",
            "Accept-Ranges",
            "ETag",
            "Last-Modified",
          ],
          MaxAgeSeconds: 3600, // Cache preflight requests for 1 hour
        },
      ],
    };

    const command = new PutBucketCorsCommand({
      Bucket: config.bucketName,
      CORSConfiguration: corsConfiguration,
    });

    await s3Client.send(command);
    console.log("✅ CORS configuration applied successfully!");
    console.log("\n📋 CORS Settings:");
    console.log("   - Allowed Methods: GET, HEAD");
    console.log("   - Allowed Origins: * (all origins)");
    console.log("   - Allowed Headers: * (all headers)");
    console.log("   - Exposed Headers: Content-Length, Content-Type, Content-Range, Accept-Ranges, ETag, Last-Modified");
    console.log("   - Max Age: 3600 seconds (1 hour)");
    console.log("\n⚠️  Note: For production, consider restricting AllowedOrigins to specific domains:");
    console.log("   - https://www.life-first.in");
    console.log("   - https://life-first.in");
    console.log("\n✅ Your HLS videos should now work without CORS errors!");

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("❌ Failed to configure CORS:", errorMessage);
    if (error instanceof Error && error.name === "NoSuchBucket") {
      console.error("   The bucket does not exist. Please check R2_BUCKET_NAME in your .env file.");
    } else if (error instanceof Error && error.name === "AccessDenied") {
      console.error("   Access denied. Please check your R2 credentials have write permissions.");
    }
    process.exit(1);
  }
}

// Run the script
setupCORS().catch(console.error);

