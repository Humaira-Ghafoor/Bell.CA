let currentIndex = 0;
let slides = document.querySelectorAll('.slide');
let slider = document.querySelector('.slider');
let playPauseBtn = document.getElementById('playPauseBtn');
let indicators = document.querySelectorAll('.indicator');
let playing = true;
let slide=document.querySelector('.slide:first-child')
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
}
document.addEventListener('DOMContentLoaded',()=>{
       let timeout=setInterval(nextSlide,3000);
});

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    let slide=document.querySelector('.slide:first-child');
    slider.append(slide);
    updateIndicators();
}

function updateIndicators() {
    indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

playPauseBtn.addEventListener('click', function () {
    if (playing) {
        clearInterval(slideInterval);
        document.querySelector('.pause-icon').style.display = 'none';
        document.querySelector('.play-icon').style.display = 'inline';
    } else {
        slideInterval = setInterval(nextSlide, 3000);
        document.querySelector('.pause-icon').style.display = 'inline';
        document.querySelector('.play-icon').style.display = 'none';
    }
    playing = !playing;
});

// Event listener for indicators
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', function() {
        currentIndex = index;
        updateSlider();
        clearInterval(slideInterval);  // Stop auto-slide when user clicks
    });
});







//---------------------------------------- accordian
var acc = document.querySelectorAll('.accordion');

acc.forEach(function(item) {
    item.addEventListener('click', function() {
        // Toggle the panel visibility
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
            this.querySelector('#icon').textContent = '+'; // Change to plus when hidden
        } else {
            panel.style.display = "block";
            this.querySelector('#icon').textContent = '−'; // Change to minus when visible
        }
    });
});