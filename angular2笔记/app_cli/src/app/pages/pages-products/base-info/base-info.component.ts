import { Component , OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-base-info',
  templateUrl: './base-info.component.pug',
  styleUrls: ['./base-info.component.less'],
})
export class BaseInfoComponent implements OnInit{
  menuSite = 'AA';
  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {

  }
}
