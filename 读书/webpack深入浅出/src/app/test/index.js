/** index.ts文件  */

import './index.less';
import * as Data from '../../asset/data/data.json';

console.log(`json数据${JSON.stringify(Data)}`);
console.log('ddd8880000111', $('body'));
console.log('process.env.NODE_ENV', process.env.NODE_ENV);
console.log(_);
$('.img-svg').html('<p>88888888888888</p>');

// function getComponent() {
//   return import(/* webpackChunkName: "show" */ './show')
//     .then(moudle => {
//       const innerHTML = moudle.default;
//       return innerHTML;
//     })
//     .catch(error => 'An error occurred while loading the component');
// }
// console.log('index');
// import(/* webpackChunkName: 'show'*/ './show').then(function(subPageA) {
//   console.log(subPageA);
// });

// $('.btn').click(() => {
//   getComponent().then(innerHTML => {
//     $('body').append(innerHTML);
//   });
// });

function component() {
  var element = document.createElement('div');

  var button = document.createElement('button');
  var br = document.createElement('br');

  button.innerHTML = 'Click me and look at the console!';
  element.innerHTML = 'aaa';
  element.appendChild(br);
  element.appendChild(button);

  // Note that because a network request is involved, some indication
  // of loading would need to be shown in a production-level site/app.
  button.onclick = e =>
    import(/* webpackChunkName: "b" */ './b').then(module => {
      var print = module.default;

      print();
    });

  return element;
}

document.body.appendChild(component());
