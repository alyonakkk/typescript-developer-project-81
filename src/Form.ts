import Tag, { Tags } from './Tag';

interface Template {
  [name: string]: string;
}

interface Option {
  as?: 'textarea' | 'submit' | 'text';
}

export default class Form {
  constructor(private readonly template: Template, private content = '') {}

  private static capitalize(text: string): string {
    const firstChar = text[0].toUpperCase();
    const restSubstring = text.slice(1);

    return `${firstChar}${restSubstring}`;
  }

  private static label(name: string): string {
    return new Tag('label', { htmlFor: name }, Form.capitalize(name)).toString();
  }

  input(name: string, options?: Option & Partial<HTMLElementTagNameMap[Tags]>): void {
    if (!this.template[name]) throw new Error('Значение поля не найдено');

    const { as, ...currentOptions } = options ?? {};
    const fieldType: Option['as'] = as ?? 'text';
    const label = fieldType !== 'submit' ? Form.label(name) : '';

    if (fieldType === 'textarea') {
      const attr = {
        rows: 40, cols: 20, ...(currentOptions as Partial<HTMLElementTagNameMap['textarea']>), name,
      };

      this.content += `${label}${new Tag('textarea', attr, this.template[name]).toString()}`;
    } else {
      const attr = {
        name, type: fieldType, value: this.template[name], ...(currentOptions as Partial<HTMLElementTagNameMap['input']>),
      };
      const input = `${new Tag('input', attr).toString()}`;

      if (fieldType === 'text') {
        this.content += `${label}${input}`;
      } else {
        this.content += input;
      }
    }
  }

  submit(value = 'Save'): void {
    this.content += `${new Tag('input', { type: 'submit', value }).toString()}`;
  }

  static formFor(template: Template, attr: Partial<HTMLFormElement>, cb?: (form: Form) => void): string {
    const form = new Form(template);

    cb?.(form);

    return new Tag('form', { ...attr, action: attr?.action ?? '#' }, `${form.content}`).toString();
  }
}
