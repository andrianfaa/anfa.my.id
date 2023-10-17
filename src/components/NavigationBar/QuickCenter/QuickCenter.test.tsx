import { render, screen } from "@testing-library/react";
import { NextIntlClientProvider, type AbstractIntlMessages } from "next-intl";
import mockRouter from "next-router-mock";
import QuickCenter from "./QuickCenter.component";

jest.mock("next/router", () => jest.requireActual("next-router-mock"));

describe("test `<QuickCenter />` component", () => {
  let messages: AbstractIntlMessages | undefined = undefined;

  const state = {
    isOpen: true,
    setIsOpen: () => {
      state.isOpen = !state.isOpen;
    }
  };

  beforeAll(async () => {
    messages = (await import("../../../messages/en.json")).default;
  });

  beforeEach(() => {
    mockRouter.push("/");
  });

  it("should be rendered", () => {
    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <QuickCenter
          isOpen={state.isOpen}
          onClickClose={state.setIsOpen}
          testId={{
            parent: "quick-center"
          }}
        />
      </NextIntlClientProvider>
    );

    const quickCenter = screen.getByTestId("quick-center");

    expect(quickCenter).toBeInTheDocument();
  });

  it("should be render button for change app theme", () => {
    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <QuickCenter
          isOpen={state.isOpen}
          onClickClose={state.setIsOpen}
          testId={{
            themeToggler: "toggler"
          }}
        />
      </NextIntlClientProvider>
    );

    const themeToggler = screen.getByTestId("toggler");

    expect(themeToggler).toBeInTheDocument();
  });
});
