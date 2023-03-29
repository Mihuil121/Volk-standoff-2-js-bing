function scrollToElement(targetId) {
    // Найти элемент с указанным идентификатором
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // Прокрутить страницу до этого элемента
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
}
