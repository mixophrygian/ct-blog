
export const formatDate = (date) => {
  date = new Date(date);
  var month = date.getMonth() + 1;
  var weekdayIndex = date.getDay();
  var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return `${weekDays[weekdayIndex]} ${month}/${date.getDate()}`;
  // return `${month}/${date.getDate()}/${date.getFullYear()}`;
}

export const excerptText = (text: string, length: number) => {
  if(text.length <= length) return text;
  const ending = "...";
  return text.substring(0, length) + ending; 
}