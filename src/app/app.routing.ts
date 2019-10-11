import {ModuleWithProviders} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { CreateComponent } from './components/create/create.component'; // importacoin de varibles del app.rountig.
import {DetailComponent} from './components/detail/detail.component';
import {UpdateComponent} from './components/update/update.component';

const appRoutes: Routes = [

{path : ' ', component: AboutComponent },
{path : 'Sobremi', component: AboutComponent },
{path : 'Proyecto', component: ProjectsComponent },
{path : 'Crear-proyecto', component: CreateComponent},
{path : 'Contacto', component : ContactComponent},
{path : 'Actualizar/:id', component : UpdateComponent},
{path : 'Detail/:id', component : DetailComponent},

{path : '**', component : ErrorComponent}// ruta404:ruta para errores
];

export const appRoutingProviders: any[] = []; // exportamos el servicio
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes); // exportamos el modulo.
