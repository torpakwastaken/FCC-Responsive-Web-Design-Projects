const programmingLanguages = document.querySelectorAll(".programming-language");

programmingLanguages.forEach((language) => {
  const bar = language.querySelector(".fill");
  const percentage = language.querySelector(".percentage");

  const targetPercentage = parseInt(percentage.textContent);

  bar.style.width = `0%`;
  percentage.textContent = `0%`;

  let currentPercentage = 0;
  const animationInterval = setInterval(() => {
    if (currentPercentage >= targetPercentage) {
      clearInterval(animationInterval);
    } else {
      currentPercentage++;
      bar.style.width = `${currentPercentage}%`;
      percentage.textContent = `${currentPercentage}%`;
    }
  }, 20);
});
