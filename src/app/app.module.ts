import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import {WorkoutRunnerModule} from './workout-runner/workout-runner.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    WorkoutRunnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
