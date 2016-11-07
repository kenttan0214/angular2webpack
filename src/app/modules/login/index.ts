import { NgModule } from "@angular/core";
import { LoginComponent } from './login-components';
import { LoginRouting } from "./login-routes";

@NgModule({
	declarations:[LoginComponent],
	exports: [LoginComponent],
	imports: [LoginRouting]
})

export class LoginModule {}
