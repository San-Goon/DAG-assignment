export interface ContentType {
  id: number;
  sector_id: number;
  title: string;
  body: string;
  image: string;
  link: string;
  upload_date: string;
  like_cnt: number;
  like_top: number;
}

export interface SectorType {
  id: number;
  sector_kr: string;
  sector_en: string;
  type: string;
  title: string;
  url: string;
  script_kr: string;
  script_en: string;
  sort: number;
}
