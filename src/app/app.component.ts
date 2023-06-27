import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {ModalService} from './services/modal.service';
import {SpinnerService} from './services/spinner.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
	public showSpinner$ = this.spinnerService.showSpinner;

	userForm: FormGroup;
	/**
	 * Declaring formControls outside of the formGroup will persist the FormControl type inferance
	 * this will allow you to pass controls to child components with inputs registered as :FormControl = new FormControl()
	 * Otherwise the new FormGroup declaration will change it's type to abstractControl.
	 */
	// Form Group
	id = new FormControl('');
	name = new FormControl('', [Validators.required]);
	email = new FormControl('', [Validators.required, Validators.email]);
	address = new FormControl('', [Validators.required]);
	phone = new FormControl('', [Validators.required]);
	password = new FormControl('', [Validators.required]);

	constructor(
		private modal: ModalService, //
		private spinnerService: SpinnerService
	) {
		this.userForm = new FormGroup({
			id: this.id,
			name: this.name,
			email: this.email,
			address: this.address,
			phone: this.phone,
			password: this.password,
		});
	}

	ngOnInit(): void {
		// Simulate a 5 second load time
		// this.spinnerService.show();
		// setTimeout(() => {
		// 	this.spinnerService.hide();
		// }, 2000);

		this.modal.register('createUser');
		this.modal.register('updateUser');
		this.modal.register('deleteUser');
	}

	users = [
		{
			id: 1,
			name: 'John Doe',
			email: 'test@johndoe.com',
			phone: '1234567890',
			address: '123 Main St',
		},
		{
			id: 2,
			name: 'Jane Doe',
			email: 'test@johndoe.com',
			phone: '1234567890',
			address: '123 Main St',
		},
		{
			id: 3,
			name: 'John Smith',
			email: 'test@johndoe.com',
			phone: '1234567890',
			address: '123 Main St',
		},
	];

	selectedUser = {
		id: 0,
		name: '',
		email: '',
		phone: '',
		address: '',
	};

	submit() {
		console.log(this.userForm.value);
		// TODO: Add user to users array
		this.users.push(this.userForm.value);
		// Reset form
		this.userForm.reset();
	}

	deleteUser(UserToDelete: any) {
		this.users = this.users.filter((user) => user.id !== UserToDelete.id);
		this.modal.toggleModal('deleteUser');
	}

	// Create user
	openCreateModal() {
		this.userForm.reset();
		this.modal.toggleModal('createUser');
	}

	// Update user
	openUpdateModal(user: any) {
		this.selectedUser = user;
		this.modal.toggleModal('updateUser');
		this.userForm.patchValue(user);
	}

	// Delete user
	openDeleteModal(user: any) {
		this.selectedUser = user;
		this.modal.toggleModal('deleteUser');
		this.userForm.patchValue(user);
	}

	// Prevent memeory leaks
	ngOnDestroy(): void {
		this.modal.unregister('createUser');
		this.modal.unregister('updateUser');
		this.modal.unregister('deleteUser');
	}
}
