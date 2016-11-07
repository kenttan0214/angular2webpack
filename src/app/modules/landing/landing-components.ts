import { Component } from '@angular/core';

@Component({
	selector: 'landing-component',
	template: require('./landing-components.html'),
	styles: [require('./landing-components.less').toString()]
})

export class LandingComponent {};