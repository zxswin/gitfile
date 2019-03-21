# 父子组件订阅服务组件

## 基本用法
### 服务文件在app.module.ts中统一引入
### 服务组件只需要在app.component.ts文件中加入一次即可
### 其他页面引用改服务均无需用 providers 单独引入

## 基本案例
### lert-modal.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject'; 

/**
 * 用于渲染弹出框的数据
 */
export interface RenderData {
  isVisible?: boolean; // 弹出框是否展示
}

@Injectable()
export class AlertModalService {
  private alertModalSource = new Subject<RenderData>(); // 弹出框主题 会产生一个renderData数据类型的流
  alertModal$ = this.alertModalSource.asObservable(); // 把数据流转换成 Observable 可观察者对象 alertModalSource如果是公用的直接用它也行

  /* 模态弹出框渲染函数 */
  render(renderData:RenderData) {
    this.alertModalSource.next(renderData); // 接受最新RenderData数据流并往下出传递把变化的数据流往下传递
  }
}
### alert-modal.component.ts
import { Component } from '@angular/core';
import { AlertModalService , RenderData } from './alert-modal.service';

@Component({
  selector: 'alert-modal',
  templateUrl: './alert-modal.component.pug',
  styleUrls: ['./alert-modal.component.less'],
})

export class AlertModalComponent {

  /**
   * 用于渲染模态弹出框的数据
    */
  renderData:RenderData = {
    isVisible: false,
  };

  constructor(private AlertModalService: AlertModalService) {}

  ngOnInit(): void {

    /**
     * 订阅弹出框数据流主题 看其他组件产生的最新数据流
      */
    this.AlertModalService.alertModal$.subscribe(renderData => {
      this.renderData.isVisible = renderData.isVisible;
    }, error => {
      console.log('弹出框出错了: ' + error);
    });
  }

  /**
   * 点击了确认按钮
   */
  handleOk(): void {
    console.log('点击了确认按钮');
    this.renderData.isVisible = false;
  }

  /**
   * 点击了取消按钮
   */
  handleCancel(): void {
    console.log('点击了取消按钮');
    this.renderData.isVisible = false;
  }

}

### base-info-fund.component.ts

import { Component } from '@angular/core';
import { AlertModalService } from '../../../../commons/alert-modal/alert-modal.service';
@Component({
  selector: 'base-info-fund',
  templateUrl: './base-info-fund.component.pug',
  styleUrls: ['./base-info-fund.component.less'],
}) 

export class BaseInfoFundComponent {
  constructor(private AlertModalService: AlertModalService) {}

  alertModal() {

  let renderData:RenderData = {
    isVisible: true,
  }

  this.AlertModalService.render(renderData); // 把最新RenderData的数据加到服务的数据流中

  }

}


# modal 对话框 具体参数 及 使用
[nzAfterOpen]	Modal 打开后的回调	EventEmitter
[nzAfterClose] Modal 完全关闭后的回调，可监听close/destroy方法传入的参数	EventEmitter	-
[nzBodyStyle] Modal body 样式	object
[nzCancelText] 取消按钮文字。设为 null 表示不显示取消按钮（若在普通模式下使用了 nzFooter 参数，则该值无效）	string	取消
[nzClosable]	是否显示右上角的关闭按钮。确认框模式下该值无效（默认会被隐藏）	boolean	true
[nzOkLoading]	确定按钮 loading	boolean	false
[nzCancelLoading]	取消按钮 loading	boolean	false
[nzOkDisabled]	是否禁用确定按钮	boolean	false
[nzCancelDisabled]	是否禁用取消按钮	boolean	false
[nzFooter]	底部内容。 string TemplateRef ModalButtonOptions	默认的确定取消按钮
1. 仅在普通模式下有效。
2. 可通过传入 ModalButtonOptions 来最大程度自定义按钮（详见案例或下方说明）。
3. 当不需要底部时，可以设为 null	

