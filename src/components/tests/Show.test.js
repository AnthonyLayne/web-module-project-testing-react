import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Show from "./../Show";

const exampleData = {
  name: "test name",
  summary: "test summary",
  seasons: [
    {
      id: 0,
      name: "season 1",
      episodes: [],
    },
    {
      id: 1,
      name: "season 2",
      episodes: [],
    },
  ],
};

test("renders without errors", () => {
  render(<Show show={exampleData} selectedSeason={"none"} />);
});

test("renders Loading component when prop show is null", () => {
  render(<Show show={null} />);

  const loadingComp = screen.queryByTestId("loading-container");

  expect(loadingComp).toBeInTheDocument();
});

test("renders same number of options seasons are passed in", () => {});

test("handleSelect is called when an season is selected", () => {});

test("component renders when no seasons are selected and when rerenders with a season passed in", () => {});
