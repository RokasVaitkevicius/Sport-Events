import {Injectable} from "@angular/core";
import {Subject} from "rxjs/RX";
import Events = NodeJS.Events;

@Injectable()
export class EventService {
    getEvents() {
        let subject = new Subject();
        setTimeout(() => {subject.next(EVENTS); subject.complete(); },
            100);
        return subject;
    }

    getEvent(id: number) {
        return EVENTS.find(event => event.id === id);
    }
}

    const EVENTS = [
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
];