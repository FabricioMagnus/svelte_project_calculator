<script lang="ts">
  export let text: string = "";
  export let triple: boolean = false;
  export let double: boolean = false;
  export let operation: boolean = false;
  export let featured: boolean = false;

  export let onClick: (valor: string) => void = () => {};
</script>

<button
  class={"botao"}
  on:click={() => {
    onClick(text);
  }}
  class:triple
  class:double
  class:operation
  class:featured
>
  {text}
</button>

<style>
  .botao {
    margin: 0;
    border: 1px solid var(--cor-fundo);
    flex-basis: 25%;
    height: 70px;
    border-radius: 3px;
  }

  .triple {
    flex-basis: 75%;
  }
  .double {
    flex-basis: 50%;
  }
  .operation {
    background-color: orange;
    color: white;
  }
  .featured {
    background-color: red;
    color: white;
  }
</style>
