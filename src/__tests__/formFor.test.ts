import { describe, expect, test } from 'vitest';
import Form from '../Form';

const template = { name: 'rob', job: 'hexlet' };
const attr = { method: 'post' };

describe('test Form.formFor()', () => {
  test('form input', () => {
    const form = Form.formFor(template, attr, (f) => {
      f.input('name');
    });

    expect(form).toBe('<form method="post" action="#"><label for="name">Name</label><input name="name" type="text" value="rob"></form>');
  });

  test('form input with attributes', () => {
    const form = Form.formFor(template, attr, (f) => {
      f.input('name', { as: 'text', disabled: true });
    });

    // eslint-disable-next-line max-len
    expect(form).toBe('<form method="post" action="#"><label for="name">Name</label><input name="name" type="text" value="rob" disabled="true"></form>');
  });

  test('form textarea', () => {
    const form = Form.formFor(template, attr, (f) => {
      f.input('job', { as: 'textarea' });
    });

    expect(form).toBe('<form method="post" action="#"><label for="job">Job</label><textarea cols="20" rows="40" name="job">hexlet</textarea></form>');
  });

  test('form submit with default value', () => {
    const form = Form.formFor(template, attr, (f) => {
      f.submit();
    });

    expect(form).toBe('<form method="post" action="#"><input type="submit" value="Save"></form>');
  });

  test('form submit with custom value', () => {
    const form = Form.formFor(template, attr, (f) => {
      f.submit('Wow');
    });

    expect(form).toBe('<form method="post" action="#"><input type="submit" value="Wow"></form>');
  });

  test('form', () => {
    const form = Form.formFor(template, attr, (f) => {
      f.input('name');
      f.input('job');
      f.submit('Wow');
    });

    // eslint-disable-next-line max-len
    expect(form).toBe('<form method="post" action="#"><label for="name">Name</label><input name="name" type="text" value="rob"><label for="job">Job</label><input name="job" type="text" value="hexlet"><input type="submit" value="Wow"></form>');
  });
});
