
// HOMEPAGE JS

// event scroll js

const prevBtn = document.querySelector('.fa-chevron-left');
const nextBtn = document.querySelector('.fa-chevron-right');
const container = document.querySelector('.event-container')

prevBtn.addEventListener('click', () => {
  container.scrollBy({ left: -340, behavior: 'smooth' });
});

nextBtn.addEventListener('click', () => {
  container.scrollBy({ left: 340, behavior: 'smooth' });
});


// faq

    const button1 = document.querySelector('.fa1');
    const paragraph1 = document.querySelector('.faq .p1');
    const button2 = document.querySelector('.fa2');
    const paragraph2 = document.querySelector('.faq .p2');
    const button3 = document.querySelector('.fa3');
    const paragraph3 = document.querySelector('.faq .p3');
    const button4 = document.querySelector('.fa4');
    const paragraph4 = document.querySelector('.faq .p4');
   

    
    button1.addEventListener('click', () => {
      
      if (paragraph1.style.display === 'block') {
        paragraph1.style.display = 'none'; 
        button1.style.transform = "rotate(0deg)";
      } 
      
      else {
        paragraph1.style.display = 'block'; 
        button1.style.transform = "rotate(90deg)";
      }
    });

      button2.addEventListener('click', () => {
      
      if (paragraph2.style.display === 'block') {
        paragraph2.style.display = 'none'; 
        button2.style.transform = "rotate(0deg)";
      } 
      
      else {
        paragraph2.style.display = 'block'; 
        button2.style.transform = "rotate(90deg)";
      }
    });

      button3.addEventListener('click', () => {
      
      if (paragraph3.style.display === 'block') {
        paragraph3.style.display = 'none'; 
        button3.style.transform = "rotate(0deg)";
      } 
      
      else {
        paragraph3.style.display = 'block'; 
        button3.style.transform = "rotate(90deg)";
      }
    });

      button4.addEventListener('click', () => {
      
      if (paragraph4.style.display === 'block') {
        paragraph4.style.display = 'none'; 
        button4.style.transform = "rotate(0deg)";
      } 
      
      else {
        paragraph4.style.display = 'block'; 
        button4.style.transform = "rotate(90deg)";
      }
    });