import {Component} from "@angular/core";

@Component({
    selector: 'events-list',
    template: `
        <div>
            <h1>Upcoming Sport Events</h1>
            <hr/>
            <div class="row">
                <div *ngFor="let event of events" class="col-md-5">
                    <event-thumbnail [event]="event"></event-thumbnail>
                </div>
            </div>
        </div>
        `
})
export class EventsListComponent {
    events = [
        {
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
            },
            facebookEventUrl: "fb.com/1236544"
        },
        {
            id: 2,
            author: 'Rokas Pokas',
            name: 'Footbal',
            sport: 'football',
            date: '9/26/2036',
            time: '8:00 am',
            phoneNumber: '866666999',
            location: {
                address: '155-12',
                city: 'Kaunas',
                country: 'Lithuania'
            }
        },
        {
            id: 3,
            author: 'Rokas Pokas',
            name: 'Basketball',
            sport: 'basketball',
            date: '9/26/2036',
            time: '12:00 am',
            phoneNumber: '866666999',
            location: {
                address: '155-12',
                city: 'Kaunas',
                country: 'Lithuania'
            }
        }

    ]

}