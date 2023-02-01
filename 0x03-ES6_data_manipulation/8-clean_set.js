export default function cleanSet(set, string) {
  const strings = [];
  if (string === '' || typeof string !== 'string') return '';
  set.forEach((s) => {
    if (typeof s === 'string' && s.startsWith(string)) {
      strings.push(s.slice(string.length));
    }
  });
  return strings.join('-');
}
