/** 通用对象类型 */
interface Obj {
  [key: string]: any;
}

/** 购物车计数器  */
interface CounterData {
  /** 当前的数量  */
  currentNum?: number;
  /** 最大数量  */
  max?: number;
  /** 最小数量  */
  min?: number;
  /** 是否只显示添加按钮  */
  onlyShowAdd?: boolean;
  /** 商品单价  */
  price?: number;
  /** 计数器步长  */
  step?: number;
  /** 商品总价格  */
  totalPrice?: number;
}

/** 商品基本数据  */
interface ProductItem {
  /** 商品的ID  */
  id?: number;
  /** 商品的分类  */
  type?: string;
  /** 商品的标题  */
  title?: string;
  /** 商品的副标题  */
  subTitle?: string;
  /** 商品的描述信息  */
  description?: string;
  /** 商品的价格  */
  price?: number;
  /** 商品的库存数量  */
  stock?: number;
  /** 商品买卖标准  */
  standard?: string;
  /** 商品轮播图  */
  swipers?: string[];
  /** 商品展示详情图  */
  detailImgs?: string[];
  /** 商品烹饪详情图  */
  cookingImgs?: string[];
}

/** 菜单配置信息  */
interface MenuConfig {
  /** 菜单ID */
  id?: number;
  /** 菜单缩略图  */
  thumbnail?: string;
  /** 菜单标题  */
  title?: string;
  /** 产品菜单类型  */
  type?: string;
  /** 菜单顺序  */
  order?: number;
}

/** 用户信息  */
interface UserInfo {
  /** 用户ID  */
  id?: number;
  /** 用户姓名  */
  name?: string;
  /** 手机号码  */
  phoneNum?: number;
  /** 省市区数组对象  */
  regionList?: string[];
  /** 省市区地址  */
  region?: string;
  /** 街道地址  */
  address?: string;
  /** 邮政编码  */
  postcode?: string;
  /** 用户头像  */
  userAvatarUrl?: string;
  /** 用户昵称  */
  nickName?: string;
}

/** 用户订单信息  */
interface OrderInfo {
  /** 订单ID  */
  id?: number;
  /** 用户id  */
  userId?: number;
  /** 订单总金额  */
  totalBalance?: number;
  /** 订单结算金额  */
  clearBalance?: number;
  /** 订单费用 - 快递费  */
  fearExpress?: number;
  /** 订单费用 - 包装费  */
  packFear?: number;
  /** 其他费用  */
  otherFear?: number;
  /** 订单商品  */
  shopList?: string;
}

/** 订单商品列表  */
interface OrderList {
  /** 订单商品ID  */
  id?: number;
  /** 商品ID  */
  productId?: number;
  /** 订单ID  */
  orderId?: number;
}

/** 费用列表  */
interface fearList {
  /** 费用ID  */
  id?: number;
  /** 费用类型  */
  fearType?: string;
  /** 费用备注信息  */
  fearRemark?: string;
  /** 费用值  */
  fearValue?: string;
  /** 优惠券的订单ID  */
  orderId?: number;
}

/** 优惠券列表  */
interface CouponList {
  /** 优惠券ID  */
  id?: number;
  /** 优惠券类型  */
  couponType?: string;
  /** 优惠券备注信息  */
  couponRemark?: string;
  /** 优惠券面值  */
  couponValue?: number;
  /** 优惠券的订单ID  */
  orderId?: number;
  /** 优惠券的开始日期 */
  beginDate?: number;
  /** 优惠券的结束日期  */
  endDate?: number;
  /** 优惠券是否可用  */
  enable?: boolean;
}
