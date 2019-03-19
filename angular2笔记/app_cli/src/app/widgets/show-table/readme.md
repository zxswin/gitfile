# nz-table 相关属性及方法
[nzData]	数据数组	any[]
[nzFrontPagination]	是否在前端对数据进行分页，如果在服务器分页数据或者需要在前端显示全部数据时传入 false	boolean	true
[nzTotal]	当前总数据，在服务器渲染时需要传入	number
[nzPageIndex]	当前页码，可双向绑定	number
[nzPageSize]	每页展示多少数据，可双向绑定	number
[nzShowPagination]	是否显示分页器	boolean	true
[nzBordered]	是否展示外边框和列边框	boolean	false
[nzWidthConfig]	表头分组时指定每列宽度，与 th 的 nzWidth 不可混用	string[]
[nzSize]	正常或迷你类型，default or small or middle	string	default
[nzLoading]	页面是否加载中	boolean	false
[nzLoadingDelay]	延迟显示加载效果的时间（防止闪烁）	number	0
[nzScroll]	横向或纵向支持滚动，也可用于指定滚动区域的宽高度：{ x: "300px", y: "300px" }	object
[nzTitle]	表格标题	string丨TemplateRef<void>
[nzFooter]	表格尾部	string丨TemplateRef<void>	
[nzNoResult]	无数据时显示内容	string丨TemplateRef<void>
[nzPageSizeOptions]	页数选择器可选值	number[]	[ 10, 20, 30, 40, 50 ]
[nzShowQuickJumper]	是否可以快速跳转至某页	boolean	false
[nzShowSizeChanger]	是否可以改变 nzPageSize	boolean	false
[nzShowTotal]	用于显示数据总量和当前数据范围，与 Pagination 用法相同	TemplateRef<{ $implicit: number, range: [ number, number ] }>	
[nzHideOnSinglePage]	只有一页时是否隐藏分页器	boolean	false
[nzSimple]	当添加该属性时，显示为简单分页	boolean
(nzPageIndexChange)	当前页码改版时的回调函数	EventEmitter<number>	-
(nzPageSizeChange)	页数改变时的回调函数	EventEmitter<number>	-
(nzCurrentPageDataChange)	当前页面展示数据改变的回调函数	EventEmitter<any[]>	-


# th 的属性及方法

# 勾选属性
[nzShowCheckbox]	是否添加checkbox	boolean
[nzDisabled]	checkbox 是否禁用	boolean
[nzIndeterminate]	checkbox indeterminate 状态	boolean 在实现全选效果时，你可能会用到 nzIndeterminate 属性。
[nzChecked]	checkbox 是否被选中，可双向绑定	boolean
(nzCheckedChange)	选中的回调	EventEmitter<boolean>	-

# 下拉选择属性
[nzShowRowSelection]	是否显示下拉选择	boolean	-
[nzSelections]	下拉选择的内容 text 及回调函数 onSelect	Array<{ text: string, onSelect: any }>	-

# 排序属性
[nzShowSort]	是否显示排序	boolean
[nzSortKey]	排序key，非受控模式使用，与 thead 中 nzSortChange 配合使用	string
[nzSort]	当前排序状态，受控模式使用，可双向绑定	'descend'丨'ascend'丨null	null
(nzSortChange)	排序状态改变回调，受控模式使用	EventEmitter<'descend'丨'ascend'丨null>

# 过滤属性
[nzShowFilter]	是否显示过滤	boolean
[nzFilters]	过滤器内容, 显示数据 text，回调函数传出 value，设置 byDefault 以默认应用过滤规则	Array<{ text: string; value: any; byDefault?: boolean }>	-
[nzFilterMultiple]	是否为多选过滤器	boolean	true
(nzFilterChange)	过滤器内容选择的 value 数据回调	EventEmitter<any[]丨 any>	-

# 样式属性
[nzWidth]	指定该列宽度，表头未分组时可用	string	-
[nzLeft]	左侧距离，用于固定左侧列	string	-
[nzRight]	右侧距离，用于固定右侧列	string	-

# 其他
[nzExpand]	当前列是否包含展开按钮	boolean

# td
# 勾选属性
[nzShowCheckbox]	是否添加checkbox	boolean	-
[nzDisabled]	checkbox 是否禁用	boolean	-
[nzIndeterminate]	checkbox indeterminate 状态	boolean	-
[nzChecked]	checkbox 是否被选中，可双向绑定	boolean	-
(nzCheckedChange)	选中的回调	EventEmitter<boolean>	-

# 展开属性
[nzShowExpand]	是否显示展开按钮	boolean	-
[nzExpand]	当前展开按钮状态，可双向绑定	boolean	-
(nzExpandChange)	当前展开按钮状态改变回调函数	EventEmitter<boolean>	-

# 样式属性
[nzLeft]	左侧距离，用于固定左侧列	string	-
[nzRight]	右侧距离，用于固定右侧列	string

# 其他样式
[nzIndentSize]	展示树形数据时，每层缩进的宽度，以 px 为单位	number

# thead
[nzSingleSort]	是否单列排序模式，非受控排序下使用	boolean	false
(nzSortChange)	排序改变时的回调函数，需要与 th 上的 nzSortKey 同时使用，非受控排序下使用	EventEmitter<{ nzSortKey: string, value: 'descend'丨'ascend'丨null }>	-

# nz-tr
[nzExpand]	当前列是否展开，与 td 上的 nzExpand 属性配合使用	boolean

# 注意
按照 Angular 的设计，当需要对 nzData 中的数据进行增删时需要使用以下操作，使用 push 或者 splice 修改 nzData 的数据不会生效

// 增加数据
this.dataSet = [ ...this.dataSet, {
  key    : `${this.i}`,
  name   : `Edward King ${this.i}`,
  age    : '32',
  address: `London, Park Lane no. ${this.i}`
}];
// 删除数据
this.dataSet = this.dataSet.filter(d => d.key !== i);

indeterminate 不确定的




##### 复选框 可选择（换页后会清空当前选中项的状态）
<nz-table #rowSelectionTable [nzData]="data" nzPageSize="2" (nzCurrentPageDataChange)="currentPageDataChange($event)" (nzPageIndexChange)="refreshStatus()" (nzPageSizeChange)="refreshStatus()">
  <thead>
    <tr>
      <th nzShowCheckbox [(nzChecked)]="allChecked" [nzIndeterminate]="indeterminate" (nzCheckedChange)="checkAll($event)"></th>
      <th>Name</th>
      <th>Age</th>
      <th>Address</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let data of rowSelectionTable.data">
      <td nzShowCheckbox [(nzChecked)]="data.checked" [nzDisabled]="data.disabled" (nzCheckedChange)="refreshStatus()"></td>
      <td>{{data.name}}</td>
      <td>{{data.age}}</td>
      <td>{{data.address}}</td>
    </tr>
  </tbody>
</nz-table>

