/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Weekday {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: Weekday): boolean =>{
  return day === Weekday.Saturday || day === Weekday.Sunday
}

const dayNow: Weekday = Weekday.Monday;
console.log(isWeekend(dayNow))