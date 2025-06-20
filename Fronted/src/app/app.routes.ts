import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { Page404Component } from './shared/components/page404/page404.component';
import { ProductsInputFieldsComponent } from './pages/products/products-input-fields/products-input-fields.component';

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
        title: 'P�gina no encontrada',
        component: Page404Component
    }
];
