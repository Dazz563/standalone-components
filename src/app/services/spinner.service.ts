import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class SpinnerService {
	private _showSpinner: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
	public readonly showSpinner = this._showSpinner.asObservable();

	show(): void {
		this._showSpinner.next(true);
	}

	hide(): void {
		this._showSpinner.next(false);
	}
}
