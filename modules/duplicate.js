const inArray = (id, arr) => {
  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i].Title === id) {
        return true;
      }
    }
    return false;
  }
  return false;
};

export default inArray;