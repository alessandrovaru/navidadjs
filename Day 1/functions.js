// Retorna el tipo

export function solution(valor) {
  const typeOfData = {
    number: 'number',
    string: 'string',
    boolean: 'boolean',
    object: 'object',
  }
  const type = typeof valor;

  if (type === typeOfData.number) {
    return typeOfData.number
  }
  if (type === typeOfData.string) {
    return typeOfData.string
  }
  if (type === typeOfData.boolean) {
    return typeOfData.boolean
  }
  if (type === typeOfData.object) {
    return typeOfData.object
  }
}

export function calculateTip(billAmount, tipPercentage) {
  const tip = billAmount * tipPercentage / 100;
  return tip;
}

export function isLeapYear(year) {
  
}