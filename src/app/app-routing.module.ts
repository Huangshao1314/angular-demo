//配置路由的模块

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { GetPostJsonpAxiosComponent } from './components/get-post-jsonp-axios/get-post-jsonp-axios.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { Rxjs6Component } from './components/rxjs6/rxjs6.component';
import { SearchComponent } from './components/search/search.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { TransitionComponent } from './components/transition/transition.component';
import { BinddataComponent } from './components/binddata/binddata.component';
import { NewscontentComponent } from './components/newscontent/newscontent.component';
import { ProductComponent } from './components/product/product.component';
import { ProductcontentComponent } from './components/productcontent/productcontent.component';

const routes: Routes = [

  {

    path:'home',component:HomeComponent
  },

  {

    path:'news',component:NewsComponent
  },
  
  {

    path:'form',component:FormComponent
  },
  {

    path:'GetPostJsonpAxiosComponent',component:GetPostJsonpAxiosComponent
  },
  {

    path:'lifecycle',component:LifecycleComponent
  },
  {

    path:'rxjs6',component:Rxjs6Component
  },
  {

    path:'search',component:SearchComponent
  },
  {

    path:'todolist',component:TodolistComponent
  },
  {

    path:'transition',component:TransitionComponent
  },
  {

    path:'binddata',component:BinddataComponent
  },
  {

    path:'newscontent/:aid',component:NewscontentComponent
  },
  {

    path:'product',component:ProductComponent
  },
  {

    path:'productcontent/:aid',component:ProductcontentComponent
  },
  //匹配不到路由的时候加载的组件 或者跳转的路由
  {

    path:'**',redirectTo:'home'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
