'use strict';

/**
 * @param {string} date
 * @param {string[]} fromFormat
 * @param {string[]} toFormat
 *
 * @returns {string}
 */
function formatDate(date, fromFormat, toFormat) {
  // write code here
  const words = date.split(fromFormat[3]);
  const orgDate = {};
  let result = '';

  for (let i = 0; i < words.length; i++) {
    const key = fromFormat[i];

    orgDate[key] = words[i];
  }

  if (orgDate['YYYY'] === undefined) {
    const shortYear = orgDate['YY'];

    if (shortYear < 30) {
      orgDate['YYYY'] = '20' + shortYear;
    } else {
      orgDate['YYYY'] = '19' + shortYear;
    }
  }

  if (orgDate['YY'] === undefined) {
    orgDate['YY'] = orgDate['YYYY'].substring(2);
  }

  for (let i = 0; i < 2; i++) {
    result += orgDate[toFormat[i]] + toFormat[3];
  }

  result += orgDate[toFormat[2]];

  return result;
}

module.exports = formatDate;
