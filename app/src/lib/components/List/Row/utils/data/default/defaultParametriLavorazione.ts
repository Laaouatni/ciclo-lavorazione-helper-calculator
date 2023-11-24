import type TypeParametriLavorazione from "../../types/types";
import type { TypeParametriLavorazioneIndexNames } from "../../types/types";

const defaultParametriLavorazione: TypeParametriLavorazione = {
  d: {
    value: 0,
    info: "diametro pezzo",
    unit: "Ø",
    minmax: {
      min: 1,
      max: 100,
    },
  },
  vt: {
    value: 0,
    info: "velocità di taglio",
    unit: "m/min",
    minmax: {
      min: 0,
      max: 1000,
    },
    get formula() {
      const thisParent = defaultParametriLavorazione;
      return {
        value: (thisParent.d.value * Math.PI * thisParent.n.value) / 1000,
        variablesToCheck: ["d", "n"] as TypeParametriLavorazioneIndexNames[],
      };
    },
  },
  n: {
    value: 0,
    info: "numero giri al minuto",
    unit: "g/min",
    minmax: {
      min: 0,
      max: 5000,
    },
    get formula() {
      const thisParent = defaultParametriLavorazione;
      return {
        value: (thisParent.vt.value * 1000) / (Math.PI * thisParent.d.value),
        variablesToCheck: ["vt", "d"] as TypeParametriLavorazioneIndexNames[],
      };
    },
  },
  prof: {
    value: 0,
    info: "profondità di taglio",
    unit: "mm",
    minmax: {
      min: 0,
      max: 5,
    },
    step: 0.1,
  },
  avanz: {
    value: 0,
    info: "avanzamento per ogni giro",
    unit: "mm/giro",
    minmax: {
      min: 0,
      max: 2,
    },
    step: 0.1,
  },
  corsa: {
    value: 0,
    info: "corsa",
    unit: "mm",
    minmax: {
      min: 0,
      max: 500,
    },
  },
  npassate: {
    value: 0,
    info: "numero di passate",
    unit: "passate",
    minmax: {
      min: 0,
      max: 50,
    },
  },
  tempo: {
    value: 0,
    info: "tempo",
    unit: "min",
    minmax: {
      min: 0,
      max: 10,
    },
    step: 0.01,
    get formula() {
      const thisParent = defaultParametriLavorazione;
      return {
        value:
          thisParent.corsa.value /
          (thisParent.avanz.value * thisParent.n.value),
        variablesToCheck: [
          "corsa",
          "avanz",
          "n",
        ] as TypeParametriLavorazioneIndexNames[],
      };
    },
  },
};

export default defaultParametriLavorazione;