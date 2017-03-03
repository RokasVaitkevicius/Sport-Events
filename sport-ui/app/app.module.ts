import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";

import {
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventsRouteActivator,
    EventListResolver
} from './events/index'

import {ToastrService} from "./common/toastr.service";

import {appRoutes} from "./routes";

import {NavBarComponent} from "./nav/navbar.component";
import {Error404Component} from "./errors/404.component";
import {EventsAppComponent} from "./events-app.component";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        NavBarComponent,
        CreateEventComponent,
        Error404Component
    ],
    providers: [
        EventService,
        ToastrService,
        EventsRouteActivator,
        EventListResolver,
        { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState}
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule {}

function checkDirtyState(component: CreateEventComponent) {
    if(component.isDirty)
        return window.confirm('You have not saved this event, do you' +
            'really want to cancel?')
    return true;
}