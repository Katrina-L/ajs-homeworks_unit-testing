import characterSort from "../characterSort.js";

test("testing characterSort function", () => {
    const characterInaformation = [
        {name: 'верзила', health: 20},
        {name: 'мечник', health: 10},
        {name: 'хоббит', health: 70},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
      ];
    const expected = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'хоббит', health: 70},
        {name: 'верзила', health: 20},
        {name: 'мечник', health: 10},
    ];
    const result = characterSort(characterInaformation);

    // expect(result).toBe(expected);
    expect(result).toEqual(expected);
});