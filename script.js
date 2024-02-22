document.addEventListener('DOMContentLoaded', function () {
    let currentSlide = 1;
    showSlide(currentSlide);

    setInterval(function () {
        currentSlide++;
        if (currentSlide > 5) {
            currentSlide = 1;
        }
        showSlide(currentSlide);
    }, 7000); // Troca de slide a cada 10 segundos

    function showSlide(n) {
        const slides = document.getElementsByClassName('slide');
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slides[n - 1].style.display = 'block';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const playButton = document.getElementById('playButton');
    const myAudio = document.getElementById('myAudio');

    playButton.addEventListener('click', function () {
        if (myAudio.paused) {
            myAudio.play();
            playButton.textContent = 'Pause';
        } else {
            myAudio.pause();
            playButton.textContent = 'Play';
        }
    });
});
