// ponytail: strips diacritics via stdlib Unicode NFD decomposition, no accent map needed
export function normalizeText(str) {
  return (str || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
}
