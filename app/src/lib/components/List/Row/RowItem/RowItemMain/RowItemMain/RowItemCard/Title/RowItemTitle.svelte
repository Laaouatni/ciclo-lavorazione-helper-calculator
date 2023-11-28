<script lang="ts">
  import { parametriLavorazioneStore } from "$data/stores/parametriLavorazioneStore";
  import type { TypeParametriLavorazioneIndexNames } from "$types/types";
  export let keyId: TypeParametriLavorazioneIndexNames;

  let { info, unit } = $parametriLavorazioneStore[keyId];
</script>

<div
  class="dark:bg-neutral-900 bg-neutral-100 p-2 flex justify-between items-center select-none"
>
  <div>{info}</div>
  <div class="opacity-80 text-sm"><slot /> {unit}</div>
</div>
