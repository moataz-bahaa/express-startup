export const calcNumberOfPages = (totalCount, count) =>
  Math.ceil(totalCount / count);

export const parseJson = (str) => JSON.parse(str ? str : '{}');
