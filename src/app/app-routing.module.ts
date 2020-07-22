import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ExamcompleteComponent } from './examcomplete/examcomplete.component';
import { ExammenuComponent } from './exammenu/exammenu.component';
import { ExampageComponent } from './exampage/exampage.component';
import { HomeComponent } from './home/home.component';
import { InvpageComponent } from './invpage/invpage.component';

const routes: Routes = [
  { path: 'examcomplete', component: ExamcompleteComponent },
  { path: 'exammenu', component: ExammenuComponent },
  { path: 'exampage', component: ExampageComponent },
  { path: 'invpage', component: InvpageComponent },
  { path: 'app', component: AppComponent },
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
