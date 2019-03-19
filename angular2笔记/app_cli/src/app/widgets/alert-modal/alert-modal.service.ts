import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

/**
 * 用于渲染弹出框的数据
 */
export interface RenderData {
  isVisible?: boolean; // 弹出框是否展示 如果为false则启动服务生成的弹出框
  title?: string; // 弹出框的标题
  contentHtml?: string; // 要展示内容的html结构字符串
  okText?: string; // 确认按钮文本
  cancelText?: string; // 取消按钮文本
  handleOk?: () => void; // 点击确认按钮执行的函数
  handleCancel?: () => void; // 点击取消按钮执行的函数
  serverParam?: {
    // 通过服务生成的提示框相关参数
    type: 'confirm' | 'info' | 'success' | 'error' | 'warning'; // 提示框类型
    title: string; // 提示框标题
    content: string; // 提示框内容
    width?: number; // 弹出提示框的宽度
    nzWrapClassName?: string; // 控制弹出框位置 'vertical-center-modal' 为位置居中
  };
}

@Injectable()
export class AlertModalService {
  private alertModalSource = new Subject<RenderData>(); // 弹出框主题 会产生一个renderData数据类型的流
  alertModal$ = this.alertModalSource.asObservable(); // 把数据流转换成 Observable 可观察者对象 alertModalSource如果是公用的直接用它也行

  /* 模态弹出框渲染函数 */
  render(renderData: RenderData) {
    this.alertModalSource.next(renderData); // 接受最新RenderData数据流并往下出传递把变化的数据流往下传递
  }
}
