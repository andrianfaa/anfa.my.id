import { render, screen } from "@testing-library/react";
import Portal from "./Portal.component";

describe("test <Portal /> component", () => {
  it("should be render portal", () => {
    render(
      <>
        <div id="portal"></div>

        <Portal>
          <p data-testid="portal">Portal</p>
        </Portal>
      </>
    );

    const elementByTestId = screen.getByTestId("portal");
    const elementByTest = screen.getByText("Portal");

    expect(elementByTestId).toBeInTheDocument();
    expect(elementByTest).toBeInTheDocument();
  });
});
