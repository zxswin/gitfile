import { Component, OnInit, Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class AttackService {
    // 用来产生数据流的数据源
    private damageSource = new Subject<number>();
    // 把数据流转换成 Observable
    damage$ = this.damageSource.asObservable();
    attack(damage: number) {
        // 把伤害输入到数据流
        this.damageSource.next(damage);
    }
}