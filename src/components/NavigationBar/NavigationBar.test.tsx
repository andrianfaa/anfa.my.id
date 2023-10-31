import { fireEvent, render, screen } from "@testing-library/react";
import { NextIntlClientProvider, type AbstractIntlMessages } from "next-intl";
import NavigationBar from "./NavigationBar.component";

jest.mock("next/router", () => jest.requireActual("next-router-mock"));

describe("test `<Navigation />` component", () => {
  let localize: AbstractIntlMessages | undefined = undefined;

  beforeAll(async () => {
    localize = {
      ...require(`../../localization/pages/index/en.json`),
      ...require(`../../localization/shared/en.json`)
    };
  });

  it("should be rendered", () => {
    render(
      <NextIntlClientProvider locale="en" messages={localize}>
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
      <NextIntlClientProvider locale="en" messages={localize}>
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
      <NextIntlClientProvider locale="en" messages={localize}>
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
