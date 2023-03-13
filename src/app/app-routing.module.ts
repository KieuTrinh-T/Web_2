import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaiTap13Component } from './bai-tap13/bai-tap13.component';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { ServiceProductImageDetailComponent } from './service-product-image-detail/service-product-image-detail.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [
  BaiTap13Component,
  ServiceProductImageDetailComponent,
  ExerciseListComponent

]
