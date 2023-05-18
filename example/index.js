import { isHoliday, getHolidays } from '@itenium/date-holidays-be';

const formatDate = dt => dt.getFullYear() + '-' + (dt.getMonth() + 1).toString().padStart(2, '0') + '-' + dt.getDate().toString().padStart(2, '0');

const holiday = isHoliday(new Date(2023, 0, 1));
console.log('2023-01-01 is a holiday?', holiday);
console.log('');


const holidays = getHolidays(2023);
console.log('Amount of holidays in 2023', holidays.length);

holidays.forEach(holiday => console.log(`${formatDate(holiday.date)}: ${holiday.labels.nl}`));
