import { NgModule } from "@angular/core";
import { ModuleWithProviders } from '@angular/core'
import { LandingComponent } from './landing-components';

@NgModule({
	declarations:[LandingComponent],
	exports: [LandingComponent]
})

export class LandingModule {}