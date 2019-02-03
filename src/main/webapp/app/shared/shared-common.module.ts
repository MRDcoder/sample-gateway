import { NgModule } from '@angular/core';

import { SampleGatewaySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [SampleGatewaySharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [SampleGatewaySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class SampleGatewaySharedCommonModule {}
