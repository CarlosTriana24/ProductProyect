import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { Page404Component } from './components/page404/page404.component';
import { ProductsInputFieldsComponent } from './components/products/products-input-fields/products-input-fields.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        title: 'Inicio productos',
        component: ProductsComponent
    },
    {
        path:'productos-formulario',
        title: 'Productos formulario',
        component: ProductsInputFieldsComponent
    },
    {
        path: '**',
        title: 'Página no encontrada',
        component: Page404Component
    }
];
