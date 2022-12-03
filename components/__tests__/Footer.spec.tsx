import Footer from "../Footer";
import { render } from "@testing-library/react";

describe("Sampleコンポーネント", () => {
  test("should first", () => {
    const { getByText } = render(<Footer />);
    expect(getByText("© 2022 Arthurs LLC")).toBeTruthy();
  });
});