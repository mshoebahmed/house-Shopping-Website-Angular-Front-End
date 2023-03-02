export interface HousingLocation {
  id:number,
    name: string,
    city: string,
    state: string,
    photo: Blob,
    availableUnits: number,
    wifi: boolean,
    laundry: boolean
}
