import { NgModule } from '@angular/core';
import {
  MdAutocompleteModule, MdButtonModule, MdCardModule, MdIconModule, MdInputModule, MdListModule, MdSnackBarModule,
  MdToolbarModule, MdRadioModule, MdSelectModule
} from '@angular/material';

@NgModule({
  imports: [
    MdCardModule,
    MdButtonModule,
    MdInputModule,
    MdSnackBarModule,
    MdToolbarModule,
    MdIconModule,
    MdAutocompleteModule,
    MdListModule,
    MdRadioModule,
    MdSelectModule
  ],
  exports: [
    MdCardModule,
    MdButtonModule,
    MdInputModule,
    MdSnackBarModule,
    MdToolbarModule,
    MdIconModule,
    MdAutocompleteModule,
    MdListModule,
    MdRadioModule,
    MdSelectModule
  ],
})
export class CustomMaterialModuleModule { }
