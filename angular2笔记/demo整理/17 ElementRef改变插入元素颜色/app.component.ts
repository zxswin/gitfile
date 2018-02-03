import { Component, ElementRef, ViewChild, AfterViewInit, Renderer } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <h1>Welcome to Angular World</h1>
    <div #greet [innerHtml]="eleStr"></div>
  `,
})
export class AppComponent {
  eleStr: string = '<span>你</span>我<span>789</span>';

  @ViewChild('greet')
  greetDiv: ElementRef;

  constructor(private elementRef: ElementRef, private renderer: Renderer) { }

  ngAfterViewInit() {
    // this.greetDiv.nativeElement.style.backgroundColor  = 'red';
    this.renderer.setElementStyle(this.greetDiv.nativeElement, 'backgroundColor', '#fff');
    let span=this.greetDiv.nativeElement.getElementsByTagName('span');
    let spanLen=span['length'];
    for(let i=0;i<spanLen;i++){
      span[i].style.color  = 'red';
    }
  }
}