import { withRouter } from "react-router";
export default withRouter;

export const formatDate = date => {
  const workingDate = new Date(date);
  const month = workingDate.getMonth() + 1;
  const weekdayIndex = workingDate.getDay();
  const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return `${weekDays[weekdayIndex]} ${month}/${workingDate.getDate()}`;
};

export const mySQLDate = date => {
  return date.toISOString().split("T")[0];
};

export const UUID = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

const labelMap = {
  allOrNothingThinking: "All or Nothing",
  overgeneralization: "Overgeneralization",
  mentalFilter: "Mental Filter",
  discountingThePositive: "Discounting Positives",
  jumpingToConclusions: "Jumping To Conclusions",
  magnifyingOrMinifying: "Magnifying/Minifying",
  emotionalReasoning: "Emotional Reasoning",
  shouldStatements: "Should Statements",
  labeling: "Labeling",
  personalizationAndBlame: "Personalization",
};

export const displayLabel = label => {
  return labelMap[label];
};
