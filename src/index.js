import './styles.less';
import $ from 'jquery';

let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("done"), 1000);
});

promise.then(
    result => console.log(result),
);

$(() => {
    console.log('doc ready');
});