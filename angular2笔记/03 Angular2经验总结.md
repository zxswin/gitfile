一.常用代码：
1.[ngClass]用法
  li.sprite-01([ngClass]="{'text-success':true}");
  li(*ngFor="let num of [1,2,3,4,5,6,7,8]; let i=index",[ngClass]="className(num)"){{i}}

2.依赖注入服务流程
  pages-task-two-service.ts--(新建一个服务脚本提供服务)
     import{Injectable} from '@angular/core'--(引入服务所需要的模块)
     @Injectable()--(表示是提供服务的文件)
     export class pagesTaskTwoService{---(对外输出服务)
         getsprite(){
            this.listArr=[];
            return this.listArr;---(服务内容需要被return出去)
         }

     }

  pages-task-two.component.ts--(需要服务的文件)
     import{pagesTaskTwoService} from './pages-task-two-service';--(引入服务组件)
     @Component({
        providers:[pagesTaskTwoService]---注册服务提供商
     })
     export class PagesTaskTwoComponent{
        constructor(private pagesTaskTwoService:pagesTaskTwoService){
                      -----在构造函数里初始化服务
        }

        initData(){
           this.listArr=this.pagesTaskTwoService.getsprite();---调用服务
        }
     }

3.@Component({})--装饰器
  @Component({
     selector:'nbop-app',
     templateUrl:'./app.component.html',
     styleUrls:['./app.component.css'],
     providers:[pagesTaskTwoService]
  })

4.ngOnInit()--可以默认执行逻辑代码
  export class AppComponent {
    title = '谁是英雄';
    constructor(){

    }
    ngOnInit(){
      console.log('开始了！')
    }

  }

二.路由：
1.路由(根路由)
index.html--包含----<base href="/">
app.moudle.ts---(路由配置)
    import {RouterModule,Routes} from '@angular/router';--(引入路由模块)
    import {pagesComponent} from './pages.component';--(引入路由显示组件)
    import { AppComponent } from './app.component';--(引入根组件)

const appRoutes: Routes=[----(配置路由参数)
  //默认跳转路径
  { path:'',
    redirectTo:'/pages',
    pathMatch:'full'
  },
  //对应组件跳转路径
  {path:'pages',component:pagesComponent}
]

imports: [
    RouterModule.forRoot(appRoutes)----(启动根路由模块)
  ],

//在跟模板中
<nav>
  <a routerLink="/pages" routerLinkActive="active">pages</a>
</nav>
<router-outlet></router-outlet>

2.简单路由的目录结构
  app
    |pageone
        |pageone.component.ts
    |pagetwo
        |pagetwo.component.ts
    |app.component.ts
    |app.module.ts----(路由配置最终均在这里配置)

  //路由配置
  {path:'pageone',component:PageOneComponent},
  {path:'pagetwo',component:PageTwoComponent},
  {path: '',   redirectTo: '/pagetwo', pathMatch: 'full' },---(默认重定向组件)
  {path:'**',component:PageNoComponent}---(找不到路径时候显示的组件)

3.简单子路由实现
  //目录结构
    app
       |pageone
           |onepartone
               |onepartone.ts
           |oneparttwo
               |oneparttwo.ts
           pageone.component.ts
           pageone.module.ts-----(输出子路由配置模板)
       app.component.ts
       app.module.ts------(路由配置并启动)

  //子路由设置
    const pageoneRoutes: Routes=[
      {path:'pageone',component:PageOneComponent,
       children:[
         {path:'pageonepart1',component:OnePartOneComponent},
         {path:'pageonepart2',component:OnePartTwoComponent}
       ]
      }
    ]

    imports: [
        RouterModule.forChild(pageoneRoutes)
      ],

  //子路由组件模板
    <a routerLink="/pageone/pageonepart1">pageonepart1</a>
    <a routerLink="/pageone/pageonepart2">pageonepart2</a>
    <router-outlet></router-outlet>

4.绑定点击事件进行路由跳转
   //在app.component.ts中
        import { Router } from '@angular/router';---(须引入路由模块)

       (设置要跳转的链接并绑定了事件)
       <a href="javascript:void(null)" (click)="selectone()">跳转到pageonepart1</a>
       <a href="javascript:void(null)" (click)="selecttwo()">跳转到pageonepart2</a>

       (构造函数中初始化路由模块)
        constructor(
           private router: Router
         ) {}

       (定义点击事件函数)
        selecttwo(){
           this.router.navigate(['/pageone/pageonepart2']);
         }

5.设置第二路由
   //模板中设置第二路由出口
   <router-outlet name="popup"></router-outlet>
   //路由路径设置
   {path:'pagetwo',component:PageTwoComponent,outlet: 'popup'}
   //路由导航链接
   <a [routerLink]="[{ outlets: { popup: ['pagetwo'] } }]">pagetwo</a>
   //清除第二路由
   closePopup() {
       this.router.navigate([{ outlets: { popup: null }}]);
   }
   //重新载入第二路由
    showPopup() {
       this.router.navigate([{ outlets: { popup: 'pagetwo' }}]);
    }

6.惰性加载路由配置
   |app.moudule.ts---(设置需要惰性加载的路由)
     const appRoutes: Routes=[
       {path:'pagetwo',component:PageTwoComponent,outlet: 'popup'},
       {
         path: '',
         loadChildren: './pageone/pageone.module#pageOneModule',
       },
     ]
    组件和模块等均无需在引入,loadChildren会自动引入
    自定义预加载策略
     const appRoutes: Routes=[
           {path:'pagetwo',component:PageTwoComponent,outlet: 'popup'},
           {
             path: '',
             loadChildren: './pageone/pageone.module#pageOneModule',
             data: { preload: true }
           },
         ]
    路由器会把canLoad()方法的route参数设置为准备访问的目标URL。
    canLoad: [AuthGuard]--(appRoutes中写入参数即可)



