export function extractIdFromVariableIdValue(input: string): string | undefined {
  const match = input.match(/(\d+)$/);
  if (match) {
    return `${parseInt(match[1], 10)}`;
  }
  return undefined;
}
