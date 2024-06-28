//if chance hit -> true
function execute(chancePercent) {
    let rand = Math.round(Math.random() * 100);
    return rand <= chancePercent
}

module.exports = {execute}