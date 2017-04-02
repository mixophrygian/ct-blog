
export const formatDate = (date) => {
  date = new Date(date);
  var month = date.getMonth() + 1;
  var weekdayIndex = date.getDay();
  var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return weekDays[weekdayIndex] + ' ' + month + '/' + date.getDate() +'/' + date.getFullYear();
}