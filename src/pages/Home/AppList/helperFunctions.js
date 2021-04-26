//handleData will calculate sum of revenue and stuff on the home page -applist-company card
export const handleData = (arr) => {
  //sumObj contains sum of field revenue,adRequest,adResponse, impressions which are initialized with 0
  const sumObj = { revenue: 0, adRequest: 0, adResponse: 0, impressions: 0 };
  arr.forEach((obj) => {
    sumObj["revenue"] += obj["revenue"];
    sumObj["adRequest"] += obj["adRequest"];
    sumObj["adResponse"] += obj["adResponse"];
    sumObj["impressions"] += obj["impressions"];
  });

  function dataFormat(num) {
    // Nine Zeroes for Billions
    return Math.abs(Number(num)) >= 1.0e9
      ? Math.round(Math.abs(Number(num)) / 1.0e9) + "B"
      : // Six Zeroes for Millions
      Math.abs(Number(num)) >= 1.0e6
      ? Math.round(Math.abs(Number(num)) / 1.0e6) + "M"
      : // Three Zeroes for Thousands
      Math.abs(Number(num)) >= 1.0e3
      ? Math.round(Math.abs(Number(num)) / 1.0e3) + "K"
      : Math.abs(Number(num));
  }

  for (let prop in sumObj) {
    //   sumObj[prop] = dataFormat(sumObj[prop])
    sumObj[prop] = dataFormat(sumObj[prop]);
  }
  return sumObj;
};
