export function camelCase(str: string) {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
    if (+match === 0) return ""; // or if (/\s+/.test(match)) return ""; // remove spaces
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
}
export function pascalCase(str: string) {
  return str
    .split(/[\._\s]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
}
export function wrapQuote(str: string) {
  const regex = /^[a-zA-Z_][a-zA-Z0-9_]*$/;
  return regex.test(str) ? str : `'${str}'`;
}
