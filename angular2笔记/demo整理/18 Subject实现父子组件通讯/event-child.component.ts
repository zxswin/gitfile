import { Component} from '@angular/core';
import { AttackService} from './attack.service';
@Component({
    selector: 'event-child',
    template: `
    <h1>The SkyWalker.</h1>
    <button (click)="attack()">Attack!1112222222</button><span>Damage: {{damage}} !</span>
    `
})
export class EventChildComponent {
    private baseDamage: number = 100;
    damage: number = 0;

    constructor(private attackService: AttackService) {
    }

    attack() {
        this.damage = Math.random() * this.baseDamage;
        // 天行者调用 AttackService 产生伤害
        this.attackService.attack(this.damage);
    }
}
