export interface Label {
  id: number;
  name: string;
  funds: number;
  league_id: number;
}

export interface League {
  id: number;
  name: string;
  label: Label[];
}
