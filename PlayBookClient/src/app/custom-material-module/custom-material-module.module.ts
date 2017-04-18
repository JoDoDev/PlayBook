import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdButtonModule, MdCardModule, MdInputModule} from '@angular/material';

@NgModule({
  imports: [
    MdCardModule,
    MdButtonModule,
    MdInputModule,
  ],
  exports: [
    MdCardModule,
    MdButtonModule,
    MdInputModule,
  ],
})
export class CustomMaterialModuleModule { }
