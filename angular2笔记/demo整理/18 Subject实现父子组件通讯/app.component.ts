import { Component, OnInit} from '@angular/core';
import { AttackService} from './attack.service';

@Component({
    selector: 'my-app',
   // providers: [AttackService], // 向父组件注入 AttackService，这样，父组件与子组件就能共享一个单例的 service
    template: `
    <h1>I'm your father.</h1>
    <p>recived damage: {{damage}}</p>
    <p>last damage: {{lastDamage}}</p>
    <event-child></event-child>`
})
export class AppComponent implements OnInit {
    damage: number = 0;
    lastDamage: number = 0;

    constructor(private attackService: AttackService) {
        // 父组件订阅来自天行者的伤害
        this.attackService.damage$.subscribe(damage => {
            this.lastDamage = damage;
            this.damage += damage;
        }, error => {
            console.log('error: ' + error);
        });
    }

    ngOnInit() { }
}