import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuComponent } from './components/_common/menu/menu.component';
import { HeaderComponent } from './components/_common/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { MaterialsComponent } from './components/materials/materials.component';
import { CartComponent } from './components/cart/cart.component';
import { InstallComponent } from './components/install/install.component';
import { ModalComponent } from './components/_common/modal/modal.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogComponent,
    MaterialsComponent,
    CartComponent,
    InstallComponent,
    MenuComponent,
    HeaderComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
