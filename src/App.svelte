<script lang="ts">
  import Calculator from "../src/components/calculator.svelte";
</script>

<main>
  <section>
    <Calculator />
  </section>
</main>

<style>
  :global(body) {
    background-color: black;
  }
  :root {
    --cor-fundo: #555;
  }
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.6;
  }
</style>
