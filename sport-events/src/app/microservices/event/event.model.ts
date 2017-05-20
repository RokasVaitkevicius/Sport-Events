import {IVoter} from '../voter/voter.model';

export interface IEvent {
  eventId: number;
  userId: number;
  name: string;
  sportTypeId: number;
  eventDate: Date;
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
  sportTypeName: string;
  authorName: string;
}

export interface INewEvent {
  name: string;
  eventDate: Date;
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
  imageUrl?: string;
  userId: number;
  sportTypeId: number;
}
