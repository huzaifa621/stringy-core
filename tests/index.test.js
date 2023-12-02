import {
  capitalize,
  extractNumbers,
  countWords,
  isBalancedBrackets,
  levenshteinDistance,
  maskEmail,
  maskPhone,
  removeWhitespace
} from "../index";

describe("capitalize", () => {
  test("capitalizes the first letter of a word", () => {
    expect(capitalize("stringy")).toBe("Stringy");
  });
});

describe("extractNumbers", () => {
  test("extracts numbers from a string containing multiple numbers", () => {
    expect(extractNumbers("Order 500 units of item 1234.")).toEqual([
      500, 1234,
    ]);
  });

  test("returns an empty array when the string contains no numbers", () => {
    expect(extractNumbers("No numbers here!")).toEqual([]);
  });

  // More tests for extractNumbers...
});

describe("countWords", () => {
  test("counts the number of words in a regular sentence", () => {
    expect(countWords("Hello world, this is a test.")).toBe(6);
  });

  test("counts correctly with multiple spaces between words", () => {
    expect(countWords("Hello    world")).toBe(2);
  });

  // More tests for countWords...
});

describe("isBalancedBrackets", () => {
  test("returns true for a string with balanced brackets", () => {
    expect(isBalancedBrackets("(Hello [World])")).toBe(true);
  });

  test("returns false for a string with unbalanced brackets", () => {
    expect(isBalancedBrackets("(Hello [World)")).toBe(false);
  });
});

describe("levenshteinDistance", () => {
  test("returns 0 for identical strings", () => {
    expect(levenshteinDistance("hello", "hello")).toBe(0);
  });

  test("calculates the correct distance between two different strings", () => {
    expect(levenshteinDistance("kitten", "sitting")).toBe(3);
  });

  // More tests for levenshteinDistance...
});

describe("maskEmail", () => {
  test("masks a standard email address correctly", () => {
    expect(maskEmail("user@example.com")).toBe("u***@e******.com");
  });

  // More tests for maskEmail...
});

describe("Testing the removeWhitespace function", () => {
  test("Adding whitespace in front of the string", () => {
    expect(removeWhitespace("   HelloWorld!")).toBe("HelloWorld!");
  })
  test("Adding whitespace in end of the string", () => {
    expect(removeWhitespace("HelloWorld!   ")).toBe("HelloWorld!");
  })
  test("Adding whitespace only in between the words of the string", () => {
    expect(removeWhitespace("Hello    World!")).toBe("HelloWorld!");
  })
  test("Adding whitespace in between of the string", () => {
    expect(removeWhitespace("   Hello   World!    ")).toBe("HelloWorld!");
  })
})
