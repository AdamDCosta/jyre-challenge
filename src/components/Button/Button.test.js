import { render, screen } from "@testing-library/react";

import Button from "./Button";

describe("Testing the button component", () => {

  it("should render the button", () => {

    render(<Button />)

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  })
});  