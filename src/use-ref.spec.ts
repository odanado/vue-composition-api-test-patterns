import { useRef } from "./use-ref";

describe("useRef", () => {
  it("should be callable", () => {
    expect.assertions(1);
    const v = useRef();
    expect(v.value).toBe(0);
  });
});
