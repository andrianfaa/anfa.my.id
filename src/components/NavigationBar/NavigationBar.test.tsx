import { render, screen } from "@testing-library/react";
import NavigationBar from "./NavigationBar.component";

describe("test `<Navigation />` component", () => {
  it("should be rendered", () => {
    render(
      <NavigationBar
        testId={{
          parent: "navigation-parent"
        }}
      />
    );

    const text = screen.getByTestId("navigation-parent");

    expect(text).toBeVisible();
  });

  it("should render navigation toggler", () => {
    render(
      <NavigationBar
        testId={{
          toggler: "navigation-toggler"
        }}
      />
    );

    const navigationToggler = screen.getByTestId("navigation-toggler");

    expect(navigationToggler).toBeVisible();
    expect(navigationToggler).toBeValid();
  });
});
