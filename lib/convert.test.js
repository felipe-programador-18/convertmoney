//const { TestWatcher } = require('@jest/core')
const  convert = require('./convert')

test('convert 4 cotacao and quantidade 4', () => {
    expect(convert.convert(4,4)).toBe(16)
})

test('convert 0 cotacao and quantidade 4', () => {
    expect(convert.convert(0,4)).toBe(0)
})

test('now test about convert to Float', ()=>{
    expect(convert.Tomoney(2)).toBe('2.00')
})