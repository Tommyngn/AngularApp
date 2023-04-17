import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxComponent } from './tax/tax.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path: '', component: TaxComponent, data: {reuse: true}},
  {path: 'product/:taxP/:taxN', component: ProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
