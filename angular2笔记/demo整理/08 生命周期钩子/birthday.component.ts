import {  Component, Input} from '@angular/core';
@Component({
  selector: 'birthday',
  template: `
    <h2>我的生日：{{birthday}}</h2>
  `,
})
export class BirthdayComponent {
  @Input() birthday:any;
  ngOnChanges() {
    console.log('ngOnChanges');
  }
  ngOnInit() {
    console.log('ngOnInit');
  }
  ngDoCheck() {
    console.log('ngDoCheck');
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
