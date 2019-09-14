import $ from 'jquery';
import 'styles/index.less';
import { getData } from './data-service';
import svgCloseIcon from '!svg-inline-loader?classPrefix!../images/x-icon.svg';

$(() => {
    const getTodos = async () => {
        const data = await getData();
    
        return data;
    };
    
    getTodos().then((data) => {
        data.todos.forEach((todo) => {
            $('.spinner').addClass('hidden');
            if (!todo.isDone) {
                $('.todos').append(
                    '<li><div class="text">' + todo.title + '</div>' +
                        '<span class="close">' + svgCloseIcon + '</span></li>'
                    );
            }
        });
    });

    $('.add-task-button').click(() => {
        $('#task-input').val('not implemented yet')
    });

    $('.todos').on('click', '.close', (e) => {
        $(e.target).closest('li').addClass('hidden');
    })
});
