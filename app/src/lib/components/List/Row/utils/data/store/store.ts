import { writable } from "svelte/store";
import type TypeParametriLavorazione from "../../types/types";
import defaultParametriLavorazione from "../default/defaultData/defaultParametriLavorazione";

export const parametriLavorazioneStore = writable<TypeParametriLavorazione>(
  defaultParametriLavorazione,
);
