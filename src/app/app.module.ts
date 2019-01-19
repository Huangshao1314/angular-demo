import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//引入表单相关的模块 才可以用双休数据绑定
import { FormsModule } from '@angular/forms';

//引入HttpClientModule
import { HttpClientModule,HttpClientJsonpModule} from '@angular/common/http';

//引入路由模块
import { AppRoutingModule } from './app-routing.module';

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
import { BinddataComponent } from './components/binddata/binddata.component';
import { NewscontentComponent } from './components/newscontent/newscontent.component';
import { ProductComponent } from './components/product/product.component';
import { ProductcontentComponent } from './components/productcontent/productcontent.component';
import { SettingComponent } from './components/home/setting/setting.component';
import { WelcomeComponent } from './components/home/welcome/welcome.component';
import { PlistComponent } from './components/product/plist/plist.component';
import { PcateComponent } from './components/product/pcate/pcate.component';
import { DirectiveComponent } from './components/directive/directive.component';

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
    GetPostJsonpAxiosComponent,
    BinddataComponent,
    NewscontentComponent,
    ProductComponent,
    ProductcontentComponent,
    DirectiveComponent,
    SettingComponent,
    WelcomeComponent,
    PlistComponent,
    PcateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule
  ],
  providers: [StorageService,RequestService,HttpserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
