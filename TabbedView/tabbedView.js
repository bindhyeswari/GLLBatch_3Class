/**
 * Created by mishrab on 6/3/14.
 */

console.log('test');

document.addEventListener('DOMContentLoaded', function(){
    console.log('DOM has been loaded.');

    var spans = document.getElementsByClassName('tab');

    // console.dir(spans);
    // console.dir(spans[0]);

    spans[0].addEventListener('click', function(){
        console.log('clicked on general settings');
    });

});