7.所有惰性加载模块启用预加载功能
RouterModule.forRoot方法的第二个参数接受一个附加配置选项对象。 preloadingStrategy就是其中之一。 把PreloadAllModules添加到forRoot调用中：
   |app.moudule.ts---(配置所有惰性加载模块启用预加载功能)
    imports: [
        RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules } )
      ],

8.路由相对路径(指定是相对路径)
this.router.navigate(['../video-capture'], { relativeTo: this.activatedRoute });


9.路由参数：
const heroesRoutes: Routes = [
  { path: 'heroes',  component: HeroListComponent },
  { path: 'hero/:id', component: HeroDetailComponent }---(:id是一个路由参数的令牌(Token))
];
//引入路由模块
import { Router, ActivatedRoute, Params } from '@angular/router';
//引入服务
 constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}
//操作路由参数
  this.router.navigate(['/hero', hero.id]);
  this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);-----(对应模块Router);
   this.route.params
      .switchMap((params: Params) => this.service.getHero(+params['id']))
      .subscribe((hero: Hero) => this.hero = hero);---(params['id']获取路由参数,对应模块ActivatedRoute);

//模板中的路由链接
const heroesRoutes: Routes = [
  { path: 'heroes',  component: HeroListComponent },
  { path: 'hero/:id', component: HeroDetailComponent }
];

10.CanActivate路由守卫
守卫返回一个值，以控制路由器的行为：如果它返回true,导航过程会继续,如果它返回false,导航过程会终止,且用户会留在原地。
auth-guard.service.ts文件中
    import { Injectable }       from '@angular/core';
    import {
      CanActivate, Router,
      ActivatedRouteSnapshot,
      RouterStateSnapshot
    }                           from '@angular/router';
    @Injectable()
    export class AuthGuard implements CanActivate {
      constructor( private router: Router) {}

      canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;
        console.log("state.url",state.url);
        return this.checkLogin(url);
      }

      checkLogin(url: string): boolean {
        if (1>2) { return true; }
        this.router.navigate(['/sidekicks']);
        return false;
      }
    }

app.module.ts文件中
import { AuthGuard }            from './auth-guard.service';
//注册服务供应商
 providers: [
    AuthGuard,
  ],

heroes-routing.module.ts文件中
import { AuthGuard } from '../auth-guard.service';

//CanActivate路由守卫
const heroesRoutes: Routes = [
  { path: 'heroes',  component: HeroListComponent ,canActivate: [AuthGuard],},
  { path: 'hero/:id', component: HeroDetailComponent }
];

11.CanAcitvateChild：保护子路由
auth-guard.service.ts文件
  import { Injectable }       from '@angular/core';
  import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild
  }                           from '@angular/router';
  @Injectable()
  export class AuthGuard implements CanActivate,CanActivateChild {
    constructor( private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      let url: string = state.url;
      console.log("state.url",state.url);
      return this.checkLogin(url);
    };
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      if (1>2) { return true; }
      this.router.navigate(['/22']);
    };
    checkLogin(url: string): boolean {
      if (1<2) { return true; }
      this.router.navigate(['/111']);
      return false;
    };
  }

import { AuthGuard } from '../auth-guard.service';---(引入AuthGuard服务)
//路由的设置
const pageoneRoutes: Routes=[
  {path:'pageone',component:PageOneComponent,
  canActivate: [AuthGuard],
   children:[
     {
       path: '',
       canActivateChild: [AuthGuard],
       children: [
         {path:'pageonepart1',component:OnePartOneComponent},
         {path:'pageonepart2',component:OnePartTwoComponent},
         {path: '', component: OnePartTwoComponent },
         {path:'**',component:OnePartTwoComponent},
       ]
     }
   ]
  },
]
12.CanDeactivate：处理未保存的更改
//can-deactivate-guard.service.ts
import { Injectable }           from '@angular/core';
import { CanDeactivate,
         ActivatedRouteSnapshot,
         RouterStateSnapshot }  from '@angular/router';

import { OnePartOneComponent } from './pageone/onepartone/onepartone';
@Injectable()
export class CanDeactivateGuard implements CanDeactivate<OnePartOneComponent> {
  canDeactivate(
    component: OnePartOneComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> | boolean {
    console.log('state.url',state.url);
    if (1<2) {
      console.log(component.num);
      return true;
    }
    return false;
  }
}
//注入服务
import { CanDeactivateGuard }    from './can-deactivate-guard.service';
  providers: [
    AuthGuard,
    CanDeactivateGuard
  ],

//路由中设置
const pageoneRoutes: Routes=[
  {path:'pageone',component:PageOneComponent,
  canActivate: [AuthGuard],
   children:[
     {
       path: '',
       canActivateChild: [AuthGuard],
       children: [
         {path:'pageonepart1',component:OnePartOneComponent, canDeactivate: [CanDeactivateGuard]},
         {path:'pageonepart2',component:OnePartTwoComponent},
         {path: '', component: OnePartTwoComponent },
         {path:'**',component:OnePartTwoComponent},
       ]
     }
   ]
  },
]


三.属性型指令
1.起步
  目录
     |app.component.html
           <p myHighlight>鼠标悬停改变背景色</p>---(模板中添加属性型指令模板)
     |app.component.ts
     |app.module.ts
          import { HighlightDirective } from './highlight.directive';----(引入自定义指令)
           declarations: [
              HighlightDirective------(注册这个指令)
            ],

