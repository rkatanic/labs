import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../pages";

describe("Home", (): void => {
  it("should render", (): void => {
    const { baseElement } = render(<Home />);

    expect(baseElement).toBeInTheDocument();
  });
});
