
import { Component} from '@angular/core';
@Component({
	selector: 'my-app',
	template: `
	    <p><button routerLink="/mycount">mycount组件使用了redux进行状态管理</button></p>
		<p><button routerLink="/mycompare">mycompare组件未使用redux</button></p>
        <router-outlet></router-outlet>
	`
})
export class AppComponent {
}