     |highlight.directive.ts---(自定义属性型指令就写在这里)
          import { Directive, ElementRef, Input } from '@angular/core';----(引入模块)
          @Directive({ selector: '[myHighlight]' })----(指定选择器)
          export class HighlightDirective {-----(指定类)
            constructor(el: ElementRef) {
              el.nativeElement.style.backgroundColor = 'yellow';
            }
          }
2.响应用户引发的事件
  highlight.directive.ts
      import { Directive, ElementRef, HostListener, Input } from '@angular/core';---(主要是HostListener)
      @Directive({
        selector: '[myHighlight]'-----(自定义指令的选择器)
      })
      export class HighlightDirective {-----(导出这个指令)
        constructor(private el: ElementRef) {---初始化Dom
        }

        @HostListener('mouseenter') onMouseEnter() {---(添加鼠标移入事件)
          this.highlight('red');
        }

        @HostListener('mouseleave') onMouseLeave() {---(添加鼠标离开事件)
          this.highlight(null);
        }

        private highlight(color: string) {---(响应的事件)
          this.el.nativeElement.style.backgroundColor = color;
        }
      }

3.使用数据绑定向指令传递值
  目录
    |app.component.html
          <p [myHighlight]="color">鼠标悬停改变背景色</p>------(模板中使用属性形指令)
    |app.component.ts
          export class AppComponent {
            color:string;----(定义了属性变量)
          }
    |app.module.ts
         import { HighlightDirective } from './highlight.directive';----(导入模块)
          declarations: [-----注册组件
             HighlightDirective
           ],
    |highlight.directive.ts
         ----(引入需要的模块)
         import { Directive, ElementRef, HostListener, Input } from '@angular/core';

         @Directive({
           selector: '[myHighlight]'------(定义指令选择器)
         })
         export class HighlightDirective {---（导出指令组件）

           constructor(private el: ElementRef) { }----(初始化DOM)

           @Input('myHighlight') highlightColor: string;----(绑定输入别名)

           @HostListener('mouseenter') onMouseEnter() {-----(鼠标移入)
             this.highlight(this.highlightColor || 'red');
           }

           @HostListener('mouseleave') onMouseLeave() {-----(鼠标移出)
             this.highlight(null);
           }

           private highlight(color: string) {-----(定义响应时间)
             this.el.nativeElement.style.backgroundColor = color;
           }
         }

4.绑定到第二个属性
  目录
     |app.component.html
          <p [myHighlight]="color">鼠标悬停改变背景色</p>
          <p [myHighlight]="color" defaultColor="violet">
            鼠标悬停改变背景色(使用了默认颜色)
          </p>
     |app.component.ts
           color:string;----(定义了颜色变量)
     |app.module.ts
           import { HighlightDirective } from './highlight.directive';--(引入指令组件)
             declarations: [
               HighlightDirective--(注册指令组件)
             ],
     |highlight.directive.ts
           ---(引入对应模块)
           import { Directive, ElementRef, HostListener, Input } from '@angular/core';
           @Directive({
             selector: '[myHighlight]'----(定义选择器)
           })
           export class HighlightDirective {
             constructor(private el: ElementRef) { }---(初始选择器)
             @Input() defaultColor: string;---(绑定输入属性)
             @Input('myHighlight') highlightColor: string;---(绑定输入属性别名)
             @HostListener('mouseenter') onMouseEnter() {--(绑定组件响应事件)
               this.highlight(this.highlightColor || this.defaultColor || 'red');
             }
             @HostListener('mouseleave') onMouseLeave() {---(绑定组件响应事件)
               this.highlight(null);
             }
             private highlight(color: string) {----响应事件执行函数
               this.el.nativeElement.style.backgroundColor = color;
             }
           }


四.样式
   1.元数据中的样式
    @Component({
      selector: 'hero-app',
      template: `
        <h1>Tour of Heroes</h1>
        <hero-app-main [hero]=hero></hero-app-main>`,
      styles: ['h1 { font-weight: normal; }']------(样式放在一个数组字符串中)
    })
   2.从外部加载样式
     样式文件的 URL 不是相对于组件文件的---而是相对于index.html文档
     styleUrls: ['app/hero-details.component.css']
   3.样式和模板均引用外部文件
     @Component({
       selector: 'quest-summary',
       templateUrl: './quest-summary.component.html',
       styleUrls:  ['./quest-summary.component.css']
     })
   4.使用:host伪类选择器，用来选择组件宿主元素中的元素（相对于组件模板内部的元素）。
     当它同时带有active CSS 类的时候才会生效
       :host(.active) {
         border-width: 3px;
       }
   5.只有当某个祖先元素有 CSS 类theme-light时，我们才会把background-color样式应用到组件内部的所有<h2>元素中。
      :host-context(.theme-light) h2 {
        background-color: #eef;
      }
   6.可以使用/deep/选择器，来强制一个样式对各级子组件的视图也生效，它不但作用于组件的子视图，也会作用于组件的内容。
     :host /deep/ h3 {
       font-style: italic;
     }
五.模块
   1.BrowserModule模块----(---(@angular/platform-browser)
     只要导入BrowserModule就自动获得了CommonModule中的指令)
     CommonModule提供了很多应用程序中常用的指令，包括NgIf和NgFor等。---(@angular/common)
       --NgIf
       --NgFor
   2.FormsModule---(@angular/forms)
       --NgModel
   3.Routes, RouterModule----(@angular/router)
       --RouterLink
   4.FormsModule----(@angular/forms)
       --[(ngModel)]
   5.NgModule-------(@angular/core)

