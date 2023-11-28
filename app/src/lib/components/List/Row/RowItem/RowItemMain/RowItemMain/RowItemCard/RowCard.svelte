<script lang="ts">
  import TempoConversione from "./Title/TempoConversione/TempoConversione.svelte";
  import type { TypeParametriLavorazioneIndexNames } from "$types/types";
  import RowItemInput from "./Input/RowItemInput.svelte";
  import RowItemTitle from "./Title/RowItemTitle.svelte";

  export let keyId: TypeParametriLavorazioneIndexNames;
</script>

<div
  class="grid rounded-md overflow-hidden transition duration-500"
>
  <RowItemTitle {keyId}>
    {#if keyId == "tempo"}
      <TempoConversione />
    {/if}
  </RowItemTitle>
  <RowItemInput {keyId}></RowItemInput>
</div>
