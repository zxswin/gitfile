import { Component , Input, OnInit} from '@angular/core';
import { AppApiProgressService , ProgressParam } from './app-api-progress.service';


@Component({
  selector: 'app-api-progress',
  templateUrl: './app-api-progress.component.pug',
  styleUrls: ['./app-api-progress.component.less'],

})

export class AppApiProgressComponent implements OnInit {
  @Input() progressParam: ProgressParam;


  constructor(private appApiProgressService: AppApiProgressService) {}

  progressParamDefault: ProgressParam = {
    isShow: false,
    nzType: 'line',
    nzFormat: (percent: number) => `${percent}%`,
    nzPercent: 100,
    nzShowInfo: false,
    nzStatus: 'active',
    nzStrokeWidth: 10,
    nzWidth: 132,
    nzStrokeLinecap: 'round',
    nzGapPosition: 'top',
  };

  ngOnInit() {
    /** 数据初始化  */
    this.progressParam = Object.assign({}, this.progressParamDefault, this.progressParam);
    /** 订阅数据流 决定是否显示进度条  */
    this.appApiProgressService.progressSource$.subscribe(isShow => {
      this.progressParam.isShow = isShow;
    });
  }
}