   4.as关键字来为第二个指令创建个别名
     import {
       HighlightDirective as ContactHighlightDirective
     } from './contact/highlight.directive';

六.表单
  1.注意
    当在表单中使用[(ngModel)]时，必须要定义name属性。
    NgForm指令为form增补了一些额外特性。 它会控制那些带有ngModel指令和name属性的元素，监听他们的属性（包括其有效性）
    它还有自己的valid属性，这个属性只有在它包含的每个控件都有效时才是真。
    每个 input 元素都有name属性，Angular 表单用它注册控件。使用name属性值作为键值
  2.添加模板引擎变量
     <input type="text" class="form-control" id="name" required [(ngModel)]="hero.name" name="name" #syp/>
     <p>模板引擎类名状态syp.className变化值：{{syp.className}}</p>
     1.控件被访问过   ng-touched(真)	   ng-untouched(假)
     2.控件的值变化了 ng-dirty(真)	     ng-pristine(假)
     3.控件的值有效   ng-valid	(真)      ng-invalid(假)
     4.类似这样控制必填字段的样式
       .ng-valid[required], .ng-valid.required  {------(字段为有效值的时候)
         border-left: 5px solid #42A948;
       }
       .ng-invalid:not(form)  {---------(字段为无效值的时候)
         border-left: 5px solid #a94442;
       }
     5.这里把name设置为ngModel是因为ngModel指令的exportAs属性设置成了 “ngModel”。
        <input type="text" class="form-control" id="name" required [(ngModel)]="hero.name" name="name" #name="ngModel"/>-----(模板变量设置为#name="ngModel")
           <div [hidden]="name.valid||name.pristine" class="alert alert-danger">名字是必填的哦！</div>
           -----([hidden]值为真的时候隐藏,值无效，值变化的时候显示,即为空的时候显示)
           <p>修改了英雄的名字：{{hero.name}}</p>
           <p>模板引擎类名状态name.className变化值：{{name.className}}</p>---(此时{{name.className}}为空)
     6.使用*ngIf改进写法,可以提升性能
        <div *ngIf="!name.valid&&!name.pristine" class="alert alert-danger">名字是必填的哦！</div>
     7.表单的提交
       <form (ngSubmit)="onSubmit()" #heroForm="ngForm">----(定义了表单提交事件和模板引擎)
       <button type="submit" class="btn btn-success" [disabled]="!heroForm.form.valid">Submit</button>
       ------(控制表单提交按钮的状态 heroForm.form.valid判断变动是否有必填字段未填写)
     8.表单demo全
       <h1>{{hero.name}}</h1>
       <div class="form-group">
         <form (ngSubmit)="onSubmit()" #heroForm="ngForm">
           <label for="power">英雄技能</label>
           <select class="form-control" id="power" required>
             <option *ngFor="let pow of powers" [value]="pow">{{pow}}</option>
           </select>
           <input type="text" class="form-control" id="name" required [(ngModel)]="hero.name" name="name" #name="ngModel"/>
           <div *ngIf="!name.valid&&!name.pristine" class="alert alert-danger">名字是必填的哦！</div>
           <input type="text" class="form-control"  [(ngModel)]="hero.age" name="age" #age="ngModel"/>
           <div *ngIf="!age.valid&&!age.pristine" class="alert alert-danger">年龄是必填的哦！</div>
           <p>修改了英雄的名字：{{hero.name}}</p>
           <p>模板引擎类名状态name.className变化值：{{name.className}}</p>
           <p>{{heroForm.form.valid}}</p>
           <button type="submit" class="btn btn-success" [disabled]="!heroForm.form.valid">提交内容</button>
         </form>
       </div>

七.模板语法
  1.模板表达式，Angular 先对它求值，再把它转换成字符串
  2.数据方向(目标名就是属性)
    单向：从数据源到视图目标
         {{expression}}
         [target]="expression"
         bind-target="expression"
    单向：从视图目标到数据源(事件)
         (target)="statement"
         on-target="statement"
    双向：数据双向流动
         [(target)]="expression"
         bindon-target="expression"
  3.HTML attribute 和 DOM property 也不是同一样东西。
    按钮的disabled attribute(初始值)
    按钮的[disabled] property(当前值)
    模板绑定是通过 property 和事件来工作的，而不是 attribute。

  4.属性
    元素的属性
    <img [src]="heroImageUrl">
    组件的属性
    <hero-detail [hero]="currentHero"></hero-detail>
    指令的属性
    <div [ngClass]="{special: isSpecial}"></div>
  5.事件
    元素的事件
    <button (click)="onSave()">Save</button>
    组件的事件
    <hero-detail (deleteRequest)="deleteHero()"></hero-detail>
    指令的事件
    <div (myClick)="clicked=$event" clickable>click me</div>
  6.双向(事件与属性)
    <input [(ngModel)]="name">
  7.Attrivute(例外情况)
    <input [(ngModel)]="name">
  8.css类
    <div [class.special]="isSpecial">Special</div>
  9.样式
    <button [style.color]="isSpecial ? 'red' : 'green'">
  10.属性绑定和插值表达式,下面的结果是一样的。
    <p><img src="{{heroImageUrl}}"> is the <i>interpolated</i> image.</p>
    <p><img [src]="heroImageUrl"> is the <i>property bound</i> image.</p>
  11.attribute类绑定来创建和绑定到这样的attribute。
     <tr><td [attr.colspan]="1 + 1">One-Two</td></tr>
  12.class类
     <div class="special" [class.special]="!isSpecial">This one is not so special</div>
  13.样式绑定
     <button [style.color]="isSpecial ? 'red': 'green'">Red</button>
     <button [style.background-color]="canSave ? 'cyan': 'grey'" >Save</button>
     带单位的
     <button [style.font-size.em]="isSpecial ? 3 : 1" >Big</button>
     <button [style.font-size.%]="!isSpecial ? 150 : 50" >Small</button>
  14.事件绑定
     <button (click)="onSave()">Save</button>
  15.$event 和事件处理语句
     <input [value]="currentHero.name"
            (input)="currentHero.name=$event.target.value" >---(当input的值改变时值改变)
  16.使用 EventEmitter 实现自定义事件
     deleteRequest = new EventEmitter<Hero>();
     delete() {
       this.deleteRequest.emit(this.hero);
     }
     <hero-detail (deleteRequest)="deleteHero($event)" [hero]="currentHero"></hero-detail>
     (当deleteRequest事件触发时，调用父组件的deleteHero方法， 在$event变量中传入要删除的英雄（来自HeroDetail）。)

