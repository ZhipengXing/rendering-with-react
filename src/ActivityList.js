import React from "react";
import Activity from "./Activity";
import "./ActivityList.css";

function ActivityList({ activities }) {
  const activityList = activities.map((activity, index) => {
    return (
      <Activity
        time={activity.time}
        description={activity.description}
        key={index}
      />
    );
  });
  return activityList;
}

export default ActivityList;
