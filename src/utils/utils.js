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
    cssClass: "allOrNothingThinking",
    description: "A place holder description",
  },
  overgeneralization: {
    title: "Overgeneralization",
    shortTitle: "Overgeneralization",
    cssClass: "overgeneralization",
    description: "A place holder description",
  },
  mentalFilter: {
    title: "Mental Filter",
    shortTitle: "Mental Filter",
    cssClass: "mentalFilter",
    description: "A place holder description",
  },
  discountingThePositive: {
    title: "Discounting The Positives",
    shortTitle: "Discounting Positives",
    cssClass: "discountingThePositive",
    description: "A place holder description",
  },
  jumpingToConclusions: {
    title: "Jumping to Conclusions",
    shortTitle: "Jumping To Conclusions",
    cssClass: "jumpingToConclusions",
    description: "A place holder description",
  },
  magnifyingOrMinifying: {
    title: "Magnifying Or Minifying",
    shortTitle: "Magnifying/Minifying",
    cssClass: "magnifyingOrMinifying",
    description: "A place holder description",
  },
  emotionalReasoning: {
    title: "Emotional Reasoning",
    shortTitle: "Emotional Reasoning",
    cssClass: "emotionalReasoning",
    description: "A place holder description",
  },
  shouldStatements: {
    title: "'Should' Statements",
    shortTitle: "Should Statements",
    cssClass: "shouldStatements",
    description: "A place holder description",
  },
  labeling: {
    title: "Labeling",
    shortTitle: "Labeling",
    cssClass: "labeling",
    description: "A place holder description",
  },
  personalizationAndBlame: {
    title: "Personalization and Blame",
    shortTitle: "Personalization",
    cssClass: "personalizationAndBlame",
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
