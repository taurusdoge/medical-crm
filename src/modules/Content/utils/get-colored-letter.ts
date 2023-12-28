const enum Color {
  green = "#49D7AF",
  purple = "#8259F7",
  blue = "#597EF7",
  orange = "#FEA400",
}

const letterToColorMap: Record<string, string> = {
  a: Color.green,
  b: Color.green,
  c: Color.green,
  d: Color.green,
  e: Color.green,
  f: Color.green,
  g: Color.green,
  h: Color.purple,
  i: Color.purple,
  j: Color.purple,
  k: Color.purple,
  l: Color.purple,
  m: Color.purple,
  n: Color.blue,
  o: Color.blue,
  p: Color.blue,
  q: Color.blue,
  r: Color.blue,
  s: Color.blue,
  t: Color.orange,
  u: Color.orange,
  v: Color.orange,
  w: Color.orange,
  x: Color.orange,
  y: Color.orange,
  z: Color.orange,
};

const defaultColor = "#597EF7";

export function getLetterBackgroundColor(letter: string): string {
  if (!letter) {
    return defaultColor;
  }

  return letterToColorMap[letter.toLowerCase()] || defaultColor;
}
