
export const formatDate = (date) => {
  const workingDate = new Date(date);
  const month = workingDate.getMonth() + 1;
  const weekdayIndex = workingDate.getDay();
  const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return `${weekDays[weekdayIndex]} ${month}/${workingDate.getDate()}`;
  // return `${month}/${date.getDate()}/${date.getFullYear()}`;
}

export const excerptText = (text, length) => {
  if (!text || text.length <= length) return text;
  const ending = "...";
  return text.substring(0, length) + ending;
}