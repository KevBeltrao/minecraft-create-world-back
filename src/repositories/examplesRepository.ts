interface Data {
  a: number;
  b: number;
}

const fakeDB: Data[] = [
  { a: 1, b: 1 },
  { a: 1, b: 2 },
  { a: 1, b: 2 },
  { a: 1, b: 1 },
];

export const getExamplesByB = (bValue?: number): Data[] => {
  if (bValue !== undefined) {
    const bValuedData = fakeDB.filter(({ b }) => b === bValue);

    return bValuedData;
  }

  return fakeDB;
};
