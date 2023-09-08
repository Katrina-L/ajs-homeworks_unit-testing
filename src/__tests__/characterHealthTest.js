import characterHealth from "../characterHealth.js";

test.each([
    [{name: "Маг", health: 55}, "green", "healthy"],
    [{name: "Маг", health: 50}, "green", "healthy"],
    [{name: "Маг", health: 20}, "yellow", "wounded"],
    [{name: "Маг", health: 15}, "yellow", "wounded"],
    [{name: "Маг", health: 7}, "red", "critical"]
])("testing characterHealth function with %s character", (character, _color, expected) => {
    const result = characterHealth(character); 
    expect(result).toBe(expected) ; 
});