allChecked = false;
indeterminate = false;
displayData = [];
data = [
  {
    name    : 'John Brown',
    age     : 32,
    address : 'New York No. 1 Lake Park',
    checked : false,
    disabled: false
  },
  {
    name    : 'Jim Green',
    age     : 42,
    address : 'London No. 1 Lake Park',
    checked : false,
    disabled: false
  },
  {
    name    : 'Joe Black',
    age     : 32,
    address : 'Sidney No. 1 Lake Park',
    checked : false,
    disabled: false
  },
  {
    name    : 'Disabled User',
    age     : 32,
    address : 'Sidney No. 1 Lake Park',
    checked : false,
    disabled: true
  }
];

currentPageDataChange($event: Array<{ name: string; age: number; address: string; checked: boolean; disabled: boolean; }>): void {
  console.log('currentPageDataChange当前页面数据已经发生了改变' , $event);
  this.displayData = $event;
  this.refreshStatus(); // 根据当前数据 更新数据选中状态
}

refreshStatus(): void {
  // 过滤当前页面数据中value.disabled=false(不可选的数据) 并 检查过滤结果数据中是否全部为选中状态 如果全部选中返回 true
  const allChecked = this.displayData.filter(value => !value.disabled).every(value => value.checked === true);
  // 过滤当前页面数据中value.disabled=false(不可选的数据) 并 检查过滤结果数据中是全部为未选中状态  如果全部未选中返回 false
  const allUnChecked = this.displayData.filter(value => !value.disabled).every(value => !value.checked);
  this.allChecked = allChecked;
  this.indeterminate = (!allChecked) && (!allUnChecked);  // 选择某条的情况下 indeterminate 为true

  console.log('allChecked 是否为全选状态', allChecked);
  console.log('allUnChecked 是否为全部未选中状态' , allUnChecked);
  console.log('indeterminate 是否为部分选择状态' , this.indeterminate);
}

checkAll(value: boolean): void {
  console.log('点击了上方的全选按钮了' , value);
  this.displayData.forEach(data => {
    if (!data.disabled) {
      data.checked = value; // 如果数据为可选择 则改变其值
    }
  });
  this.refreshStatus(); // 根据当前数据 更新数据选中状态
}


##### 复选框 可选择(换页后仍然会记住前面已经选中的数据的状态)
<div style="margin-bottom: 16px;">
  <button nz-button [disabled]="disabledButton" [nzType]="'primary'" [nzLoading]="operating" (click)="operateData()">Reload</button>
  <span style="margin-left: 8px;" *ngIf="checkedNumber">Selected {{checkedNumber}} items</span>
</div>
<nz-table #rowSelectionTable [nzData]="dataSet" (nzCurrentPageDataChange)="currentPageDataChange($event)" (nzPageIndexChange)="refreshStatus()" (nzPageSizeChange)="refreshStatus()">
  <thead>
    <tr>
      <th nzShowCheckbox [(nzChecked)]="allChecked" [nzIndeterminate]="indeterminate" (nzCheckedChange)="checkAll($event)"></th>
      <th>Name</th>
      <th>Age</th>
      <th>Address</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let data of rowSelectionTable.data">
      <td nzShowCheckbox [(nzChecked)]="data.checked" (nzCheckedChange)="refreshStatus()"></td>
      <td>{{data.name}}</td>
      <td>{{data.age}}</td>
      <td>{{data.address}}</td>
    </tr>
  </tbody>
</nz-table>

allChecked = false;  //  是否为全部选中状态
disabledButton = true; // 上分的reload按钮是否为激活状态
checkedNumber = 0; // 当前选中了多少条数据
displayData: Array<{ name: string; age: number; address: string; checked: boolean }> = []; // 当前表格中展示的数据
operating = false; // nzLoading 图标是否展示
dataSet = []; // 表格需要渲染的数据
indeterminate = false; // 是否为部分选中状态

currentPageDataChange($event: Array<{ name: string; age: number; address: string; checked: boolean }>): void {
  console.log('当前页面展示数据发生了改变',$event);
  this.displayData = $event; // 改变当前展示的数据
}

refreshStatus(): void {
  console.log('刷新数据状态');
  const allChecked = this.displayData.every(value => value.checked === true); // 当前数据是否为全选状态
  const allUnChecked = this.displayData.every(value => !value.checked); // 当前数据是否为全部未选中状态
  this.allChecked = allChecked; // 全选状态
  this.indeterminate = (!allChecked) && (!allUnChecked); // 部分选中状态
  this.disabledButton = !this.dataSet.some(value => value.checked); // 所有数据中存在选中数据的时候激活reload按钮
  this.checkedNumber = this.dataSet.filter(value => value.checked).length; // 所有数据中选中项的记录数
}

checkAll(value: boolean): void {
  console.log('点击了全选按钮')
  this.displayData.forEach(data => data.checked = value); // 改变当前页面数据状态
  this.refreshStatus(); // 更新选中状态
}

operateData(): void {
  console.log('点击了reload按钮');
  this.operating = true;  // 展示reload图标
  setTimeout(_ => { // 1000毫秒后执行
    this.dataSet.forEach(value => value.checked = false); // 全部数据改为为选择状态
    this.refreshStatus(); // 更新状态
    this.operating = false; // 隐藏reload图标
  }, 1000);
}

ngOnInit(): void {
  // 循环生成表格数据
  for (let i = 0; i < 46; i++) {
    this.dataSet.push({
      name   : `Edward King ${i}`,
      age    : 32,
      address: `London, Park Lane no. ${i}`,
      checked: false
    });
  }
}

#####自定义选择项 通过 nzShowRowSelection 与 nzSelections 自定义选择项.
<nz-table #rowSelectionTable [nzData]="dataSet" [nzPageSize]="10" (nzPageIndexChange)="refreshStatus()" (nzPageSizeChange)="refreshStatus()">
  <thead>
    <tr>
      <th nzShowCheckbox nzShowRowSelection [nzSelections]="listOfSelection" [(nzChecked)]="allChecked" [nzIndeterminate]="indeterminate" (nzCheckedChange)="checkAll($event)"></th>
      <th>Name</th>
      <th>Age</th>
      <th>Address</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let data of rowSelectionTable.data">
      <td nzShowCheckbox [(nzChecked)]="data.checked" (nzCheckedChange)="refreshStatus()"></td>
      <td>{{data.name}}</td>
      <td>{{data.age}}</td>
      <td>{{data.address}}</td>
    </tr>
  </tbody>
</nz-table>

listOfSelection = [
  // 自定义多选列表项
  {
    text    : 'Select All Row',
    onSelect: () => {
      this.checkAll(true); // 选择全部
    }
  },
  {
    text    : 'Select Odd Row',
    onSelect: () => {
      this.dataSet.forEach((data, index) => data.checked = index % 2 !== 0); // 选择偶数项
      this.refreshStatus(); // 更新选择状态
    }
  },
  {
    text    : 'Select Even Row',
    onSelect: () => {
      this.dataSet.forEach((data, index) => data.checked = index % 2 === 0); // 选择奇数项
      this.refreshStatus(); // 更新选择状态
    }
  }
];
allChecked = false; // 是否全选
dataSet: Array<{ name: string; age: number; address: string; checked: boolean }> = []; // 表格中展示的数据
indeterminate = false; // 是否为部分选中状态

