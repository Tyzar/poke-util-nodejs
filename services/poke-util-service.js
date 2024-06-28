const catchPoke = require('../domain/catch-pokemon');
const releasePoke = require('../domain/release-pokemon');
const renamePoke = require('../domain/rename-pokemon');

function catchPokemon() {
    try {
        let isHit = catchPoke.execute(50);
        return {
            isHit: isHit ? 1 : 0
        };
    } catch (e) {
        return {
            error: 0
        }
    }
}

function releasePokemon() {
    try {
        let releaseNum = releasePoke.execute()
        return {
            releaseNum: releaseNum
        };
    } catch (e) {
        return {
            error: 0
        }
    }
}

function renamePokemon(name, updateCount) {
    return renamePoke.execute(name, updateCount);
}

module.exports = { catchPokemon, releasePokemon, renamePokemon }

