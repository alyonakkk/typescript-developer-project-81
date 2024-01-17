import { describe, expect, test } from 'vitest';
import Tag from '../Tag';

describe('test Tag.toString()', () => {
  test('single tag br', () => {
    expect(new Tag('br').toString()).toBe('<br>');
  });

  test('single tag input', () => {
    expect(new Tag('input', { value: 'Save', type: 'submit' }).toString()).toBe('<input value="Save" type="submit">');
  });

  test('double tag div without children', () => {
    expect(new Tag('div', { id: '1' }).toString()).toBe('<div id="1"></div>');
  });

  test('double tag div with children', () => {
    expect(new Tag('div', { id: '1' }, 'Some Value').toString()).toBe('<div id="1">Some Value</div>');
  });
});
