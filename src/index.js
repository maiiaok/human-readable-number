module.exports = function toReadable(number) {
  const ones = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const teens = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];
  const hundreds = [
    '',
    'one hundred',
    'two hundred',
    'three hundred',
    'four hundred',
    'five hundred',
    'six hundred',
    'seven hundred',
    'eight hundred',
    'nine hundred',
  ];
  const underHundreds = () => {
    return number % 10 === 0
      ? `${tens[Math.floor((number % 100) / 10)]}`
      : `${tens[Math.floor((number % 100) / 10)]} ${ones[number % 10]}`;
  };
  if (number < 10) return ones[number];
  if (number < 20) return teens[number % 10];
  if (number < 100) return underHundreds(number);
  if (number < 1000) {
    const h = hundreds[Math.floor(number / 100)];
    const num = number % 100;
    if (num === 0) return `${h}`;
    if (num < 10) return `${h} ${ones[num]}`;
    if (num < 20) return `${h} ${teens[num % 10]}`;
    if (num < 100) return `${h} ${underHundreds(number)}`;
  }
  return '';
};
