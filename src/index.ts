import Tag from './tag/Tag';

console.log(new Tag('br').toString());
console.log(new Tag('img', { src: 'path/to/image' }).toString());
console.log(new Tag('input', { value: 'Save', type: 'submit', autocomplete: 'one-time-code' }).toString());