[nzGetContainer]	指定 Modal 挂载的 HTML 节点	HTMLElement () => HTMLElement	默认容器
[nzKeyboard]	是否支持键盘esc关闭	boolean	true
[nzMask]	是否展示遮罩	boolean	true
[nzMaskClosable]	点击蒙层是否允许关闭	boolean	true]
[nzMaskStyle]	遮罩样式	object
[nzOkText]	确认按钮文字。设为 null 表示不显示确认按钮（若在普通模式下使用了 nzFooter 参数，则该值无效）	string	确定
[nzOkType]	确认按钮类型。与button的type类型值一致	string	primary
[nzStyle]	可用于设置浮层的样式，调整浮层位置等	object
[nzTitle]	标题。留空表示不展示标题。TemplateRef的使用方法可参考案例	string TemplateRef	-
[nzVisible]	对话框是否可见。当以 <nz-modal> 标签使用时，请务必使用双向绑定，例如：[(nzVisible)]="visible"	boolean	false
[nzWidth]	宽度。使用数字时，默认单位为px	string number	520
[nzClassName]	对话框的类名	string	-
[nzWrapClassName]	对话框外层容器的类名	string
[nzZIndex]	设置 Modal 的 z-index	number	1000
[nzOnCancel]	点击遮罩层或右上角叉或取消按钮的回调（若nzContent为Component，则将会以该Component实例作为参数）。注：当以NzModalService.create创建时，此参数应传入function（回调函数）。该函数可返回promise，待执行完毕或promise结束时，将自动关闭对话框（返回false可阻止关闭）	EventEmitter	-
[nzOnOk]	点击确定回调（若nzContent为Component，则将会以该Component实例作为参数）。注：当以NzModalService.create创建时，此参数应传入function（回调函数）。该函数可返回promise，待执行完毕或promise结束时，将自动关闭对话框（返回false可阻止关闭）	EventEmitter	-
[nzContent]	内容	string TemplateRef Component ng-content
[nzComponentParams]	当nzContent为组件类(Component)时，该参数中的属性将传入nzContent实例中	object	
[nzIconType]	图标 Icon 类型。仅 确认框模式 下有效	string	question-circle


## modal 对话框 使用注意内容
<nz-modal> 默认关闭后状态不会自动清空, 如果希望每次打开都是新内容，请采用 NzModalService 服务方式创建对话框（当以服务方式创建时，默认会监听 nzAfterClose 并销毁对话框）。
通过 NzModalService 服务方式创建的对话框需要自行管理其生命周期。比如你在页面路由切换时，服务方式创建的对话框并不会被销毁，你需要使用对话框引用来手动销毁（NzModalRef.close() 或 NzModalRef.destroy()）。

## 采用服务方式创建普通模式对话框
您可调用 NzModalService.create(options) 来动态创建普通模式对话框，这里的 options 是一个对象，支持上方API中给出的支持 普通模式 的参数

## 确认框模式 - NzModalService.method()
NzModalService.info
NzModalService.success
NzModalService.error
NzModalService.warning
NzModalService.confirm
以上均为一个函数，参数为 object，与上方API一致。部分属性类型或初始值有所不同，已列在下方：

[nzOnOk]	点击确定按钮时将执行的回调函数（若nzContent为Component，则将会以该Component实例作为参数）。该函数可返回promise，待执行完毕或promise结束时，将自动关闭对话框（返回false可阻止关闭）	function

[nzOnCancel]	点击遮罩层或右上角叉或取消按钮的回调（若nzContent为Component，则将会以该Component实例作为参数）。该函数可返回promise，待执行完毕或promise结束时，将自动关闭对话框（返回false可阻止关闭）
[nzWidth]	宽度	string number	416
[nzMaskClosable]	点击蒙层是否允许关闭	boolean	false

### 以上函数调用后，会返回一个引用，可以通过该引用关闭弹窗。
constructor(modal: NzModalService) {
  const ref: NzModalRef = modal.info();
  ref.close(); // 或 ref.destroy(); 将直接销毁对话框
}

