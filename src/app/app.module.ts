import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//引入表单相关的模块 才可以用双休数据绑定
import { FormsModule } from '@angular/forms';

//引入HttpClientModule
import { HttpClientModule,HttpClientJsonpModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { SearchComponent } from './components/search/search.component';
import { TodolistComponent } from './components/todolist/todolist.component';

import { HeaderComponent } from './components/header/header.component';
import { TransitionComponent } from './components/transition/transition.component';

//引入并且配置服务
import { StorageService } from './services/storage.service';
import { RequestService } from './services/request.service';
import { HttpserviceService } from './services/httpservice.service';

import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { Rxjs6Component } from './components/rxjs6/rxjs6.component';
import { GetPostJsonpAxiosComponent } from './components/get-post-jsonp-axios/get-post-jsonp-axios.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    HomeComponent,
    FormComponent,
    SearchComponent,
    TodolistComponent,
    HeaderComponent,
    TransitionComponent,
    LifecycleComponent,
    Rxjs6Component,
    GetPostJsonpAxiosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [StorageService,RequestService,HttpserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
