export const isObjectEmpty = myObject => {
  return !Object.keys(myObject).length;
};

export const isArrayEmpty = arrayArg => {
  if (arrayArg && arrayArg.length) {
    return false;
  }
  return true;
};
