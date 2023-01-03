export default class CalculatorModel {
  #value: string;
  #accumulator: number;
  #displayClean: boolean;
  #operation: string;

  constructor(
    value: string = null,
    accumulator: number = null,
    displayClean: boolean = false,
    operation: string = null
  ) {
    this.#value = value;
    this.#accumulator = accumulator;
    this.#displayClean = displayClean;
    this.#operation = operation;
  }

  get value() {
    return this.#value?.replace(".", ",") || "0";
  }

  typedNumber(newValue: string) {
    return new CalculatorModel(
      this.#displayClean || !this.#value ? newValue : this.#value + newValue,
      this.#accumulator,
      false,
      this.#operation
    );
  }

  typedDot() {
    return new CalculatorModel(
      this.#value?.includes(".") ? this.#value : this.#value + ".",
      this.#accumulator,
      false,
      this.#operation
    );
  }

  cleanDisplay() {
    return new CalculatorModel();
  }

  typedOperation(nextOperation: string) {
    return this.calculate(nextOperation);
  }

  calculate(nextOperation: string = null) {
    const accumulator = !this.#operation
      ? parseFloat(this.#value)
      : eval(`${this.#accumulator} ${this.#operation} ${this.#value}`);
    const displayValue = !this.#operation ? this.#value : `${accumulator}`;
    return new CalculatorModel(
      displayValue,
      accumulator,
      nextOperation ? true : false,
      nextOperation
    );
  }
}
