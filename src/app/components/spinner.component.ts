import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
	selector: 'app-spinner',
	standalone: true,
	imports: [CommonModule],
	template: `
		<div class="spinner-overlay">
			<div class="lds-circle">
				<div></div>
			</div>
			<div class="loading-text">Loading</div>
		</div>
	`,
	styles: [],
})
export class SpinnerComponent {}
