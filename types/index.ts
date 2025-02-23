export interface LiveLocation {
  org_id: string;
  org_name: string;
  building_no: string;
  building_name: string;
  floor_no: string;
  floor_name: string;
  room_no: string;
  room_name: string;
  area_name: string;
  address: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  map_location: string;
  image: string;
  is_active: boolean;
}
export interface HistoryLocation {
  org_id: string;
  org_name: string;
  building_no: string;
  building_name: string;
  floor_no: string;
  floor_name: string;
  room_no: string;
  room_name: string;
  area_name: string;
  address: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  map_location: string;
  image: string;
  is_active: boolean;
  cause: string;
}
