import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-tree-select',
  templateUrl: './tree-select.component.pug',
  styleUrls: ['./tree-select.component.less'],
})

export class TreeSelectComponent implements OnInit{
  expandKeys = ['a'];
  value: string;
  nodes = [
    {
      title: '基金1',
      key: 'a',
    },
    {
      title: '债券1',
      key: 'b',
    },
    {
      title: '基金2',
      key: 'c',
    },
    {
      title: '债券2',
      key: 'd',
    }
  ];

  onChange($event: string): void {
    console.log($event);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.value = '1001';
    }, 1000);
  }
}
