import { DateTime } from "luxon";

/**
 * Convert a DB datestring into another format, defaults to dd/MM/yyyy
 * @param {date} dateString 
 * @param {boolean} time 
 * @param {string} format 
 * @returns 
 */
export const convertDateString = (dateString, time = false, format = 'dd/MM/yyyy') => {
  if(!dateString){
    return '-';
  }
  
  const date = DateTime.fromISO(dateString.replace(' ', 'T'));
  date.setLocale("nl");

  const today = `${DateTime.now().c.year} ${DateTime.now().c.month} ${DateTime.now().c.day}`
  const dbDate = `${date.c.year} ${date.c.month} ${date.c.day}`

  if (today == dbDate) { return `Today @ ${date.toFormat('hh:mm')}`}

  if (time) return date.toFormat(date.toFormat('hh:mm') + ' - ' + format);

  return date.toFormat(format);
}

export const setAddress = ( entity ) => {
  let address = [];
  if (entity.street) {
    address.push(entity.street);
  }
  if (entity.city) {
    address.push(entity.city);
  }
  if (entity.state) {
    if (entity.postal) {
      address.push(entity.state + ' ' + entity.postal)
    }else{
      address.push(entity.state);
    }
  }
  if (!entity.state && entity.postal) {
    address.push(entity.postal);
  }
  return address.join(', ');
}