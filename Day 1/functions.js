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
  // Verificar si el año es un entero positivo
  if (!Number.isInteger(year) || year <= 0) {
    return false;
  }

  // Reglas para determinar si es un año bisiesto
  if (year % 4 === 0) {
    if (year % 100 === 0) {
        return year % 400 === 0;
    }
    return true;
  }
  return false;

}