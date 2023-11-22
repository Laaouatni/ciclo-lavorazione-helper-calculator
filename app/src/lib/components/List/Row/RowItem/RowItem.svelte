<script lang="ts">
  import RowItemInput from "./Input/RowItemInput.svelte";

  import type { TypeParametriLavorazioneValue } from "../utils/types/types";
  import RowItemTitle from "./Title/RowItemTitle.svelte";

  export let thisParametro: TypeParametriLavorazioneValue;
</script>

<div
  class="border-2 dark:border-neutral-500 grid rounded-md overflow-hidden hover:scale-[0.98] transition"
>
  <RowItemTitle {thisParametro}></RowItemTitle>
  <RowItemInput bind:thisParametro></RowItemInput>
</div>
