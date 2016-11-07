import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app-component';
import { HeaderModule } from './components';
import { LoginModule, LandingModule } from './modules';

import { Routing } from './app-routes';

@NgModule({
    declarations: [AppComponent],
    imports: [Routing, BrowserModule, HeaderModule, LoginModule, LandingModule],
    bootstrap: [AppComponent]
})

export class AppModule {}