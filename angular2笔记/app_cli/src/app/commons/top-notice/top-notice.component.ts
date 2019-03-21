import { Component , OnInit } from '@angular/core';
import { ThreeLevNavService } from '../three-lev-nav/three-lev-nav.service';

@Component({
  selector: 'app-top-notice',
  templateUrl: './top-notice.component.pug',
  styleUrls: ['./top-notice.component.less'],
})

export class TopNoticeComponent implements OnInit {

  breadcrumbNavData: string[] = [];

  constructor(private threeLevNavService: ThreeLevNavService) { }

  ngOnInit() {
    this.threeLevNavService.threeNavSourceModal$.subscribe((val: string[]) => {
      this.breadcrumbNavData = val;
    });
  }

}
