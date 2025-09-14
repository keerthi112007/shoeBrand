// FAQ Accordion functionality
document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.accordion-header');
  accordions.forEach((header) => {
    header.addEventListener('click', () => {
      const body = header.nextElementSibling;
      const isOpen = body.style.display === 'block';
      // Close all accordions
      document.querySelectorAll('.accordion-body').forEach(b => b.style.display = 'none');
      if (!isOpen) {
        body.style.display = 'block';
      }
    });
  });

  // Contact form submission simulation
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      alert('Thank you for contacting us! We will get back to you soon.');
      contactForm.reset();
    });
  }

  // Newsletter subscription simulation
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', e => {
      e.preventDefault();
      alert('Thank you for subscribing to our newsletter!');
      newsletterForm.reset();
    });
  }
});
