export type TypeParametriLavorazioneIndexNames =
  | "vt"
  | "n"
  | "prof"
  | "avanz"
  | "corsa"
  | "npassate";

export type TypeParametriLavorazioneValue = {
  value: number;
  info: string;
  unit: string;
};

type TypeParametriLavorazione = {
  [index in TypeParametriLavorazioneIndexNames]: TypeParametriLavorazioneValue;
};

export default TypeParametriLavorazione;
