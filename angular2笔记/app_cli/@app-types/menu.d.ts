interface MenuItem {
  /** 菜单标识  */
  menuSite:string;
  /** 菜单标题  */
  title:string;
  /** 菜单的url  */
  url:string;
  /** 三级菜单  */
  threeLevel?: MenuItem[];
}

export interface MenuDataObj {
  /** 一级导航菜单的图标  */
  icon?: string;
  /** 一级导航菜单项  */
  topLevel?: MenuItem[];
  /** 二级导航菜单项  */
  secondLevel?: MenuItem[];
}

export interface MenuConfig {
  /** 是否展开或收缩菜单  */
  isCollapsed?: boolean;
  /** 是否值展开当前活动菜单面板 其他菜单面板收缩  */
  isNzOpen?: boolean;
  /** 菜单渲染的数据  */
  menuItems?: MenuDataObj[];

}
