import React, { useLayoutEffect, useState } from "react";
import "components/DayListItem.scss";
import DayListItem from "components/DayListItem";

const days = [
  { id: 0, name: "Monday", spots: 1 },
  { id: 1, name: "Tuesday", spots: 1 },
  { id: 2, name: "Wednesday", spots: 1 },
  { id: 3, name: "Thursday", spots: 1 },
  { id: 4, name: "Friday", spots: 1 },
  { id: 5, name: "Saturday", spots: 1 },
  { id: 6, name: "Sunday", spots: 1 },
];

export default function DayList(props) {
  const listDays = days.map((day) => (
    <DayListItem
      key={day.id}
      name={day.name}
      spots={day.spots}
      selected={day.name === props.day}
      setDay={props.setDay}
    />
  ));
  return <ul>{listDays}</ul>;
}
