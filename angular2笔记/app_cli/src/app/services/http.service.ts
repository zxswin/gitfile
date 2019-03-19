import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../config/api-config';
import { ApiOption } from '@app-types/http';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  /** 处理ajax请求的接口的方法 */
  apiServer(apiName: string): Observable<any> {
    const apiOption = this.getApiConfig(apiName);

    // 默认为 GET请求
    if (!apiOption.method) {
      apiOption.method = 'get';
    }

    return this.http
      .request(apiOption.method, apiOption.url, apiOption.options)
      .pipe(
        catchError(error => {
          console.error('Error catched', error);
          return of({ description: 'Error Value Emitted' }); // 如果有异常会在subscribe中被打印出来
        })
      );
  }

  /** 根据apiName从API_CONFIG对象中获取对应的配置项 */
  getApiConfig(apiName: string): ApiOption {
    let apiConfigItem: ApiOption = {};
    for (const key in API_CONFIG) {
      if (key === apiName) {
        apiConfigItem = API_CONFIG[key];
      }
    }
    return apiConfigItem;
  }
}
