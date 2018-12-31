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

export const labelMap = {
  allOrNothingThinking: {
    title: "All-or-Nothing Thinking",
    shortTitle: "All or Nothing",
    description: "A place holder description",
  },
  overgeneralization: {
    title: "Overgeneralization",
    shortTitle: "Overgeneralization",
    description: "A place holder description",
  },
  mentalFilter: {
    title: "Mental Filter",
    shortTitle: "Mental Filter",
    description: "A place holder description",
  },
  discountingThePositive: {
    title: "Discounting The Positives",
    shortTitle: "Discounting Positives",
    description: "A place holder description",
  },
  jumpingToConclusions: {
    title: "Jumping to Conclusions",
    shortTitle: "Jumping To Conclusions",
    description: "A place holder description",
  },
  magnifyingOrMinifying: {
    title: "Magnifying Or Minifying",
    shortTitle: "Magnifying/Minifying",
    description: "A place holder description",
  },
  emotionalReasoning: {
    title: "Emotional Reasoning",
    shortTitle: "Emotional Reasoning",
    description: "A place holder description",
  },
  shouldStatements: {
    title: "'Should' Statements",
    shortTitle: "Should Statements",
    description: "A place holder description",
  },
  labeling: {
    title: "Labeling",
    shortTitle: "Labeling",
    description: "A place holder description",
  },
  personalizationAndBlame: {
    title: "Personalization and Blame",
    shortTitle: "Personalization",
    description: "A place holder description",
  },
};

export const shortLabel = label => {
  return labelMap[label].shortTitle;
};

export const labelTitle = label => {
  return labelMap[label].title;
};

export const labelDescription = label => {
  return labelMap[label].description;
};
