import {Component, Input} from "@angular/core";

@Component({
    selector: 'event-thumbnail',
    template: `
       <div class="well hoverwell thumbnail">
            <h2>{{event?.name}}</h2>
            <div>Author: {{event?.author}}</div>
            <div>Sport: {{event?.sport}}</div>
            <div>Date: {{event?.date}}</div>
            <div [ngSwitch]="event?.time">
                Time: {{event?.time}}
                <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
                <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
                <span *ngSwitchDefault>(Normal Start)</span>
            </div>
            <div>
                <span>Location: {{event?.location?.address}}</span>            
                <span class="pad-left">{{event?.location?.city}}, {{event?.location.country}}</span>
            </div>
            <div *ngIf="event?.facebookEventUrl">
                Facebook event URL: {{event?.facebookEventUrl}} 
            </div>
        </div>
        `,
    styles: [`
       .thumbnail { min-height: 260px; }
       .pad-left {margin-left: 10px;} 
       .well div { color: #bbb; }
        `]
})
export class EventThumbnailComponent {
    @Input() event: any;
}