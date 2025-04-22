import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { NgModule } from '@angular/core';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { OrderComponent } from './pages/order/order.component';
import { ReviewComponent } from './pages/review/review.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent, },
  { path: 'login', component: LoginComponent },
  { path: 'category/:category', component: ProductListComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'orders', component: OrderComponent },
  { path: 'review', component: ReviewComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}