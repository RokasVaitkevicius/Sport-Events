"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var RX_1 = require("rxjs/RX");
var EventService = (function () {
    function EventService() {
    }
    EventService.prototype.getEvents = function () {
        var subject = new RX_1.Subject();
        setTimeout(function () { subject.next(EVENTS); subject.complete(); }, 100);
        return subject;
    };
    EventService.prototype.getEvent = function (id) {
        return EVENTS.find(function (event) { return event.id === id; });
    };
    EventService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], EventService);
    return EventService;
}());
exports.EventService = EventService;
var EVENTS = [
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
//# sourceMappingURL=event.service.js.map