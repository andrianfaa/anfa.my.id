import { fireEvent, render, screen } from "@testing-library/react";
import { NextIntlClientProvider, type AbstractIntlMessages } from "next-intl";
import NavigationBar from "./NavigationBar.component";

describe("test `<Navigation />` component", () => {
  let messages: AbstractIntlMessages | undefined = undefined;

  beforeAll(async () => {
    messages = (await import("../../messages/en.json")).default;
  });

  it("should be rendered", () => {
    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <NavigationBar
          testId={{
            parent: "navigation-parent"
          }}
        />
      </NextIntlClientProvider>
    );

    const text = screen.getByTestId("navigation-parent");

    expect(text).toBeInTheDocument();
  });

  it("should render navigation toggler", () => {
    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <NavigationBar
          testId={{
            toggler: "navigation-toggler"
          }}
        />
      </NextIntlClientProvider>
    );

    const navigationToggler = screen.getByTestId("navigation-toggler");

    expect(navigationToggler).toBeInTheDocument();
  });

  it('should contain class "opened" when the navigation toggler is clicked', () => {
    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <NavigationBar
          testId={{
            toggler: "navigation-toggler"
          }}
        />
      </NextIntlClientProvider>
    );

    const navigationToggler = screen.getByTestId("navigation-toggler");

    expect(navigationToggler).toHaveClass("menu-closed");

    // click the toggler
    fireEvent.click(navigationToggler);

    expect(navigationToggler).toHaveClass("menu-opened");
  });
});
