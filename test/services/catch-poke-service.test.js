const pokeUtil = require('../../services/poke-util-service');

test("Test catch poke service error", () => {
    //mock catch poke domain
    jest.mock('../../domain/catch-pokemon', () => ({
        execute: jest.fn(() => {throw new Error()}),
    }));

    const resultError = {
        'status': false,
        'message': ''
    }

    let result = pokeUtil.catchPokemon()
    expect(result.status).toBeFalsy();
});