refreshStatus(): void {
  // 更新选中状态
  const allChecked = this.dataSet.every(value => value.checked === true); // 是否为全选
  const allUnChecked = this.dataSet.every(value => !value.checked); // 是否为全部未选
  this.allChecked = allChecked; // 标记全选状态
  this.indeterminate = (!allChecked) && (!allUnChecked); // 是否为部分选中状态
}

checkAll(value: boolean): void {
  this.dataSet.forEach(data => data.checked = value); // 全部选中
  this.refreshStatus(); // 更新选中状态
}

ngOnInit(): void {
  // 动态生成表格数据
  for (let i = 0; i < 46; i++) {
    this.dataSet.push({
      name   : `Edward King ${i}`,
      age    : 32,
      address: `London, Park Lane no. ${i}`,
      checked: false
    });
  }
}


##### 默认筛选
##### 通过设置 filter 对象的 { byDefault: true } 属性来默认启用一个筛选器。注意，你必须同时自行设置过滤后应当展示的列表项，为了保持数据流的清晰和数据的一致性，ng-zorro 不会为你做这项工作。详情请见 demo。

[nzSingleSort]	是否单列排序模式，非受控排序下使用	boolean	false
(nzSortChange)	排序改变时的回调函数，需要与 th 上的 nzSortKey 同时使用，非受控排序下使用	EventEmitter<{ nzSortKey: string, value: 'descend'丨'ascend'丨null }>	-
(nzFilterChange)	过滤器内容选择的 value 数据回调	EventEmitter<any[]丨 any>	-

<nz-table #filterTable [nzData]="displayData">
  <thead (nzSortChange)="sort($event)" nzSingleSort>
    <tr>
      <th nzShowSort nzSortKey="name" nzShowFilter [nzFilters]="nameList" (nzFilterChange)="filter($event,searchAddress)">Name</th>
      <th nzShowSort nzSortKey="age">Age</th>
      <th nzShowSort nzSortKey="address" nzShowFilter [nzFilterMultiple]="false" [nzFilters]="addressList" (nzFilterChange)="filter(listOfSearchName,$event)">Address</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let data of filterTable.data">
      <td>{{data.name}}</td>
      <td>{{data.age}}</td>
      <td>{{data.address}}</td>
    </tr>
  </tbody>
</nz-table>

// name字段的过滤选项
nameList = [
  { text: 'Joe', value: 'Joe', byDefault: true },
  { text: 'Jim', value: 'Jim' }
];

// address 字段的过滤选项
addressList = [
  { text: 'London', value: 'London', byDefault: true },
  { text: 'Sidney', value: 'Sidney' }
];

sortName = null;  // 要过滤的字段名称
sortValue = null; // 要过来字段的值
listOfSearchName = [ 'Joe' ];  // name字段的默认过滤项 多选
searchAddress = 'London'; // address字段的默认过滤项 单选

// 表格展示的数据
data = [
  {
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park'
  },
  {
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  },
  {
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park'
  }
];
displayData = [ ];  // 表格要展示的数据

sort(sort: { key: string, value: string }): void {
  // 排序改变的回调函数
  console.log('排序的字段' , sort.key);
  console.log('排序的值' , sort.value);
  this.sortName = sort.key;
  this.sortValue = sort.value;
  this.search(); // 搜索过滤数据
}

filter(listOfSearchName: string[], searchAddress: string): void {
  // 多内容进行过滤
  console.log('name过滤项' , listOfSearchName);
  console.log('address过滤项' , searchAddress);
  this.listOfSearchName = listOfSearchName; // 获取name字段的过滤选项
  this.searchAddress = searchAddress; // 获取address字段的过滤选项
  this.search(); // 搜索过滤数据
}

search(): void {
  // 搜索过滤数据
  /** 过滤的数据 data **/
  const filterFunc = item => (this.searchAddress ? item.address.indexOf(this.searchAddress) !== -1 : true) && (this.listOfSearchName.length ? this.listOfSearchName.some(name => item.name.indexOf(name) !== -1) : true);
  const data = this.data.filter(item => filterFunc(item));
  /** 排序的数据 data **/
  if (this.sortName && this.sortValue) {
    this.displayData = data.sort((a, b) => (this.sortValue === 'ascend') ? (a[ this.sortName ] > b[ this.sortName ] ? 1 : -1) : (b[ this.sortName ] > a[ this.sortName ] ? 1 : -1));
  } else {
    this.displayData = data;
  }
}



##### 筛选和排序 (默认展示所有数据 没有默认过滤项和排序项)
##### 对某一列数据进行筛选，通过指定 th 的 nzShowFilter 属性来展示筛选菜单， 使用 nzFilters 属性来指定筛选选项，nzFilterChange 用于获取当前选中的选项，nzFilterMultiple 用于指定多选和单选。
##### 对某一列数据进行排序，通过指定 th 的 nzShowSort 属性来展示排序按钮，使用 nzSortKey 来指定排序的 key，在 thead 上通过 nzSortChange 来获取排序改变事件，通过 nzSingleSort 来指定是否单列排序。

<nz-table #filterTable [nzData]="displayData">
  <thead (nzSortChange)="sort($event)" nzSingleSort>
    <tr>
      <th nzShowSort nzSortKey="name" nzShowFilter [nzFilters]="nameList" (nzFilterChange)="filter($event,searchAddress)">Name</th>
      <th nzShowSort nzSortKey="age">Age</th>
      <th nzShowSort nzSortKey="address" nzShowFilter [nzFilterMultiple]="false" [nzFilters]="addressList" (nzFilterChange)="filter(listOfSearchName,$event)">Address</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let data of filterTable.data">
      <td>{{data.name}}</td>
      <td>{{data.age}}</td>
      <td>{{data.address}}</td>
    </tr>
  </tbody>
</nz-table>

nameList = [
  { text: 'Joe', value: 'Joe' },
  { text: 'Jim', value: 'Jim' }
];
addressList = [
  { text: 'London', value: 'London' },
  { text: 'Sidney', value: 'Sidney' }
];
sortName = null;
sortValue = null;
listOfSearchName = [];
searchAddress: string;
data = [
  {
    name   : 'John Brown',
    age    : 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    name   : 'Jim Green',
    age    : 42,
    address: 'London No. 1 Lake Park'
  },
  {
    name   : 'Joe Black',
    age    : 32,
    address: 'Sidney No. 1 Lake Park'
  },
  {
    name   : 'Jim Red',
    age    : 32,
    address: 'London No. 2 Lake Park'
  }
];
displayData = [ ...this.data ];

sort(sort: { key: string, value: string }): void {
  this.sortName = sort.key;
  this.sortValue = sort.value;
  this.search();
}

