import { render } from "@testing-library/react";
import StaticInfoDisplay from "./static-info-display";
import { describe, expect, it } from "vitest";

describe("StaticInfoDisplay", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <StaticInfoDisplay
        item={{
          title: "",
          info: "",
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
