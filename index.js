const sequenceRange = 11;
const sequence = [1, 3, 4, 5, 7, 8, 9, 10, 11];

//Сложность алгоритма O(1/2n) = O(n) - фактичести проходится половина массива, но константы сокращаются
//Сложность памяти O(1) - если отбросить входящий массив чисел, использование памяти всегда константно

const findMissingNumbers = (sequence, sequenceRange) => {
  const missing = [];
  const defaultSum = sequenceRange + 1;

  let leftMissedOffset = 0;
  let rightMissedOffset = 0;

  const isOdd = sequenceRange % 2 === 0;

  const wholeLength = isOdd ? sequenceRange : sequenceRange - 1;

  for (let i = 1; i <= wholeLength / 2; i++) {
    const leftNumber = sequence[i - 1 - leftMissedOffset];

    if (leftNumber !== i) {
      missing.push(i);
      leftMissedOffset++;
    }

    const rightNumber = sequence[sequence.length - i + rightMissedOffset];

    const numbersSum = rightNumber + i;

    if (numbersSum !== defaultSum) {
      const diff = defaultSum - numbersSum;
      const missed = rightNumber + diff;
      missing.push(missed);
      rightMissedOffset++;
    }
  }

  if (missing.length < 2 && !isOdd) {
    const index = wholeLength / 2;
    const value = sequence[index];
    if (value !== index + 1) {
      missing.push(index + 1);
    }
  }

  return missing;
};

console.log("Missing numbers: ", findMissingNumbers(sequence, sequenceRange));
