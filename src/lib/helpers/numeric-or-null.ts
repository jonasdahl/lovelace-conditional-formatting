export function numericOrNull(value: unknown) {
  const numericValue = Number(value);
  if (isNaN(numericValue)) {
    return null;
  }
  return numericValue;
}
