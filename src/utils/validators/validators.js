export const required = (value) => {
  if (value) return undefined;
  return 'Error message';

}

export const maxLengthCreator = (maxLength) => value => {
  if (value.length <= maxLength) {
    return undefined;
  } else {
    return `Max length ${maxLength} symbols`;
  }

}