import {Component, Input} from '@angular/core';
import {NgClass, NgIf} from '@angular/common';
import {FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
	selector: 'app-input',
	standalone: true,
	imports: [NgIf, NgClass, ReactiveFormsModule],
	template: `
		<div class="input-wrapper">
			<div class="input-data">
				<input [type]="type" [formControl]="control" (input)="label === 'Mobile' ? onlyAllowNumbers($event) : null" required />
				<div class="underline"></div>
				<label [ngClass]="{'active error': control.value}" [for]="label">{{ label }}</label>
				<div class="error-msg" *ngIf="control.touched && control.errors?.['required']">Field is required</div>
				<div class="error-msg" *ngIf="control.touched && control.errors?.['email']">Invalid email format</div>
                <img *ngIf="label === 'Password'" class="icon" [src]="!showPassword ? '../../assets/show-password.svg' : '../../assets/hide-password.svg'" alt="icon" (click)="togglePassword()"  alt="icon" />
			</div>
		</div>
	`,
	styles: [],
})
export class InputComponent {
	@Input() control: FormControl = new FormControl();
	@Input() type = 'text';
	@Input() label = '';
	showPassword = false;

	onlyAllowNumbers(event: any) {
		if (event && event.target && event.target.value) {
			event.target.value = event.target.value.replace(/[^0-9]/g, '');
		}
	}

	togglePassword() {
		this.showPassword = !this.showPassword;
		this.type = this.showPassword ? 'text' : 'password';
	}
}
