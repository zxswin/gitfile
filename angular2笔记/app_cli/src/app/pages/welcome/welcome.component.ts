import { Component , OnInit } from '@angular/core';
import { LogService } from '../../services/log.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.pug',
  styleUrls: ['./welcome.component.less'],
})
export class WelcomeComponent implements OnInit{
  title = 'welcome';
  constructor(
    private logService: LogService,
  ) { }
  ngOnInit(){
    console.log('welcome页面启动88888.....');
    this.logService.initData();
  }
}
