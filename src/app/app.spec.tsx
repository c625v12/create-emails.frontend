import { render } from "@testing-library/react";

import App from "./app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { describe, expect, it } from "vitest";

describe("App", () => {
  it("should render successfully", () => {
    const queryClient = new QueryClient();
    const { baseElement } = render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
