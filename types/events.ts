export interface Location {
  'is_unknown': boolean;
  'country': string;
  'administration_area_level_1': string | null;
  'administration_area_level_2': string | null;
  'location': string;
  'address': string | null;
  'name': string;
  'zip_code': number | null;
  'latitude': number | null;
  'longitude': number | null;
}

export interface Theme {
  'logo_image': string | null;
  'background_image': {
    'url': string;
    'mime_type': string;
  },
  'accent_colour': string;
}
export interface PriceRange {
  'minimum': {
    'amount': number;
    'currency': string;
  },
  'maximum': {
    'amount': number;
    'currency': string;
  }
}

export interface EventInterface {
  'id': string;
  'name': string;
  'slug': string;
  'category': string;
  'status': string;
  'has_live': boolean;
  'starts_at': string;
  'ends_at': string;
  'location': Location,
  'theme': Theme,
  'price_range': PriceRange
}
