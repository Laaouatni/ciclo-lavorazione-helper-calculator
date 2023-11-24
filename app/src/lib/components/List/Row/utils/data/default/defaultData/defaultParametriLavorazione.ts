import type TypeParametriLavorazione from "../../../types/types";
import type { TypeParametriLavorazioneIndexNames } from "../../../types/types";

function fixMathRoundError(number: number, precision: number = 3): number {
  return Number(
    (Math.round(number * 10 ** precision) / 10 ** precision).toFixed(precision),
  );
}

const defaultParametriLavorazione: TypeParametriLavorazione = {
  d: {
    value: 30,
    info: "diametro pezzo",
    unit: "Ø",
    minmax: {
      min: 1,
      max: 100,
    },
    step: 0.05,
  },
  vt: {
    value: 75,
    info: "velocità di taglio",
    unit: "m/min",
    minmax: {
      min: 0,
      max: 1000,
    },
    step: 0.001,
    get formula() {
      const thisParent = defaultParametriLavorazione;
      return {
        value: fixMathRoundError(
          (thisParent.d.value * Math.PI * thisParent.n.value) / 1000,
        ),
        variablesToCheck: ["d", "n"] as TypeParametriLavorazioneIndexNames[],
      };
    },
  },
  n: {
    value: 800,
    info: "numero giri al minuto",
    unit: "g/min",
    minmax: {
      min: 0,
      max: 5000,
    },
    get formula() {
      const thisParent = defaultParametriLavorazione;
      return {
        value: fixMathRoundError(
          (thisParent.vt.value * 1000) / (Math.PI * thisParent.d.value),
        ),
        variablesToCheck: ["vt", "d"] as TypeParametriLavorazioneIndexNames[],
      };
    },
  },
  prof: {
    value: 0.5,
    info: "profondità di taglio",
    unit: "mm",
    minmax: {
      min: 0,
      max: 5,
    },
    step: 0.1,
  },
  avanz: {
    value: 0.2,
    info: "avanzamento per ogni giro",
    unit: "mm/giro",
    minmax: {
      min: 0,
      max: 2,
    },
    step: 0.1,
  },
  corsa: {
    value: 50,
    info: "corsa",
    unit: "mm",
    minmax: {
      min: 0,
      max: 200,
    },
    step: 0.1,
  },
  npassate: {
    value: 2,
    info: "numero di passate",
    unit: "passate",
    minmax: {
      min: 0,
      max: 50,
    },
  },
  tempo: {
    value: 0.3,
    info: "tempo",
    unit: "min",
    minmax: {
      min: 0,
      max: 10,
    },
    step: 0.001,
    disabled: true,
    get formula() {
      const thisParent = defaultParametriLavorazione;
      return {
        value: fixMathRoundError(
          (thisParent.corsa.value /
            (thisParent.avanz.value * thisParent.n.value)) * thisParent.npassate.value,
        ),
        variablesToCheck: [
          "corsa",
          "avanz",
          "n",
          "npassate"
        ] as TypeParametriLavorazioneIndexNames[],
      };
    },
  },
};

export default defaultParametriLavorazione;
