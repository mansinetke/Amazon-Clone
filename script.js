document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.hero-section');
    const images =[
        'hero_image.jpg','hero_image1.jpg','hero_image2.jpg'
    ]
  
    let currentIndex = 0;
  
    function changeBackgroundImage() {
      currentIndex = (currentIndex + 1) % images.length;
      heroSection.style.backgroundImage = `url(${images[currentIndex]})`;
    }
  
    // Initialize the first image
    heroSection.style.backgroundImage = `url(${images[0]})`;
  
    // Change image every 10 seconds
    setInterval(changeBackgroundImage, 10000);
  });
  