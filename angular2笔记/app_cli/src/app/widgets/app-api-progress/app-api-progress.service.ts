import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export interface ProgressParam {
  /** 是否显示进度条  */
  isShow?: boolean;
  /** 进度条类型 直线 圆圈 仪表盘  */
  nzType?: 'line' | 'circle' | 'dashboard';
  /** 内容自定义模板函数  */
  nzFormat?: (percent: number) => string;
  /** 进度百分比  */
  nzPercent?: number;
  /** 是否显示进度动态图标  */
  nzShowInfo?: boolean;
  /** 进度条状态  */
  nzStatus?: 'success' | 'exception' | 'active';
  /** 进度条宽度  */
  nzStrokeWidth?: number;
  /** 圆形进度条的画布宽度  */
  nzWidth?: number;
  /** 进度条断点形状  */
  nzStrokeLinecap?: 'round'|'square';
  /** 圆形进度条缺口角度，可取值 0 ~ 360  */
  nzGapDegree?: number;
  /** 圆形缺口位置  */
  nzGapPosition?: 'top' | 'right' | 'bottom' | 'left';
  /** 控制进度显示和隐藏 的方法  */
}

@Injectable()

export class AppApiProgressService {
  private progressSource = new Subject<boolean>(); // 弹出框主题 会产生一个ProgressParam数据类型的流
  progressSource$ = this.progressSource.asObservable(); // 把数据流转换成 Observable 可观察者对象progressSource如果是公用的直接用它也行
  /** 控制显示的方法  */
  show(): void {
    this.progressSource.next(true);
  }
  /** 控制隐藏的方法  */
  hide(): void {
    this.progressSource.next(false);
  }
}
