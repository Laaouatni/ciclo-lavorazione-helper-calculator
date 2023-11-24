<script lang="ts">
  import { parametriLavorazioneStore } from "../../utils/data/store/store";
  import type { TypeParametriLavorazioneIndexNames } from "../../utils/types/types";
  export let keyId: TypeParametriLavorazioneIndexNames;

  let { info, unit } = $parametriLavorazioneStore[keyId];
</script>

<div
  class="dark:bg-neutral-900 bg-neutral-100 p-2 flex justify-between items-center"
>
  <div class="">{info}</div>
  <div class="opacity-80 text-sm">{unit}</div>
</div>
