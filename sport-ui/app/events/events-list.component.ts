import {Component} from "@angular/core";

@Component({
    selector: 'events-list',
    template: `
        <div>
            <h1>Upcoming Sport Events</h1>
            <hr/>
            <event-thumbnail [event]="event1"></event-thumbnail>
        </div>
        `
})
export class EventsListComponent {
    event1 = {
        id: 1,
        author: 'Rokas Pokas',
        name: 'Table Tennis',
        sport: 'table-tennis',
        date: '9/26/2036',
        time: '10:00 am',
        phoneNumber: '866666999',
        location: {
            address: '155-12',
            city: 'Kaunas',
            country: 'Lithuania'
        }
    }
}