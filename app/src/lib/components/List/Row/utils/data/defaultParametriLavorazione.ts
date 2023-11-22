import type TypeParametriLavorazione from "../types/types";

const defaultParametriLavorazione: TypeParametriLavorazione = {
  vt: {
    value: 0,
    info: "velocità di taglio",
    unit: "m/min",
  },
  n: {
    value: 0,
    info: "numero giri al minuto",
    unit: "g/min",
  },
  prof: {
    value: 0,
    info: "profondità di taglio",
    unit: "mm",
  },
  avanz: {
    value: 0,
    info: "avanzamento",
    unit: "mm/giro",
  },
  corsa: {
    value: 0,
    info: "corsa",
    unit: "mm",
  },
  npassate: {
    value: 0,
    info: "numero di passate",
    unit: "passate",
  },
};

export default defaultParametriLavorazione;
