// 다크모드 토글
const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// 더보기 , 접근
document.addEventListener('DOMContentLoaded', () => {
  const showMoreBtn = document.getElementById('showMoreBtn');
  const moreProjects = document.getElementById('moreProjects');

  showMoreBtn.addEventListener('click', () => {
    if (moreProjects.style.display === 'none') {
      moreProjects.style.display = 'block';
      showMoreBtn.textContent = '접기';
    } else {
      moreProjects.style.display = 'none';
      showMoreBtn.textContent = '더보기';
    }
  });
});
