import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'base-info-bund',
  templateUrl: './base-info-bund.component.pug',
  styleUrls: ['./base-info-bund.component.less'],
})     
export class BaseInfoBundComponent {
  title = 'base-info-bund';
  constructor(private route: ActivatedRoute,
              private router: Router,) { }

  ngOnInit(){
    console.log('base-info-bund页面启动......');
    this.route.data
    .subscribe((data) => {
      console.log('data.bund',data.bund); //获取Resolve: 预先获取组件数据 返回的数据
    });
  }







  sortName = null;
  sortValue = null;

  data = [
    {
      name   : 'John Brown',
      age    : 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      name   : 'Jim Green',
      age    : 42,
      address: 'London No. 1 Lake Park'
    },
    {
      name   : 'Joe Black',
      age    : 32,
      address: 'Sidney No. 1 Lake Park'
    },
    {
      name   : 'Jim Red',
      age    : 32,
      address: 'London No. 2 Lake Park'
    }
  ];
  displayData = this.data;
  
  sort(sort: { key: string, value: string }): void {
    this.sortName = sort.key;
    this.sortValue = sort.value;
    this.search();
  }
  
  
  search(): void {
    console.log('this.data',this.data);
    const data = [...this.data];
    console.log('data',data);
    if (this.sortName && this.sortValue) {
      this.displayData = data.sort((a, b) => (this.sortValue === 'ascend') ? (a[ this.sortName ] > b[ this.sortName ] ? 1 : -1) : (b[ this.sortName ] > a[ this.sortName ] ? 1 : -1));
    } else {
      this.displayData = data;
    }
  }
  








  
}
