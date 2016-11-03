import { Component } from '@angular/core';

@Component({
	selector: 'app-component',
	template: require('./app-component.html'),
	styles: [require('./app-component.less').toString()]
})

export class AppComponent {};