import { SharedMaterialModule } from '@udemy-class/ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    SharedMaterialModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
