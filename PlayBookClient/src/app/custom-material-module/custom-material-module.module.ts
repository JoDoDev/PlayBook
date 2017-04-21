import { NgModule } from '@angular/core';
import {MdButtonModule, MdCardModule, MdIconModule, MdInputModule, MdSnackBarModule, MdToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    MdCardModule,
    MdButtonModule,
    MdInputModule,
    MdSnackBarModule,
    MdToolbarModule,
    MdIconModule
  ],
  exports: [
    MdCardModule,
    MdButtonModule,
    MdInputModule,
    MdSnackBarModule,
    MdToolbarModule,
    MdIconModule
  ],
})
export class CustomMaterialModuleModule { }
