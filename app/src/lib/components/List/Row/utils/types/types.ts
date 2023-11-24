export type TypeParametriLavorazioneIndexNames =
  | "d"
  | "vt"
  | "n"
  | "prof"
  | "avanz"
  | "corsa"
  | "npassate"
  | "tempo";

export type TypeParametriLavorazioneValue = {
  value: number;
  info: string;
  unit: string;
  minmax: {
    min: number,
    max: number
  }
  step?: number;
  disabled?: boolean;
  formula?: {
    value: number,
    variablesToCheck: TypeParametriLavorazioneIndexNames[]
  }
};

type TypeParametriLavorazione = {
  [index in TypeParametriLavorazioneIndexNames]: TypeParametriLavorazioneValue;
};

export default TypeParametriLavorazione;
