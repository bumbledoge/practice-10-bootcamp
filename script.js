let person1 = document.querySelector('.p1');
let person2 = document.querySelector('.p2');

function clicked() {
    let displayed = person1.style.opacity;
    if(displayed == '1') {
        person1.style.opacity = '0';
        person2.style.opacity = '1';
    }
    else {
        person1.style.opacity = '1';
        person2.style.opacity = '0';
    }
}
