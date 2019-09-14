import $ from 'jquery';
import 'styles/index.less';
import '../images/floki-bb8.jpg';
import { getData } from './data';

let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("done"), 1000);
});

promise.then(
    result => console.log(result),
);

$(() => {
    console.log('doc ready');
});

const consumeData = async () => {
    const data = await getData();
    
    console.log(data);
}

consumeData();