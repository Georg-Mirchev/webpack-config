import $ from 'jquery';

import '../styles/index.less';

import '../images/floki-bb8.jpg';

let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("done"), 1000);
});

promise.then(
    result => console.log(result),
);

$(() => {
    console.log('doc ready');
});