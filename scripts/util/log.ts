type Colors = {
  red: 31;
  green: 32;
  yellow: 33;
  blue: 34;
  magenta: 35;
  cyan: 36;
  white: 37;
  reset: 0;
};
const colors: Colors = {
  red: 31,
  green: 32,
  yellow: 33,
  blue: 34,
  magenta: 35,
  cyan: 36,
  white: 37,
  reset: 0,
};
export function wrapColor(s: string, color: keyof Colors) {
  return `\u001b[${colors[color]}m${s}\u001b[0m`;
}

export function info(...s: string[]) {
  console.log(wrapColor("[INFO]", "cyan"), ...s);
}

export function error(...s: string[]) {
  console.error(wrapColor("[ERROR]", "red"), ...s);
}

export function warning(...s: string[]) {
  console.warn(wrapColor("[WARNING]", "yellow"), ...s);
}
