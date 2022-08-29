import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { InputsAndOutputsComponent } from './inputs-and-outputs/inputs-and-outputs.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    DirectivesComponent,
    InputsAndOutputsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
