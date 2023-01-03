<script lang="ts">
  import CalculatorModel from "../model/calculatorModel";
  import Button from "./button.svelte";
  import Display from "./display.svelte";
  import Line from "./line.svelte";

  let calc = new CalculatorModel();
  const typedNumber = (num: string) => (calc = calc.typedNumber(num));
  const typedDot = () => (calc = calc.typedDot());
  const typedOperation = (op: string) => (calc = calc.typedOperation(op));
  const cleanDisplay = () => (calc = calc.cleanDisplay());
  const calculate = () => (calc = calc.calculate());
</script>

<div class="calc">
  <Display value={calc.value} />
  <Line>
    <Button featured triple text="AC" onClick={cleanDisplay} />
    <Button text="/" operation onClick={typedOperation} />
  </Line>
  <Line>
    <Button text="7" onClick={typedNumber} />
    <Button text="8" onClick={typedNumber} />
    <Button text="9" onClick={typedNumber} />
    <Button text="*" operation onClick={typedOperation} />
  </Line>
  <Line>
    <Button text="4" onClick={typedNumber} />
    <Button text="5" onClick={typedNumber} />
    <Button text="6" onClick={typedNumber} />
    <Button text="+" operation onClick={typedOperation} />
  </Line>
  <Line>
    <Button text="1" onClick={typedNumber} />
    <Button text="2" onClick={typedNumber} />
    <Button text="3" onClick={typedNumber} />
    <Button text="-" operation onClick={typedOperation} />
  </Line>
  <Line>
    <Button text="0" double onClick={typedNumber} />
    <Button text="," onClick={typedDot} />
    <Button text="=" featured onClick={calculate} />
  </Line>
</div>

<style>
  .calc {
    background-color: var(--cor-fundo);
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 500px;
    padding: 10px;
    border-radius: 10px;
  }
</style>
