// Type declarations for scripts directory
declare module "fluent-ffmpeg" {
  import { EventEmitter } from "events";
  
  interface FfmpegCommand extends EventEmitter {
    outputOptions(options: string | string[]): FfmpegCommand;
    output(file: string): FfmpegCommand;
    run(): FfmpegCommand;
    on(event: "start", callback: (commandLine: string) => void): FfmpegCommand;
    on(event: "progress", callback: (progress: { percent?: number }) => void): FfmpegCommand;
    on(event: "end", callback: () => void): FfmpegCommand;
    on(event: "error", callback: (err: Error) => void): FfmpegCommand;
  }
  
  function ffmpeg(input: string): FfmpegCommand;
  export = ffmpeg;
}

