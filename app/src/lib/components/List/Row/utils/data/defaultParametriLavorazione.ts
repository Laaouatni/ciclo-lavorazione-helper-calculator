import type TypeParametriLavorazione from "../types/types";

const defaultParametriLavorazione: TypeParametriLavorazione = {
  vt: {
    value: 0,
    info: "velocità di taglio",
    unit: "m/min",
    minmax: {
      min: 0,
      max: 1000
    }
  },
  n: {
    value: 0,
    info: "numero giri al minuto",
    unit: "g/min",
    minmax: {
      min: 0,
      max: 5000
    }
  },
  prof: {
    value: 0,
    info: "profondità di taglio",
    unit: "mm",
    minmax: {
      min: 0,
      max: 10
    },
    step: 0.1
  },
  avanz: {
    value: 0,
    info: "avanzamento per ogni giro",
    unit: "mm/giro",
    minmax: {
      min: 0,
      max: 2
    },
    step: 0.1
  },
  corsa: {
    value: 0,
    info: "corsa",
    unit: "mm",
    minmax: {
      min: 0,
      max: 500
    }
  },
  npassate: {
    value: 0,
    info: "numero di passate",
    unit: "passate",
    minmax: {
      min: 0,
      max: 100
    }
  },
};

export default defaultParametriLavorazione;
