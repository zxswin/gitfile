import { Injectable } from '@angular/core';

@Injectable()

export class TopBarService {
    constructor() { }
    initData(){
        console.log('引入top-bar的service文件');
    }
}