import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
import { TabsComponent } from './tabs/tabs.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
// import {NgxMaskModule } from 'ngx-mask'
import  {NgxMaskModule}  from 'ngx-mask';


@NgModule({
  declarations: [
    ModalComponent,
    TabsContainerComponent,
    TabsComponent,
    InputComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  
  ],
  exports:[
    ModalComponent,
    TabsComponent,
    TabsContainerComponent,
    InputComponent,
    AlertComponent
  ]
})
export class SharedModule { }
