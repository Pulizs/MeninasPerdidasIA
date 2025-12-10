export interface Contact {
  id: string;
  name: string;
  relation: string;
  phone: string; // Plain number for tel: link
  whatsapp: string; // Formatted for wa.me link
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}