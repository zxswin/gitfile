/** 接口返回的通用数据结构  */
export interface CommonObj {
  [key: string]: any;
  [key: number]: any;
}

export interface OperationState {
  /** 新增状态 */
  add?: boolean;
  /** 修改状态 */
  modify?: boolean;
  /** 删除状态  */
  delete?: boolean;
}

