import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//引入表单相关的模块 才可以用双休数据绑定
import { FormsModule } from '@angular/forms';

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

import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { Rxjs6Component } from './components/rxjs6/rxjs6.component';

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
    Rxjs6Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [StorageService,RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
