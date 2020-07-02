/**
 * Truncate number with certain decimal places.
 *
 * @param {number} number
 * @param {number} numberOfDecimalPlaces
 *
 * @return {string} Trucated number
 */
function truncateNumberDecimalPlaces(number, numberOfDecimalPlaces) {
  const reg = new RegExp('^-?\\d+(?:\\.\\d{0,' + numberOfDecimalPlaces + '})?', 'g');

  const numberWithoutSurplusDecimalPlaces = number.toString().match(reg)[0];
  const dotIndex = numberWithoutSurplusDecimalPlaces.indexOf('.');

  if (dotIndex === -1) {
    return numberWithoutSurplusDecimalPlaces + '.' + '0'.repeat(numberOfDecimalPlaces);
  }
  const decimalPlacesToAdd = numberOfDecimalPlaces - (numberWithoutSurplusDecimalPlaces.length - dotIndex) + 1;

  return decimalPlacesToAdd > 0 ?
    (numberWithoutSurplusDecimalPlaces + '0'.repeat(decimalPlacesToAdd)) :
    numberWithoutSurplusDecimalPlaces;
}

module.exports = truncateNumberDecimalPlaces;
