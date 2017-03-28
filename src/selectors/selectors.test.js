import expect from 'expect';
import {authorsFormattedForDropdown} from './selectors';
// Test dataはTestで用意してロジックは実際のコードを使用する。
// Railsのfactoriesとspecを合わせたものと同じ感じ
describe('Author Selectors', () => {
  describe('authorsFormattedForDropdown', () => {
    it('ドロップダウンで使用するためにフォーマットされた著者データを返す必要があります', () => {
      const authors = [
        {id: 'cory-house', firstName: 'Cory', lastName: 'House'},
        {id: 'scott-allen',firstName: 'Scott',lastName: 'Allen'}
      ];

      const expected = [
        {value: 'cory-house', text: 'Cory House'},
        {value: 'scott-allen', text: 'Scott Allen'}
      ];
      expect(authorsFormattedForDropdown(authors)).toEqual(expected);
    });
  });
});
