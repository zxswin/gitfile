一.TreeSelect树选择 组件基本参数
[nzAllowClear]	显示清除按钮	boolean	false
[nzPlaceHolder]	选择框默认文字	string
[nzDisabled]	禁用选择器	boolean	false
[nzDropdownMatchSelectWidth]	下拉菜单和选择器同宽	boolean	true
[nzShowSearch]	显示搜索框	boolean	false 效果为输入框是否可以输入
[nzDropdownStyle]	下拉菜单的样式	{ [key: string]: string; }
[nzMultiple]	支持多选（当设置 nzCheckable 时自动变为true）	boolean	false
[nzSize]	选择框大小，可选 largesmall	string	'default'
[nzCheckable]	节点前添加 Checkbox 复选框	boolean	false
[nzShowLine]	是否展示连接线	boolean	false
[nzAsyncData]	是否异步加载(显示加载状态)	boolean	false
[nzNodes]	treeNodes 数据	NzTreeNode[]	[]
[nzDefaultExpandAll]	默认展开所有树节点	boolean	false
[nzDefaultExpandedKeys]	默认展开指定的树节点	string[]	[]
[nzDisplayWith]	如何在输入框显示所选的节点值的方法	(node: NzTreeNode) => string	(node:NzTreeNode) => node.title
(nzExpandChange)	点击展开树节点图标调用	EventEmitter<NzFormatEmitEvent>	



export class TreeSelectComponent {
  expandKeys = [ '100', '1001' ];  // 默认展示的值
  value: string;
  // 节点树数据结构
  nodes = [ {
    title   : 'parent 1',
    key     : '100',
    children: [ {
      title   : 'parent 1-0',
      key     : '1001',
      children: [
        { title: 'leaf 1-0-0', key: '10010', isLeaf: true },
        { title: 'leaf 1-0-1', key: '10011', isLeaf: true }
      ]
    }, {
      title   : 'parent 1-1',
      key     : '1002',
      children: [
        { title: 'leaf 1-1-0', key: '10020', isLeaf: true }
      ]
    } ]
  } ];

  // 选择节点的最终数据 是一个数组(如果是多选的话)
  onChange($event: string): void {
    console.log($event);
  }
}







