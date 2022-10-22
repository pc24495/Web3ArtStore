const isNumericInt = (str) => {
  if (typeof str != "string") return false; // we only process strings!
  return !isNaN(str) && parseInt(str);
};

export default isNumericInt;
