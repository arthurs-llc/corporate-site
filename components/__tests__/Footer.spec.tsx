import { Footer } from "../Footer";
import { render } from "@testing-library/react";

describe("Footer", () => {
  test("should have copyright text", () => {
    const { getByText } = render(<Footer />);
    expect(getByText("© 2015-2023 Arthurs LLC")).toBeTruthy();
  });
});