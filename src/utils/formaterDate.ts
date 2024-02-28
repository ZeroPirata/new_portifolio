import { format } from "date-fns-tz";
import { Locale } from "locale";

export const formatLocalDatetime = (unixtime: number) => {
  const dateObject = new Date(unixtime * 1000);
  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const formattedDate = format(dateObject, "dd/MM/yyyy", {
    timeZone: userTimezone,
  });
  return formattedDate;
};
