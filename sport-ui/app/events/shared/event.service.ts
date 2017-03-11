import {Injectable} from "@angular/core";
import {Subject, Observable} from "rxjs/RX";
import Events = NodeJS.Events;
import {IEvent} from "./event.model";

@Injectable()
export class EventService {
    getEvents(): Observable<IEvent[]> {
        let subject = new Subject<IEvent[]>();
        setTimeout(() => {subject.next(EVENTS); subject.complete(); },
            100);
        return subject;
    }

    getEvent(id: number) : IEvent {
        return EVENTS.find(event => event.id === id);
    }

    saveEvent(event) {
        event.id = 999;
        EVENTS.push(event);
    }
}

    const EVENTS : IEvent[] = [
    {
        id: 1,
        author: 'Rokas Pokas',
        name: 'Table Tennis',
        sport: 'table-tennis',
        date: new Date('2036/09/05'),
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
        date: new Date('2036/09/05'),
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
        date: new Date('2036/09/05'),
        time: '12:00 am',
        phoneNumber: '866666999',
        location: {
            address: '155-12',
            city: 'Kaunas',
            country: 'Lithuania'
        }
    }
];