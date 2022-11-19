// Scroll Animations
const observer = new IntersectionObserver((entities) => {
  entities.forEach((entity) => {
    console.log(entity);
    if (entity.isIntersecting) {
      entity.target.classList.add("show");
    } else {
      entity.target.classList.remove("show");
    }
  });
});

export default observer;
