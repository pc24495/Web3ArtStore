const isNumeric = (str) => {
  if (typeof str != "string") return false; // we only process strings!
  return !isNaN(str) && !isNaN(parseFloat(str)) && parseInt(str);
};

export default isNumeric;
