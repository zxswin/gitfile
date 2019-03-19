import { HttpParams, HttpHeaders } from '@angular/common/http';
import { CommonObj } from '@app-types/global';

/* apiServer方法的入参 */
export interface ApiOption {
  method?: string; // 接口调用的方式
  url?: string; // 接口调用的地址

  // 接口调用的主体参数
  options?: {
    body?: any; // 通过post方法通过body传递的参数
    // 设置头部信息
    headers?:
      | HttpHeaders
      | {
          [header: string]: string | string[];
        };
    observe?: 'body' | 'events' | 'response'; // 接口复位类型 只能传这几个值
    // 通过url传递的参数
    params?:
      | HttpParams
      | {
          [param: string]: string | string[];
        };
    reportProgress?: boolean; // 接口响应的进度信息
    responseType?: 'arraybuffer' | 'blob' | 'json' | 'text'; // 接口响应的数据类型 只能传这几个值
    withCredentials?: boolean;
  };
}

export interface ApiConfig {
  /** 每个接口的配置项  */
  [key: string] : ApiOption;
}
