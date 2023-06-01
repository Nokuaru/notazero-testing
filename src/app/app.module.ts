import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MateriasComponent } from './materias/materias.component';
import { GetpostService } from './getpost.service';
import { LoggedInComponent } from './logged-in/logged-in.component';
import { LoggedOutComponent } from './logged-out/logged-out.component'

@NgModule({
  declarations: [
    AppComponent,
    MateriasComponent,
    LoggedInComponent,
    LoggedOutComponent,
    
  ],
  imports: [
    BrowserModule
    
  ],
  providers: [GetpostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
