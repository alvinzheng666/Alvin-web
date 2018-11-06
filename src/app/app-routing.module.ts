import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BioComponent } from './bio/bio.component';
import { ResearchComponent } from './research/research.component';
import { TeachingComponent } from './teaching/teaching.component';
import { CvComponent } from './cv/cv.component';

const routes: Routes = [
  { path: '', component: BioComponent },
  { path: 'research', component: ResearchComponent },
  { path: 'teaching', component: TeachingComponent },
  { path: 'cv', component: CvComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
