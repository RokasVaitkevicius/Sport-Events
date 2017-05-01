export interface IEvent {
  id: number,
  author: number,
  name: string,
  sportType: number,
  date: Date,
  timeFrom: string,
  timeTill: string,
  price: number,
  phoneNumber: string,
  location?: {
    address: string,
    city: string,
    country: string
  },
  description?: string,
  facebookEventUrl?: string,
  voters: string[],
  imageUrl?: string,
  dateUpdated: Date
}
