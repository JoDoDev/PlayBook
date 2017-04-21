import { NgModule } from '@angular/core';
import {
  MdAutocompleteModule, MdButtonModule, MdCardModule, MdIconModule, MdInputModule, MdSnackBarModule,
  MdToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    MdCardModule,
    MdButtonModule,
    MdInputModule,
    MdSnackBarModule,
    MdToolbarModule,
    MdIconModule,
    MdAutocompleteModule
  ],
  exports: [
    MdCardModule,
    MdButtonModule,
    MdInputModule,
    MdSnackBarModule,
    MdToolbarModule,
    MdIconModule,
    MdAutocompleteModule
  ],
})
export class CustomMaterialModuleModule { }
