/** 接口返回的通用数据结构  */
export interface CommonObj {
  [key: string]: any;
  [key: number]: any;
}

/** 定义一个接口 控制是否展示复选 及 复选逻辑的接口 */
export interface TableCheckObj {
  isShwo?: boolean; // 是否展示 复选框
  allChecked?: boolean; // 全选按钮是否勾选
  indeterminate?: boolean; // 部分选中状态是否展示
  checkData?: CommonObj[]; // 选中的数据
  getCheckData?: () => CommonObj[]; // 获取选中数据方法
  refreshStatus?: () => void; // 重置复选框选中状态方法
  checkAll?: (value: boolean) => void; // 全选方法
}

export interface TableData {
  localData?: CommonObj[]; // 本地数据
  url?: string; // 接口请求的ip地址
  total?: number; // 总页数
  param?: CommonObj; // 调用接口需要传递的参数
  columnData?: CommonObj[]; // 表格需要渲染表头的数据
  sortValue?: string; // 排序的值 ascend | descend | null
  sortKey?: string; // 排序的字段
  renderData?: (reset?: boolean) => void; // 渲染数据的方法
}

export interface ShowSort {
  sortEvent?: ($event: { key: string; value: string }) => void; // 排序事件
}

export interface Filter {
  updateFilter?: ($event, field: string | number) => void; // 过滤控制函数
}

/** 定义一个接口 用于接收父组件传过来的数据  */
export interface NzTableData {
  tableData?: TableData; // 接口请求相关数据
  pageIndex?: number; // 当前页码
  pageSize?: number; // 每页展示多少条数据
  nzScroll?: { x: string }; // 为大于表格宽度的固定值或百分比
  nzFrontPagination?: boolean; // 是否在前端对数据进行分页 用于本地数据加载
  nzBordered?: boolean; // 是否展示表格边框
  loading?: boolean; // 是否显示页面加载中
  check?: TableCheckObj; // 控制复选框的数据
  sort?: ShowSort; // 控制是否显示排序
  filter?: Filter; // 控制字段过滤相关逻辑
}
