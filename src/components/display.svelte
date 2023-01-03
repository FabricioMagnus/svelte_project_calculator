<script lang="ts">
  import { validate_store } from "svelte/internal";

  export let value: string;

  $: fontSize = validate_store.length > 20 ? "small" : `s-${value.length}`;
</script>

<div class={`display ${fontSize}`}>
  <span class="span_display">{value}</span>
</div>

<style>
  .span_display {
    color: black;
  }
  .display {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    background-color: aliceblue;
    align-items: center;
    font-size: 3.7rem;
    padding: 0px 5px;
    overflow-x: hidden;
    margin: 2px 1px;
    border-radius: 3px;
  }
  .s-10 {
    font-size: 3.4rem;
  }
  .s-11 {
    font-size: 3.1rem;
  }
  .s-12 {
    font-size: 2.9rem;
  }
  .s-13 {
    font-size: 2.8rem;
  }
  .s-14 {
    font-size: 2.6rem;
  }
  .s-15 {
    font-size: 2.4rem;
  }
  .s-16 {
    font-size: 2.25rem;
  }
  .s-17 {
    font-size: 2.1rem;
  }
  .s-18 {
    font-size: 2rem;
  }
  .s-19 {
    font-size: 1.9rem;
  }
  .s-20 {
    font-size: 1.8rem;
  }
  .pequena {
    font-size: 1.7rem;
  }
</style>
