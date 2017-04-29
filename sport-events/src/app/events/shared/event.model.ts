export interface IEvent {
  id: number,
  author: string,
  name: string,
  sportType: number,
  date: Date,
  timeFrom: number,
  timeTill: number,
  price?: number,
  phoneNumber: string,
  location?: {
    address: string,
    city: string,
    country: string
  },
  facebookEventUrl?: string,
  voters: string[]
}