### NzModalService的其他方法/属性
[openModals]	当前打开的所有Modal引用列表	NzModalRef[]
[afterAllClose]	所有Modal完全关闭后的回调	Observable<void>
[closeAll()]	关闭所有模态框	function

### NzModalRef NzModalRef 对象用于控制对话框以及进行内容间的通信
通过服务方式 NzModalService.xxx() 创建的对话框，都会返回一个 NzModalRef 对象，用于操控该对话框（若使用nzContent为Component时，也可通过依赖注入 NzModalRef 方式获得此对象），该对象具有以下方法：

[afterOpen]	同nzAfterOpen，但类型为Observable<void>
[afterClose]	同nzAfterClose，但类型为Observable<result:any>
[open()]	打开(显示)对话框。若对话框已销毁，则调用此函数将失效
[close(result: any)]	关闭(隐藏)对话框。注：当用于以服务方式创建的对话框，此方法将直接 销毁 对话框（同destroy方法）
[destroy(result: any)]	销毁对话框。注：仅用于服务方式创建的对话框（非服务方式创建的对话框，此方法只会隐藏对话框）
[getContentComponent()]	获取对话框内容中nzContent的Component实例instance。注：当对话框还未初始化完毕（ngOnInit未执行）时，此函数将返回undefined
[triggerOk()]	手动触发nzOnOk
[triggerCancel()]	手动触发nzOnCancel

### ModalButtonOptions（用于自定义底部按钮）
可将此类型数组传入 nzFooter，用于自定义底部按钮。
按钮配置项如下（与button组件保持一致）：

nzFooter: [{
  label: string; // 按钮文本
  type?: string; // 类型
  shape?: string; // 形状
  ghost?: boolean; // 是否ghost
  size?: string; // 大小
  autoLoading?: boolean; // 默认为true，若为true时，当onClick返回promise时此按钮将自动置为loading状态

  // 提示：下方方法的this指向该配置对象自身。当nzContent为组件类时，下方方法传入的contentComponentInstance参数为该组件类的实例
  // 是否显示该按钮
  show?: boolean | ((this: ModalButtonOptions, contentComponentInstance?: object) => boolean);
  // 是否显示为loading
  loading?: boolean | ((this: ModalButtonOptions, contentComponentInstance?: object) => boolean);
  // 是否禁用
  disabled?: boolean | ((this: ModalButtonOptions, contentComponentInstance?: object) => boolean);
  // 按钮点击回调
  onClick?(this: ModalButtonOptions, contentComponentInstance?: object): void | Promise&lt;void&gt; | any;
}]
以上配置项也可在运行态实时改变，来触发按钮行为改变。


#  Modal对话框 demo

## 则您可能需要在自定义样式内采用:host ::ng-deep来覆盖NgZorro的样式
:host ::ng-deep .vertical-center-modal {
  display: flex;
  align-items: center;
  justify-content: center;
}

:host ::ng-deep .vertical-center-modal .ant-modal {
  top: 0;
}



## 参数示例 ## 
export interface RenderData {
  isVisible?: boolean; // 弹出框是否展示 如果为false则启动服务生成的弹出框
  title?: string; // 弹出框的标题
  contentHtml?: string; //要展示内容的html结构字符串
  okText?: string; // 确认按钮文本
  cancelText?: string; // 取消按钮文本
  handleOk?: () => void; // 点击确认按钮执行的函数
  handleCancel?: () => void; // 点击取消按钮执行的函数
  serverParam?: {
    // 通过服务生成的提示框相关参数
    type: 'confirm' | 'info' | 'success' | 'error' | 'warning' , // 提示框类型
    title: string, // 提示框标题
    content: string, // 提示框内容
    width?:number, // 弹出提示框的宽度
    nzWrapClassName?: string, // 控制弹出框位置 'vertical-center-modal' 为位置居中
  };
}


























