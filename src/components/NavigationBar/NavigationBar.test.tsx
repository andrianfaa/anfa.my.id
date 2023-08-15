import { render, screen } from "@testing-library/react";
import NavigationBar from "./NavigationBar";

describe("test `<Navigation />` component", () => {
  it("should be rendered", () => {
    render(<NavigationBar />);

    const text = screen.getByText(/Navigation/);

    expect(text).toBeVisible();
  });

  it("should render `nav` tag", () => {
    render(<NavigationBar />);

    const navTag = screen.getByTestId("navigation-container");

    expect(navTag).toBeVisible();
    expect(navTag).toBeValid();
  });
});
