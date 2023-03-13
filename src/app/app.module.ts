import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';

import { MyComponentComponent } from './my-component/my-component.component';
import { BindingPropertyComponentComponent } from './binding-property-component/binding-property-component.component';
import { BindingClassComponentComponent } from './binding-class-component/binding-class-component.component';
import { BaiTap6Component } from './bai-tap6/bai-tap6.component';
import { BaiTap7Component } from './bai-tap7/bai-tap7.component';
import { BaiTap11Component } from './bai-tap11/bai-tap11.component';
import { BaiTap12Component } from './bai-tap12/bai-tap12.component';
import { BaiTap13Component } from './bai-tap13/bai-tap13.component';
import { ServiceProductImageDetailComponent } from './service-product-image-detail/service-product-image-detail.component';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { FormsModule } from '@angular/forms';
import { BaiTap8Component } from './bai-tap8/bai-tap8.component';
import { BaiTap9Component } from './bai-tap9/bai-tap9.component';
import { BaiTap10Component } from './bai-tap10/bai-tap10.component';
@NgModule({
  declarations: [
    AppComponent,

    MyComponentComponent,
    BindingPropertyComponentComponent,
    BindingClassComponentComponent,
    BaiTap6Component,
    BaiTap7Component,
    BaiTap11Component,
    BaiTap12Component,
    BaiTap13Component,
    ServiceProductImageDetailComponent,
    ExerciseListComponent,
    BaiTap8Component,
    BaiTap9Component,
    BaiTap10Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
