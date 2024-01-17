// import Tag from './Tag';
// import Form from './Form';

// console.log(new Tag('br').toString());
// console.log(new Tag('img', { src: 'path/to/image' }).toString());
// console.log(new Tag('input', { value: 'Save', type: 'submit', autocomplete: 'one-time-code' }).toString());
// console.log(Form.formFor({ name: 'rob', job: 'hexlet', gender: 'm' }, { method: 'post' }, (f) => {
//   f.input('name');
//   f.input('job');
//   f.submit('Wow');
// }));
// console.log(Form.formFor({ name: 'rob', job: 'hexlet', gender: 'm' }, { method: 'post' }, (f) => {
//   f.input('name', { disabled: true, className: 'class' });
//   f.input('job', { as: 'textarea' });
// }));

export { default } from './Form';
