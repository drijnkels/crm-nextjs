import { DateTime } from "luxon";

/**
 * Convert a DB date string into another format, defaults to dd/MM/yyyy
 * @param {date} dateString 
 * @param {boolean} time 
 * @param {string} format 
 * @returns {string}
 */
export const convertDateString = (dateString: string, time: boolean = false, format: string = 'dd/MM/yyyy'): string => {
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

type EntityAddress = {
  street: string,
  city: string,
  state: string,
  postal: string,

}
/**
 * Attempt formatting an address based on the available data for an Entity
 * Could be a user or organisation
 * @param entity
 * @return string
 */
export const setAddress = ( entity: EntityAddress ): string => {
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