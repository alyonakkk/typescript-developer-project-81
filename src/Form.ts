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

  input(name: string, options?: Option & Partial<HTMLElementTagNameMap[Tags]>): void {
    if (!this.template[name]) throw new Error('Значение поля не найдено');

    const { as, ...currentOptions } = options ?? {};
    const fieldType: Option['as'] = as ?? 'text';

    if (fieldType === 'textarea') {
      const attr = {
        rows: 40, cols: 20, ...(currentOptions as Partial<HTMLElementTagNameMap['textarea']>), name,
      };

      this.content += `  ${new Tag('textarea', attr, this.template[name]).toString()}\n`;
    } else {
      const attr = {
        ...(currentOptions as Partial<HTMLElementTagNameMap['input']>), type: fieldType, name, value: this.template[name],
      };
      const input = `  ${new Tag('input', attr).toString()}\n`;

      if (fieldType === 'text') {
        const label = new Tag('label', { htmlFor: name }, Form.capitalize(name)).toString();

        this.content += `  ${label}\n${input}`;
      } else {
        this.content += input;
      }
    }
  }

  submit(value = 'Save'): void {
    this.content += `  ${new Tag('input', { type: 'submit', value }).toString()}\n`;
  }

  static formFor(template: Template, attr: Partial<HTMLFormElement>, cb?: (form: Form) => void): string {
    const form = new Form(template);

    cb?.(form);

    return new Tag('form', { action: '#', method: 'post', ...attr }, `\n${form.content}`).toString();
  }
}
