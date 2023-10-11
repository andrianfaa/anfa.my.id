import { render, screen } from "@testing-library/react";
import QuickCenter from "./QuickCenter.component";

describe("test `<QuickCenter />` component", () => {
  const state = {
    isOpen: true,
    setIsOpen: () => {
      state.isOpen = !state.isOpen;
    }
  };

  it("should be rendered", () => {
    render(
      <QuickCenter
        isOpen={state.isOpen}
        onClickClose={state.setIsOpen}
        testId={{
          parent: "quick-center"
        }}
      />
    );

    const quickCenter = screen.getByTestId("quick-center");

    expect(quickCenter).toBeInTheDocument();
    expect(quickCenter).toBeValid();
  });

  it("should be render button for change app theme", () => {
    render(
      <QuickCenter
        isOpen={state.isOpen}
        onClickClose={state.setIsOpen}
        testId={{
          themeToggler: "toggler"
        }}
      />
    );

    const themeToggler = screen.getByTestId("toggler");

    expect(themeToggler).toBeInTheDocument();
    expect(themeToggler).toBeValid();
  });
});
