<script lang="ts">
  import { parametriLavorazioneStore } from "../../utils/data/store/store";
  import type { TypeParametriLavorazioneIndexNames } from "../../utils/types/types";
  import relations from "../../utils/data/default/formulaRelations/formulaRelations";

  export let keyId: TypeParametriLavorazioneIndexNames;

  function changeValuesOnOtherInputs() {
    if(relations()[keyId]) {
      const parametersToChange = relations()[keyId];
  
      parametersToChange?.forEach((parameterToChangeKey) => {
        $parametriLavorazioneStore[parameterToChangeKey].value =
          $parametriLavorazioneStore[parameterToChangeKey].formula?.value ?? 0;
      });
    }
  }
</script>

<div class="flex dark:bg-neutral-800">
  <input
    class="flex-1 mx-3"
    type="range"
    bind:value={$parametriLavorazioneStore[keyId].value}
    min={$parametriLavorazioneStore[keyId].minmax.min}
    max={$parametriLavorazioneStore[keyId].minmax.max}
    step={$parametriLavorazioneStore[keyId].step || 1}
    on:input={() => {
      changeValuesOnOtherInputs();
    }}
  />
  <input
    type="number"
    class="dark:bg-neutral-800 bg-neutral-200 p-2 w-28 border-l-4 dark:border-l-neutral-700 border-l-neutral-300"
    bind:value={$parametriLavorazioneStore[keyId].value}
    min={$parametriLavorazioneStore[keyId].minmax.min}
    max={$parametriLavorazioneStore[keyId].minmax.max}
    on:input={() => {
      changeValuesOnOtherInputs();
    }}
  />
</div>
