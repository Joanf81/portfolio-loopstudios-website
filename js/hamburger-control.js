document.addEventListener('DOMContentLoaded', () => {
  const hamburguerMenuButton = document.getElementById("hamburger-menu-button");
  const hamburguerMenu = document.getElementById("hamburger-menu");

  const hamburguerMenuButtonClickHandler = () => {
    if (hamburguerMenu.classList.contains("hidden")) {
      hamburguerMenu.classList.add("flex");
      hamburguerMenu.classList.remove("hidden");

      hamburguerMenuButton.classList.add("open");
      hamburguerMenuButton.classList.remove("md:hidden");
    } else {
      hamburguerMenu.classList.add("hidden");
      hamburguerMenu.classList.remove("flex");

      hamburguerMenuButton.classList.remove("open");
      hamburguerMenuButton.classList.add("md:hidden");
    }
  }

  hamburguerMenuButton.addEventListener('click', hamburguerMenuButtonClickHandler);
});