  17.双向数据绑定 ( [(...)] ):既要设置元素属性，又要监听元素事件变化
     原生 HTML 元素不遵循x值和xChange事件的模式。
     Angular 以 NgModel 指令为桥梁，允许在表单元素上使用双向数据绑定。
  18.内置属性型指令
     NgClass - 添加或移除一组CSS类
         this.currentClasses =  {
             saveable: true,
             modified: true,
             special:  false
           };
         <div [ngClass]="currentClasses">我可以添加一组ClassName</div>
     NgStyle - 添加或移除一组CSS样式
          this.currentStyles = {
              'font-style': 'italic',
              'font-weight':'bold',
              'font-size': '24px'
            };
         <div [ngStyle]="currentStyles">设置多个样式</div>
     NgModel - 双向绑定到HTML表单元素
         <input [(ngModel)]="currentHero.name">----(只需要这一个就够了)

  19.内置结构型指令
     NgIf - 根据条件把一个元素添加到DOM中或从DOM移除
         <hero-detail *ngIf="true"></hero-detail>
     NgFor - 对列表中的每个条目重复套用一个模板
         <div *ngFor="let hero of heroes">{{hero.name}}</div>--(运用在元素上)
         <hero-detail *ngFor="let hero of heroes" [hero]="hero"></hero-detail>--(运用在组件上)
         (带索引的*ngFor)
         <div *ngFor="let hero of heroes; let i=index">{{i + 1}} - {{hero.name}}</div>

         有了trackBy，则只有修改了id的按钮才会触发元素替换。
         <div *ngFor="let hero of heroes; trackBy:1">
           ({{hero.id}}) {{hero.name}}
         </div>
     NgSwitch - 一组指令，用于切换一组视图
         <div [ngSwitch]="happy">
          <my-sizer  *ngSwitchCase="happy"></my-sizer>
          <unknown-hero  *ngSwitchDefault></unknown-hero>
         </div>

