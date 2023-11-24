<script lang="ts">
  import TempoConversione from "./Title/TempoConversione/TempoConversione.svelte";
  import type { TypeParametriLavorazioneIndexNames } from "../utils/types/types";
  import RowItemInput from "./Input/RowItemInput.svelte";
  import RowItemTitle from "./Title/RowItemTitle.svelte";

  export let keyId: TypeParametriLavorazioneIndexNames;
</script>

<div
  class="border-2 dark:border-neutral-500 grid rounded-md overflow-hidden hover:scale-[0.98] active:shadow-xl active:dark:shadow-neutral-900 transition duration-500 active:border-l-8"
>
  <RowItemTitle {keyId}>
    {#if keyId == "tempo"}
      <TempoConversione/>
    {/if}
  </RowItemTitle>
  <RowItemInput {keyId}></RowItemInput>
</div>
