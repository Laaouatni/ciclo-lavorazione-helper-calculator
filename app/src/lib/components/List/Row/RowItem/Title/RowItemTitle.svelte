<script lang="ts">
  import type { TypeParametriLavorazioneValue } from "../../utils/types/types.ts";
  export let thisParametro: TypeParametriLavorazioneValue;
</script>

<div class="dark:bg-neutral-900 bg-neutral-100 p-2 flex justify-between items-center">
  <div>{thisParametro.info}</div>
  <div class="opacity-80 text-sm">{thisParametro.unit}</div>
</div>
