/**
 * Created by mishrab on 6/3/14.
 */

document.addEventListener('DOMContentLoaded', function (){
    console.log('The DOMContentLoaded event has fired.');

    var spans = document.getElementsByClassName('tab');
    console.log(spans.length);

    for (var i = 0; i < spans.length; i++){
        //console.log('Value of i is: ' + i);
        console.log('The class attribute of span ' + i + ' is ' + spans[i].className);

        spans[i].addEventListener('click', printWhenClicked);

    }

    function printWhenClicked(event){
        // Remove the borders from all other tabs
        var spans = document.getElementsByClassName('tab');
        for (var i = 0; i < spans.length; i++){
            spans[i].className = 'tab';
        }

        // Less verbose way of doing the earlier task
        // document.getElementsByClassName('tab selected')[0].className = 'tab';

        // To put a border around the clicked tab
        // Apply a class selected onto the span
        console.log('You clicked on a tab.');
        event.target.className = 'tab selected';
    }



});