import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputComponent} from './components/input.component';
import {ModalComponent} from './components/modal.component';
import {SpinnerComponent} from './components/spinner.component';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule, //
		AppRoutingModule,
		FormsModule,
		InputComponent,
		ReactiveFormsModule,
		ModalComponent,
		SpinnerComponent,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
