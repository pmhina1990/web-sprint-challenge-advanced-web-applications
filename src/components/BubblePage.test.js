//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading
import React from "react";
import { render, screen } from "@testing-library/react";
import ColorList from "./ColorList"
import Bubbles from "./Bubbles";
import BubblePage from "./BubblePage";

test("Renders BubblePage without errors", () => {
  // Finish this test
  render(<BubblePage/>)
});

test("Fetches data and renders the bubbles on mounting", () => {
  // Finish this test
  const test = screen.findByTestId(/bubbles/i)
  expect (test).toBeTruthy();
});

