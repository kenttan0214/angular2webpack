import { NgModule } from "@angular/core";
import { LoginComponent } from './login-components';

@NgModule({
	declarations:[LoginComponent],
	exports: [LoginComponent]
})

export class LoginModule {}
