export interface LabelProfits {
  labelId: number;
  date: string;
  daily_profit: number;
}

export interface ArtistMetrics {
  artistId: number;
  date: string;
  revenue: number;
  salary: number;
}

export interface ArtistAndArtistMetrics extends Artist {
  artist_metrics: ArtistMetrics[];
}
export interface Artist {
  id: number;
  name: string;
  image: string;
}

export interface Signature {
  id: number;
  labelId: number;
  artistId: number;
  artist: Artist;
}
export interface Label {
  id: number;
  name: string;
  funds: number;
  league_id: number;
  label_profits: LabelProfits[];
}

export interface League {
  id: number;
  name: string;
  label: Label[];
}
