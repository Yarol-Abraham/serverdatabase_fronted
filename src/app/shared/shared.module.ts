import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { ManagerComponent } from './pages/manager/manager.component';

@NgModule({
  declarations: [
    LoginComponent,
    ManagerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent,
    ManagerComponent
  ]
})
export class SharedModule { }