filter(listOfSearchName: string[], searchAddress: string): void {
  this.listOfSearchName = listOfSearchName;
  this.searchAddress = searchAddress;
  this.search();
}

search(): void {
  /** filter data **/
  const filterFunc = item => (this.searchAddress ? item.address.indexOf(this.searchAddress) !== -1 : true) && (this.listOfSearchName.length ? this.listOfSearchName.some(name => item.name.indexOf(name) !== -1) : true);
  const data = this.data.filter(item => filterFunc(item));
  /** sort data **/
  if (this.sortName && this.sortValue) {
    this.displayData = data.sort((a, b) => (this.sortValue === 'ascend') ? (a[ this.sortName ] > b[ this.sortName ] ? 1 : -1) : (b[ this.sortName ] > a[ this.sortName ] ? 1 : -1));
  } else {
    this.displayData = data;
  }
}


##### 可控的筛选和排序
使用受控属性对筛选状态进行控制。
在th 中定义了 nzSort 属性即视为受控模式。
通过手动指定 nzSort 来指定当前列的排序状态
通过 th 的 nzSortChange 事件来获取当前列排序状态的改变
不可与 thead 中的 nzSortChange 或 nzSingleSort 同时使用
<div class="table-operations">
  <button nz-button (click)="sort('age','descend')">Sort age</button>
  <button nz-button (click)="resetFilters()">Clear filters</button>
  <button nz-button (click)="resetSortAndFilters()">Clear filters and sorters</button>
</div>
<nz-table #filterTable [nzData]="displayData">
  <thead>
    <tr>
      <th nzShowSort nzShowFilter [(nzSort)]="sortMap.name" (nzSortChange)="sort('name',$event)" [nzFilters]="filterNameList" (nzFilterChange)="search($event,searchAddressList)">Name</th>
      <th nzShowSort [(nzSort)]="sortMap.age" (nzSortChange)="sort('age',$event)">Age</th>
      <th nzShowSort nzShowFilter [(nzSort)]="sortMap.address" (nzSortChange)="sort('address',$event)" [nzFilters]="filterAddressList" (nzFilterChange)="search(searchNameList,$event)">Address</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let data of filterTable.data">
      <td>{{data.name}}</td>
      <td>{{data.age}}</td>
      <td>{{data.address}}</td>
    </tr>
  </tbody>
</nz-table>

searchNameList = []; // 当前要过滤的name字段 多选
searchAddressList = []; // 当前要过滤的address字段 多选
filterNameList = [
  // 显示要过滤的name字段列表
  { text: 'Joe', value: 'Joe' },
  { text: 'Jim', value: 'Jim' }
];
filterAddressList = [
  // 显示要过来的address字段列表
  { text: 'London', value: 'London' },
  { text: 'Sidney', value: 'Sidney' }
];
// 要排序的字段列表
sortMap = {
  name   : null,
  age    : null,
  address: null
};
sortName = null; // 排序的字段名称
sortValue = null; // 排序的字段值

// 表格初始展示数据
data = [
  {
    name   : 'John Brown',
    age    : 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    name   : 'Jim Green',
    age    : 42,
    address: 'London No. 1 Lake Park'
  },
  {
    name   : 'Joe Black',
    age    : 32,
    address: 'Sidney No. 1 Lake Park'
  },
  {
    name   : 'Jim Red',
    age    : 32,
    address: 'London No. 2 Lake Park'
  }
];
displayData = [ ...this.data ]; // 表格过滤排序后展示的数据

// 进行排序操作的函数
sort(sortName: string, value: string): void {
  console.log('排序的字段' , sortName);
  console.log('排序的字段值' , value); 
  this.sortName = sortName;
  this.sortValue = value; // ascend | descend | null
  for (const key in this.sortMap) {
    this.sortMap[ key ] = (key === sortName ? value : null);
  }
  this.search(this.searchNameList, this.searchAddressList);
}

search(searchNameList: string[], searchAddressList: string[]): void {
  this.searchNameList = searchNameList;
  this.searchAddressList = searchAddressList;
  const filterFunc = item => (this.searchAddressList.length ? this.searchAddressList.some(address => item.address.indexOf(address) !== -1) : true) && (this.searchNameList.length ? this.searchNameList.some(name => item.name.indexOf(name) !== -1) : true);
  const data = this.data.filter(item => filterFunc(item));
  if (this.sortName && this.sortValue) {
    this.displayData = data.sort((a, b) => (this.sortValue === 'ascend') ? (a[ this.sortName ] > b[ this.sortName ] ? 1 : -1) : (b[ this.sortName ] > a[ this.sortName ] ? 1 : -1));
  } else {
    this.displayData = data;
  }
}

resetFilters(): void {
  this.filterNameList = [
    { text: 'Joe', value: 'Joe' },
    { text: 'Jim', value: 'Jim' }
  ];
  this.filterAddressList = [
    { text: 'London', value: 'London' },
    { text: 'Sidney', value: 'Sidney' }
  ];
  this.searchNameList = [];
  this.searchAddressList = [];
  this.search(this.searchNameList, this.searchAddressList);
}

resetSortAndFilters(): void {
  this.sortName = null;
  this.sortValue = null;
  this.sortMap = {
    name   : null,
    age    : null,
    address: null
  };
  this.resetFilters();
  this.search(this.searchNameList, this.searchAddressList);
}


##### 自定义筛选菜单
通过 nz-dropdown、nzFilters 和 nzFilterChange 定义自定义的列筛选功能，并实现一个搜索列的示例。
nzCustomFilter 自定义过滤栏下拉样式
<nz-table #nzTable [nzData]="displayData">
  <thead>
    <tr>
      <th nzCustomFilter> Name
        <nz-dropdown nzTrigger="click" [nzClickHide]="false" #dropdown>
          <i nz-icon type="smile-o" class="ant-table-filter-icon" [class.ant-table-filter-open]="dropdown.nzVisible" nz-dropdown></i>
          <div class="custom-filter-dropdown">
            <input type="text" nz-input placeholder="Search name" [(ngModel)]="searchValue">
            <button nz-button [nzType]="'primary'" (click)="search()">Search</button>
          </div>
        </nz-dropdown>
      </th>
      <th>Age</th>
      <th nzShowFilter [nzFilters]="filterAddressArray" (nzFilterChange)="filterAddressChange($event)">Address</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let data of nzTable.data">
      <td>{{data.name}}</td>
      <td>{{data.age}}</td>
      <td>{{data.address}}</td>
    </tr>
  </tbody>
</nz-table>

searchValue = ''; //过滤栏中搜索的关键词
// address过滤栏字段列表
filterAddressArray = [
  { text: 'London', value: 'London' },
  { text: 'Sidney', value: 'Sidney' }
];
searchAddress = []; // 多选过滤的address 字段列表
// 排序的字段列表
sortMap = {
  name   : null,
  age    : null,
  address: null
};
sortName = null; // 排序的字段
sortValue = null; // 排序的方式

