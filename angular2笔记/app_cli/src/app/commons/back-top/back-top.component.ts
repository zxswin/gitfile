import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-top',
  templateUrl: './back-top.component.pug',
  styleUrls: ['./back-top.component.less'],
})

export class BackTopComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit() {}

  /** 点击事件  */
  toUpClick(): void {
    console.log('notify');
  }
}
