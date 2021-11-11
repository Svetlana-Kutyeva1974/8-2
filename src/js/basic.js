export default class ErrorRepository {
  constructor() {
    this.Error = new Map([
      [1, 'Недопустимый символ'],
      [2, 'Персонаж уже входит в команду'],
      [3, 'Невозможно повысить уровень'],
    ]);
  }

  translate(code) {
    console.log(code);
    const arr = [...this.Error.keys()];
    console.log(arr);
    let result = 0;
    for (const key of arr) {
      if (key === code) {
        result = this.Error.get(key);
        console.log(key, result);
      }
    }
    return result || 'Unknown error';
  }
}
