import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { HomeComponent } from './components/home/home.component';
import { InstallComponent } from './components/install/install.component';
import { MaterialsComponent } from './components/materials/materials.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'catalog', component: CatalogComponent },
  { path: 'materials', component: MaterialsComponent },
  { path: 'install', component: InstallComponent },
  { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
