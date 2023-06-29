const filterObject = (obj, ...filterFields) =>
  Object.keys(obj)
    .filter((key) => filterFields.includes(key))
    .reduce((accumulatedObj, key) => {
      accumulatedObj[key] = obj[key];
      return obj;
    }, {});

module.exports = filterObject;
