const counters = document.querySelectorAll('.counter');

const runCounter = (counter) => {
  const target = +counter.getAttribute('data-target');
  let count = 0;
  const speed = target / 80;

  const update = () => {
    count += speed;
    if (count < target) {
      counter.innerText = Math.floor(count);
      requestAnimationFrame(update);
    } else {
      counter.innerText = target;
    }
  };
  update();
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      runCounter(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.6 });

counters.forEach(counter => observer.observe(counter));
