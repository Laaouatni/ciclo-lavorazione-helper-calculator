<script lang="ts">
  import { parametriLavorazioneStore } from "../../utils/data/store/store.js";
  import type { TypeParametriLavorazioneIndexNames } from "../../utils/types/types.js";

  export let keyId: TypeParametriLavorazioneIndexNames;

  let { minmax, step, value } = $parametriLavorazioneStore[keyId];

  let bindedRangeInput: number = value;
  let bindedNumberInput: number = value;

  $: value = bindedNumberInput;
</script>

<div class="flex dark:bg-neutral-800">
  <input
    class="flex-1 mx-3"
    type="range"
    bind:value={bindedRangeInput}
    min={minmax.min}
    max={minmax.max}
    step={step || 1}
    on:input={() => {
      bindedNumberInput = bindedRangeInput;
    }}
  />
  <input
    type="number"
    class="dark:bg-neutral-800 bg-neutral-200 p-2 w-20 border-l-4 dark:border-l-neutral-700 border-l-neutral-300"
    bind:value={bindedNumberInput}
    min={minmax.min}
    max={minmax.max}
    on:input={() => {
      bindedRangeInput = bindedNumberInput;
    }}
  />
</div>
