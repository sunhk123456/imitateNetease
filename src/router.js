import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import User from  './views/User.vue';
import Login from  './views/Login.vue';
import Register from  './views/Register.vue';
import MsgCenter from  './views/MsgCenter';
import Search from  './views/Search';
import Detail from  './views/Detail';
import Order from  './views/Order';
import Address from  './views/Address';
import Cart from  './views/Cart';
import CategoryList from  './views/CategoryList';
import LeaveMessage from  './views/LeaveMessage';
import UserCollection from  './views/UserCollection';
import UserOrder from  './views/UserOrder';
import Demo from  './views/Demo';


Vue.use(Router);

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Home},
    { path: '/user', name: 'user', component: User},
    { path: '/login', name: 'login', component: Login  },
    { path: '/register', name: 'register', component: Register  },
    { path: '/msgCenter', name: 'msgCenter', component:MsgCenter  },
    { path: '/search', name: 'search', component:Search  },
    { path: '/detail', name: 'detail', component:Detail  },
    { path: '/order', name: 'order', component:Order  },
    { path: '/address', name: 'address', component:Address  },
    { path: '/cart', name: 'cart', component:Cart},
    { path: '/categoryList', name: 'categoryList', component:CategoryList},
    { path: '/LeaveMessage', name: 'LeaveMessage', component:LeaveMessage},
    { path: '/userCollection', name: 'userCollection', component:UserCollection},
    { path: '/userOrder', name: 'userOdder', component:UserOrder},
    { path: '/demo', name: 'demo', component:Demo},
 ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
});
