export function getShortName(name: string, cutoffLength: number) {
  if (!name) {
    return "";
  }

  return name.length >= cutoffLength
    ? `${name.slice(0, cutoffLength - 3)}...`
    : name;
}
