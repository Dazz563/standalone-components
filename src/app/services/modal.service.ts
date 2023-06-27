import {Injectable} from '@angular/core';

// Define an interface for a Modal object, with `id` and `visible` properties.
interface IModal {
	id: string;
	visible: boolean;
}

@Injectable({
	providedIn: 'root',
})
export class ModalService {
	// Initialize an array of `IModal` objects.
	private modals: IModal[] = [];

	// Constructor is empty since there is no additional setup required.
	constructor() {}

	// Define a method to register a new modal by adding it to the `modals` array.
	register(id: string) {
		this.modals.push({
			id,
			visible: false,
		});
		console.log(this.modals);
	}

	// Define a method to unregister a modal by removing it from the `modals` array.
	unregister(id: string) {
		this.modals = this.modals.filter((element) => element.id !== id);
	}

	// Define a method to check whether a modal with the given `id` is open or not.
	isModalOpen(id: string): boolean {
		return !!this.modals.find((element) => element.id === id)?.visible;
	}

	// Define a method to toggle the visibility of a modal with the given `id`.
	toggleModal(id: string) {
		const modal = this.modals.find((element) => element.id === id);

		if (modal) {
			modal.visible = !modal.visible;
		}
	}
}
