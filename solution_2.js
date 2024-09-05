const sequenceRange = 11;
const sequence = [1, 3, 4, 5, 7, 8, 9, 10, 11];

//Более лаконичное решение :)
//Работает на Node 22.8.0

//Сложность алгоритма O(2n) = O(n) - нужно лишь создать множество со всеми числами.
//Если на вход принимать готовое множество то фактически будет O(n)

//Сложность памяти O(2n) = O(n) - если на вход будет множество чисел, то будет фактически O(n)

const findMissingNumbers = (sequence, sequenceRange) => {
  const sequenceSet = new Set()
  for(let i=1; i<=sequenceRange; i++){
    sequenceSet.add(i)
  }

  return sequenceSet.difference(new Set(sequence))
  
};

console.log("Missing numbers: ", findMissingNumbers(sequence, sequenceRange));
