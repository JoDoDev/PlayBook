import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdButtonModule, MdCardModule, MdInputModule, MdSnackBarModule } from '@angular/material';

@NgModule({
  imports: [
    MdCardModule,
    MdButtonModule,
    MdInputModule,
    MdSnackBarModule,
  ],
  exports: [
    MdCardModule,
    MdButtonModule,
    MdInputModule,
    MdSnackBarModule,
  ],
})
export class CustomMaterialModuleModule { }
