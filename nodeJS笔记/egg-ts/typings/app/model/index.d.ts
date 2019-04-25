// This file is created by egg-ts-helper@1.25.2
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportComments from '../../../app/model/comments';
import ExportContents from '../../../app/model/contents';
import ExportLikes from '../../../app/model/likes';
import ExportUsers from '../../../app/model/users';

declare module 'sequelize' {
  interface Sequelize {
    Comments: ReturnType<typeof ExportComments>;
    Contents: ReturnType<typeof ExportContents>;
    Likes: ReturnType<typeof ExportLikes>;
    Users: ReturnType<typeof ExportUsers>;
  }
}
