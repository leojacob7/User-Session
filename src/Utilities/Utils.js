export const newDate = (dateObj) => new Date(dateObj.split(" ").splice(0,3).toString())

export const dateSortSasc = function (date1, date2) {
    // This is a comparison function that will result in dates being sorted in
    // ASCENDING order. As you can see, JavaScript's native comparison operators
    // can be used to compare dates. This was news to me.
    if (date1 > date2) return 1;
    if (date1 < date2) return -1;
    return 0;
  };