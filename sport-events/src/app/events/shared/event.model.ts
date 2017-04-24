export interface IEvent {
  id: number,
  author: string,
  name: string,
  sport: string,
  date: Date,
  time: string,
  price?: number,
  phoneNumber: string,
  duration: number,
  location?: {
    address: string,
    city: string,
    country: string
  },
  facebookEventUrl?: string,
  voters: string[]
}
