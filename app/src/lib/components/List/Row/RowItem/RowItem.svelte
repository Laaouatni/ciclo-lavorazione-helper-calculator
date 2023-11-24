<script lang="ts">
  import type { TypeParametriLavorazioneIndexNames } from "../utils/types/types";
  import RowItemInput from "./Input/RowItemInput.svelte";
  import RowItemTitle from "./Title/RowItemTitle.svelte";

  export let keyId: TypeParametriLavorazioneIndexNames;
</script>

<!-- active:fixed active:top-[50%] active:left-[50%] active:-translate-x-[50%] active:-translate-y-[50%] active:z-10 active:w-[80%] active:outline active:outline-[100vmin] active:outline-neutral-900/90 active:isolate -->
<div
  class="border-2 dark:border-neutral-500 grid rounded-md overflow-hidden hover:scale-[0.98] transition"
>
  <RowItemTitle {keyId}></RowItemTitle>
  <RowItemInput {keyId}></RowItemInput>
</div>