// 表格展示的初始数据
data = [
  {
    name   : 'John Brown',
    age    : 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    name   : 'Jim Green',
    age    : 42,
    address: 'London No. 1 Lake Park'
  },
  {
    name   : 'Joe Black',
    age    : 32,
    address: 'Sidney No. 1 Lake Park'
  },
  {
    name   : 'Jim Red',
    age    : 32,
    address: 'London No. 2 Lake Park'
  }
];
displayData = [ ...this.data ]; // 表格过滤后展示的数据

sort(sortName: string, value: boolean): void {
  this.sortName = sortName;
  this.sortValue = value;
  for (const key in this.sortMap) {
    this.sortMap[ key ] = (key === sortName ? value : null);
  }
  this.search();
}

filterAddressChange(value: string[]): void {
  this.searchAddress = value;
  this.search();
}

search(): void {
  const filterFunc = (item) => {
    return (this.searchAddress.length ? this.searchAddress.some(address => item.address.indexOf(address) !== -1) : true) &&
      (item.name.indexOf(this.searchValue) !== -1);
  };
  const data = this.data.filter(item => filterFunc(item));
  this.displayData = data.sort((a, b) => (this.sortValue === 'ascend') ? (a[ this.sortName ] > b[ this.sortName ] ? 1 : -1) : (b[ this.sortName ] > a[ this.sortName ] ? 1 : -1));
}


##### 远程加载数据
这个例子通过简单的 ajax 读取方式，演示了如何从服务端读取并展现数据，具有筛选、排序等功能以及页面 loading 效果。开发者可以自行接入其他数据处理方式。
注意，此示例使用 模拟接口，展示数据可能不准确，请打开网络面板查看请求。
[nzShowSizeChanger]	是否可以改变 nzPageSize	boolean	false
[nzFrontPagination]	是否在前端对数据进行分页，如果在服务器分页数据或者需要在前端显示全部数据时传入 false	boolean	true
[nzLoading]	页面是否加载中	boolean	false
[nzTotal] 当前总数据，在服务器渲染时需要传入	number
[nzPageIndex]	当前页码，可双向绑定	number
[nzPageSize]	每页展示多少数据，可双向绑定	number
(nzPageIndexChange)	当前页码改版时的回调函数	EventEmitter<number>	-
(nzPageSizeChange)	页数改变时的回调函数	EventEmitter<number>	-

<nz-table #ajaxTable nzShowSizeChanger [nzFrontPagination]="false" [nzData]="dataSet" [nzLoading]="loading" [nzTotal]="total" [(nzPageIndex)]="pageIndex" [(nzPageSize)]="pageSize" (nzPageIndexChange)="searchData()" (nzPageSizeChange)="searchData(true)">
  <thead (nzSortChange)="sort($event)" nzSingleSort>
    <tr>
      <th nzShowSort nzSortKey="name">Name</th>
      <th nzShowFilter [nzFilters]="filterGender" (nzFilterChange)="updateFilter($event)">Gender</th>
      <th nzShowSort nzSortKey="email"><span>Email</span></th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let data of ajaxTable.data">
      <td>{{data.name.first}} {{data.name.last}}</td>
      <td>{{data.gender}}</td>
      <td>{{data.email}}</td>
    </tr>
  </tbody>
</nz-table>


import { Component, Injectable, OnInit } from '@angular/core';
import { NzFormatEmitEvent, NzTreeNode } from 'ng-zorro-antd';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class RandomUserService {
  randomUserUrl = 'https://api.randomuser.me/'; // 接口地址

  getUsers(pageIndex: number = 1, pageSize: number = 10, sortField: string, sortOrder: string, genders: string[]): Observable<{}> {
    let params = new HttpParams()
    .append('page', `${pageIndex}`)
    .append('results', `${pageSize}`)
    .append('sortField', sortField)
    .append('sortOrder', sortOrder);
    genders.forEach(gender => {
      params = params.append('gender', gender);
    });
    return this.http.get(`${this.randomUserUrl}`, {
      params
    });
  }

  constructor(private http: HttpClient) {
  }
}

pageIndex = 1; // 当前页面
pageSize = 10; // 每页展示多少条数据
total = 1; // 当前总数据
dataSet = []; //表格要展示的数据
loading = true; // 是否显示页面加载中
sortValue = null; // 排序的值 ascend | descend | null 
sortKey = null; // 排序的字段

// 过滤字段列表项
filterGender = [
  { text: 'male', value: 'male' },
  { text: 'female', value: 'female' }
];

searchGenderList: string[] = []; // 需要过滤的字段列表

sort(sort: { key: string, value: string }): void {
  // 触发排序函数
  this.sortKey = sort.key;
  this.sortValue = sort.value;
  this.searchData(); // 更新数据
}

constructor(private randomUserService: RandomUserService) {
}

// 调用接口查询数据
searchData(reset: boolean = false): void {
  if (reset) {
    this.pageIndex = 1;
  }
  this.loading = true;
  this.randomUserService.getUsers(this.pageIndex, this.pageSize, this.sortKey, this.sortValue, this.searchGenderList).subscribe((data: any) => {
    this.loading = false;
    this.total = 200;
    this.dataSet = data.results;
  });
}

updateFilter(value: string[]): void {
  this.searchGenderList = value;
  this.searchData(true);
}

ngOnInit(): void {
  this.searchData();
}
 

##### 紧凑型
两种紧凑型的列表，小型列表只用于对话框内。
[nzSize]
<h4>Middle size table</h4>
<nz-table #middleTable nzSize="middle" [nzData]="data">
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Address</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let data of middleTable.data">
      <td>{{data.name}}</td>
      <td>{{data.age}}</td>
      <td>{{data.address}}</td>
    </tr>
  </tbody>
</nz-table>
<h4>Small size table</h4>
<nz-table #smallTable nzSize="small" [nzData]="data">
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Address</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let data of smallTable.data">
      <td>{{data.name}}</td>
      <td>{{data.age}}</td>
      <td>{{data.address}}</td>
    </tr>
  </tbody>
</nz-table>

data = [
  {
    key    : '1',
    name   : 'John Brown',
    age    : 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key    : '2',
    name   : 'Jim Green',
    age    : 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key    : '3',
    name   : 'Joe Black',
    age    : 32,
    address: 'Sidney No. 1 Lake Park',
  }
];


##### 带边框
添加表格边框线，页头和页脚。
nzBordered nzFooter="Footer" nzTitle="Header"
<nz-table #borderedTable nzBordered nzFooter="Footer" nzTitle="Header" [nzData]="dataSet">
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Address</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let data of borderedTable.data">
      <td>{{data.name}}</td>
      <td>{{data.age}}</td>
      <td>{{data.address}}</td>
    </tr>
  </tbody>
</nz-table>

dataSet = [
  {
    key    : '1',
    name   : 'John Brown',
    age    : 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    key    : '2',
    name   : 'Jim Green',
    age    : 42,
    address: 'London No. 1 Lake Park'
  },
  {
    key    : '3',
    name   : 'Joe Black',
    age    : 32,
    address: 'Sidney No. 1 Lake Park'
  }
];



