


// Banner Section Slider

document.addEventListener("DOMContentLoaded", function() {
    const bannerSection = document.querySelector('.banner-section');
    const images = ['url(../images/banner/bannerImageOne.png)', 'url(../images/banner/bannerImageTwo.jpg)', 'url(../images/banner/bannerImageThree.jpg)'];
    let currentImageIndex = 0;

    function changeBackgroundImage() {
        bannerSection.style.backgroundImage = images[currentImageIndex];

        // Increment the image index
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    // Change background image every 5000 milliseconds (5 seconds)
    setInterval(changeBackgroundImage, 3000);
});



//Event Section slider

document.addEventListener("DOMContentLoaded", function () {
    const slider = document.getElementById("eventSlider");
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");
    let currentIndex = 0;
    let autoSlideInterval;

    // Function to update the slider position
    function updateSlider() {
        const containerWidth = slider.clientWidth;
        const itemsPerSlide = Math.floor(containerWidth / 300); // Assuming each item has a fixed width of 300px
        const itemWidth = containerWidth / itemsPerSlide;
        const newPosition = -currentIndex * itemWidth;
        slider.style.transform = `translateX(${newPosition}px)`;
    }

    // Function to handle the next button click
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slider.children.length;
        updateSlider();
    }

    // Function to handle the previous button click
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
        updateSlider();
    }

    // Function to stop auto-slider
    function stopAutoSlider() {
        clearInterval(autoSlideInterval);
    }

    // Event listeners for next and previous buttons
    nextButton.addEventListener("click", () => {
        nextSlide();
    });

    prevButton.addEventListener("click", () => {
        prevSlide();
    });

    // Event listener to pause auto-slider when mouse is over the slider
    slider.addEventListener("mouseover", stopAutoSlider);

    // Event listener to resume auto-slider when mouse leaves the slider
    slider.addEventListener("mouseout", startAutoSlider);

    // Initial update to set the correct starting position
    updateSlider();

    // Start auto-slider on page load
    startAutoSlider();

    // Update the slider on window resize
    window.addEventListener("resize", updateSlider);
});






