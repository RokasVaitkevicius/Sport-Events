import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';

import {EventService} from "./events/shared/event.service";
import { NavbarComponent } from './nav/navbar/navbar.component';
import {EventsRouteActivator} from "./events/event-details/event-route-activator.service";
import { CreateEventComponent } from './events/create-event/create-event.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { ProfileComponent } from './user/profile/profile.component';
import { LoginComponent } from './user/login/login.component';
import { Error404Component } from './errors/error404/error404.component';
import {AuthService} from "./user/shared/auth.service";
import {EventListResolver} from "./events/shared/event-list-resolver.service";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app-routing.module";


@NgModule({
  declarations: [
    AppComponent,
    EventDetailsComponent,
    NavbarComponent,
    CreateEventComponent,
    EventListComponent,
    EventThumbnailComponent,
    ProfileComponent,
    LoginComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    EventsRouteActivator,
    EventListResolver,
    AuthService,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

function checkDirtyState(component: CreateEventComponent) {
  if(component.isDirty)
    return window.confirm('You have not saved this event, do you' +
      'really want to cancel?')
  return true;
}