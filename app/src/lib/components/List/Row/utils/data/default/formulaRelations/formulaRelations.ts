import defaultParametriLavorazione from "../defaultData/defaultParametriLavorazione";
import type { TypeParametriLavorazioneIndexNames } from "../../../types/types";

type TypeRelations = {
  [index in TypeParametriLavorazioneIndexNames]?: TypeParametriLavorazioneIndexNames[];
};

export default function relations() {
  const result: TypeRelations = {};

  Object.entries(defaultParametriLavorazione)
    .filter(([key, value]) => value.formula)
    .forEach(([key, value]) => {
      const { formula } = value;
      formula?.variablesToCheck.forEach(
        (thisVarThatNeedToBeChecked: TypeParametriLavorazioneIndexNames) => {
          if (!result[thisVarThatNeedToBeChecked]) {
            result[thisVarThatNeedToBeChecked] = [];
          }

          /* @ts-ignore */
          result[thisVarThatNeedToBeChecked].push(
            key as TypeParametriLavorazioneIndexNames,
          );
        },
      );
    });

  return result;
}
