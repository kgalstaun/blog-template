const ObjectHelper = {
  find(object, query) {
    if (typeof object !== "object")
      throw Error("Object parameter was not of type object");
    let value;
    for (var key in object) {
      value = object[key];
      if (typeof value === "object") {
        this.find(value, query);
      }
      if (value === query) {
        break;
      }
    }
    return value;
  },
  groupBy(arr, key) {
    let result = [];
    result = arr.reduce((r, a) => {
      r[a[key]] = r[a[key]] || [];
      r[a[key]].push(a);
      return r;
    }, Object.create(null));
    return result;
  },
};

export default ObjectHelper;
