// first.onclick = function firstButton() {
//         document.getElementById('p').innerHTML = ('You clicked on: ' + 'First Button');
// }
// second.onclick = function secondButton() {
//         document.getElementById('p').innerHTML = ('You clicked on: ' + 'Second Button');
// }
// third.onclick = function thirdButton() {
//         document.getElementById('p').innerHTML = ('You clicked on: ' + 'Third Button');
// }

function firstButton() {
    document.getElementById('p').innerHTML = ('You clicked on: First Button');
}
function secondButton() {
    document.getElementById('p').innerHTML = ('You clicked on: Second Button');
}
function thirdButton() {
    document.getElementById('p').innerHTML = ('You clicked on: Third Button');
}
document.getElementById('first').addEventListener('onclick', firstButton);
document.getElementById('second').addEventListener('onclick', secondButton);
document.getElementById('third').addEventListener('onclick', thirdButton);


function getText(e) {
    console.log('event: ', e.target);

    switch (e.target.className) {
        case 'four':
        four.onclick = document.getElementById('pdel').innerHTML = ('You clicked on: Four Button');
            console.log('handle as four');
            break;

        case 'five':
       five.onclick = document.getElementById('pdel').innerHTML = ('You clicked on: Five Button');
            console.log('handle as five');
            break;
        
        case 'six':
        six.onclick = document.getElementById('pdel').innerHTML = ('You clicked on: Six Button');
            console.log('handle as six');
            break;
            
        default:
            console.log('something else');
    }
}

document.getElementById('button').addEventListener('click', getText);
