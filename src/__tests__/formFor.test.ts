import { describe, expect, test } from 'vitest';
import Form from '../Form';

const template = { name: 'rob', job: 'hexlet' };
const attr = { method: 'post' };

describe('test Form.formFor()', () => {
  test('form input', () => {
    const form = Form.formFor(template, attr, (f) => {
      f.input('name');
    });

    expect(form).toBe(`<form action="#" method="post">
  <label htmlFor="name">Name</label>
  <input type="text" name="name" value="rob">
</form>`);
  });

  test('form input with attributes', () => {
    const form = Form.formFor(template, attr, (f) => {
      f.input('name', { as: 'text', disabled: true });
    });

    expect(form).toBe(`<form action="#" method="post">
  <label htmlFor="name">Name</label>
  <input disabled="true" type="text" name="name" value="rob">
</form>`);
  });

  test('form textarea', () => {
    const form = Form.formFor(template, attr, (f) => {
      f.input('job', { as: 'textarea' });
    });

    expect(form).toBe(`<form action="#" method="post">
  <textarea rows="40" cols="20" name="job">hexlet</textarea>
</form>`);
  });

  test('form submit with default value', () => {
    const form = Form.formFor(template, attr, (f) => {
      f.submit();
    });

    expect(form).toBe(`<form action="#" method="post">
  <input type="submit" value="Save">
</form>`);
  });

  test('form submit with custom value', () => {
    const form = Form.formFor(template, attr, (f) => {
      f.submit('Wow');
    });

    expect(form).toBe(`<form action="#" method="post">
  <input type="submit" value="Wow">
</form>`);
  });

  test('form', () => {
    const form = Form.formFor(template, attr, (f) => {
      f.input('name');
      f.input('job');
      f.submit('Wow');
    });

    expect(form).toBe(`<form action="#" method="post">
  <label htmlFor="name">Name</label>
  <input type="text" name="name" value="rob">
  <label htmlFor="job">Job</label>
  <input type="text" name="job" value="hexlet">
  <input type="submit" value="Wow">
</form>`);
  });
});
