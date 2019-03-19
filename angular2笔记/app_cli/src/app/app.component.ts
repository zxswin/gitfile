import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { LogService } from './services/log.service';

import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.less'],
  animations: [ slideInAnimation ]
})

export class AppComponent implements OnInit {
  title = 'app';
  constructor(
    private router: Router,
    private logService: LogService,
  ) { }

  ngOnInit() {
    console.log('根组件启动了.....');
    this.logService.initData();
  }

  getAnimationData(outlet: RouterOutlet) {
    // console.log('outlet.activatedRouteData',outlet.activatedRouteData)
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
