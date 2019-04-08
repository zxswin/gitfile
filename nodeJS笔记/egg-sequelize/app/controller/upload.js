const fs = require('fs');
const path = require('path');
const Controller = require('egg').Controller;
// const pump = require('pump'); // 文件流管道生成文件
const uuidv1 = require('uuid/v1'); // 用于生成唯一值

class UploaderController extends Controller {
  async upload() {
    const ctx = this.ctx;

    const parts = this.ctx.multipart({ autoFields: true });
    const files = [];

    let stream;
    while ((stream = await parts()) != null) {
      const filename = stream.filename.toLowerCase();

      let dataObj = new Date();
      let month = Number.parseInt(dataObj.getMonth(), 0) + 1;
      let date = Number.parseInt(dataObj.getDate(), 0);
      month = month.toString().length > 1 ? month : `0${month}`;
      date = date.toString().length > 1 ? date : `0${date}`;

      let fileDir = `${dataObj.getFullYear()}${month}${date}`;
      let dir = path.join(__dirname, `../public/uploads/${fileDir}/`);

      /**
       * 按照日期生成文件目录
       */

      try {
        fs.accessSync(dir);
      } catch (err) {
        console.log('err===================', err);
        fs.mkdirSync(dir);
      }

      const target = dir + uuidv1().substring(0, 9) + filename;
      const writeStream = fs.createWriteStream(target);
      /** 利用数据流通过管道生成文件  */
      // await pump(stream, writeStream);
      await stream.pipe(writeStream);
      console.log('文件上传成功888', target);
      files.push(filename);
    }

    ctx.body = {
      info: '上传成功',
      files: files,
      /** 附带上传的字段  */
      body: Object.keys(parts.field).map(key => ({ key, value: parts.field[key] })),
      ip: ctx.ip,
    };
  }
}

module.exports = UploaderController;