##### 可展开
当表格内容较多不能一次性完全展示时，可以通过 td 上的 nzExpand 属性展开。
[nzShowExpand]	是否显示展开按钮	boolean	-
[nzExpand]	当前展开按钮状态，可双向绑定	boolean	-
(nzExpandChange)	当前展开按钮状态改变回调函数	EventEmitter<boolean>	-

<nz-table #nzTable [nzData]="dataSet" [nzPageSize]="10">
  <thead>
    <tr>
      <th nzShowExpand></th>
      <th>Name</th>
      <th>Age</th>
      <th>Address</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <ng-template ngFor let-data [ngForOf]="nzTable.data">
      <tr>
        <td nzShowExpand [(nzExpand)]="data.expand"></td>
        <td>{{data.name}}</td>
        <td>{{data.age}}</td>
        <td>{{data.address}}</td>
        <td><a href="#">Delete</a></td>
      </tr>
      <tr [nzExpand]="data.expand">
        <td></td>
        <td colspan="4">{{data.description}}</td>
      </tr>
    </ng-template>
  </tbody>
</nz-table>

dataSet = [
  {
    name       : 'John Brown',
    age        : 32,
    expand     : false,
    address    : 'New York No. 1 Lake Park',
    description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
  },
  {
    name       : 'Jim Green',
    age        : 42,
    expand     : false,
    address    : 'London No. 1 Lake Park',
    description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.'
  },
  {
    name       : 'Joe Black',
    age        : 32,
    expand     : false,
    address    : 'Sidney No. 1 Lake Park',
    description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.'
  }
];

##### 表格行/列合并
像 W3C标准 <table> 一样，使用 colspan 和 rowspan 合并行/列。

<nz-table #nzTable [nzData]="dataSet" [nzPageSize]="10" nzBordered>
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th colspan="2">Home phone</th>
      <th>Address</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let data of nzTable.data; index as i;">
      <td>{{data.name}}</td>
      <td [attr.colspan]="i==4?5:1">{{data.age}}</td>
      <td [attr.rowspan]="i==2?2:1" *ngIf="(i!=3)&&(i!=4)">{{data.tel}}</td>
      <td *ngIf="i!=4">{{data.phone}}</td>
      <td *ngIf="i!=4">{{data.address}}</td>
    </tr>
  </tbody>
</nz-table>

dataSet = [
  {
    key    : '1',
    name   : 'John Brown',
    age    : 32,
    tel    : '0571-22098909',
    phone  : 18889898989,
    address: 'New York No. 1 Lake Park',
  },
  {
    key    : '2',
    name   : 'Jim Green',
    tel    : '0571-22098333',
    phone  : 18889898888,
    age    : 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key    : '3',
    name   : 'Joe Black',
    age    : 32,
    tel    : '0575-22098909',
    phone  : 18900010002,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key    : '4',
    name   : 'Jim Red',
    age    : 18,
    tel    : '0575-22098909',
    phone  : 18900010002,
    address: 'London No. 2 Lake Park',
  },
  {
    key    : '5',
    name   : 'Jake White',
    age    : 18,
    tel    : '0575-22098909',
    phone  : 18900010002,
    address: 'Dublin No. 2 Lake Park',
  }
];


##### 树形数据展示
表格支持树形数据的展示，可以通过设置 nzIndentSize 以控制每一层的缩进宽度，本例子中提供了树与数组之间的转换函数，实际业务中请根据需求修改。

<nz-table #nzTable [nzData]="data">
  <thead>
    <tr>
      <th nzWidth="40%">Name</th>
      <th nzWidth="30%">Age</th>
      <th>Address</th>
    </tr>
  </thead>
  <tbody>
    <ng-template ngFor let-data [ngForOf]="nzTable.data">
      <ng-template ngFor let-item [ngForOf]="expandDataCache[data.key]">
        <tr *ngIf="(item.parent&&item.parent.expand)||!(item.parent)">
          <td [nzIndentSize]="item.level*20" [nzShowExpand]="!!item.children" [(nzExpand)]="item.expand" (nzExpandChange)="collapse(expandDataCache[data.key],item,$event)"> {{item.name}} </td>
          <td>{{item.age}}</td>
          <td>{{item.address}}</td>
        </tr>
      </ng-template>
    </ng-template>
  </tbody>
</nz-table>

import { Component, OnInit } from '@angular/core';

export interface TreeNodeInterface {
  key: number;
  name: string;
  age: number;
  level: number;
  expand: boolean;
  address: string;
  children?: TreeNodeInterface[];
}



@Component({
  selector: 'show-table',
  templateUrl: './show-table.component.pug',
  styleUrls: ['./show-table.component.less'],
})

