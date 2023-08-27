type CountWordsProps = (text: string | undefined) => number;

const regex = () => {
  return /[a-zA-Z0-9\u0392-\u03c9\u0400-\u04FF]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|[\u00E4\u00C4\u00E5\u00C5\u00F6\u00D6]+|[\u0531-\u0556\u0561-\u0586\u0559\u055A\u055B]+/g;
};

export const countWords: CountWordsProps = (text) => {
  if (text && text.length > 0) {
    const matchedArray = text.match(regex());
    const wordsCount = matchedArray?.length ?? 0;
    return wordsCount;
  } else {
    return 0;
  }
};
