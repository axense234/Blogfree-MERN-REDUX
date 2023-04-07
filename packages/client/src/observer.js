// Scroll Animations
const observer = new IntersectionObserver((entities) => {
  entities.forEach((entity) => {
    console.log(entity);
    if (entity.isIntersecting) {
      entity.target.classList.add("show");
    }
  });
});

export default observer;
