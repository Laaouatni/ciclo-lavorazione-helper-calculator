export type TypeParametriLavorazioneIndexNames =
  | "dIniziale"
  | "vt"
  | "n"
  | "prof"
  | "avanz"
  | "corsa"
  | "npassate"
  | "tempo"
  | "dFinale"

export type TypeParametriLavorazioneValue = {
  value: number;
  hidden?: boolean;
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
  },
};

type TypeParametriLavorazione = {
  [index in TypeParametriLavorazioneIndexNames]: TypeParametriLavorazioneValue;
};

export default TypeParametriLavorazione;
