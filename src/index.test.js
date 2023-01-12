import {getDelta,applyDelta} from "./index.js";

test("string",() => {
    const s1 = "abcde",
        s2 = "ab1de",
        delta = getDelta(s1,s2),
        transformed = applyDelta(s1,delta);
    expect(s1===s2).toBe(false);
    expect(delta.length).toBe(1);
    expect(delta[0][0]).toBe(2);
    expect(delta[0][1]).toBe(1);
    expect(delta[0][2]).toBe("1");
    expect(transformed).toBe(s2);
})

test("array",() => {
    const s1 = "abcde".split(""),
        s2 = "ab1de".split(""),
        delta = getDelta(s1,s2),
        transformed = applyDelta(s1,delta);
    expect(s1.some((char) => !s2.includes(char))).toBe(true);
    expect(delta.length).toBe(1);
    expect(delta[0][0]).toBe(2);
    expect(delta[0][1]).toBe(1);
    expect(delta[0][2][0]).toBe("1");
    expect(s2.join("")).toBe(transformed.join(""));
})

test("arg mismatch",() => {
    const s1 = "abcde".split(""),
        s2 = "ab1de";
    let delta;
    try {
        delta = getDelta(s1,s2);
    } catch(e) {
        expect(e).toBeInstanceOf(TypeError)
    }
    expect(delta).toBe(undefined);
})