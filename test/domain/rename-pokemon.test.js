const renamePoke = require('../../domain/rename-pokemon')

test("Test rename 6-th", ()=>{
    let result = renamePoke.execute("Pikachu",6)
    expect(result.version).toBe(5)
})

test("Test rename 1-th", ()=>{
    let result = renamePoke.execute("Pikachu",1)
    expect(result.version).toBe(0)
})

test("Test rename 2-th", ()=>{
    let result = renamePoke.execute("Pikachu",2)
    expect(result.version).toBe(1)
})