  20.模板引用变量 ( #var )
     <input #phone placeholder="phone number">
     <button (click)="callPhone(phone.value)">Call</button>

  21.输入输出属性 ( @Input 和 @Output )
     绑定的目标是在=左侧的部分， 源则是在=右侧的部分。
     属性被装饰器标记成了输入和输出属性。
     @Input()  hero: Hero;
     @Output() deleteRequest = new EventEmitter<Hero>();
    另外，还可以在指令元数据的inputs或outputs数组中标记出这些成员。
     @Component({
       inputs: ['hero'],
       outputs: ['deleteRequest'],
     })
    既可以通过装饰器，也可以通过元数据数组来指定输入/输出属性。但别同时用！
  22.管道操作符 ( | )
    <div>{{title | uppercase}}</div>
    <div>{{title | uppercase | lowercase}}</div>
  23.安全导航操作符 (?.) 是一种流畅而便利的方式，用来保护出现在属性路径中 null 和 undefined 值。
    {{currentHero?.name}}


八.父子组件通讯(@Input()  name: string;)
  1.引入Input模块
    import{ Component,Input } from '@angular/core';
  2.对外输出属性
    @Input() data;
  3.在子组件的对应选择器中进行通讯
    <phone-type [data]="phoneType"></phone-type>

九.父子组件通讯 @Output() onVoted = new EventEmitter<boolean>();
   1.子组件引入Output模块,EventEmitter模块
   import { Component, EventEmitter, Input, Output } from '@angular/core';
   2.对外自定义输出事件
    @Output() onVoted = new EventEmitter<boolean>();
   3.把子组件参数传出去
    export class VoterComponent {
      @Input()  name: string;
      @Output() onVoted = new EventEmitter<boolean>();
      voted = false;
      vote(agreed: boolean) {
        this.onVoted.emit(agreed);------(传出子组件参数)
        this.voted = true;
      }
    }
    4.父组方法接收子组件传过来的参数
      <my-voter *ngFor="let voter of voters"
          [name]="voter"-----(接受父组件参数)
         (onVoted)="onVoted($event)">-----(向父组件传递的事假参数$event)
      </my-voter>

      export class AppComponent {
        agreed = 0;
        disagreed = 0;
        voters = ['Mr. IQ', 'Ms. Universe', 'Bombasto'];
        onVoted(agreed: boolean) {----------------------------(父主件中定义的onVoted方法)
          agreed ? this.agreed++ : this.disagreed++;
        }
      }
十.父亲组件使用子组件的方法和属性
    本地变量(#timer)放到(<countdown-timer>)标签中，用来代表子组件。这样父组件的模板就得到了子组件的引用
    <div class="seconds">{{timer.seconds}}</div>
    <countdown-timer #timer></countdown-timer>
十一.moduleId: module.id用于设置模板和样式文件可以使用相对于组件的路径
    在@Component元数据中设置moduleId属性就可以了，就像这样：
    有一个可用的半全局变量module.id，它包含组件类模块文件的绝对URL。
    @Component({
      moduleId: module.id,
      selector: 'relative-path',
      templateUrl: './some.component.html',
      styleUrls:  ['./some.component.css']
    })
十二.生命周期钩子的顺序
    目录结构
      |app
        |app.component.ts
        |app.module.ts
        |birthday.component.ts
            export class BirthdayComponent {
              @Input() birthday:any;----(对外暴露值)
              ngOnChanges() {------(输入属性的值发生变化时调用，首次调用一定会发生在 ngOnInit之前)
                console.log('ngOnChanges');
              }
              ngOnInit() {--------(ngOnChanges 之后才会调用 ngOnInit ，此时所有输入属性都已经有了初始绑定值)
                console.log('ngOnInit');
              }
              ngDoCheck() {-----(在每个 Angular 变更检测周期中调用。)
                console.log('ngDoCheck');
              }
              ngAfterContentInit() {---(当把内容投影进组件之后调用。)
                console.log('ngAfterContentInit');
              }
              ngAfterContentChecked() {---(每次完成被投影组件内容的变更检测之后调用。)
                console.log('ngAfterContentChecked');
              }
              ngAfterViewInit(){---(初始化完组件视图及其子视图之后调用。)
                console.log('ngAfterViewInit');
              }
              ngAfterViewChecked() {--(每次做完组件视图和子视图的变更检测之后调用。)
                console.log('ngAfterViewChecked');
              }
              ngOnDestroy() {--(当 Angular 每次销毁指令 / 组件之前调用。)
                console.log('ngOnDestroy');
              }
            }
    控制台中显示的顺序：
      ngOnChanges
      ngOnInit
      ngDoCheck
      ngAfterContentInit
      ngAfterContentChecked
      ngAfterViewInit
      ngAfterViewChecked
      lang.js:130 Angular is running in the development mode. Call enableProdMode() to enable the production mode.（Angular正运行在开发模式下。调用enableProdMode()来启用生产模式）
      ngDoCheck
      ngAfterContentChecked
      ngAfterViewChecked
      ngOnDestroy

十三.部署
    1.JIT(动态编译)和AOT(静态编译)

十四.设置文档标题
    目录
     |app
       |app.component.ts
          import { Title }     from '@angular/platform-browser';
          export class AppComponent {
            public constructor(private titleService: Title ) { }
            public setTitle( newTitle: string) {
              this.titleService.setTitle( newTitle );---(设置文档标题)
            }
          }

       |app.module.ts
          import { BrowserModule, Title }  from '@angular/platform-browser';
          providers: [
              Title
            ],

十五.管道
     1.shortDate短日期,fullDate长日期，date:"MM/dd/yy"定义日期格式
       <p>The hero's birthday is {{ birthday | date:"MM/dd/yy" }} </p>
       渲染成：07/10/17
     2. date:format后面带自定义返回值参数
        <p>The hero's birthday is {{ birthday | date:format }}</p>
        get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
     3.链式管道
       {{ birthday | date | uppercase}}
       渲染为 APR 15, 1988
       {{  birthday | date:'fullDate' | uppercase}}链式的同时也可以传递参数
     4.内置的管道
       DatePipe、UpperCasePipe、LowerCasePipe、CurrencyPipe和PercentPipe

十六.http:客户端
    1.一些参数
      this.http({
          url: "data/list.json" or "data/list.php" or //请求地址
          method: "get",//请求方法
          search: "name=zhangxuchao&password=heping" or 使用URLSearchParams() //对象用于设置传递出去的参数
          headers: 使用Headers()对象设置 可选//设置头部信息
          body: ""    可选
      });
    2.get()方法
       //引入模块app.module.ts
       import { HttpModule, JsonpModule } from '@angular/http';
        //引入模块app.component.ts
       import {Http,RequestOptions,Headers,Jsonp,URLSearchParams,RequestMethod} from '@angular/http';
       import { Observable } from 'rxjs/Observable';
       import 'rxjs/add/operator/catch';
       import 'rxjs/add/operator/map';

        getJson(){
          let params = new URLSearchParams();
          params.set('name', 'huge');
          this.http.get('app/mobile.json',{ search: params}).map(res => res.json()).subscribe(v=>{
            this.mobiles = v;
            this.flag=true;
            console.log(v);
          },
          err => { console.log(err); },
          );
          
        }


十七.事件
    1.鼠标移入
    (mouseenter): 'onMouseEnter()',  
    (mouseleave): 'onMouseLeave()'  


十八.动画
1.引入动画必要的模块
import {
  Component,
  Inject,
  trigger,
  state,
  style,
  transition,
  animate,
  OnDestroy
} from '@angular/core';

2.在@Component定义动画
@Component({
  selector: 'hero-message',
  template: `
     <button 
     [@loginState]="loginBtnState"
     (mouseenter)="toggleLoginState(true)" 
     (mouseleave)="toggleLoginState(false)">
     button</button>
    `,
     animations: [
    trigger('loginState', [
      state('inactive', style({
         transform: 'scale(1)'
      })),
      state('active',   style({
         transform: 'scale(2)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})

3.在模块中定义方法
export class MycompareComponent {
  loginBtnState:any;
  constructor(){}
  ngOnInit(){
  }
  //定义动画切换事件
 toggleLoginState(state: boolean){
    this.loginBtnState = state ? 'active' : 'inactive';
  }
4. transition('* => *', animate(500)) 这句什么意思呢？前面那个 '* => *' 是一个状态迁移表达式,* 表示任意状态
 transition('* => *', animate('.5s 1s ease-out'))
 .5s表示动画过渡时间为0.5秒,1s表示动画延迟1秒后播放。
 5.void定义出场动画
 state('void', style({
        'transform':'translateY(-100%)'
      })),

//关键帧形式的出场动画
 transition('void => *', animate(5000, keyframes([
        style({'transform': 'scale(0)'}),
        style({'transform': 'scale(0.1)'}),
        style({'transform': 'scale(0.5)'}),
        style({'transform': 'scale(0.9)'}),
        style({'transform': 'scale(0.95)'}),
        style({'transform': 'scale(1)'})
      ]))),
//可以复杂一点
transition('void => *', animate(5000, keyframes([
        style({'transform': 'scale(0)', 'padding': '0px'}),
        style({'transform': 'scale(0.1)', 'padding': '50px'}),
        style({'transform': 'scale(0.5)', 'padding': '100px'}),
        style({'transform': 'scale(0.9)', 'padding': '120px'}),
        style({'transform': 'scale(0.95)', 'padding': '135px'}),
        style({'transform': 'scale(1)', 'padding': '140px'})
]))),

十九.自定义pipe管道
1.定义管道文件trim-space.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'trimSpace'
})
export class TrimSpacePipe implements PipeTransform {
  transform(value: any, args: any[]): any {
    return value.replace(/ /g, '');
  }
}
2.Module文件中声明这个Pipe
declarations: [TrimSpacePipe],

3.在模板中使用：
 <p>{{typest | trimSpace}}<p>


 二十.redux的使用
1.ngrx是一套利用RxJS的类库，其中的 @ngrx/store (https://github.com/ngrx/store) 就是基于Redux规范制定的Angular2框架。
2.cnpm install @ngrx/core @ngrx/store --save
  · Redux依赖库
  · @ngrx/store + @ngrx/core---(Redux 应用 store 的核心依赖库)
  · @ngrx/effects--(对于异步事件,引入中间件处理)
  · reselect--(reselect的createSelector方法创建高效的选择器，能被存储且仅在参数更改的时候才会重构)
  · ngrx-store-logger--(控制台记录action和state的更新的)
3.在app.module.ts文件中引入StoreModule,可全局使用
  import { StoreModule } from '@ngrx/store';---(引入StoreModule模块)
  import { counterReducer } from './mycount/counter';--(引入定义好的redux实例)
   imports: [
    StoreModule.provideStore({
       counter: counterReducer--(redux示例对象)
      }),
  ],
4.在counter.ts文件中
import { ActionReducer, Action, } from '@ngrx/store';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

export const counterReducer=(state:any=[], action:Action)=> {
	switch (action.type) {
		case "getData":
			 return action.payload;

        case "addData":
			 return action.payload;

		case "deleteData":
			 return action.payload;

		case "selectData":
		     return action.payload;

		default:
			return state;
	}
}

5.mycount.component.ts中
import { Component} from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/interval';
import { ActionReducer, Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Store } from '@ngrx/store';

constructor(
		private store:Store<any>,
	){}

//获取redux示例对象
this.counter=this.store.select('counter');
//把状态发送出去
this.counter.subscribe((v:any)=>{
			 v.splice(i,1);
		   this.store.dispatch({ type: "deleteData" ,payload:v});
});

6.模板中使用
  <li  *ngFor="let data of (counter | async);let i=index">
  <p>{{counter | async}}</p> ---async不用取消订阅的操作,会自动完成

二十一.打包发布
ng-build

####################################经验补缺###############################################
1.获取模板中的元素,并设置样式
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
2.绑定自定义属性值
<p [attr.role]="attrValue">绑定属性值<p>
3.另外一种绑定class值的方法,传入true or false;
<div [class.extra-sparkle]="isDelightful">class.extra-sparkle</div>
4.将width绑定到表达式
<div [style.width.px]="mySize">mySize</div>
5.绑定了按钮点击事件并传入了事件对象
<button (click)="readRainbow($event)">点击我吧</button>
6.将属性绑定到某个内插值字符串，等价于<div [title]="'Hello' + ponyName">
<div title="Hello {{ponyName}}">ponyName</div>
7.建立一个属性的双向绑定，等价于: <div [title]="name" (title-change)="name=$event"><div>
<div [(title)]="name"></div>
8.获取模板中的dom元素变量
<video #movieplayer></video>
<button (click)="getElement(movieplayer)">video</button>
9.如果变量不存在,剩下的部分会被直接忽略掉
Employer:{{employer?.companyName}}
10.将某个类声明为组件,并且提供合适的元数据声明
@Component({...})class MyComponent() {}
11.声明某个类为管道,并且提供一些关于该管道的元数据
@Pipe({...})class MyPipe() {}
13.声明某个类的依赖,并且在构造函数中自动注入
@Injectable()class MyService() {}
14.声明一个输入属性,并且绑定到模板,譬如:<my-cmp [my-property]="someExpression"></my-cmp>


####################################项目的#############################################
一.调用登录接口：
import { storage, ApiService, RegCheck, passWordEncrypt, CommService } from '../../common/index';
 this.apiService.invoke('userAuth', {
      operatorNo: this.model.operatorNo,
      password: passWordEncrypt(this.model.password),
      opStation: this.opStationClient,
      opEntrustWay: 'v',
    }, {
      isPassError: true//第三个参数表示错误后是否继续执行返回错误json
    }).subscribe((res:any)=>{
      this.isSubmiting = false;

      if(res.errorNo){//如果错误了弹出错误信息
        return this.errTip = res.errorInfo;
      }

      if(!res || !res.operatorNo || !res.sessionId){//如果没有数据放回没有数据的信息
        return this.errTip = '登录接口没返回具体数据信息！';
      }
      this.errTip = null;
    });

二.AlertService去弹窗
//引入弹出窗的组件和服务
import { AlertComponent, AlertService } from '../../widgets/alert/index';
//注册组件和服务
@Component({
  directives: [AlertComponent],
  providers: [AlertService]
})
//初始化组件和服务
constructor(
    private alertService: AlertService
  ) {}
//调用
this.alertService.alert({
          title: '提示',
          msg: '您已成功登出系统',
          type: 'info',
          autoClose: true,
          duration: 1
        })
//延时执行
setTimeout(()=>{
      }, 100);
//模板中写入组件标签
<alert></alert>

三.本地储存用户名
  import(storage) form '../../common';----引入storage服务
  存：storage.setItem('clientloginData',this.model);
  取：storage.getItem('clientloginData').operatorNo;

四.pug中添加模板变量
   bs-table(#table="")

五.环境按照
1.项目地址：http://gitlab.gf.com.cn/gmts/front.git 
2.运行：npm install --registry=https://registry.npm.taobao.org
4.host：设置10.2.144.52 gmtshkcs4.gf.com.cn


注意点：
   1.雪碧图用法
    i.sprite-ico.sprite2-07(*ngSwitchCase="'500001'")
       ---所有雪碧图均放在i标签中
       ---.sprite-ico(必须有这个类)
       ---.sprite2-07(对应的类名)
   2.自己定义的类名可以用i开头
   3.开启谷歌摄像头插件
     chrome://flags
   4.自定义类目使用烤串风格
     .i-topbar
5.翻译
import { TranslateService } from '@ngx-translate/core'
private translate: TranslateService,
this.translate.get('LoginInfo.loginCpt.arrOnSubmitInfo').subscribe(res=>{
          arrOnSubmitInfo = res;
        });
//pug中： {{ 'loginInfo.loginTitle' | translate }}


6.数据字典
路径：src/app/pages/home/home.preload.component.ts文件中可以查询

7.接口返回的数据结构
data: []
errPath: null
errorInfo: ""
errorNo: "0"
pageData: {currentPage: 1, pageSize: 10, totalPages: 0, totalRows: 0}
currentPage: 1
pageSize: 10
totalPages: 0
totalRows: 0
success: true
trackId: null

###############################项目结构################################################

/dist：项目启动后编译出来的项目文件。
/docs：app内通用组件使用说明文档，主要是用于查看。
/electron：打包成桌面程序的工具。
/express：项目用于全局配置的脚本之一。
/node_modules： package.json 的依赖包列表（dependencies）的安装目录
/script：项目用于全局配置的脚本之二。
/package.json：node.js工程构建的配置文件。
/src/index.html：项目入口页面文件
/src/index.js：配置了一些项目引入的第三方脚本
/src/app-main.ts：  angular2模块初始化入口，初始化AppModule类
/src/config：包含可引用的配置参数的脚本。其中的api-config.ts配置了项目目前运用到的后台接口（路径和请求参数）
/src/css：包含全局样式的css文件。
/src/lib：包含第三方工具库。

###############################其他内容######################################################
1.switch:
switch(n)
  {
    case 1:
      break;
    case 2:
      break;
      default:
  }

2.json数据结构:
{
  "todos": [
    {
      "id": "bf75769b-4810-64e9-d154-418ff2dbf55e",
      "desc": "getting up",
      "completed": false,
      "userId": 1
    },
    {
      "id": "5894a12f-dae1-5ab0-5761-1371ba4f703e",
      "desc": "have breakfast",
      "completed": true,
      "userId": 2
    },
    {
      "id": "0d2596c4-216b-df3d-1608-633899c5a549",
      "desc": "go to school",
      "completed": true,
      "userId": 1
    },
    {
      "id": "0b1f6614-1def-3346-f070-d6d39c02d6b7",
      "desc": "test",
      "completed": false,
      "userId": 2
    },
    {
      "id": "c1e02a43-6364-5515-1652-a772f0fab7b3",
      "desc": "This is a te",
      "completed": false,
      "userId": 1
    }
  ]
}

3.Promise
//resolve:成功的时候执行
//then:回调
//catch 异常的时候抛出错误
//reject:失败时候执行

//all 接收一个数组参数 「谁跑的慢，以谁为准执行回调」
//race 接收一个数组参数 「谁跑的快，以谁为准执行回调」
 Promise.race(['顺便什么数据']).then(v=>{
      console.log('v',v);
      return v+"s";
    }).catch(v=>{
      console.log("这是什么鬼",v);
    });

4.find() 和 findIndex()
find():找出第一个返回值为true的成员，然后返回该成员
[1, 4, -5, 10].find((n) => n < 0)  
// -5  
[1, 5, 10, 15].find(function(value, index, arr) {  //当前的值、当前的位置和原数组
return value > 9;  
}) // 10  

findIndex():返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。
[1, 5, 10, 15].findIndex(function(value, index, arr) {  
return value > 9;  
}) // 2  

可以发现NaN，弥补了数组的IndexOf方法的不足
[NaN].indexOf(NaN)  
// -1  
[NaN].findIndex(y => Object.is(NaN, y))  
// 0  
