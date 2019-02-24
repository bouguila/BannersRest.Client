import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { BannerAddComponent } from './banner-add/banner-add.component';
import { BannerEditComponent } from './banner-edit/banner-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {
    path: 'banners',
    component: BannerComponent,
    data: { title: 'Banner List' }
  },
  {
    path: 'banner-add',
    component: BannerAddComponent,
    data: { title: 'Banner Add' }
  },
  {
    path: 'banner-edit/:id',
    component: BannerEditComponent,
    data: { title: 'Banner Edit' }
  },
  { path: '',
    redirectTo: '/banners',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    BannerAddComponent,
    BannerEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
