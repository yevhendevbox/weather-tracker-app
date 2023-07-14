function isString(value) {
  return typeof value === 'string';
}
function isNotEmptyString(value) {
  return isString(value) && value.length > 0;
}
function isNavLabelValid(label) {
  const NAV_LABELES = ['Home', 'Favorite'];
  return isNotEmptyString(label) && NAV_LABELES.includes(label);
}

export function isNavLinkItemValid({ href, label }) {
  return [isNotEmptyString(href), isNavLabelValid(label)].every(Boolean);
}