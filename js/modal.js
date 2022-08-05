//slider in header

let offset = 0;
const sliderLine = document.querySelector('.slider-articles');

document.querySelector('.circle_down').addEventListener('click', function(){
    offset += 220;
    if(offset > 440){
        offset = 0;
    }
    sliderLine.style.top = -offset + 'px';
});

document.querySelector('.circle_up').addEventListener('click', function(){
    offset -= 220;
    if(offset < 0){
        offset = 440;
    }
    sliderLine.style.top = -offset + 'px';
});



//buttons prew-next

let btnNext = document.getElementById('services_next');

btnNext.onclick = function(){
    document.getElementById('services_container').scrollLeft += 900;
};

let btnPrew = document.getElementById('services_prew');

btnPrew.onclick = function(){
    document.getElementById('services_container').scrollLeft -= 900;
};



//modal windows for READ MORE

let btnShowMore = document.getElementById('btn-more');
let modal = document.getElementById('wrapper-modal');

btnShowMore.addEventListener('click',function(){
    modal.classList.add('active');
});


let btnShowMore01 = document.getElementById('btn01');
let modal01 = document.getElementById('wrapper01');

btnShowMore01.addEventListener('click',function(){
    modal01.classList.add('active');
});


let btnShowMore03 = document.getElementById('btn03');
let modal03 = document.getElementById('wrapper03');

btnShowMore03.addEventListener('click',function(){
    modal03.classList.add('active');
});


let btnShowMore04 = document.getElementById('btn04');
let modal04 = document.getElementById('wrapper04');

btnShowMore04.addEventListener('click',function(){
    modal04.classList.add('active');
});

