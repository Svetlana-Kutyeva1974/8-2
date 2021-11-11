import ErrorRepository from '../basic.js';

test('проверка возврата текста ошибки', () => {
  const obj7 = new ErrorRepository();
  expect(obj7.translate(2)).toMatch(/Персонаж уже входит в команду/);
});

test('проверка возврата текста ошибки', () => {
  const obj7 = new ErrorRepository();
  expect(obj7.translate(4)).toMatch(/Unknown error/);
});
