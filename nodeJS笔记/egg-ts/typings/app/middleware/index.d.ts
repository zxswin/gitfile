// This file is created by egg-ts-helper@1.25.2
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCompress from '../../../app/middleware/compress';
import ExportErrorHandler from '../../../app/middleware/error_handler';
import ExportGzip from '../../../app/middleware/gzip';

declare module 'egg' {
  interface IMiddleware {
    compress: typeof ExportCompress;
    errorHandler: typeof ExportErrorHandler;
    gzip: typeof ExportGzip;
  }
}
