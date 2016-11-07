import { NgModule } from "@angular/core";
import { ModuleWithProviders } from '@angular/core'
import { LandingComponent } from './landing-components';
import { LandingRouting } from './landing-routes'


@NgModule({
	declarations:[LandingComponent],
	exports: [LandingComponent],
	imports: [LandingRouting]
})

export class LandingModule {}