export class ShowTableComponent {
  data = [
    {
      key     : 1,
      name    : 'John Brown sr.',
      age     : 60,
      address : 'New York No. 1 Lake Park',
      children: [
        {
          key    : 11,
          name   : 'John Brown',
          age    : 42,
          address: 'New York No. 2 Lake Park'
        },
        {
          key     : 12,
          name    : 'John Brown jr.',
          age     : 30,
          address : 'New York No. 3 Lake Park',
          children: [ {
            key    : 121,
            name   : 'Jimmy Brown',
            age    : 16,
            address: 'New York No. 3 Lake Park'
          } ]
        },
        {
          key     : 13,
          name    : 'Jim Green sr.',
          age     : 72,
          address : 'London No. 1 Lake Park',
          children: [
            {
              key     : 131,
              name    : 'Jim Green',
              age     : 42,
              address : 'London No. 2 Lake Park',
              children: [
                {
                  key    : 1311,
                  name   : 'Jim Green jr.',
                  age    : 25,
                  address: 'London No. 3 Lake Park'
                },
                {
                  key    : 1312,
                  name   : 'Jimmy Green sr.',
                  age    : 18,
                  address: 'London No. 4 Lake Park'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      key    : 2,
      name   : 'Joe Black',
      age    : 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];
  expandDataCache = {};

  collapse(array: TreeNodeInterface[], data: TreeNodeInterface, $event: boolean): void {
    if ($event === false) {
      if (data.children) {
        data.children.forEach(d => {
          const target = array.find(a => a.key === d.key);
          target.expand = false;
          this.collapse(array, target, false);
        });
      } else {
        return;
      }
    }
  }

  convertTreeToList(root: object): TreeNodeInterface[] {
    const stack = [];
    const array = [];
    const hashMap = {};
    stack.push({ ...root, level: 0, expand: false });

    while (stack.length !== 0) {
      const node = stack.pop();
      this.visitNode(node, hashMap, array);
      if (node.children) {
        for (let i = node.children.length - 1; i >= 0; i--) {
          stack.push({ ...node.children[ i ], level: node.level + 1, expand: false, parent: node });
        }
      }
    }

    return array;
  }

  visitNode(node: TreeNodeInterface, hashMap: object, array: TreeNodeInterface[]): void {
    if (!hashMap[ node.key ]) {
      hashMap[ node.key ] = true;
      array.push(node);
    }
  }

  ngOnInit(): void {
    this.data.forEach(item => {
      this.expandDataCache[ item.key ] = this.convertTreeToList(item);
    });
  }
}


##### 固定表头
方便一页内展示大量数据。
需要指定 th 的 nzWidth 属性，否则列头和内容可能不对齐。
<nz-table #nzTable [nzData]="dataSet" [nzPageSize]="50" [nzScroll]="{ y: '240px' }">
  <thead>
    <tr>
      <th nzWidth="150px">Name</th>
      <th nzWidth="150px">Age</th>
      <th>Address</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let data of nzTable.data">
      <td>{{data.name}}</td>
      <td>{{data.age}}</td>
      <td>{{data.address}}</td>
    </tr>
  </tbody>
</nz-table>

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'show-table',
  templateUrl: './show-table.component.pug',
  styleUrls: ['./show-table.component.less'],
})

export class ShowTableComponent {
  dataSet = [];

  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      this.dataSet.push({
        name   : `Edward King ${i}`,
        age    : 32,
        address: `London, Park Lane no. ${i}`
      });
    }
  }
}

##### 固定列
对于列数很多的数据，可以使用 nzLeft 和 nzRight 固定前后的列，横向滚动查看其它数据，需要和 nzScroll.x 配合使用。
固定列使用了 sticky 属性，浏览器支持情况可以参考这里。
若列头与内容不对齐或出现列重复，请指定 th 的宽度 nzWidth。
建议指定 nzScroll.x 为大于表格宽度的固定值或百分比。注意，且非固定列宽度之和不要超过 nzScroll.x。

import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-table-fixed-columns',
  template: `
    <nz-table #nzTable [nzData]="dataSet" [nzPageSize]="10" [nzScroll]="{x:'1300px'}">
      <thead>
        <tr>
          <th nzWidth="100px" nzLeft="0px">Full Name</th>
          <th nzWidth="100px" nzLeft="100px">Age</th>
          <th>Column 1</th>
          <th>Column 2</th>
          <th>Column 3</th>
          <th>Column 4</th>
          <th>Column 5</th>
          <th>Column 6</th>
          <th>Column 7</th>
          <th>Column 8</th>
          <th nzWidth="100px" nzRight="0px">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let data of nzTable.data">
          <td nzLeft="0px">{{data.name}}</td>
          <td nzLeft="100px">{{data.age}}</td>
          <td>{{data.address}}</td>
          <td>{{data.address}}</td>
          <td>{{data.address}}</td>
          <td>{{data.address}}</td>
          <td>{{data.address}}</td>
          <td>{{data.address}}</td>
          <td>{{data.address}}</td>
          <td>{{data.address}}</td>
          <td nzRight="0px">
            <a>action</a>
          </td>
        </tr>
      </tbody>
    </nz-table>`,
  styles  : []
})
export class NzDemoTableFixedColumnsComponent {
  dataSet = [
    {
      key    : '1',
      name   : 'John Brown',
      age    : 32,
      address: 'New York Park',
    },
    {
      key    : '2',
      name   : 'Jim Green',
      age    : 40,
      address: 'London Park',
    }
  ];
}

##### 固定头和列
适合同时展示有大量数据和数据列。
固定列使用了 sticky 属性，浏览器支持情况可以参考这里。
若列头与内容不对齐或出现列重复，请指定列的宽度 nzWidth。
建议指定 nzScroll.x 为大于表格宽度的固定值或百分比。注意，且非固定列宽度之和不要超过 nzScroll.x。
<nz-table #nzTable [nzData]="dataSet" [nzPageSize]="10" [nzScroll]="{ x:'1300px',y: '240px' }">
  <thead>
    <tr>
      <th nzWidth="100px" nzLeft="0px">Full Name</th>
      <th nzWidth="100px" nzLeft="100px">Age</th>
      <th>Column 1</th>
      <th>Column 2</th>
      <th>Column 3</th>
      <th>Column 4</th>
      <th>Column 5</th>
      <th>Column 6</th>
      <th>Column 7</th>
      <th>Column 8</th>
      <th nzWidth="100px" nzRight="0px">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let data of nzTable.data">
      <td nzLeft="0px">{{data.name}}</td>
      <td nzLeft="100px">{{data.age}}</td>
      <td>{{data.address}}</td>
      <td>{{data.address}}</td>
      <td>{{data.address}}</td>
      <td>{{data.address}}</td>
      <td>{{data.address}}</td>
      <td>{{data.address}}</td>
      <td>{{data.address}}</td>
      <td>{{data.address}}</td>
      <td nzRight="0px">
        <a>action</a>
      </td>
    </tr>
  </tbody>
</nz-table>


import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'show-table',
  templateUrl: './show-table.component.pug',
  styleUrls: ['./show-table.component.less'],
})

export class ShowTableComponent {
  dataSet = [];

  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      this.dataSet.push({
        name   : `Edward King ${i}`,
        age    : 32,
        address: `London, Park Lane no. ${i}`
      });
    }
  }
}

##### 表头分组
当使用分组表头时，th 的 nzWidth 方式不再适用，使用 nzWidthConfig 来设定每个分组的宽度
<nz-table #groupingTable [nzData]="displayData" nzBordered nzSize="middle" [nzWidthConfig]="['100px','200px','200px','100px','100px',null,null,'60px']" [nzScroll]="{ x:'130%',y: '240px' }">
  <thead>
    <tr>
      <th rowspan="4" nzLeft="0px" nzShowFilter [nzFilters]="filterName" (nzFilterChange)="search($event)">Name</th>
      <th colspan="4">Other</th>
      <th colspan="2">Company</th>
      <th rowspan="4" nzRight="0px">Gender</th>
    </tr>
    <tr>
      <th rowspan="3" nzShowSort [(nzSort)]="sortValue" (nzSortChange)="search(searchName)">Age</th>
      <th colspan="3">Address</th>
      <th rowspan="3">Company Address</th>
      <th rowspan="3">Company Name</th>
    </tr>
    <tr>
      <th rowspan="2">Street</th>
      <th colspan="2">Block</th>
    </tr>
    <tr>
      <th>Building</th>
      <th>Door No.</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let data of groupingTable.data">
      <td nzLeft="0px">{{data.name}}</td>
      <td>{{data.age}}</td>
      <td>{{data.street}}</td>
      <td>{{data.building}}</td>
      <td>{{data.number}}</td>
      <td>{{data.companyAddress}}</td>
      <td>{{data.companyName}}</td>
      <td nzRight="0px">{{data.gender}}</td>
    </tr>
  </tbody>
</nz-table>


displayData = [];
data = [];
sortValue = null;
filterName = [
  { text: 'Joe', value: 'Joe' },
  { text: 'John', value: 'John' }
];
searchName = [];

