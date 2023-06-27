import {Component, ElementRef, Input} from '@angular/core';
import {NgClass} from '@angular/common';
import {ModalService} from '../services/modal.service';

@Component({
	selector: 'app-modal',
	standalone: true,
	imports: [NgClass],
	template: `
		<div class="modal-container" [ngClass]="{hidden: !modal.isModalOpen(modalId)}">
			<div class="modal-card">
				<!-- Modal heading -->
				<div class="modal-header">
					<div>
						<ng-content select="[title]"></ng-content>
						<ng-content select="[subtitle]"></ng-content>
					</div>
					<div class="modal-close-btn">
						<div (click)="closeModal()">&#x2715;</div>
					</div>
				</div>
				<div class="modal-content">
					<ng-content></ng-content>
				</div>
			</div>
		</div>
	`,
	styles: [],
})
export class ModalComponent {
	@Input() modalId = '';

	constructor(
		public modal: ModalService, //
		public el: ElementRef
	) {}

	ngOnInit(): void {
		// This will append the modal to the root of the document so if it's nested it will not be affecting by parent styles
		document.body.appendChild(this.el.nativeElement);
	}

	closeModal() {
		this.modal.toggleModal(this.modalId);
	}

	// Destroys the modal so cleans up memory leaks
	ngOnDestroy(): void {
		document.body.removeChild(this.el.nativeElement);
	}
}
