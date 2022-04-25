import React, { useReducer } from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Show from "./../Show";
import userEvent from "@testing-library/user-event";

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

test("renders same number of options seasons are passed in", () => {
  render(<Show show={exampleData} selectedSeason={"none"} />);

  const seasonOptions = screen.queryAllByTestId("season-option");

  expect(seasonOptions).toHaveLength(2);
});

test("handleSelect is called when an season is selected", () => {
  const handleSelect = jest.fn();
  render(<Show show={exampleData} selectedSeason={"none"} handleSelect={handleSelect} />);

  const selected = screen.getByLabelText(/Select A Season/i);
  userEvent.selectOptions(selected, ["1"]);

  expect(handleSelect).toBeCalled();
});

test("component renders when no seasons are selected and when rerenders with a season passed in", () => {});
