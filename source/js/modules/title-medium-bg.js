const titles = document.querySelectorAll('.title--medium');

export const setTitleAfter = () => {
  if (!titles) {
    return;
  }
  for (const item of titles) {
    const backTitle = item.querySelector('::after');
    if (!backTitle) {
      return;
    }
    const content = item.innerHTML;
    backTitle.style.content = `${content}`;
  }
};
