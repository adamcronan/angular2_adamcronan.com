import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'; 
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component'; 

const appRoutes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'about',
		component: AboutComponent
	},
	{
		path: 'resume',
		component: ResumeComponent
	},
	{
		path: 'contact',
		component: ContactComponent
	}
];

export const appRoutingProviders: any[] = [

];


export const routing = RouterModule.forRoot(appRoutes);
