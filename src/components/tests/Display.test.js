import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Display from "./../Display";

import mockFetchShow from "./../../api/fetchShow";
import userEvent from "@testing-library/user-event";
jest.mock("./../../api/fetchShow");

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

test("renders without errors with no props", async () => {
  render(<Display />);
});

test("renders Show component when the button is clicked ", async () => {
  mockFetchShow.mockResolvedValueOnce(exampleData);
  render(<Display />);

  const bttn = screen.getByRole("button");
  userEvent.click(bttn);

  const showContain = await screen.findByTestId("show-container");
  expect(showContain).toBeInTheDocument();
});

test("renders show season options matching your data when the button is clicked", async () => {
  mockFetchShow.mockResolvedValueOnce(exampleData);
  render(<Display />);

  const bttn = screen.getByRole("button");
  userEvent.click(bttn);

  await waitFor(() => {
    const seasonOption = screen.queryAllByTestId("season-option");
    expect(seasonOption).toHaveLength(2);
  });
});

test("display function is called when the button is clicked", async () => {
  mockFetchShow.mockResolvedValueOnce(exampleData);
  const displayFunc = jest.fn();
  render(<Display displayFunc={displayFunc} />);

  const bttn = screen.getByRole("button");
  userEvent.click(bttn);

  await waitFor(() => {
    expect(displayFunc).toHaveBeenCalled();
  });
});
