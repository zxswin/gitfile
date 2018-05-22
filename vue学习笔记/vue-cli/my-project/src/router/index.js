import Vue from 'vue';
import Router from 'vue-router';

import HomeComponent from '@/pages/home/home.component';
import GoodFood from '@/pages/good-food/good-food.component';
import AllFood from '@/pages/good-food/all-food/all-food.component';
import LunchFood from '@/pages/good-food/lunch-food/lunch-food.component';
import Fruits from '@/pages/good-food/lunch-food/fruits/fruits.component';

import Animation from '@/pages/animation/animation.component';
import ShowHide from '@/pages/animation/show-hide/show-hide.component';
import AnimationCss from '@/pages/animation/animation-css/animation-css.component';
import CssThree from '@/pages/animation/css-three/css-three.component';
import Velocity from '@/pages/animation/velocity/velocity.component';
import TweenMax from '@/pages/animation/tween-max/tween-max.component';

import Communication from '@/pages/communication/communication.component';
import SimpleDemo from '@/pages/communication/simple-demo/simple-demo.component';

import VueAjax from '@/pages/vue-ajax/vue-ajax.component';




const Vegetables = resolve => require(['../pages/good-food/lunch-food/vegetables/vegetables.component.vue'], resolve);

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/home',
      component: HomeComponent,
    },
    {
      path: '/vue-ajax',
      component: VueAjax,
    },
    {
      path: '/communication',
      component: Communication,
      children:[
        { 
          path: '/', 
          component: SimpleDemo
        },
      ]
    },
    {
      path: '/animation',
      component: Animation,
      children:[
        { 
          path: '/', 
          component: ShowHide
        },
        { 
          path: '/animation/show-hide', 
          name: 'ShowHide',
          component: ShowHide
        },
        { 
          path: '/animation/animation-css', 
          name: 'AnimationCss',
          component: AnimationCss
        },
        { 
          path: '/animation/css-three', 
          name: 'CssThree',
          component: CssThree
        },
        { 
          path: '/animation/velocity', 
          name: 'Velocity',
          component: Velocity
        },
        { 
          path: '/animation/tween-max', 
          name: 'TweenMax',
          component: TweenMax
        },
      ]
    },
    {
      path: '/good-food',
      component: GoodFood,
      meta: { requiresAuth: true },//路由元信息
      children:[
        { 
          path: '/', 
          component: AllFood
        },
        { 
          path: '/good-food/all-food:name', 
          name: 'AllFood',
          component: AllFood
        },
        { 
          path: '/good-food/lunch-food', 
          component: LunchFood,
          children:[
            { 
              path: '/', 
              component: Fruits
            },
            { 
              path: '/good-food/lunch-food/fruits', 
              name: 'Fruits',
              component: Fruits
            },
            { 
              path: '/good-food/lunch-food/vegetables', 
              name: 'Vegetables',
              component: Vegetables,
              beforeEnter: (to, from, next) => {  //单个路由中的钩子函数
                console.log('Vegetables.to.path',to.path);
                next();
              }
            },
          ]
        },
      ]
    }
  ],
  //所有路由新页面滚动到顶部：
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
 
});

//全局钩子函数
router.beforeEach((to, from, next)=>{
  if (to.matched.some(record => record.meta.requiresAuth)) {
     console.log('先进行登录检测工作……');
  }
  next();
});
router.afterEach((to, from, next) => {
    console.log('to.path',to.path);
});

export default router

