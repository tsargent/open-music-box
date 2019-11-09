import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

test("shows the text", () => {
  const { getByText } = render(<App />);

  expect(getByText("Open Music Box")).toBeInTheDocument();
});