search(searchName: string[]): void {
  this.searchName = searchName;
  const filterFunc = (item) => {
    return this.searchName.length ? this.searchName.some(name => item.name.indexOf(name) !== -1) : true;
  };
  const data = this.data.filter(item => filterFunc(item));
  this.displayData = data.sort((a, b) => (this.sortValue === 'ascend') ? (a.age > b.age ? 1 : -1) : (b.age > a.age ? 1 : -1));
}

ngOnInit(): void {
  for (let i = 0; i < 100; i++) {
    this.displayData.push({
      name          : 'John Brown',
      age           : i + 1,
      street        : 'Lake Park',
      building      : 'C',
      number        : 2035,
      companyAddress: 'Lake Street 42',
      companyName   : 'SoftLake Co',
      gender        : 'M'
    });
  }
  this.data = [ ...this.displayData ];
}









## 表格组件入参数据（本地数据加载）
 data = [
    {
      name: '1',
      gender: '女',
      email: '12345678@qq.com',
      phone: '1'
    },
    {
      name: '3',
      gender: '女',
      email: '12345678@qq.com',
      phone: '11'
    },
    {
      name: '2',
      gender: '男',
      email: '12345678@qq.com',
      phone: '3'
    },
    {
      name: '6',
      gender: '女',
      email: '12345678@qq.com',
      phone: '5'
    },
    {
      name: '9',
      gender: '男',
      email: '12345678@qq.com',
      phone: '7'
    },
    {
      name: '5',
      gender: '男',
      email: '12345678@qq.com',
      phone: '99'
    },
    {
      name: '2',
      gender: '女',
      email: '12345678@qq.com',
      phone: '888'
    },
    {
      name: '2',
      gender: '女',
      email: '12345678@qq.com',
      phone: '666'
    },
    {
      name: '1',
      gender: '男',
      email: '12345678@qq.com',
      phone: '3'
    },
    {
      name: '7',
      gender: '女',
      email: '12345678@qq.com',
      phone: '5'
    },
    {
      name: '8',
      gender: '男',
      email: '12345678@qq.com',
      phone: '2'
    },
    {
      name: '4',
      gender: '男',
      email: '12345678@qq.com',
      phone: '1'
    },
  ];

  tableLocalData = {
    nzFrontPagination: true,
    pageSize: 10,
    nzBordered: false,
    action: [
      {
        eventName: '明细',
        action: ($event) => {
          this.detailClick($event);
        },
        isShow: true,
      },
      {
        eventName: '修改',
        action: ($event) => {
          this.modifyClick($event);
        },
        isShow: true,
      },
      {
        eventName: '删除',
        action: ($event) => {
          this.deleteClick($event);
        },
        isShow: true,
      },
    ],
    check : {
      isShwo: true, // 是否展示多选框
    },
    tableData: {
      localData: this.data,
      columnData: [
        {
          field:"name",
          fieldName:"姓名",
          sort: true,
          filter: {
            isShowFilter: true,
            list: [
              { text: '男', value: '1' },
              { text: '女', value: '2' }
            ]
          }
        },
        {
          field:"gender",
          fieldName:"性别",
          sort: true,
          filter: {
            isShowFilter: true,
            list: [
              { text: '男', value: '男' },
              { text: '女', value: '女' }
            ]
          }
        },
        {
          field:"phone",
          fieldName:"电话",
          sort: true,
          filter: {
            isShowFilter: false,
            list: [],
          }
        },
        {
          field:"email",
          fieldName:"邮箱",
          sort: false,
          filter: {
            isShowFilter: false,
            list: [],
          }
        },
        {
          field:"email",
          fieldName:"邮箱",
          sort: false,
          filter: {
            isShowFilter: false,
            list: [],
          }
        },
        {
          field:"email",
          fieldName:"邮箱",
          sort: false,
          filter: {
            isShowFilter: false,
            list: [],
          }
        },
        {
          field:"email",
          fieldName:"邮箱",
          sort: false,
          filter: {
            isShowFilter: false,
            list: [],
          }
        },
        {
          field:"email",
          fieldName:"邮箱",
          sort: false,
          filter: {
            isShowFilter: false,
            list: [],
          }
        },
        {
          field:"email",
          fieldName:"邮箱",
          sort: false,
          filter: {
            isShowFilter: false,
            list: [],
          }
        },
        {
          field:"email",
          fieldName:"邮箱",
          sort: false,
          filter: {
            isShowFilter: false,
            list: [],
          }
        },
        {
          field:"email",
          fieldName:"邮箱",
          sort: false,
          filter: {
            isShowFilter: false,
            list: [],
          }
        },
        
      ]
    },
  }



## 表格组件入参数据（远程数据加载）
nzTableData = {
  pageSize: 10,
  nzBordered: true,
  action: [
    {
      eventName: '明细',
      action: ($event) => {
        this.detailClick($event);
      },
      isShow: true,
    },
    {
      eventName: '修改',
      action: ($event) => {
        this.modifyClick($event);
      },
      isShow: true,
    },
    {
      eventName: '删除',
      action: ($event) => {
        this.deleteClick($event);
      },
      isShow: false,
    },
  ],
  check : {
    isShwo: true, // 是否展示多选框
  },
  tableData: {
    url:'https://api.randomuser.me/', // 接口请求的ip地址
    total:100,
    param: {
      page:1,
      results: 10,
      sortField: '',
      sortOrder:'',
      gender:'',
    },
    columnData: [
      {
        field:"nat",
        fieldName:"姓名",
        sort: false,
        filter: {
          isShowFilter: false,
          list: [
            { text: '男', value: 'male' },
            { text: '女', value: 'female' }
          ]
        }
      },
      {
        field:"gender",
        fieldName:"性别",
        sort: true,
        filter: {
          isShowFilter: false,
          list: [],
        }
      },
      {
        field:"email",
        fieldName:"邮箱",
        sort: false,
        filter: {
          isShowFilter: false,
          list: [],
        }
      },
      {
        field:"email",
        fieldName:"邮箱",
        sort: false,
        filter: {
          isShowFilter: false,
          list: [],
        }
      },
      {
        field:"email",
        fieldName:"邮箱",
        sort: false,
        filter: {
          isShowFilter: false,
          list: [],
        }
      },
      {
        field:"email",
        fieldName:"邮箱",
        sort: false,
        filter: {
          isShowFilter: false,
          list: [],
        }
      },
      {
        field:"email",
        fieldName:"邮箱",
        sort: false,
        filter: {
          isShowFilter: false,
          list: [],
        }
      },
      {
        field:"email",
        fieldName:"邮箱",
        sort: false,
        filter: {
          isShowFilter: false,
          list: [],
        }
      },
      {
        field:"email",
        fieldName:"邮箱",
        sort: false,
        filter: {
          isShowFilter: false,
          list: [],
        }
      },
      {
        field:"email",
        fieldName:"邮箱",
        sort: false,
        filter: {
          isShowFilter: false,
          list: [],
        }
      },
      {
        field:"phone",
        fieldName:"电话",
        sort: false,
        filter: {
          isShowFilter: false,
          list: [],
        }
      },
    ]
  },
}








ascend 上升
descend 下降



















