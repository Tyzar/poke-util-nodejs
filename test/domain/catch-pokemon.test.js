const catchPoke = require('../../domain/catch-pokemon');

test("10% chance return hit below 3 times", () => {
    let numHit = 0
    for(let i=0; i < 10; i++){
        let hit = catchPoke.execute(10);
        if(hit)
            numHit++        
    }
    console.log("Hit num : %d", numHit);
    expect(numHit).toBeLessThan(3);
});

test("50% chance return hit around 5 times", () => {
    let numHit = 0
    for(let i=0; i < 10; i++){
        let hit = catchPoke.execute(50);
        if(hit)
            numHit++        
    }
    console.log("Hit num : %d", numHit);
    expect(numHit).toBeLessThanOrEqual(5);
});

test("90% chance return hit around 9 times", () => {
    let numHit = 0
    for(let i=0; i < 10; i++){
        let hit = catchPoke.execute(90);
        if(hit)
            numHit++        
    }
    console.log("Hit num : %d", numHit);
    expect(numHit).toBeLessThanOrEqual(9);
});

test("100% chance return hit always 10 times", () => {
    let numHit = 0
    for(let i=0; i < 10; i++){
        let hit = catchPoke.execute(100);
        if(hit)
            numHit++        
    }
    console.log("Hit num : %d", numHit);
    expect(numHit).toBe(10);
});