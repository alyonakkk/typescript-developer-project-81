export default class Tag<T extends keyof HTMLElementTagNameMap> {
  constructor(
    private readonly tag: T,
    private readonly attr?: Partial<HTMLElementTagNameMap[T]>,
  ) {}

  private getFormattedAttr() {
    return this.attr
      ? Object.entries(this.attr)
        .reduce((acc, [key, value]) => `${acc} ${key}="${value}"`, '')
      : '';
  }

  toString() {
    const attributes = this.getFormattedAttr();

    return `<${this.tag}${attributes}>`;
  }
}
