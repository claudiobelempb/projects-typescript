export const validMail = (email: string) => {
  const format = /[a-z0-9_.-]+@[a-z0-9_.-]*[a-z0-9_.-]+.[a-z]{2,4}$/;

  if (email.match(format)) {
    return true;
  } else {
    return false;
  }
};

interface TypeLimitWords {
  word: string;
  limite: number;
  end: string;
}

export const limitWords = (
  word: string,
  limite: number,
  end: string
): string => {
  let str = word.trim();

  let arrayWords = str.split(' ');
  let newArrayWords: string[] = [];

  for (let i: number = 0; i < limite; i++) {
    newArrayWords.push(arrayWords[i]);
  }
  let size = arrayWords.length;

  let endWith = end === '' ? '...' : ' ' + end;
  let result = limite < size ? newArrayWords.join(' ') + endWith : str;

  return result;
};
