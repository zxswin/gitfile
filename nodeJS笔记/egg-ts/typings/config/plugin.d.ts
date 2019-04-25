// This file is created by egg-ts-helper@1.25.2
// Do not modify this file!!!!!!!!!

import 'egg';
import 'egg-onerror';
import 'egg-session';
import 'egg-i18n';
import 'egg-watcher';
import 'egg-multipart';
import 'egg-security';
import 'egg-development';
import 'egg-logrotator';
import 'egg-schedule';
import 'egg-static';
import 'egg-jsonp';
import 'egg-view';
import 'egg-sequelize';
import 'egg-view-nunjucks';
import 'egg-validate';
import 'egg-cors';
import 'egg-passport';
import 'egg-passport-weibo';
import 'egg-passport-twitter';
import 'egg-passport-github';
import 'egg-passport-bitbucket';
import { EggPluginItem } from 'egg';
declare module 'egg' {
  interface EggPlugin {
    onerror?: EggPluginItem;
    session?: EggPluginItem;
    i18n?: EggPluginItem;
    watcher?: EggPluginItem;
    multipart?: EggPluginItem;
    security?: EggPluginItem;
    development?: EggPluginItem;
    logrotator?: EggPluginItem;
    schedule?: EggPluginItem;
    static?: EggPluginItem;
    jsonp?: EggPluginItem;
    view?: EggPluginItem;
    sequelize?: EggPluginItem;
    nunjucks?: EggPluginItem;
    validate?: EggPluginItem;
    cors?: EggPluginItem;
    passport?: EggPluginItem;
    passportWeibo?: EggPluginItem;
    passportTwitter?: EggPluginItem;
    passportGithub?: EggPluginItem;
    passportBitbucket?: EggPluginItem;
  }
}