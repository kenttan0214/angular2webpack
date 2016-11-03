import { Component } from '@angular/core';

@Component({
	selector: 'header-component',
	template: require('./header-component.html'),
	styles: [require('./header-component.less').toString()]
})

export class HeaderComponent {};