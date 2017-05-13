import {IVoter} from '../voter/voter.model';

export interface IEvent {
  eventId: number;
  userId: number;
  name: string;
  sportTypeId: number;
  date: Date;
  timeFrom: string;
  timeTill: string;
  price: number;
  phoneNumber: string;
  location?: {
    address: string;
    city: string;
    country: string
  };
  description?: string;
  facebookEventUrl?: string;
  voters: IVoter[];
  imageUrl?: string;
  dateUpdated: Date;
}
