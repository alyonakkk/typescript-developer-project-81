const SINGLE_TAGS: string[] = [
  'area',
  'base',
  'br',
  'col',
  'command',
  'embed',
  'hr',
  'img',
  'input',
  'keygen',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
];

const ATTRS: { [attr: string]: string } = {
  htmlFor: 'for',
  className: 'class',
};

export type Tags = keyof HTMLElementTagNameMap;

export type TagAttrs<T extends Tags> = Partial<HTMLElementTagNameMap[T]>;

export default class Tag<T extends Tags> {
  constructor(
    private readonly tag: T,
    private readonly attr?: TagAttrs<T>,
    private readonly children?: string,
  ) {}

  private getAttrString(): string {
    return this.attr
      ? Object.entries(this.attr)
        .reduce((acc, [key, value]) => `${acc} ${ATTRS[key] ?? key}="${value}"`, '')
      : '';
  }

  private isSingleTag(): boolean {
    return SINGLE_TAGS.includes(this.tag);
  }

  toString(): string {
    const attributes = this.getAttrString();

    if (this.isSingleTag()) return `<${this.tag}${attributes}>`;

    return `<${this.tag}${attributes}>${this.children ?? ''}</${this.tag}>`;
  }
}
