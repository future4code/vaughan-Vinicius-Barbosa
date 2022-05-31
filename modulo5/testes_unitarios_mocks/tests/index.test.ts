import { validateCharacter } from '../src/index'
import { Character } from '../src/index'
import { performAttack } from '../src/performAttack'


test('Teste exercicio 2 - A -', () => {
  expect(validateCharacter({
    name: '',
    life: 1000,
    strength: 100,
    defense: 100
  })).toBe(false);
});

test('Teste exercicio 2 - B -', () => {
  expect(validateCharacter({
    name: 'JORGE',
    life: 0,
    strength: 100,
    defense: 100
  })).toBe(false);
});

test('Teste exercicio 2 - C -', () => {
  expect(validateCharacter({
    name: 'JORGE',
    life: 0,
    strength: 100,
    defense: 100
  })).toBe(false);
});

test('Teste exercicio 2 - D -', () => {
  expect(validateCharacter({
    name: 'JORGE',
    life: 110,
    strength: 0,
    defense: 100
  })).toBe(false);
});

test('Teste exercicio 2 - E -', () => {
  expect(validateCharacter({
    name: 'JORGE',
    life: 110,
    strength: -10,
    defense: 100
  })).toBe(false);
});

test('Teste exercicio 2 - F -', () => {
  expect(validateCharacter({
    name: 'JORGE',
    life: 110,
    strength: 10,
    defense: 100
  })).toBe(true)
});

//============================================= Exercicio 3

describe('Teste do exercicio 3', ()=> {
  
  test('Teste exercicio 3 - A -', () => {
    const jorgeFighter = {
      name: 'JORGE',
    life: 110,
    strength: 220,
    defense: 100
  }
  
  const JoaoFighter = {
    name: 'JOAO',
    life: 110,
    strength: 110,
    defense: 100
  }
  const results:any = performAttack(jorgeFighter,JoaoFighter)
  expect(results).toBe(undefined)
  
  });
})

//============================================ Exercicio 4

test("Creating Mocks", () => {
  const validatorMock = jest.fn(() => {
    return true
  })
});


test("Creating Mocks", () => {
  const validatorMock = jest.fn(() => {
    return false
  })
});


