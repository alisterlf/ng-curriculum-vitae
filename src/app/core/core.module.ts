import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MomentIntegrationModule } from '@app/core/moment-integration/moment-integration.module';

@NgModule({
  imports: [CommonModule, HttpClientModule, MomentIntegrationModule],
  declarations: [],
  providers: []
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
