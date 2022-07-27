export interface PunchlinerResponse {
  _id: string;
  lyrics: string;
  punchliners: Punchliner[];
}

export interface Punchliner {
  song: string;
  punchliner: string;
  crew?: string;
}
