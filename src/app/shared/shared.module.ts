import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '@app/shared/angular-material/angular-material.module';

@NgModule({
  imports: [CommonModule, AngularMaterialModule],
  exports: [CommonModule, AngularMaterialModule]
})
export class SharedModule {}
