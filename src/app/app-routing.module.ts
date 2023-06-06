import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/pages/login/login.component';
import { ManagerComponent } from './shared/pages/manager/manager.component';

export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "manager",
        component: ManagerComponent
    },
    {
        path: '**',
        redirectTo: "login"
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]

})
export class AppRoutingModule { }
