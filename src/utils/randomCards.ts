export function getRandomPairs<Value>(
  sourceArray: Value[],
  pairCount: number
): Value[] {
  const result: Value[] = [];
  const selectedElements: Value[] = [];

  let remainedValues = [...sourceArray];

  for (let i = 0; i < pairCount; i++) {
    const randomIndex = Math.floor(Math.random() * remainedValues.length);
    const element = remainedValues[randomIndex];
    remainedValues = remainedValues.filter((value) => value !== element);
    selectedElements.push(element, element);
  }

  while (selectedElements.length > 0) {
    const randomIndex = Math.floor(Math.random() * selectedElements.length);
    result.push(selectedElements.splice(randomIndex, 1)[0]);
  }

  return result;
}
