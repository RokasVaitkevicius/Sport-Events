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
var EventsListComponent = (function () {
    function EventsListComponent() {
        this.events = [
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
    }
    EventsListComponent = __decorate([
        core_1.Component({
            selector: 'events-list',
            template: "\n        <div>\n            <h1>Upcoming Sport Events</h1>\n            <hr/>\n            <div class=\"row\">\n                <div *ngFor=\"let event of events\" class=\"col-md-5\">\n                    <event-thumbnail [event]=\"event\"></event-thumbnail>\n                </div>\n            </div>\n        </div>\n        "
        }), 
        __metadata('design:paramtypes', [])
    ], EventsListComponent);
    return EventsListComponent;
}());
exports.EventsListComponent = EventsListComponent;
//# sourceMappingURL=events-list.component.js.map