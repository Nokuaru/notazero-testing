import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MateriasComponent } from './materias/materias.component';
import { GetpostService } from './getpost.service'

@NgModule({
  declarations: [
    AppComponent,
    MateriasComponent,
    
  ],
  imports: [
    BrowserModule
    
  ],
  providers: [GetpostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
