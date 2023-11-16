import { DateTime } from "luxon";

/**
 * Convert a DB datestring into another format, defaults to dd/MM/yyyy
 * @param {date} dateString 
 * @param {boolean} time 
 * @param {string} format 
 * @returns 
 */
export const converDateString = (dateString, time = false, format = 'dd/MM/yyyy') => {
  if(!dateString){
    return '-';
  }
  
  const date = DateTime.fromISO(dateString.replace(' ', 'T'));
  date.setLocale("nl");

  const today = `${DateTime.now().c.year} ${DateTime.now().c.month} ${DateTime.now().c.day}`
  const dbDate = `${date.c.year} ${date.c.month} ${date.c.day}`

  if (today == dbDate) { return `Today @ ${date.toFormat('hh:mm')}`}

  if (time) return date.toFormat(time + ' — ' + format);

  return date.toFormat(format);
}