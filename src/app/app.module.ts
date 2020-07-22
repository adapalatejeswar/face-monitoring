import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ExammenuComponent } from './exammenu/exammenu.component';
import { HomeComponent } from './home/home.component';
import { ExampageComponent } from './exampage/exampage.component';
import { ExamcompleteComponent } from './examcomplete/examcomplete.component';
import { InvpageComponent } from './invpage/invpage.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { WebcamModule } from 'ngx-webcam';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    ExammenuComponent,
    HomeComponent,
    ExampageComponent,
    ExamcompleteComponent,
    InvpageComponent,
    HeaderComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    WebcamModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
