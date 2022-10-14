const areAllPropertiesNull = (obj) => {
  return Object.values(obj).every((value) => value === null || value === " ");
};

export default areAllPropertiesNull;
