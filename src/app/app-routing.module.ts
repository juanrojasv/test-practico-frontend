import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


// const routes: Routes = [];
const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'items', component: ProductListComponent },
  { path: 'items/:id', component: ProductDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
