import {performPurchase} from '../src/index'
import {usuario} from '../src/index'
import {verifyAge} from '../src/index'
 

test('teste exercicio 2 - 1', () => {
   expect(performPurchase(usuario, 50)).toEqual({balance: 50, name: 'vinicius'});
 });


 test('teste exercicio 2 - 2', () => {
  expect(performPurchase(usuario, 100)).toEqual({balance: 0, name: 'vinicius'});
});


test('teste exercicio 2 - 3', () => {
  expect(performPurchase(usuario, 110)).toBe(undefined);
});


test('exercicio 3 ', () => {
  expect(performPurchase(verifyAge('1',1), 110)).toBe(undefined);
});