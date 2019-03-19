import { Component , OnInit } from '@angular/core';
import { ThreeLevNavServices } from '../three-lev-nav/three-lev-nav.services';

@Component({
  selector: 'app-top-notice',
  templateUrl: './top-notice.component.pug',
  styleUrls: ['./top-notice.component.less'],
})

export class TopNoticeComponent implements OnInit {

  breadcrumbNavData: string[] = [];

  constructor(private threeLevNavServices: ThreeLevNavServices) { }

  ngOnInit() {
    this.threeLevNavServices.threeNavSourceModal$.subscribe((val: string[]) => {
      this.breadcrumbNavData = val;
    });
  }

}
