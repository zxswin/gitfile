"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FishListsConfig = [
    {
        id: 1,
        thumbnail: '../../src/lists/fish/thumbnail_01.jpg',
        title: '海鱼产品1',
        describe: '下单后不用等待叫号,直接出示给店员领取,来自喜茶热卖颇受欢迎的芋头条,直接出示给店员领取',
        price: 10,
        count: 0,
        stock: 0,
        type: 'fish',
        detail: {
            swiper: [
                {
                    src: '../../src/lists/fish/01/swiper01.jpg',
                    title: '轮播图1',
                    id: 1
                },
                {
                    src: '../../src/lists/fish/01/swiper01.jpg',
                    title: '轮播图2',
                    id: 2
                },
                {
                    src: '../../src/lists/fish/01/swiper01.jpg',
                    title: '轮播图3',
                    id: 3
                }
            ],
            describe: {
                title: '主标题',
                subTitle: '副标题',
                detailInfo: '产品详情描述信息',
                price: 15,
                standards: '一斤三条，每条约3.3两'
            }
        }
    },
    {
        id: 2,
        thumbnail: '../../src/lists/fish/thumbnail_01.jpg',
        title: '海鱼产品2',
        describe: '下单后不用等待叫号,直接出示给店员领取,来自喜茶热卖颇受欢迎的芋头条,直接出示给店员领取',
        price: 20,
        count: 0,
        stock: 1,
        type: 'fish'
    },
    {
        id: 3,
        thumbnail: '../../src/lists/fish/thumbnail_01.jpg',
        title: '海鱼产品3',
        describe: '下单后不用等待叫号,直接出示给店员领取,来自喜茶热卖颇受欢迎的芋头条,直接出示给店员领取',
        price: 17,
        count: 0,
        stock: 1,
        type: 'fish'
    },
    {
        id: 4,
        thumbnail: '../../src/lists/fish/thumbnail_01.jpg',
        title: '海鱼产品4',
        describe: '下单后不用等待叫号,直接出示给店员领取,来自喜茶热卖颇受欢迎的芋头条,直接出示给店员领取',
        price: 17,
        count: 0,
        stock: 1,
        type: 'fish'
    },
    {
        id: 5,
        thumbnail: '../../src/lists/fish/thumbnail_01.jpg',
        title: '海鱼产品5',
        describe: '下单后不用等待叫号,直接出示给店员领取,来自喜茶热卖颇受欢迎的芋头条,直接出示给店员领取',
        price: 17,
        count: 0,
        stock: 1,
        type: 'fish'
    },
    {
        id: 6,
        thumbnail: '../../src/lists/fish/thumbnail_01.jpg',
        title: '海鱼产品6',
        describe: '下单后不用等待叫号,直接出示给店员领取,来自喜茶热卖颇受欢迎的芋头条,直接出示给店员领取',
        price: 17,
        count: 0,
        stock: 1,
        type: 'fish'
    },
    {
        id: 7,
        thumbnail: '../../src/lists/fish/thumbnail_01.jpg',
        title: '海鱼产品7',
        describe: '下单后不用等待叫号,直接出示给店员领取,来自喜茶热卖颇受欢迎的芋头条,直接出示给店员领取',
        price: 17,
        count: 0,
        stock: 1,
        type: 'fish'
    }
];
var ShrimpListsConfig = [
    {
        id: 1,
        thumbnail: '../../src/lists/shrimp/thumbnail_01.jpg',
        title: '海虾产品1',
        describe: '下单后不用等待叫号,直接出示给店员领取,来自喜茶热卖颇受欢迎的芋头条,直接出示给店员领取',
        price: 15,
        count: 0,
        stock: 1,
        type: 'shrimp'
    },
    {
        id: 2,
        thumbnail: '../../src/lists/shrimp/thumbnail_01.jpg',
        title: '海虾产品2',
        describe: '下单后不用等待叫号,直接出示给店员领取,来自喜茶热卖颇受欢迎的芋头条,直接出示给店员领取',
        price: 16,
        count: 0,
        stock: 1,
        type: 'shrimp'
    },
    {
        id: 3,
        thumbnail: '../../src/lists/shrimp/thumbnail_01.jpg',
        title: '海虾产品3',
        describe: '下单后不用等待叫号,直接出示给店员领取,来自喜茶热卖颇受欢迎的芋头条,直接出示给店员领取',
        price: 17,
        count: 0,
        stock: 1,
        type: 'shrimp'
    },
    {
        id: 4,
        thumbnail: '../../src/lists/shrimp/thumbnail_01.jpg',
        title: '海虾产品4',
        describe: '下单后不用等待叫号,直接出示给店员领取,来自喜茶热卖颇受欢迎的芋头条,直接出示给店员领取',
        price: 17,
        count: 0,
        stock: 1,
        type: 'shrimp'
    },
    {
        id: 5,
        thumbnail: '../../src/lists/shrimp/thumbnail_01.jpg',
        title: '海虾产品5',
        describe: '下单后不用等待叫号,直接出示给店员领取,来自喜茶热卖颇受欢迎的芋头条,直接出示给店员领取',
        price: 17,
        count: 0,
        stock: 1,
        type: 'shrimp'
    },
    {
        id: 6,
        thumbnail: '../../src/lists/shrimp/thumbnail_01.jpg',
        title: '海虾产品6',
        describe: '下单后不用等待叫号,直接出示给店员领取,来自喜茶热卖颇受欢迎的芋头条,直接出示给店员领取',
        price: 17,
        count: 0,
        stock: 1,
        type: 'shrimp'
    },
    {
        id: 7,
        thumbnail: '../../src/lists/shrimp/thumbnail_01.jpg',
        title: '海虾产品7',
        describe: '下单后不用等待叫号,直接出示给店员领取,来自喜茶热卖颇受欢迎的芋头条,直接出示给店员领取',
        price: 17,
        count: 0,
        stock: 1,
        type: 'shrimp'
    }
];
var SquidListsConfig = [
    {
        id: 1,
        thumbnail: '../../src/lists/shrimp/thumbnail_01.jpg',
        title: '鱿鱼产品1',
        describe: '下单后不用等待叫号,直接出示给店员领取,来自喜茶热卖颇受欢迎的芋头条,直接出示给店员领取',
        price: 17,
        count: 0,
        stock: 1,
        type: 'squid'
    },
    {
        id: 2,
        thumbnail: '../../src/lists/shrimp/thumbnail_01.jpg',
        title: '鱿鱼产品2',
        describe: '下单后不用等待叫号,直接出示给店员领取,来自喜茶热卖颇受欢迎的芋头条,直接出示给店员领取',
        price: 17,
        count: 0,
        stock: 0,
        type: 'squid'
    }
];
var OysterListsConfig = [
    {
        id: 1,
        thumbnail: '../../src/lists/shrimp/thumbnail_01.jpg',
        title: '生蚝产品1',
        describe: '下单后不用等待叫号,直接出示给店员领取,来自喜茶热卖颇受欢迎的芋头条,直接出示给店员领取',
        price: 17,
        count: 0,
        stock: 1,
        type: 'oyster'
    },
    {
        id: 2,
        thumbnail: '../../src/lists/shrimp/thumbnail_01.jpg',
        title: '生蚝产品2',
        describe: '下单后不用等待叫号,直接出示给店员领取,来自喜茶热卖颇受欢迎的芋头条,直接出示给店员领取',
        price: 17,
        count: 0,
        stock: 0,
        type: 'oyster'
    }
];
var CrabListsConfig = [
    {
        id: 1,
        thumbnail: '../../src/lists/shrimp/thumbnail_01.jpg',
        title: '螃蟹产品1',
        describe: '下单后不用等待叫号,直接出示给店员领取,来自喜茶热卖颇受欢迎的芋头条,直接出示给店员领取',
        price: 17,
        count: 0,
        stock: 1,
        type: 'crab'
    },
    {
        id: 2,
        thumbnail: '../../src/lists/shrimp/thumbnail_01.jpg',
        title: '螃蟹产品2',
        describe: '下单后不用等待叫号,直接出示给店员领取,来自喜茶热卖颇受欢迎的芋头条,直接出示给店员领取',
        price: 17,
        count: 0,
        stock: 0,
        type: 'crab'
    }
];
var BeefballsListsConfig = [
    {
        id: 1,
        thumbnail: '../../src/lists/shrimp/thumbnail_01.jpg',
        title: '牛肉丸产品1',
        describe: '下单后不用等待叫号,直接出示给店员领取,来自喜茶热卖颇受欢迎的芋头条,直接出示给店员领取',
        price: 17,
        count: 0,
        stock: 1,
        type: 'beefballs'
    },
    {
        id: 2,
        thumbnail: '../../src/lists/shrimp/thumbnail_01.jpg',
        title: '牛肉丸产品2',
        describe: '下单后不用等待叫号,直接出示给店员领取,来自喜茶热卖颇受欢迎的芋头条,直接出示给店员领取',
        price: 17,
        count: 0,
        stock: 0,
        type: 'beefballs'
    }
];
var DumplingListsConfig = [
    {
        id: 1,
        thumbnail: '../../src/lists/shrimp/thumbnail_01.jpg',
        title: '海鲜水饺产品1',
        describe: '下单后不用等待叫号,直接出示给店员领取,来自喜茶热卖颇受欢迎的芋头条,直接出示给店员领取',
        price: 17,
        count: 0,
        stock: 1,
        type: 'dumpling'
    },
    {
        id: 2,
        thumbnail: '../../src/lists/shrimp/thumbnail_01.jpg',
        title: '海鲜水饺产品2',
        describe: '下单后不用等待叫号,直接出示给店员领取,来自喜茶热卖颇受欢迎的芋头条,直接出示给店员领取',
        price: 17,
        count: 0,
        stock: 0,
        type: 'dumpling'
    }
];
var LaverListsConfig = [
    {
        id: 1,
        thumbnail: '../../src/lists/shrimp/thumbnail_01.jpg',
        title: '紫菜海苔产品1',
        describe: '下单后不用等待叫号,直接出示给店员领取,来自喜茶热卖颇受欢迎的芋头条,直接出示给店员领取',
        price: 17,
        count: 0,
        stock: 1,
        type: 'laver'
    },
    {
        id: 2,
        thumbnail: '../../src/lists/shrimp/thumbnail_01.jpg',
        title: '紫菜海苔产品2',
        describe: '下单后不用等待叫号,直接出示给店员领取,来自喜茶热卖颇受欢迎的芋头条,直接出示给店员领取',
        price: 17,
        count: 0,
        stock: 0,
        type: 'laver'
    }
];
var SupplementsListsConfig = [
    {
        id: 1,
        thumbnail: '../../src/lists/shrimp/thumbnail_01.jpg',
        title: '干货补品产品1',
        describe: '下单后不用等待叫号,直接出示给店员领取,来自喜茶热卖颇受欢迎的芋头条,直接出示给店员领取',
        price: 17,
        count: 0,
        stock: 1,
        type: 'supplements'
    },
    {
        id: 2,
        thumbnail: '../../src/lists/shrimp/thumbnail_01.jpg',
        title: '干货补品产品2',
        describe: '下单后不用等待叫号,直接出示给店员领取,来自喜茶热卖颇受欢迎的芋头条,直接出示给店员领取',
        price: 17,
        count: 0,
        stock: 0,
        type: 'supplements'
    }
];
var GreensListsConfig = [
    {
        id: 1,
        thumbnail: '../../src/lists/shrimp/thumbnail_01.jpg',
        title: '青菜产品1',
        describe: '下单后不用等待叫号,直接出示给店员领取,来自喜茶热卖颇受欢迎的芋头条,直接出示给店员领取',
        price: 17,
        count: 0,
        stock: 1,
        type: 'greens'
    },
    {
        id: 2,
        thumbnail: '../../src/lists/shrimp/thumbnail_01.jpg',
        title: '青菜产品2',
        describe: '下单后不用等待叫号,直接出示给店员领取,来自喜茶热卖颇受欢迎的芋头条,直接出示给店员领取',
        price: 17,
        count: 0,
        stock: 0,
        type: 'greens'
    }
];
var MelonListsConfig = [
    {
        id: 1,
        thumbnail: '../../src/lists/shrimp/thumbnail_01.jpg',
        title: '瓜类产品1',
        describe: '下单后不用等待叫号,直接出示给店员领取,来自喜茶热卖颇受欢迎的芋头条,直接出示给店员领取',
        price: 17,
        count: 0,
        stock: 1,
        type: 'melon'
    },
    {
        id: 2,
        thumbnail: '../../src/lists/shrimp/thumbnail_01.jpg',
        title: '瓜类产品2',
        describe: '下单后不用等待叫号,直接出示给店员领取,来自喜茶热卖颇受欢迎的芋头条,直接出示给店员领取',
        price: 17,
        count: 0,
        stock: 0,
        type: 'melon'
    }
];
var TomatoListsConfig = [
    {
        id: 1,
        thumbnail: '../../src/lists/shrimp/thumbnail_01.jpg',
        title: '番茄产品1',
        describe: '下单后不用等待叫号,直接出示给店员领取,来自喜茶热卖颇受欢迎的芋头条,直接出示给店员领取',
        price: 17,
        count: 0,
        stock: 1,
        type: 'tomato'
    },
    {
        id: 2,
        thumbnail: '../../src/lists/shrimp/thumbnail_01.jpg',
        title: '番茄产品2',
        describe: '下单后不用等待叫号,直接出示给店员领取,来自喜茶热卖颇受欢迎的芋头条,直接出示给店员领取',
        price: 17,
        count: 0,
        stock: 0,
        type: 'tomato'
    }
];
var PotatoListsConfig = [
    {
        id: 1,
        thumbnail: '../../src/lists/shrimp/thumbnail_01.jpg',
        title: '地瓜产品1',
        describe: '下单后不用等待叫号,直接出示给店员领取,来自喜茶热卖颇受欢迎的芋头条,直接出示给店员领取',
        price: 17,
        count: 0,
        stock: 1,
        type: 'potato'
    },
    {
        id: 2,
        thumbnail: '../../src/lists/shrimp/thumbnail_01.jpg',
        title: '地瓜产品2',
        describe: '下单后不用等待叫号,直接出示给店员领取,来自喜茶热卖颇受欢迎的芋头条,直接出示给店员领取',
        price: 17,
        count: 0,
        stock: 0,
        type: 'potato'
    }
];
var MenuConfig = [
    {
        menuId: 1,
        title: '海鱼',
        src: '../../src/menu/fish.png',
        type: 'fish',
        list: FishListsConfig
    },
    {
        menuId: 2,
        title: '海虾',
        src: '../../src/menu/shrimp.png',
        type: 'shrimp',
        list: ShrimpListsConfig
    },
    {
        menuId: 3,
        title: '鱿鱼',
        src: '../../src/menu/squid.png',
        type: 'squid',
        list: SquidListsConfig
    },
    {
        menuId: 4,
        title: '生蚝',
        src: '../../src/menu/oyster.png',
        type: 'oyster',
        list: OysterListsConfig
    },
    {
        menuId: 5,
        title: '螃蟹',
        src: '../../src/menu/crab.png',
        type: 'crab',
        list: CrabListsConfig
    },
    {
        menuId: 6,
        title: '牛肉丸',
        src: '../../src/menu/beef_balls.png',
        type: 'beefballs',
        list: BeefballsListsConfig
    },
    {
        menuId: 7,
        title: '海鲜水饺',
        src: '../../src/menu/dumpling.png',
        type: 'dumpling',
        list: DumplingListsConfig
    },
    {
        menuId: 8,
        title: '紫菜海苔',
        src: '../../src/menu/laver.png',
        type: 'laver',
        list: LaverListsConfig
    },
    {
        menuId: 9,
        title: '干货补品',
        src: '../../src/menu/supplements.png',
        type: 'supplements',
        list: SupplementsListsConfig
    },
    {
        menuId: 10,
        title: '青菜',
        src: '../../src/menu/greens.png',
        type: 'greens',
        list: GreensListsConfig
    },
    {
        menuId: 11,
        title: '瓜类',
        src: '../../src/menu/melon.png',
        type: 'melon',
        list: MelonListsConfig
    },
    {
        menuId: 12,
        title: '番茄',
        src: '../../src/menu/tomato.png',
        type: 'tomato',
        list: TomatoListsConfig
    },
    {
        menuId: 13,
        title: '地瓜',
        src: '../../src/menu/potato.png',
        type: 'potato',
        list: PotatoListsConfig
    }
];
exports.MenuConfig = MenuConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsSUFBTSxlQUFlLEdBQUc7SUFDdEI7UUFDRSxFQUFFLEVBQUUsQ0FBQztRQUNMLFNBQVMsRUFBRSx1Q0FBdUM7UUFDbEQsS0FBSyxFQUFFLE9BQU87UUFDZCxRQUFRLEVBQ04sOENBQThDO1FBQ2hELEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFFLENBQUM7UUFDUixLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksRUFBRSxNQUFNO1FBQ1osTUFBTSxFQUFFO1lBQ04sTUFBTSxFQUFFO2dCQUNOO29CQUNFLEdBQUcsRUFBRSxzQ0FBc0M7b0JBQzNDLEtBQUssRUFBRSxNQUFNO29CQUNiLEVBQUUsRUFBRSxDQUFDO2lCQUNOO2dCQUNEO29CQUNFLEdBQUcsRUFBRSxzQ0FBc0M7b0JBQzNDLEtBQUssRUFBRSxNQUFNO29CQUNiLEVBQUUsRUFBRSxDQUFDO2lCQUNOO2dCQUNEO29CQUNFLEdBQUcsRUFBRSxzQ0FBc0M7b0JBQzNDLEtBQUssRUFBRSxNQUFNO29CQUNiLEVBQUUsRUFBRSxDQUFDO2lCQUNOO2FBQ0Y7WUFDRCxRQUFRLEVBQUU7Z0JBQ1IsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osUUFBUSxFQUFFLEtBQUs7Z0JBQ2YsVUFBVSxFQUFFLFVBQVU7Z0JBQ3RCLEtBQUssRUFBRSxFQUFFO2dCQUNULFNBQVMsRUFBRSxjQUFjO2FBQzFCO1NBQ0Y7S0FDRjtJQUNEO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxTQUFTLEVBQUUsdUNBQXVDO1FBQ2xELEtBQUssRUFBRSxPQUFPO1FBQ2QsUUFBUSxFQUNOLDhDQUE4QztRQUNoRCxLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxDQUFDO1FBQ1IsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLEVBQUUsTUFBTTtLQUNiO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsQ0FBQztRQUNMLFNBQVMsRUFBRSx1Q0FBdUM7UUFDbEQsS0FBSyxFQUFFLE9BQU87UUFDZCxRQUFRLEVBQ04sOENBQThDO1FBQ2hELEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFFLENBQUM7UUFDUixLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksRUFBRSxNQUFNO0tBQ2I7SUFDRDtRQUNFLEVBQUUsRUFBRSxDQUFDO1FBQ0wsU0FBUyxFQUFFLHVDQUF1QztRQUNsRCxLQUFLLEVBQUUsT0FBTztRQUNkLFFBQVEsRUFDTiw4Q0FBOEM7UUFDaEQsS0FBSyxFQUFFLEVBQUU7UUFDVCxLQUFLLEVBQUUsQ0FBQztRQUNSLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxFQUFFLE1BQU07S0FDYjtJQUNEO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxTQUFTLEVBQUUsdUNBQXVDO1FBQ2xELEtBQUssRUFBRSxPQUFPO1FBQ2QsUUFBUSxFQUNOLDhDQUE4QztRQUNoRCxLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxDQUFDO1FBQ1IsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLEVBQUUsTUFBTTtLQUNiO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsQ0FBQztRQUNMLFNBQVMsRUFBRSx1Q0FBdUM7UUFDbEQsS0FBSyxFQUFFLE9BQU87UUFDZCxRQUFRLEVBQ04sOENBQThDO1FBQ2hELEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFFLENBQUM7UUFDUixLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksRUFBRSxNQUFNO0tBQ2I7SUFDRDtRQUNFLEVBQUUsRUFBRSxDQUFDO1FBQ0wsU0FBUyxFQUFFLHVDQUF1QztRQUNsRCxLQUFLLEVBQUUsT0FBTztRQUNkLFFBQVEsRUFDTiw4Q0FBOEM7UUFDaEQsS0FBSyxFQUFFLEVBQUU7UUFDVCxLQUFLLEVBQUUsQ0FBQztRQUNSLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxFQUFFLE1BQU07S0FDYjtDQUNGLENBQUM7QUFHRixJQUFNLGlCQUFpQixHQUFHO0lBQ3hCO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxTQUFTLEVBQUUseUNBQXlDO1FBQ3BELEtBQUssRUFBRSxPQUFPO1FBQ2QsUUFBUSxFQUNOLDhDQUE4QztRQUNoRCxLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxDQUFDO1FBQ1IsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLEVBQUUsUUFBUTtLQUNmO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsQ0FBQztRQUNMLFNBQVMsRUFBRSx5Q0FBeUM7UUFDcEQsS0FBSyxFQUFFLE9BQU87UUFDZCxRQUFRLEVBQ04sOENBQThDO1FBQ2hELEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFFLENBQUM7UUFDUixLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksRUFBRSxRQUFRO0tBQ2Y7SUFDRDtRQUNFLEVBQUUsRUFBRSxDQUFDO1FBQ0wsU0FBUyxFQUFFLHlDQUF5QztRQUNwRCxLQUFLLEVBQUUsT0FBTztRQUNkLFFBQVEsRUFDTiw4Q0FBOEM7UUFDaEQsS0FBSyxFQUFFLEVBQUU7UUFDVCxLQUFLLEVBQUUsQ0FBQztRQUNSLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxFQUFFLFFBQVE7S0FDZjtJQUNEO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxTQUFTLEVBQUUseUNBQXlDO1FBQ3BELEtBQUssRUFBRSxPQUFPO1FBQ2QsUUFBUSxFQUNOLDhDQUE4QztRQUNoRCxLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxDQUFDO1FBQ1IsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLEVBQUUsUUFBUTtLQUNmO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsQ0FBQztRQUNMLFNBQVMsRUFBRSx5Q0FBeUM7UUFDcEQsS0FBSyxFQUFFLE9BQU87UUFDZCxRQUFRLEVBQ04sOENBQThDO1FBQ2hELEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFFLENBQUM7UUFDUixLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksRUFBRSxRQUFRO0tBQ2Y7SUFDRDtRQUNFLEVBQUUsRUFBRSxDQUFDO1FBQ0wsU0FBUyxFQUFFLHlDQUF5QztRQUNwRCxLQUFLLEVBQUUsT0FBTztRQUNkLFFBQVEsRUFDTiw4Q0FBOEM7UUFDaEQsS0FBSyxFQUFFLEVBQUU7UUFDVCxLQUFLLEVBQUUsQ0FBQztRQUNSLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxFQUFFLFFBQVE7S0FDZjtJQUNEO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxTQUFTLEVBQUUseUNBQXlDO1FBQ3BELEtBQUssRUFBRSxPQUFPO1FBQ2QsUUFBUSxFQUNOLDhDQUE4QztRQUNoRCxLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxDQUFDO1FBQ1IsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLEVBQUUsUUFBUTtLQUNmO0NBQ0YsQ0FBQztBQUdGLElBQU0sZ0JBQWdCLEdBQUc7SUFDdkI7UUFDRSxFQUFFLEVBQUUsQ0FBQztRQUNMLFNBQVMsRUFBRSx5Q0FBeUM7UUFDcEQsS0FBSyxFQUFFLE9BQU87UUFDZCxRQUFRLEVBQ04sOENBQThDO1FBQ2hELEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFFLENBQUM7UUFDUixLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksRUFBRSxPQUFPO0tBQ2Q7SUFDRDtRQUNFLEVBQUUsRUFBRSxDQUFDO1FBQ0wsU0FBUyxFQUFFLHlDQUF5QztRQUNwRCxLQUFLLEVBQUUsT0FBTztRQUNkLFFBQVEsRUFDTiw4Q0FBOEM7UUFDaEQsS0FBSyxFQUFFLEVBQUU7UUFDVCxLQUFLLEVBQUUsQ0FBQztRQUNSLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxFQUFFLE9BQU87S0FDZDtDQUNGLENBQUM7QUFHRixJQUFNLGlCQUFpQixHQUFHO0lBQ3hCO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxTQUFTLEVBQUUseUNBQXlDO1FBQ3BELEtBQUssRUFBRSxPQUFPO1FBQ2QsUUFBUSxFQUNOLDhDQUE4QztRQUNoRCxLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxDQUFDO1FBQ1IsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLEVBQUUsUUFBUTtLQUNmO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsQ0FBQztRQUNMLFNBQVMsRUFBRSx5Q0FBeUM7UUFDcEQsS0FBSyxFQUFFLE9BQU87UUFDZCxRQUFRLEVBQ04sOENBQThDO1FBQ2hELEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFFLENBQUM7UUFDUixLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksRUFBRSxRQUFRO0tBQ2Y7Q0FDRixDQUFDO0FBR0YsSUFBTSxlQUFlLEdBQUc7SUFDdEI7UUFDRSxFQUFFLEVBQUUsQ0FBQztRQUNMLFNBQVMsRUFBRSx5Q0FBeUM7UUFDcEQsS0FBSyxFQUFFLE9BQU87UUFDZCxRQUFRLEVBQ04sOENBQThDO1FBQ2hELEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFFLENBQUM7UUFDUixLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksRUFBRSxNQUFNO0tBQ2I7SUFDRDtRQUNFLEVBQUUsRUFBRSxDQUFDO1FBQ0wsU0FBUyxFQUFFLHlDQUF5QztRQUNwRCxLQUFLLEVBQUUsT0FBTztRQUNkLFFBQVEsRUFDTiw4Q0FBOEM7UUFDaEQsS0FBSyxFQUFFLEVBQUU7UUFDVCxLQUFLLEVBQUUsQ0FBQztRQUNSLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxFQUFFLE1BQU07S0FDYjtDQUNGLENBQUM7QUFHRixJQUFNLG9CQUFvQixHQUFHO0lBQzNCO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxTQUFTLEVBQUUseUNBQXlDO1FBQ3BELEtBQUssRUFBRSxRQUFRO1FBQ2YsUUFBUSxFQUNOLDhDQUE4QztRQUNoRCxLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxDQUFDO1FBQ1IsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLEVBQUUsV0FBVztLQUNsQjtJQUNEO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxTQUFTLEVBQUUseUNBQXlDO1FBQ3BELEtBQUssRUFBRSxRQUFRO1FBQ2YsUUFBUSxFQUNOLDhDQUE4QztRQUNoRCxLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxDQUFDO1FBQ1IsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLEVBQUUsV0FBVztLQUNsQjtDQUNGLENBQUM7QUFHRixJQUFNLG1CQUFtQixHQUFHO0lBQzFCO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxTQUFTLEVBQUUseUNBQXlDO1FBQ3BELEtBQUssRUFBRSxTQUFTO1FBQ2hCLFFBQVEsRUFDTiw4Q0FBOEM7UUFDaEQsS0FBSyxFQUFFLEVBQUU7UUFDVCxLQUFLLEVBQUUsQ0FBQztRQUNSLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxFQUFFLFVBQVU7S0FDakI7SUFDRDtRQUNFLEVBQUUsRUFBRSxDQUFDO1FBQ0wsU0FBUyxFQUFFLHlDQUF5QztRQUNwRCxLQUFLLEVBQUUsU0FBUztRQUNoQixRQUFRLEVBQ04sOENBQThDO1FBQ2hELEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFFLENBQUM7UUFDUixLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksRUFBRSxVQUFVO0tBQ2pCO0NBQ0YsQ0FBQztBQUdGLElBQU0sZ0JBQWdCLEdBQUc7SUFDdkI7UUFDRSxFQUFFLEVBQUUsQ0FBQztRQUNMLFNBQVMsRUFBRSx5Q0FBeUM7UUFDcEQsS0FBSyxFQUFFLFNBQVM7UUFDaEIsUUFBUSxFQUNOLDhDQUE4QztRQUNoRCxLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxDQUFDO1FBQ1IsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLEVBQUUsT0FBTztLQUNkO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsQ0FBQztRQUNMLFNBQVMsRUFBRSx5Q0FBeUM7UUFDcEQsS0FBSyxFQUFFLFNBQVM7UUFDaEIsUUFBUSxFQUNOLDhDQUE4QztRQUNoRCxLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxDQUFDO1FBQ1IsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLEVBQUUsT0FBTztLQUNkO0NBQ0YsQ0FBQztBQUdGLElBQU0sc0JBQXNCLEdBQUc7SUFDN0I7UUFDRSxFQUFFLEVBQUUsQ0FBQztRQUNMLFNBQVMsRUFBRSx5Q0FBeUM7UUFDcEQsS0FBSyxFQUFFLFNBQVM7UUFDaEIsUUFBUSxFQUNOLDhDQUE4QztRQUNoRCxLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxDQUFDO1FBQ1IsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLEVBQUUsYUFBYTtLQUNwQjtJQUNEO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxTQUFTLEVBQUUseUNBQXlDO1FBQ3BELEtBQUssRUFBRSxTQUFTO1FBQ2hCLFFBQVEsRUFDTiw4Q0FBOEM7UUFDaEQsS0FBSyxFQUFFLEVBQUU7UUFDVCxLQUFLLEVBQUUsQ0FBQztRQUNSLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxFQUFFLGFBQWE7S0FDcEI7Q0FDRixDQUFDO0FBR0YsSUFBTSxpQkFBaUIsR0FBRztJQUN4QjtRQUNFLEVBQUUsRUFBRSxDQUFDO1FBQ0wsU0FBUyxFQUFFLHlDQUF5QztRQUNwRCxLQUFLLEVBQUUsT0FBTztRQUNkLFFBQVEsRUFDTiw4Q0FBOEM7UUFDaEQsS0FBSyxFQUFFLEVBQUU7UUFDVCxLQUFLLEVBQUUsQ0FBQztRQUNSLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxFQUFFLFFBQVE7S0FDZjtJQUNEO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxTQUFTLEVBQUUseUNBQXlDO1FBQ3BELEtBQUssRUFBRSxPQUFPO1FBQ2QsUUFBUSxFQUNOLDhDQUE4QztRQUNoRCxLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxDQUFDO1FBQ1IsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLEVBQUUsUUFBUTtLQUNmO0NBQ0YsQ0FBQztBQUdGLElBQU0sZ0JBQWdCLEdBQUc7SUFDdkI7UUFDRSxFQUFFLEVBQUUsQ0FBQztRQUNMLFNBQVMsRUFBRSx5Q0FBeUM7UUFDcEQsS0FBSyxFQUFFLE9BQU87UUFDZCxRQUFRLEVBQ04sOENBQThDO1FBQ2hELEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFFLENBQUM7UUFDUixLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksRUFBRSxPQUFPO0tBQ2Q7SUFDRDtRQUNFLEVBQUUsRUFBRSxDQUFDO1FBQ0wsU0FBUyxFQUFFLHlDQUF5QztRQUNwRCxLQUFLLEVBQUUsT0FBTztRQUNkLFFBQVEsRUFDTiw4Q0FBOEM7UUFDaEQsS0FBSyxFQUFFLEVBQUU7UUFDVCxLQUFLLEVBQUUsQ0FBQztRQUNSLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxFQUFFLE9BQU87S0FDZDtDQUNGLENBQUM7QUFHRixJQUFNLGlCQUFpQixHQUFHO0lBQ3hCO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxTQUFTLEVBQUUseUNBQXlDO1FBQ3BELEtBQUssRUFBRSxPQUFPO1FBQ2QsUUFBUSxFQUNOLDhDQUE4QztRQUNoRCxLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxDQUFDO1FBQ1IsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLEVBQUUsUUFBUTtLQUNmO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsQ0FBQztRQUNMLFNBQVMsRUFBRSx5Q0FBeUM7UUFDcEQsS0FBSyxFQUFFLE9BQU87UUFDZCxRQUFRLEVBQ04sOENBQThDO1FBQ2hELEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFFLENBQUM7UUFDUixLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksRUFBRSxRQUFRO0tBQ2Y7Q0FDRixDQUFDO0FBR0YsSUFBTSxpQkFBaUIsR0FBRztJQUN4QjtRQUNFLEVBQUUsRUFBRSxDQUFDO1FBQ0wsU0FBUyxFQUFFLHlDQUF5QztRQUNwRCxLQUFLLEVBQUUsT0FBTztRQUNkLFFBQVEsRUFDTiw4Q0FBOEM7UUFDaEQsS0FBSyxFQUFFLEVBQUU7UUFDVCxLQUFLLEVBQUUsQ0FBQztRQUNSLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxFQUFFLFFBQVE7S0FDZjtJQUNEO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxTQUFTLEVBQUUseUNBQXlDO1FBQ3BELEtBQUssRUFBRSxPQUFPO1FBQ2QsUUFBUSxFQUNOLDhDQUE4QztRQUNoRCxLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxDQUFDO1FBQ1IsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLEVBQUUsUUFBUTtLQUNmO0NBQ0YsQ0FBQztBQUVGLElBQU0sVUFBVSxHQUFHO0lBQ2pCO1FBQ0UsTUFBTSxFQUFFLENBQUM7UUFDVCxLQUFLLEVBQUUsSUFBSTtRQUNYLEdBQUcsRUFBRSx5QkFBeUI7UUFDOUIsSUFBSSxFQUFFLE1BQU07UUFDWixJQUFJLEVBQUUsZUFBZTtLQUN0QjtJQUNEO1FBQ0UsTUFBTSxFQUFFLENBQUM7UUFDVCxLQUFLLEVBQUUsSUFBSTtRQUNYLEdBQUcsRUFBRSwyQkFBMkI7UUFDaEMsSUFBSSxFQUFFLFFBQVE7UUFDZCxJQUFJLEVBQUUsaUJBQWlCO0tBQ3hCO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsQ0FBQztRQUNULEtBQUssRUFBRSxJQUFJO1FBQ1gsR0FBRyxFQUFFLDBCQUEwQjtRQUMvQixJQUFJLEVBQUUsT0FBTztRQUNiLElBQUksRUFBRSxnQkFBZ0I7S0FDdkI7SUFDRDtRQUNFLE1BQU0sRUFBRSxDQUFDO1FBQ1QsS0FBSyxFQUFFLElBQUk7UUFDWCxHQUFHLEVBQUUsMkJBQTJCO1FBQ2hDLElBQUksRUFBRSxRQUFRO1FBQ2QsSUFBSSxFQUFFLGlCQUFpQjtLQUN4QjtJQUNEO1FBQ0UsTUFBTSxFQUFFLENBQUM7UUFDVCxLQUFLLEVBQUUsSUFBSTtRQUNYLEdBQUcsRUFBRSx5QkFBeUI7UUFDOUIsSUFBSSxFQUFFLE1BQU07UUFDWixJQUFJLEVBQUUsZUFBZTtLQUN0QjtJQUNEO1FBQ0UsTUFBTSxFQUFFLENBQUM7UUFDVCxLQUFLLEVBQUUsS0FBSztRQUNaLEdBQUcsRUFBRSwrQkFBK0I7UUFDcEMsSUFBSSxFQUFFLFdBQVc7UUFDakIsSUFBSSxFQUFFLG9CQUFvQjtLQUMzQjtJQUNEO1FBQ0UsTUFBTSxFQUFFLENBQUM7UUFDVCxLQUFLLEVBQUUsTUFBTTtRQUNiLEdBQUcsRUFBRSw2QkFBNkI7UUFDbEMsSUFBSSxFQUFFLFVBQVU7UUFDaEIsSUFBSSxFQUFFLG1CQUFtQjtLQUMxQjtJQUNEO1FBQ0UsTUFBTSxFQUFFLENBQUM7UUFDVCxLQUFLLEVBQUUsTUFBTTtRQUNiLEdBQUcsRUFBRSwwQkFBMEI7UUFDL0IsSUFBSSxFQUFFLE9BQU87UUFDYixJQUFJLEVBQUUsZ0JBQWdCO0tBQ3ZCO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsQ0FBQztRQUNULEtBQUssRUFBRSxNQUFNO1FBQ2IsR0FBRyxFQUFFLGdDQUFnQztRQUNyQyxJQUFJLEVBQUUsYUFBYTtRQUNuQixJQUFJLEVBQUUsc0JBQXNCO0tBQzdCO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsRUFBRTtRQUNWLEtBQUssRUFBRSxJQUFJO1FBQ1gsR0FBRyxFQUFFLDJCQUEyQjtRQUNoQyxJQUFJLEVBQUUsUUFBUTtRQUNkLElBQUksRUFBRSxpQkFBaUI7S0FDeEI7SUFDRDtRQUNFLE1BQU0sRUFBRSxFQUFFO1FBQ1YsS0FBSyxFQUFFLElBQUk7UUFDWCxHQUFHLEVBQUUsMEJBQTBCO1FBQy9CLElBQUksRUFBRSxPQUFPO1FBQ2IsSUFBSSxFQUFFLGdCQUFnQjtLQUN2QjtJQUNEO1FBQ0UsTUFBTSxFQUFFLEVBQUU7UUFDVixLQUFLLEVBQUUsSUFBSTtRQUNYLEdBQUcsRUFBRSwyQkFBMkI7UUFDaEMsSUFBSSxFQUFFLFFBQVE7UUFDZCxJQUFJLEVBQUUsaUJBQWlCO0tBQ3hCO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsRUFBRTtRQUNWLEtBQUssRUFBRSxJQUFJO1FBQ1gsR0FBRyxFQUFFLDJCQUEyQjtRQUNoQyxJQUFJLEVBQUUsUUFBUTtRQUNkLElBQUksRUFBRSxpQkFBaUI7S0FDeEI7Q0FDRixDQUFDO0FBRU8sZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKiog5rW36bG8ICAqL1xyXG5jb25zdCBGaXNoTGlzdHNDb25maWcgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICB0aHVtYm5haWw6ICcuLi8uLi9zcmMvbGlzdHMvZmlzaC90aHVtYm5haWxfMDEuanBnJyxcclxuICAgIHRpdGxlOiAn5rW36bG85Lqn5ZOBMScsXHJcbiAgICBkZXNjcmliZTpcclxuICAgICAgJ+S4i+WNleWQjuS4jeeUqOetieW+heWPq+WPtyznm7TmjqXlh7rnpLrnu5nlupflkZjpooblj5Ys5p2l6Ieq5Zac6Iy254Ot5Y2W6aKH5Y+X5qyi6L+O55qE6IqL5aS05p2hLOebtOaOpeWHuuekuue7meW6l+WRmOmihuWPlicsXHJcbiAgICBwcmljZTogMTAsXHJcbiAgICBjb3VudDogMCxcclxuICAgIHN0b2NrOiAwLFxyXG4gICAgdHlwZTogJ2Zpc2gnLFxyXG4gICAgZGV0YWlsOiB7XHJcbiAgICAgIHN3aXBlcjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNyYzogJy4uLy4uL3NyYy9saXN0cy9maXNoLzAxL3N3aXBlcjAxLmpwZycsXHJcbiAgICAgICAgICB0aXRsZTogJ+i9ruaSreWbvjEnLFxyXG4gICAgICAgICAgaWQ6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNyYzogJy4uLy4uL3NyYy9saXN0cy9maXNoLzAxL3N3aXBlcjAxLmpwZycsXHJcbiAgICAgICAgICB0aXRsZTogJ+i9ruaSreWbvjInLFxyXG4gICAgICAgICAgaWQ6IDJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNyYzogJy4uLy4uL3NyYy9saXN0cy9maXNoLzAxL3N3aXBlcjAxLmpwZycsXHJcbiAgICAgICAgICB0aXRsZTogJ+i9ruaSreWbvjMnLFxyXG4gICAgICAgICAgaWQ6IDNcclxuICAgICAgICB9XHJcbiAgICAgIF0sXHJcbiAgICAgIGRlc2NyaWJlOiB7XHJcbiAgICAgICAgdGl0bGU6ICfkuLvmoIfpopgnLFxyXG4gICAgICAgIHN1YlRpdGxlOiAn5Ymv5qCH6aKYJyxcclxuICAgICAgICBkZXRhaWxJbmZvOiAn5Lqn5ZOB6K+m5oOF5o+P6L+w5L+h5oGvJyxcclxuICAgICAgICBwcmljZTogMTUsXHJcbiAgICAgICAgc3RhbmRhcmRzOiAn5LiA5pak5LiJ5p2h77yM5q+P5p2h57qmMy4z5LikJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIHRodW1ibmFpbDogJy4uLy4uL3NyYy9saXN0cy9maXNoL3RodW1ibmFpbF8wMS5qcGcnLFxyXG4gICAgdGl0bGU6ICfmtbfpsbzkuqflk4EyJyxcclxuICAgIGRlc2NyaWJlOlxyXG4gICAgICAn5LiL5Y2V5ZCO5LiN55So562J5b6F5Y+r5Y+3LOebtOaOpeWHuuekuue7meW6l+WRmOmihuWPlizmnaXoh6rllpzojLbng63ljZbpooflj5fmrKLov47nmoToiovlpLTmnaEs55u05o6l5Ye656S657uZ5bqX5ZGY6aKG5Y+WJyxcclxuICAgIHByaWNlOiAyMCxcclxuICAgIGNvdW50OiAwLFxyXG4gICAgc3RvY2s6IDEsXHJcbiAgICB0eXBlOiAnZmlzaCdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgdGh1bWJuYWlsOiAnLi4vLi4vc3JjL2xpc3RzL2Zpc2gvdGh1bWJuYWlsXzAxLmpwZycsXHJcbiAgICB0aXRsZTogJ+a1t+mxvOS6p+WTgTMnLFxyXG4gICAgZGVzY3JpYmU6XHJcbiAgICAgICfkuIvljZXlkI7kuI3nlKjnrYnlvoXlj6vlj7cs55u05o6l5Ye656S657uZ5bqX5ZGY6aKG5Y+WLOadpeiHquWWnOiMtueDreWNlumih+WPl+asoui/jueahOiKi+WktOadoSznm7TmjqXlh7rnpLrnu5nlupflkZjpooblj5YnLFxyXG4gICAgcHJpY2U6IDE3LFxyXG4gICAgY291bnQ6IDAsXHJcbiAgICBzdG9jazogMSxcclxuICAgIHR5cGU6ICdmaXNoJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICB0aHVtYm5haWw6ICcuLi8uLi9zcmMvbGlzdHMvZmlzaC90aHVtYm5haWxfMDEuanBnJyxcclxuICAgIHRpdGxlOiAn5rW36bG85Lqn5ZOBNCcsXHJcbiAgICBkZXNjcmliZTpcclxuICAgICAgJ+S4i+WNleWQjuS4jeeUqOetieW+heWPq+WPtyznm7TmjqXlh7rnpLrnu5nlupflkZjpooblj5Ys5p2l6Ieq5Zac6Iy254Ot5Y2W6aKH5Y+X5qyi6L+O55qE6IqL5aS05p2hLOebtOaOpeWHuuekuue7meW6l+WRmOmihuWPlicsXHJcbiAgICBwcmljZTogMTcsXHJcbiAgICBjb3VudDogMCxcclxuICAgIHN0b2NrOiAxLFxyXG4gICAgdHlwZTogJ2Zpc2gnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNSxcclxuICAgIHRodW1ibmFpbDogJy4uLy4uL3NyYy9saXN0cy9maXNoL3RodW1ibmFpbF8wMS5qcGcnLFxyXG4gICAgdGl0bGU6ICfmtbfpsbzkuqflk4E1JyxcclxuICAgIGRlc2NyaWJlOlxyXG4gICAgICAn5LiL5Y2V5ZCO5LiN55So562J5b6F5Y+r5Y+3LOebtOaOpeWHuuekuue7meW6l+WRmOmihuWPlizmnaXoh6rllpzojLbng63ljZbpooflj5fmrKLov47nmoToiovlpLTmnaEs55u05o6l5Ye656S657uZ5bqX5ZGY6aKG5Y+WJyxcclxuICAgIHByaWNlOiAxNyxcclxuICAgIGNvdW50OiAwLFxyXG4gICAgc3RvY2s6IDEsXHJcbiAgICB0eXBlOiAnZmlzaCdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA2LFxyXG4gICAgdGh1bWJuYWlsOiAnLi4vLi4vc3JjL2xpc3RzL2Zpc2gvdGh1bWJuYWlsXzAxLmpwZycsXHJcbiAgICB0aXRsZTogJ+a1t+mxvOS6p+WTgTYnLFxyXG4gICAgZGVzY3JpYmU6XHJcbiAgICAgICfkuIvljZXlkI7kuI3nlKjnrYnlvoXlj6vlj7cs55u05o6l5Ye656S657uZ5bqX5ZGY6aKG5Y+WLOadpeiHquWWnOiMtueDreWNlumih+WPl+asoui/jueahOiKi+WktOadoSznm7TmjqXlh7rnpLrnu5nlupflkZjpooblj5YnLFxyXG4gICAgcHJpY2U6IDE3LFxyXG4gICAgY291bnQ6IDAsXHJcbiAgICBzdG9jazogMSxcclxuICAgIHR5cGU6ICdmaXNoJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDcsXHJcbiAgICB0aHVtYm5haWw6ICcuLi8uLi9zcmMvbGlzdHMvZmlzaC90aHVtYm5haWxfMDEuanBnJyxcclxuICAgIHRpdGxlOiAn5rW36bG85Lqn5ZOBNycsXHJcbiAgICBkZXNjcmliZTpcclxuICAgICAgJ+S4i+WNleWQjuS4jeeUqOetieW+heWPq+WPtyznm7TmjqXlh7rnpLrnu5nlupflkZjpooblj5Ys5p2l6Ieq5Zac6Iy254Ot5Y2W6aKH5Y+X5qyi6L+O55qE6IqL5aS05p2hLOebtOaOpeWHuuekuue7meW6l+WRmOmihuWPlicsXHJcbiAgICBwcmljZTogMTcsXHJcbiAgICBjb3VudDogMCxcclxuICAgIHN0b2NrOiAxLFxyXG4gICAgdHlwZTogJ2Zpc2gnXHJcbiAgfVxyXG5dO1xyXG5cclxuLyoqIOa1t+iZviAgKi9cclxuY29uc3QgU2hyaW1wTGlzdHNDb25maWcgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICB0aHVtYm5haWw6ICcuLi8uLi9zcmMvbGlzdHMvc2hyaW1wL3RodW1ibmFpbF8wMS5qcGcnLFxyXG4gICAgdGl0bGU6ICfmtbfomb7kuqflk4ExJyxcclxuICAgIGRlc2NyaWJlOlxyXG4gICAgICAn5LiL5Y2V5ZCO5LiN55So562J5b6F5Y+r5Y+3LOebtOaOpeWHuuekuue7meW6l+WRmOmihuWPlizmnaXoh6rllpzojLbng63ljZbpooflj5fmrKLov47nmoToiovlpLTmnaEs55u05o6l5Ye656S657uZ5bqX5ZGY6aKG5Y+WJyxcclxuICAgIHByaWNlOiAxNSxcclxuICAgIGNvdW50OiAwLFxyXG4gICAgc3RvY2s6IDEsXHJcbiAgICB0eXBlOiAnc2hyaW1wJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICB0aHVtYm5haWw6ICcuLi8uLi9zcmMvbGlzdHMvc2hyaW1wL3RodW1ibmFpbF8wMS5qcGcnLFxyXG4gICAgdGl0bGU6ICfmtbfomb7kuqflk4EyJyxcclxuICAgIGRlc2NyaWJlOlxyXG4gICAgICAn5LiL5Y2V5ZCO5LiN55So562J5b6F5Y+r5Y+3LOebtOaOpeWHuuekuue7meW6l+WRmOmihuWPlizmnaXoh6rllpzojLbng63ljZbpooflj5fmrKLov47nmoToiovlpLTmnaEs55u05o6l5Ye656S657uZ5bqX5ZGY6aKG5Y+WJyxcclxuICAgIHByaWNlOiAxNixcclxuICAgIGNvdW50OiAwLFxyXG4gICAgc3RvY2s6IDEsXHJcbiAgICB0eXBlOiAnc2hyaW1wJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICB0aHVtYm5haWw6ICcuLi8uLi9zcmMvbGlzdHMvc2hyaW1wL3RodW1ibmFpbF8wMS5qcGcnLFxyXG4gICAgdGl0bGU6ICfmtbfomb7kuqflk4EzJyxcclxuICAgIGRlc2NyaWJlOlxyXG4gICAgICAn5LiL5Y2V5ZCO5LiN55So562J5b6F5Y+r5Y+3LOebtOaOpeWHuuekuue7meW6l+WRmOmihuWPlizmnaXoh6rllpzojLbng63ljZbpooflj5fmrKLov47nmoToiovlpLTmnaEs55u05o6l5Ye656S657uZ5bqX5ZGY6aKG5Y+WJyxcclxuICAgIHByaWNlOiAxNyxcclxuICAgIGNvdW50OiAwLFxyXG4gICAgc3RvY2s6IDEsXHJcbiAgICB0eXBlOiAnc2hyaW1wJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICB0aHVtYm5haWw6ICcuLi8uLi9zcmMvbGlzdHMvc2hyaW1wL3RodW1ibmFpbF8wMS5qcGcnLFxyXG4gICAgdGl0bGU6ICfmtbfomb7kuqflk4E0JyxcclxuICAgIGRlc2NyaWJlOlxyXG4gICAgICAn5LiL5Y2V5ZCO5LiN55So562J5b6F5Y+r5Y+3LOebtOaOpeWHuuekuue7meW6l+WRmOmihuWPlizmnaXoh6rllpzojLbng63ljZbpooflj5fmrKLov47nmoToiovlpLTmnaEs55u05o6l5Ye656S657uZ5bqX5ZGY6aKG5Y+WJyxcclxuICAgIHByaWNlOiAxNyxcclxuICAgIGNvdW50OiAwLFxyXG4gICAgc3RvY2s6IDEsXHJcbiAgICB0eXBlOiAnc2hyaW1wJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDUsXHJcbiAgICB0aHVtYm5haWw6ICcuLi8uLi9zcmMvbGlzdHMvc2hyaW1wL3RodW1ibmFpbF8wMS5qcGcnLFxyXG4gICAgdGl0bGU6ICfmtbfomb7kuqflk4E1JyxcclxuICAgIGRlc2NyaWJlOlxyXG4gICAgICAn5LiL5Y2V5ZCO5LiN55So562J5b6F5Y+r5Y+3LOebtOaOpeWHuuekuue7meW6l+WRmOmihuWPlizmnaXoh6rllpzojLbng63ljZbpooflj5fmrKLov47nmoToiovlpLTmnaEs55u05o6l5Ye656S657uZ5bqX5ZGY6aKG5Y+WJyxcclxuICAgIHByaWNlOiAxNyxcclxuICAgIGNvdW50OiAwLFxyXG4gICAgc3RvY2s6IDEsXHJcbiAgICB0eXBlOiAnc2hyaW1wJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDYsXHJcbiAgICB0aHVtYm5haWw6ICcuLi8uLi9zcmMvbGlzdHMvc2hyaW1wL3RodW1ibmFpbF8wMS5qcGcnLFxyXG4gICAgdGl0bGU6ICfmtbfomb7kuqflk4E2JyxcclxuICAgIGRlc2NyaWJlOlxyXG4gICAgICAn5LiL5Y2V5ZCO5LiN55So562J5b6F5Y+r5Y+3LOebtOaOpeWHuuekuue7meW6l+WRmOmihuWPlizmnaXoh6rllpzojLbng63ljZbpooflj5fmrKLov47nmoToiovlpLTmnaEs55u05o6l5Ye656S657uZ5bqX5ZGY6aKG5Y+WJyxcclxuICAgIHByaWNlOiAxNyxcclxuICAgIGNvdW50OiAwLFxyXG4gICAgc3RvY2s6IDEsXHJcbiAgICB0eXBlOiAnc2hyaW1wJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDcsXHJcbiAgICB0aHVtYm5haWw6ICcuLi8uLi9zcmMvbGlzdHMvc2hyaW1wL3RodW1ibmFpbF8wMS5qcGcnLFxyXG4gICAgdGl0bGU6ICfmtbfomb7kuqflk4E3JyxcclxuICAgIGRlc2NyaWJlOlxyXG4gICAgICAn5LiL5Y2V5ZCO5LiN55So562J5b6F5Y+r5Y+3LOebtOaOpeWHuuekuue7meW6l+WRmOmihuWPlizmnaXoh6rllpzojLbng63ljZbpooflj5fmrKLov47nmoToiovlpLTmnaEs55u05o6l5Ye656S657uZ5bqX5ZGY6aKG5Y+WJyxcclxuICAgIHByaWNlOiAxNyxcclxuICAgIGNvdW50OiAwLFxyXG4gICAgc3RvY2s6IDEsXHJcbiAgICB0eXBlOiAnc2hyaW1wJ1xyXG4gIH1cclxuXTtcclxuXHJcbi8qKiDpsb/psbwgICovXHJcbmNvbnN0IFNxdWlkTGlzdHNDb25maWcgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICB0aHVtYm5haWw6ICcuLi8uLi9zcmMvbGlzdHMvc2hyaW1wL3RodW1ibmFpbF8wMS5qcGcnLFxyXG4gICAgdGl0bGU6ICfpsb/psbzkuqflk4ExJyxcclxuICAgIGRlc2NyaWJlOlxyXG4gICAgICAn5LiL5Y2V5ZCO5LiN55So562J5b6F5Y+r5Y+3LOebtOaOpeWHuuekuue7meW6l+WRmOmihuWPlizmnaXoh6rllpzojLbng63ljZbpooflj5fmrKLov47nmoToiovlpLTmnaEs55u05o6l5Ye656S657uZ5bqX5ZGY6aKG5Y+WJyxcclxuICAgIHByaWNlOiAxNyxcclxuICAgIGNvdW50OiAwLFxyXG4gICAgc3RvY2s6IDEsXHJcbiAgICB0eXBlOiAnc3F1aWQnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIHRodW1ibmFpbDogJy4uLy4uL3NyYy9saXN0cy9zaHJpbXAvdGh1bWJuYWlsXzAxLmpwZycsXHJcbiAgICB0aXRsZTogJ+mxv+mxvOS6p+WTgTInLFxyXG4gICAgZGVzY3JpYmU6XHJcbiAgICAgICfkuIvljZXlkI7kuI3nlKjnrYnlvoXlj6vlj7cs55u05o6l5Ye656S657uZ5bqX5ZGY6aKG5Y+WLOadpeiHquWWnOiMtueDreWNlumih+WPl+asoui/jueahOiKi+WktOadoSznm7TmjqXlh7rnpLrnu5nlupflkZjpooblj5YnLFxyXG4gICAgcHJpY2U6IDE3LFxyXG4gICAgY291bnQ6IDAsXHJcbiAgICBzdG9jazogMCxcclxuICAgIHR5cGU6ICdzcXVpZCdcclxuICB9XHJcbl07XHJcblxyXG4vKiog55Sf6JqdICAqL1xyXG5jb25zdCBPeXN0ZXJMaXN0c0NvbmZpZyA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIHRodW1ibmFpbDogJy4uLy4uL3NyYy9saXN0cy9zaHJpbXAvdGh1bWJuYWlsXzAxLmpwZycsXHJcbiAgICB0aXRsZTogJ+eUn+ianeS6p+WTgTEnLFxyXG4gICAgZGVzY3JpYmU6XHJcbiAgICAgICfkuIvljZXlkI7kuI3nlKjnrYnlvoXlj6vlj7cs55u05o6l5Ye656S657uZ5bqX5ZGY6aKG5Y+WLOadpeiHquWWnOiMtueDreWNlumih+WPl+asoui/jueahOiKi+WktOadoSznm7TmjqXlh7rnpLrnu5nlupflkZjpooblj5YnLFxyXG4gICAgcHJpY2U6IDE3LFxyXG4gICAgY291bnQ6IDAsXHJcbiAgICBzdG9jazogMSxcclxuICAgIHR5cGU6ICdveXN0ZXInXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIHRodW1ibmFpbDogJy4uLy4uL3NyYy9saXN0cy9zaHJpbXAvdGh1bWJuYWlsXzAxLmpwZycsXHJcbiAgICB0aXRsZTogJ+eUn+ianeS6p+WTgTInLFxyXG4gICAgZGVzY3JpYmU6XHJcbiAgICAgICfkuIvljZXlkI7kuI3nlKjnrYnlvoXlj6vlj7cs55u05o6l5Ye656S657uZ5bqX5ZGY6aKG5Y+WLOadpeiHquWWnOiMtueDreWNlumih+WPl+asoui/jueahOiKi+WktOadoSznm7TmjqXlh7rnpLrnu5nlupflkZjpooblj5YnLFxyXG4gICAgcHJpY2U6IDE3LFxyXG4gICAgY291bnQ6IDAsXHJcbiAgICBzdG9jazogMCxcclxuICAgIHR5cGU6ICdveXN0ZXInXHJcbiAgfVxyXG5dO1xyXG5cclxuLyoqIOieg+ifuSAgKi9cclxuY29uc3QgQ3JhYkxpc3RzQ29uZmlnID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgdGh1bWJuYWlsOiAnLi4vLi4vc3JjL2xpc3RzL3NocmltcC90aHVtYm5haWxfMDEuanBnJyxcclxuICAgIHRpdGxlOiAn6J6D6J+55Lqn5ZOBMScsXHJcbiAgICBkZXNjcmliZTpcclxuICAgICAgJ+S4i+WNleWQjuS4jeeUqOetieW+heWPq+WPtyznm7TmjqXlh7rnpLrnu5nlupflkZjpooblj5Ys5p2l6Ieq5Zac6Iy254Ot5Y2W6aKH5Y+X5qyi6L+O55qE6IqL5aS05p2hLOebtOaOpeWHuuekuue7meW6l+WRmOmihuWPlicsXHJcbiAgICBwcmljZTogMTcsXHJcbiAgICBjb3VudDogMCxcclxuICAgIHN0b2NrOiAxLFxyXG4gICAgdHlwZTogJ2NyYWInXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIHRodW1ibmFpbDogJy4uLy4uL3NyYy9saXN0cy9zaHJpbXAvdGh1bWJuYWlsXzAxLmpwZycsXHJcbiAgICB0aXRsZTogJ+ieg+ifueS6p+WTgTInLFxyXG4gICAgZGVzY3JpYmU6XHJcbiAgICAgICfkuIvljZXlkI7kuI3nlKjnrYnlvoXlj6vlj7cs55u05o6l5Ye656S657uZ5bqX5ZGY6aKG5Y+WLOadpeiHquWWnOiMtueDreWNlumih+WPl+asoui/jueahOiKi+WktOadoSznm7TmjqXlh7rnpLrnu5nlupflkZjpooblj5YnLFxyXG4gICAgcHJpY2U6IDE3LFxyXG4gICAgY291bnQ6IDAsXHJcbiAgICBzdG9jazogMCxcclxuICAgIHR5cGU6ICdjcmFiJ1xyXG4gIH1cclxuXTtcclxuXHJcbi8qKiDniZvogonkuLggICovXHJcbmNvbnN0IEJlZWZiYWxsc0xpc3RzQ29uZmlnID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgdGh1bWJuYWlsOiAnLi4vLi4vc3JjL2xpc3RzL3NocmltcC90aHVtYm5haWxfMDEuanBnJyxcclxuICAgIHRpdGxlOiAn54mb6IKJ5Li45Lqn5ZOBMScsXHJcbiAgICBkZXNjcmliZTpcclxuICAgICAgJ+S4i+WNleWQjuS4jeeUqOetieW+heWPq+WPtyznm7TmjqXlh7rnpLrnu5nlupflkZjpooblj5Ys5p2l6Ieq5Zac6Iy254Ot5Y2W6aKH5Y+X5qyi6L+O55qE6IqL5aS05p2hLOebtOaOpeWHuuekuue7meW6l+WRmOmihuWPlicsXHJcbiAgICBwcmljZTogMTcsXHJcbiAgICBjb3VudDogMCxcclxuICAgIHN0b2NrOiAxLFxyXG4gICAgdHlwZTogJ2JlZWZiYWxscydcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgdGh1bWJuYWlsOiAnLi4vLi4vc3JjL2xpc3RzL3NocmltcC90aHVtYm5haWxfMDEuanBnJyxcclxuICAgIHRpdGxlOiAn54mb6IKJ5Li45Lqn5ZOBMicsXHJcbiAgICBkZXNjcmliZTpcclxuICAgICAgJ+S4i+WNleWQjuS4jeeUqOetieW+heWPq+WPtyznm7TmjqXlh7rnpLrnu5nlupflkZjpooblj5Ys5p2l6Ieq5Zac6Iy254Ot5Y2W6aKH5Y+X5qyi6L+O55qE6IqL5aS05p2hLOebtOaOpeWHuuekuue7meW6l+WRmOmihuWPlicsXHJcbiAgICBwcmljZTogMTcsXHJcbiAgICBjb3VudDogMCxcclxuICAgIHN0b2NrOiAwLFxyXG4gICAgdHlwZTogJ2JlZWZiYWxscydcclxuICB9XHJcbl07XHJcblxyXG4vKiog5rW36bKc5rC06aW6ICAqL1xyXG5jb25zdCBEdW1wbGluZ0xpc3RzQ29uZmlnID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgdGh1bWJuYWlsOiAnLi4vLi4vc3JjL2xpc3RzL3NocmltcC90aHVtYm5haWxfMDEuanBnJyxcclxuICAgIHRpdGxlOiAn5rW36bKc5rC06aW65Lqn5ZOBMScsXHJcbiAgICBkZXNjcmliZTpcclxuICAgICAgJ+S4i+WNleWQjuS4jeeUqOetieW+heWPq+WPtyznm7TmjqXlh7rnpLrnu5nlupflkZjpooblj5Ys5p2l6Ieq5Zac6Iy254Ot5Y2W6aKH5Y+X5qyi6L+O55qE6IqL5aS05p2hLOebtOaOpeWHuuekuue7meW6l+WRmOmihuWPlicsXHJcbiAgICBwcmljZTogMTcsXHJcbiAgICBjb3VudDogMCxcclxuICAgIHN0b2NrOiAxLFxyXG4gICAgdHlwZTogJ2R1bXBsaW5nJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICB0aHVtYm5haWw6ICcuLi8uLi9zcmMvbGlzdHMvc2hyaW1wL3RodW1ibmFpbF8wMS5qcGcnLFxyXG4gICAgdGl0bGU6ICfmtbfpspzmsLTppbrkuqflk4EyJyxcclxuICAgIGRlc2NyaWJlOlxyXG4gICAgICAn5LiL5Y2V5ZCO5LiN55So562J5b6F5Y+r5Y+3LOebtOaOpeWHuuekuue7meW6l+WRmOmihuWPlizmnaXoh6rllpzojLbng63ljZbpooflj5fmrKLov47nmoToiovlpLTmnaEs55u05o6l5Ye656S657uZ5bqX5ZGY6aKG5Y+WJyxcclxuICAgIHByaWNlOiAxNyxcclxuICAgIGNvdW50OiAwLFxyXG4gICAgc3RvY2s6IDAsXHJcbiAgICB0eXBlOiAnZHVtcGxpbmcnXHJcbiAgfVxyXG5dO1xyXG5cclxuLyoqIOe0q+iPnOa1t+iLlCAgKi9cclxuY29uc3QgTGF2ZXJMaXN0c0NvbmZpZyA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIHRodW1ibmFpbDogJy4uLy4uL3NyYy9saXN0cy9zaHJpbXAvdGh1bWJuYWlsXzAxLmpwZycsXHJcbiAgICB0aXRsZTogJ+e0q+iPnOa1t+iLlOS6p+WTgTEnLFxyXG4gICAgZGVzY3JpYmU6XHJcbiAgICAgICfkuIvljZXlkI7kuI3nlKjnrYnlvoXlj6vlj7cs55u05o6l5Ye656S657uZ5bqX5ZGY6aKG5Y+WLOadpeiHquWWnOiMtueDreWNlumih+WPl+asoui/jueahOiKi+WktOadoSznm7TmjqXlh7rnpLrnu5nlupflkZjpooblj5YnLFxyXG4gICAgcHJpY2U6IDE3LFxyXG4gICAgY291bnQ6IDAsXHJcbiAgICBzdG9jazogMSxcclxuICAgIHR5cGU6ICdsYXZlcidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgdGh1bWJuYWlsOiAnLi4vLi4vc3JjL2xpc3RzL3NocmltcC90aHVtYm5haWxfMDEuanBnJyxcclxuICAgIHRpdGxlOiAn57Sr6I+c5rW36IuU5Lqn5ZOBMicsXHJcbiAgICBkZXNjcmliZTpcclxuICAgICAgJ+S4i+WNleWQjuS4jeeUqOetieW+heWPq+WPtyznm7TmjqXlh7rnpLrnu5nlupflkZjpooblj5Ys5p2l6Ieq5Zac6Iy254Ot5Y2W6aKH5Y+X5qyi6L+O55qE6IqL5aS05p2hLOebtOaOpeWHuuekuue7meW6l+WRmOmihuWPlicsXHJcbiAgICBwcmljZTogMTcsXHJcbiAgICBjb3VudDogMCxcclxuICAgIHN0b2NrOiAwLFxyXG4gICAgdHlwZTogJ2xhdmVyJ1xyXG4gIH1cclxuXTtcclxuXHJcbi8qKiDlubLotKfooaXlk4EgICovXHJcbmNvbnN0IFN1cHBsZW1lbnRzTGlzdHNDb25maWcgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICB0aHVtYm5haWw6ICcuLi8uLi9zcmMvbGlzdHMvc2hyaW1wL3RodW1ibmFpbF8wMS5qcGcnLFxyXG4gICAgdGl0bGU6ICflubLotKfooaXlk4Hkuqflk4ExJyxcclxuICAgIGRlc2NyaWJlOlxyXG4gICAgICAn5LiL5Y2V5ZCO5LiN55So562J5b6F5Y+r5Y+3LOebtOaOpeWHuuekuue7meW6l+WRmOmihuWPlizmnaXoh6rllpzojLbng63ljZbpooflj5fmrKLov47nmoToiovlpLTmnaEs55u05o6l5Ye656S657uZ5bqX5ZGY6aKG5Y+WJyxcclxuICAgIHByaWNlOiAxNyxcclxuICAgIGNvdW50OiAwLFxyXG4gICAgc3RvY2s6IDEsXHJcbiAgICB0eXBlOiAnc3VwcGxlbWVudHMnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIHRodW1ibmFpbDogJy4uLy4uL3NyYy9saXN0cy9zaHJpbXAvdGh1bWJuYWlsXzAxLmpwZycsXHJcbiAgICB0aXRsZTogJ+W5sui0p+ihpeWTgeS6p+WTgTInLFxyXG4gICAgZGVzY3JpYmU6XHJcbiAgICAgICfkuIvljZXlkI7kuI3nlKjnrYnlvoXlj6vlj7cs55u05o6l5Ye656S657uZ5bqX5ZGY6aKG5Y+WLOadpeiHquWWnOiMtueDreWNlumih+WPl+asoui/jueahOiKi+WktOadoSznm7TmjqXlh7rnpLrnu5nlupflkZjpooblj5YnLFxyXG4gICAgcHJpY2U6IDE3LFxyXG4gICAgY291bnQ6IDAsXHJcbiAgICBzdG9jazogMCxcclxuICAgIHR5cGU6ICdzdXBwbGVtZW50cydcclxuICB9XHJcbl07XHJcblxyXG4vKiog6Z2S6I+cICAqL1xyXG5jb25zdCBHcmVlbnNMaXN0c0NvbmZpZyA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIHRodW1ibmFpbDogJy4uLy4uL3NyYy9saXN0cy9zaHJpbXAvdGh1bWJuYWlsXzAxLmpwZycsXHJcbiAgICB0aXRsZTogJ+mdkuiPnOS6p+WTgTEnLFxyXG4gICAgZGVzY3JpYmU6XHJcbiAgICAgICfkuIvljZXlkI7kuI3nlKjnrYnlvoXlj6vlj7cs55u05o6l5Ye656S657uZ5bqX5ZGY6aKG5Y+WLOadpeiHquWWnOiMtueDreWNlumih+WPl+asoui/jueahOiKi+WktOadoSznm7TmjqXlh7rnpLrnu5nlupflkZjpooblj5YnLFxyXG4gICAgcHJpY2U6IDE3LFxyXG4gICAgY291bnQ6IDAsXHJcbiAgICBzdG9jazogMSxcclxuICAgIHR5cGU6ICdncmVlbnMnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIHRodW1ibmFpbDogJy4uLy4uL3NyYy9saXN0cy9zaHJpbXAvdGh1bWJuYWlsXzAxLmpwZycsXHJcbiAgICB0aXRsZTogJ+mdkuiPnOS6p+WTgTInLFxyXG4gICAgZGVzY3JpYmU6XHJcbiAgICAgICfkuIvljZXlkI7kuI3nlKjnrYnlvoXlj6vlj7cs55u05o6l5Ye656S657uZ5bqX5ZGY6aKG5Y+WLOadpeiHquWWnOiMtueDreWNlumih+WPl+asoui/jueahOiKi+WktOadoSznm7TmjqXlh7rnpLrnu5nlupflkZjpooblj5YnLFxyXG4gICAgcHJpY2U6IDE3LFxyXG4gICAgY291bnQ6IDAsXHJcbiAgICBzdG9jazogMCxcclxuICAgIHR5cGU6ICdncmVlbnMnXHJcbiAgfVxyXG5dO1xyXG5cclxuLyoqIOeTnOexuyAgKi9cclxuY29uc3QgTWVsb25MaXN0c0NvbmZpZyA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIHRodW1ibmFpbDogJy4uLy4uL3NyYy9saXN0cy9zaHJpbXAvdGh1bWJuYWlsXzAxLmpwZycsXHJcbiAgICB0aXRsZTogJ+eTnOexu+S6p+WTgTEnLFxyXG4gICAgZGVzY3JpYmU6XHJcbiAgICAgICfkuIvljZXlkI7kuI3nlKjnrYnlvoXlj6vlj7cs55u05o6l5Ye656S657uZ5bqX5ZGY6aKG5Y+WLOadpeiHquWWnOiMtueDreWNlumih+WPl+asoui/jueahOiKi+WktOadoSznm7TmjqXlh7rnpLrnu5nlupflkZjpooblj5YnLFxyXG4gICAgcHJpY2U6IDE3LFxyXG4gICAgY291bnQ6IDAsXHJcbiAgICBzdG9jazogMSxcclxuICAgIHR5cGU6ICdtZWxvbidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgdGh1bWJuYWlsOiAnLi4vLi4vc3JjL2xpc3RzL3NocmltcC90aHVtYm5haWxfMDEuanBnJyxcclxuICAgIHRpdGxlOiAn55Oc57G75Lqn5ZOBMicsXHJcbiAgICBkZXNjcmliZTpcclxuICAgICAgJ+S4i+WNleWQjuS4jeeUqOetieW+heWPq+WPtyznm7TmjqXlh7rnpLrnu5nlupflkZjpooblj5Ys5p2l6Ieq5Zac6Iy254Ot5Y2W6aKH5Y+X5qyi6L+O55qE6IqL5aS05p2hLOebtOaOpeWHuuekuue7meW6l+WRmOmihuWPlicsXHJcbiAgICBwcmljZTogMTcsXHJcbiAgICBjb3VudDogMCxcclxuICAgIHN0b2NrOiAwLFxyXG4gICAgdHlwZTogJ21lbG9uJ1xyXG4gIH1cclxuXTtcclxuXHJcbi8qKiDnlarojIQgICovXHJcbmNvbnN0IFRvbWF0b0xpc3RzQ29uZmlnID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgdGh1bWJuYWlsOiAnLi4vLi4vc3JjL2xpc3RzL3NocmltcC90aHVtYm5haWxfMDEuanBnJyxcclxuICAgIHRpdGxlOiAn55Wq6IyE5Lqn5ZOBMScsXHJcbiAgICBkZXNjcmliZTpcclxuICAgICAgJ+S4i+WNleWQjuS4jeeUqOetieW+heWPq+WPtyznm7TmjqXlh7rnpLrnu5nlupflkZjpooblj5Ys5p2l6Ieq5Zac6Iy254Ot5Y2W6aKH5Y+X5qyi6L+O55qE6IqL5aS05p2hLOebtOaOpeWHuuekuue7meW6l+WRmOmihuWPlicsXHJcbiAgICBwcmljZTogMTcsXHJcbiAgICBjb3VudDogMCxcclxuICAgIHN0b2NrOiAxLFxyXG4gICAgdHlwZTogJ3RvbWF0bydcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgdGh1bWJuYWlsOiAnLi4vLi4vc3JjL2xpc3RzL3NocmltcC90aHVtYm5haWxfMDEuanBnJyxcclxuICAgIHRpdGxlOiAn55Wq6IyE5Lqn5ZOBMicsXHJcbiAgICBkZXNjcmliZTpcclxuICAgICAgJ+S4i+WNleWQjuS4jeeUqOetieW+heWPq+WPtyznm7TmjqXlh7rnpLrnu5nlupflkZjpooblj5Ys5p2l6Ieq5Zac6Iy254Ot5Y2W6aKH5Y+X5qyi6L+O55qE6IqL5aS05p2hLOebtOaOpeWHuuekuue7meW6l+WRmOmihuWPlicsXHJcbiAgICBwcmljZTogMTcsXHJcbiAgICBjb3VudDogMCxcclxuICAgIHN0b2NrOiAwLFxyXG4gICAgdHlwZTogJ3RvbWF0bydcclxuICB9XHJcbl07XHJcblxyXG4vKiog5Zyw55OcICAqL1xyXG5jb25zdCBQb3RhdG9MaXN0c0NvbmZpZyA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIHRodW1ibmFpbDogJy4uLy4uL3NyYy9saXN0cy9zaHJpbXAvdGh1bWJuYWlsXzAxLmpwZycsXHJcbiAgICB0aXRsZTogJ+WcsOeTnOS6p+WTgTEnLFxyXG4gICAgZGVzY3JpYmU6XHJcbiAgICAgICfkuIvljZXlkI7kuI3nlKjnrYnlvoXlj6vlj7cs55u05o6l5Ye656S657uZ5bqX5ZGY6aKG5Y+WLOadpeiHquWWnOiMtueDreWNlumih+WPl+asoui/jueahOiKi+WktOadoSznm7TmjqXlh7rnpLrnu5nlupflkZjpooblj5YnLFxyXG4gICAgcHJpY2U6IDE3LFxyXG4gICAgY291bnQ6IDAsXHJcbiAgICBzdG9jazogMSxcclxuICAgIHR5cGU6ICdwb3RhdG8nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIHRodW1ibmFpbDogJy4uLy4uL3NyYy9saXN0cy9zaHJpbXAvdGh1bWJuYWlsXzAxLmpwZycsXHJcbiAgICB0aXRsZTogJ+WcsOeTnOS6p+WTgTInLFxyXG4gICAgZGVzY3JpYmU6XHJcbiAgICAgICfkuIvljZXlkI7kuI3nlKjnrYnlvoXlj6vlj7cs55u05o6l5Ye656S657uZ5bqX5ZGY6aKG5Y+WLOadpeiHquWWnOiMtueDreWNlumih+WPl+asoui/jueahOiKi+WktOadoSznm7TmjqXlh7rnpLrnu5nlupflkZjpooblj5YnLFxyXG4gICAgcHJpY2U6IDE3LFxyXG4gICAgY291bnQ6IDAsXHJcbiAgICBzdG9jazogMCxcclxuICAgIHR5cGU6ICdwb3RhdG8nXHJcbiAgfVxyXG5dO1xyXG5cclxuY29uc3QgTWVudUNvbmZpZyA9IFtcclxuICB7XHJcbiAgICBtZW51SWQ6IDEsXHJcbiAgICB0aXRsZTogJ+a1t+mxvCcsXHJcbiAgICBzcmM6ICcuLi8uLi9zcmMvbWVudS9maXNoLnBuZycsXHJcbiAgICB0eXBlOiAnZmlzaCcsXHJcbiAgICBsaXN0OiBGaXNoTGlzdHNDb25maWdcclxuICB9LFxyXG4gIHtcclxuICAgIG1lbnVJZDogMixcclxuICAgIHRpdGxlOiAn5rW36Jm+JyxcclxuICAgIHNyYzogJy4uLy4uL3NyYy9tZW51L3NocmltcC5wbmcnLFxyXG4gICAgdHlwZTogJ3NocmltcCcsXHJcbiAgICBsaXN0OiBTaHJpbXBMaXN0c0NvbmZpZ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbWVudUlkOiAzLFxyXG4gICAgdGl0bGU6ICfpsb/psbwnLFxyXG4gICAgc3JjOiAnLi4vLi4vc3JjL21lbnUvc3F1aWQucG5nJyxcclxuICAgIHR5cGU6ICdzcXVpZCcsXHJcbiAgICBsaXN0OiBTcXVpZExpc3RzQ29uZmlnXHJcbiAgfSxcclxuICB7XHJcbiAgICBtZW51SWQ6IDQsXHJcbiAgICB0aXRsZTogJ+eUn+ianScsXHJcbiAgICBzcmM6ICcuLi8uLi9zcmMvbWVudS9veXN0ZXIucG5nJyxcclxuICAgIHR5cGU6ICdveXN0ZXInLFxyXG4gICAgbGlzdDogT3lzdGVyTGlzdHNDb25maWdcclxuICB9LFxyXG4gIHtcclxuICAgIG1lbnVJZDogNSxcclxuICAgIHRpdGxlOiAn6J6D6J+5JyxcclxuICAgIHNyYzogJy4uLy4uL3NyYy9tZW51L2NyYWIucG5nJyxcclxuICAgIHR5cGU6ICdjcmFiJyxcclxuICAgIGxpc3Q6IENyYWJMaXN0c0NvbmZpZ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbWVudUlkOiA2LFxyXG4gICAgdGl0bGU6ICfniZvogonkuLgnLFxyXG4gICAgc3JjOiAnLi4vLi4vc3JjL21lbnUvYmVlZl9iYWxscy5wbmcnLFxyXG4gICAgdHlwZTogJ2JlZWZiYWxscycsXHJcbiAgICBsaXN0OiBCZWVmYmFsbHNMaXN0c0NvbmZpZ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbWVudUlkOiA3LFxyXG4gICAgdGl0bGU6ICfmtbfpspzmsLTppbonLFxyXG4gICAgc3JjOiAnLi4vLi4vc3JjL21lbnUvZHVtcGxpbmcucG5nJyxcclxuICAgIHR5cGU6ICdkdW1wbGluZycsXHJcbiAgICBsaXN0OiBEdW1wbGluZ0xpc3RzQ29uZmlnXHJcbiAgfSxcclxuICB7XHJcbiAgICBtZW51SWQ6IDgsXHJcbiAgICB0aXRsZTogJ+e0q+iPnOa1t+iLlCcsXHJcbiAgICBzcmM6ICcuLi8uLi9zcmMvbWVudS9sYXZlci5wbmcnLFxyXG4gICAgdHlwZTogJ2xhdmVyJyxcclxuICAgIGxpc3Q6IExhdmVyTGlzdHNDb25maWdcclxuICB9LFxyXG4gIHtcclxuICAgIG1lbnVJZDogOSxcclxuICAgIHRpdGxlOiAn5bmy6LSn6KGl5ZOBJyxcclxuICAgIHNyYzogJy4uLy4uL3NyYy9tZW51L3N1cHBsZW1lbnRzLnBuZycsXHJcbiAgICB0eXBlOiAnc3VwcGxlbWVudHMnLFxyXG4gICAgbGlzdDogU3VwcGxlbWVudHNMaXN0c0NvbmZpZ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbWVudUlkOiAxMCxcclxuICAgIHRpdGxlOiAn6Z2S6I+cJyxcclxuICAgIHNyYzogJy4uLy4uL3NyYy9tZW51L2dyZWVucy5wbmcnLFxyXG4gICAgdHlwZTogJ2dyZWVucycsXHJcbiAgICBsaXN0OiBHcmVlbnNMaXN0c0NvbmZpZ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbWVudUlkOiAxMSxcclxuICAgIHRpdGxlOiAn55Oc57G7JyxcclxuICAgIHNyYzogJy4uLy4uL3NyYy9tZW51L21lbG9uLnBuZycsXHJcbiAgICB0eXBlOiAnbWVsb24nLFxyXG4gICAgbGlzdDogTWVsb25MaXN0c0NvbmZpZ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbWVudUlkOiAxMixcclxuICAgIHRpdGxlOiAn55Wq6IyEJyxcclxuICAgIHNyYzogJy4uLy4uL3NyYy9tZW51L3RvbWF0by5wbmcnLFxyXG4gICAgdHlwZTogJ3RvbWF0bycsXHJcbiAgICBsaXN0OiBUb21hdG9MaXN0c0NvbmZpZ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbWVudUlkOiAxMyxcclxuICAgIHRpdGxlOiAn5Zyw55OcJyxcclxuICAgIHNyYzogJy4uLy4uL3NyYy9tZW51L3BvdGF0by5wbmcnLFxyXG4gICAgdHlwZTogJ3BvdGF0bycsXHJcbiAgICBsaXN0OiBQb3RhdG9MaXN0c0NvbmZpZ1xyXG4gIH1cclxuXTtcclxuXHJcbmV4cG9ydCB7IE1lbnVDb25maWcgfTtcclxuIl19