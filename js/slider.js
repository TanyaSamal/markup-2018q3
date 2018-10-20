window.onload = function() {
    let currentSlide = 1;

    let slider = document.body.querySelector('.slider');

    slider.addEventListener('click', (e) => {
        if (!e.target.classList.contains('slider-icon')) return;
        
        currentSlide = parseInt(e.target.getAttribute('data-icon'));

        showSlider(currentSlide);
    });

    function showSlider(item){
        let current = slider.querySelector('[data-slide="' + item + '"]');

        slider.querySelectorAll('.slide').forEach((slide)=>{
            slide.style.opacity = 0;
            setTimeout(function(){
                slide.classList.add('slide-hidden');
            }, 500);
        });

        setTimeout(function(){
            current.classList.remove('slide-hidden');
            current.style.opacity = 1;
        }, 500);

    }

    function initSlider(){
        setInterval(showSlider(getSlider()), 3000);
    }

    function getSlider(){
        currentSlide++;
        currentSlide = currentSlide % 4 == 0 ? 1 : currentSlide;
        return currentSlide;
    }

    initSlider();
}