import { Component , OnInit} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NzModalRef, NzModalService } from 'ng-zorro-antd';
import { AlertModalService, RenderData } from './alert-modal.service';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.pug',
  styleUrls: ['./alert-modal.component.less']
})
export class AlertModalComponent implements OnInit {

  constructor(
    private modal: NzModalService,
    private alertModalService: AlertModalService,
    private sanitizer: DomSanitizer
  ) {}
  /**
   * 用于渲染模态弹出框的初始化重置数据
   */
  renderDefaultData: RenderData = {
    isVisible: false, // 弹出框是否展示 如果为false则启动服务生成的弹出框
    title: '对话框', // 弹出框的标题
    contentHtml: ``, // 要展示内容的html结构字符串
    okText: '确认', // 确认按钮文本
    cancelText: '取消', // 取消按钮文本
    handleOk: () => {}, // 点击确认按钮执行的函数
    handleCancel: () => {}, // 点击取消按钮执行的函数
    serverParam: {
      type: 'confirm',
      title: '标题',
      content: '内容',
      nzWrapClassName: ''
    }
  };

  /**
   * 用于渲染模态弹出框的数据
   */
  renderData: RenderData;

  /**
   * 使用服务的形式生成的对话框
   */
  confirmModal: NzModalRef;

  /**
   * 生成安全的html内容
   */
  contentHtml: SafeHtml;

  isOkLoading = false;

  ngOnInit(): void {
    /* 数据初始化 */
    this.renderData = Object.assign({}, this.renderDefaultData);

    /**
     * 订阅弹出框数据流主题 看其他组件产生的最新数据流
     */
    this.alertModalService.alertModal$.subscribe(
      renderData => {
        /* 初始化renderData 数据 */
        this.renderData = Object.assign({}, this.renderDefaultData, renderData);
        /* 生成安全的html内容 */
        this.contentHtml = this.sanitizer.bypassSecurityTrustHtml(
          this.renderData.contentHtml
        );
        /* 使用服务模式生成对话框 */
        if (!this.renderData.isVisible) {
          const type: string = this.renderData.serverParam.type;
          this.confirmModal = this.modal[type]({
            nzTitle: this.renderData.serverParam.title,
            nzContent: this.renderData.serverParam.content,
            nzWidth: this.renderData.serverParam.width || 416,
            nzWrapClassName: this.renderData.serverParam.nzWrapClassName
          });
        }
      },
      error => {
        console.log('弹出框出错了: ' + error);
      }
    );
  }

  /**
   * 点击了确认按钮
   */
  handleOk(): void {
    this.renderData.handleOk(); // 执行组件确认函数
    this.isOkLoading = true;
    window.setTimeout(() => {
      this.renderData.isVisible = false;
      this.isOkLoading = false;
    }, 500);
  }

  /**
   * 点击了取消按钮
   */
  handleCancel(): void {
    this.renderData.handleCancel(); // 执行组件取消函数
    this.renderData.isVisible = false;
  }
}
