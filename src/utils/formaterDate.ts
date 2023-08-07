export const formatUnixtimeToDate = (unixtime: number): string => {
  const unixtimeInSeconds = unixtime * 1000;
  const dateObject = new Date(unixtimeInSeconds);
  const day = dateObject.getUTCDate().toString().padStart(2, "0");
  const month = (dateObject.getUTCMonth() + 1).toString().padStart(2, "0");
  const year = dateObject.getUTCFullYear().toString();
  return `${month}/${day}/${year}`;
};
