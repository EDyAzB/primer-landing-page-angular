import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductsDatailComponent } from './pages/products-datail/products-datail.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    { path:'', component: HomeComponent},
    { path:'products', component: ProductsComponent},
    { path:'products/:id', component: ProductsDatailComponent},
    { path:'contact', component: ContactComponent},
    { path:'**', redirectTo: '', pathMatch: 'full'}
   
];
