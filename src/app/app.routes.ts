import { Routes } from '@angular/router';

import { CatalogueComponent } from './Visiteurs/Catalogue';
import { CommentCaMarcheComponent } from './Visiteurs/garantie';
import { AnimalDetailsComponent } from './Visiteurs/DetailsAnimal';
import { ContactComponent } from './Visiteurs/Contact';
import { ConseilsFellahComponent } from './conseils-fellah';
import { AccueilComponent } from './landingpage';
export const routes: Routes = [
{ path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'conseils-fellah', component: ConseilsFellahComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'comment-ca-marche', component: CommentCaMarcheComponent },
  { path: 'animal/:id', component: AnimalDetailsComponent },

  { path: '**', redirectTo: 'AccueilComponent' }
];