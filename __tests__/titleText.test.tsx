import * as React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {TitleText} from "../src/index"

describe("标题文本组件", () => {
  test("render TitleText --- props text", () => {
    render(<TitleText text="learn react" />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});
