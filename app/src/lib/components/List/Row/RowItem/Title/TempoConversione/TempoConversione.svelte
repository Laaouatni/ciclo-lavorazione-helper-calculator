<script lang="ts">
  import { parametriLavorazioneStore } from "../../../utils/data/store/store";

  function convertDecimalTimeToReal(decimal) {
    const minutes = Math.floor(decimal) % 60;
    const hours = Math.floor(decimal / 60);
    const seconds = Math.round((decimal - Math.floor(decimal)) * 60);
    return `${hours > 0 ? `${hours}:` : ""}${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
</script>

<span>{convertDecimalTimeToReal($parametriLavorazioneStore.tempo.value)}</span>

