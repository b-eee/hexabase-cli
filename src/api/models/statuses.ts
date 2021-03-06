export interface StatusName {
  en: string;
  ja: string;
}

export interface GetStatusesElemResponse {
  status_id: string;
  display_id: string;
  name: string;
  displayed_name: string;
  sort_id: number;
  x: number;
  y: number;
}
