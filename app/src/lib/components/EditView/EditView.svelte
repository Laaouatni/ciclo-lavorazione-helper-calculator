<script lang="ts">
  import CloseOpenButton from "./closeOpenButton/CloseOpenButton.svelte";
  import EditContainer from "./EditContainer/EditContainer.svelte";

  let isOpen: boolean;
</script>

<div class="dark:bg-neutral-900 bg-neutral-100 rounded-t-2xl overflow-hidden">
  <CloseOpenButton bind:isOpen></CloseOpenButton>
  {#if isOpen}
    <EditContainer></EditContainer>
  {/if}
</div>
