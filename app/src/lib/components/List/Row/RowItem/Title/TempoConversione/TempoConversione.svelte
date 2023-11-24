<script lang="ts">
  import { parametriLavorazioneStore } from "../../../utils/data/store/store";

  function convertDecimalTimeToReal(decimal) {
    const minutes = Math.floor(decimal);
    const seconds = Math.round((decimal - minutes) * 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }
</script>

<span>{convertDecimalTimeToReal($parametriLavorazioneStore.tempo.value)}</span>

