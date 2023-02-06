import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginViewComponent } from './views/login/login.component';
import { HomeViewComponent } from './views/home/home.component';
import { CatalogViewComponent } from './views/catalog/catalog-parent-component';
import { CatalogChildComponent } from './views/catalog/catalog-child-component/catalog-child-component';

@NgModule({
  declarations: [
    LoginViewComponent,
    HomeViewComponent,
    CatalogViewComponent,
    CatalogChildComponent,
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'login', component: LoginViewComponent },
      { path: 'home', component: HomeViewComponent },
      { path: 'catalog', component: CatalogViewComponent },
      { path: '**', redirectTo: 'login' },
    ]),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
