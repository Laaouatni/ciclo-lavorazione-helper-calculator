<script lang="ts">
  import type { TypeParametriLavorazioneValue } from "../../utils/types/types.js";
  export let thisParametro: TypeParametriLavorazioneValue;

  let bindedRangeInput: number = thisParametro.value;
  let bindedNumberInput: number = thisParametro.value;

  $: thisParametro.value = bindedNumberInput;
</script>

<div class="flex dark:bg-neutral-800">
  <input
    class="flex-1 mx-3"
    type="range"
    bind:value={bindedRangeInput}
    min={thisParametro.minmax.min}
    max={thisParametro.minmax.max}
    step={thisParametro.step || 1}
    on:input={() => {bindedNumberInput = bindedRangeInput;}}
  />
  <input
    type="number"
    class="dark:bg-neutral-800 bg-neutral-200 p-2 w-20 border-l-4 dark:border-l-neutral-700 border-l-neutral-300"
    bind:value={bindedNumberInput}
    min={thisParametro.minmax.min}
    max={thisParametro.minmax.max}
    on:input={() => {bindedRangeInput = bindedNumberInput}}
  />
</div>
