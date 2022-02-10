/**
 * Truncate number with certain decimal places.
 *
 * @param {number} number
 * @param {number} numberOfDecimalPlaces
 *
 * @return {string} Trucated number
 */
function truncateNumberDecimalPlaces(
  number: number,
  numberOfDecimalPlaces: number
): string {
  const reg = new RegExp(
    '^-?\\d+(?:\\.\\d{0,' + numberOfDecimalPlaces + '})?',
    'g'
  );

  const numberAfterRegex = number.toString().match(reg) || [];
  const numberWithoutSurplusDecimalPlaces = numberAfterRegex[0];
  const dotIndex = numberWithoutSurplusDecimalPlaces.indexOf('.');

  if (dotIndex === -1) {
    return (
      numberWithoutSurplusDecimalPlaces +
      '.' +
      '0'.repeat(numberOfDecimalPlaces)
    );
  }
  const decimalPlacesToAdd =
    numberOfDecimalPlaces -
    (numberWithoutSurplusDecimalPlaces.length - dotIndex) +
    1;

  return decimalPlacesToAdd > 0
    ? numberWithoutSurplusDecimalPlaces + '0'.repeat(decimalPlacesToAdd)
    : numberWithoutSurplusDecimalPlaces;
}

export default truncateNumberDecimalPlaces;
