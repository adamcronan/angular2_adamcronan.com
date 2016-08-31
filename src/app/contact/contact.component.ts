import { Component, OnInit } from '@angular/core';
import {
	Input,
	trigger,
	state,
	style,
	transition,
	animate
} from '@angular/core';

import { Email } from './email.ts';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.css'],
  
})

export class ContactComponent implements OnInit {

	model = new Email('', '', ''); 

	submitted = false; 

	onSubmit() { this.submitted = true; }

	//Remove this when we're done

	get diagnostic() { return JSON.stringify(this.model); }

	active = true;

	reset() {
		this.model = new Email('', '', '');
		this.active = false;
		setTimeout(() => this.active = true, 0);
	}


	ngOnInit() {

	}

}
