import {Injectable} from '@angular/core';
import {IEvent} from './event.model';

@Injectable()
export class VoterService {
  deleteVoter(event: IEvent, voterName: string) {
    event.voters = event.voters.filter(voter => voter !== voterName);
  }

  addVoter(event: IEvent, voterName: string) {
    event.voters.push(voterName);
  }

  userHasVoted(event: IEvent, voterName: string) {
    return event.voters.some(voter => voter === voterName);
  }
}
