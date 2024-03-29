import { render, screen } from "@testing-library/react";
import Portal from "./Portal.component";

describe("test <Portal /> component", () => {
  beforeAll(() => {
    render(<div id="portal"></div>);
  });

  it("should be render portal and it's content", () => {
    render(
      <Portal>
        <p data-testid="portal-content">Portal</p>
      </Portal>
    );

    const elementByTestId = screen.getByTestId("portal-content");
    const elementByTest = screen.getByText("Portal");

    expect(elementByTestId).toBeInTheDocument();
    expect(elementByTest).toBeInTheDocument();
  });
});
