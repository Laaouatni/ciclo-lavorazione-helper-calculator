<script lang="ts">
  import { parametriLavorazioneStore } from "$data/stores/parametriLavorazioneStore";
  import type { TypeParametriLavorazioneIndexNames } from "$types/types";
  export let keyId: TypeParametriLavorazioneIndexNames;

  console.log($parametriLavorazioneStore[keyId].info)
</script>

<div
  class="dark:bg-neutral-900 bg-neutral-100 p-2 flex justify-between items-center select-none"
>
  <div>{$parametriLavorazioneStore[keyId].info}</div>
  <div class="opacity-80 text-sm">
    <slot />
    {$parametriLavorazioneStore[keyId].unit}
  </div>
</div>
