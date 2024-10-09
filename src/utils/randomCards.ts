export function getRandomPairs<Value>(
  sourceArray: Value[],
  pairCount: number
): Value[] {
  const result: Value[] = [];
  const selectedElements: Value[] = [];

  for (let i = 0; i < pairCount; i++) {
    const randomIndex = Math.floor(Math.random() * sourceArray.length);
    const element = sourceArray[randomIndex];
    selectedElements.push(element, element);
  }

  while (selectedElements.length > 0) {
    const randomIndex = Math.floor(Math.random() * selectedElements.length);
    result.push(selectedElements.splice(randomIndex, 1)[0]);
  }

  return result;
}
