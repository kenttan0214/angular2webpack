import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app-component';
import { HeaderModule } from './header';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, HeaderModule],
    bootstrap: [AppComponent]
})

export class AppModule {}