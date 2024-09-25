// Function to check if the element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to add fade-in class when the element is in the viewport
  function handleScroll() {
    const fadeElements = document.querySelectorAll('.fade');
    
    fadeElements.forEach((element) => {
      if (isInViewport(element)) {
        element.classList.add('fade-in');
      }
    });
  }
  
  // Trigger the handleScroll function when scrolling
  window.addEventListener('scroll', handleScroll);
  
  // Initial check to fade in elements already in the viewport
  document.addEventListener('DOMContentLoaded', handleScroll);
  