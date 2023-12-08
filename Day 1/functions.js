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
//   Un año es bisiesto si cumple con las siguientes condiciones:

// Es divisible por 4, pero no por 100.
// Si es divisible por 100 debe serlo por 400 también.

  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  }
}