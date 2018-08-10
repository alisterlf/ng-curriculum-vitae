import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule, MatCheckboxModule, MatToolbarModule, MatIconModule } from '@angular/material';

@NgModule({
  imports: [MatListModule, MatCheckboxModule, MatToolbarModule, MatIconModule],
  exports: [MatListModule, MatCheckboxModule, MatToolbarModule, MatIconModule],
})
export class CustomMaterialModule { }
