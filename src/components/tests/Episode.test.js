import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Episode from "./../Episode";

const imageMissing = {
  id: 1,
  image: null,
  name: "",
  season: 1,
  number: 1,
  summary: "test episode",
  runtime: 1,
};

const testEpisode = {
  id: 1,
  image: "https://i.ibb.co/2FsfXqM/stranger-things.png",
  name: "",
  season: 1,
  number: 1,
  summary: "test episode",
  runtime: 1,
};

test("renders without error", () => {
  render(<Episode episode={testEpisode} />);
});

test("renders the summary test passed as prop", () => {
  render(<Episode episode={testEpisode} />);

  const summaryStatement = screen.queryByText(/test episode/i);

  expect(summaryStatement).toBeInTheDocument();
  expect(summaryStatement).toHaveTextContent("test episode");
  expect(summaryStatement).toBeTruthy();
});

test("renders default image when image is not defined", () => {
  render(<Episode episode={imageMissing} />);

  screen.queryAllByAltText("./stranger_things.png");
});
