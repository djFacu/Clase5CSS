const updateValues = () => {
  const pageWidth = window.innerWidth;
  const elemWidth = document.querySelector('.element').clientWidth;
  const remValue = parseFloat(getComputedStyle(document.documentElement).fontSize) * 2;
  const expectedWidth = Math.round(pageWidth * 0.5 - remValue);

  document.querySelector('.window').innerText = pageWidth + 'px';
  document.querySelector('.actual').innerText = elemWidth + 'px';

  if (Math.abs(elemWidth - expectedWidth) <= 1) {
    document.querySelector('.max').classList.add('highlight');
    document.querySelector('.min').classList.add('highlight');
  } else {
    document.querySelector('.max').classList.remove('highlight');
    document.querySelector('.min').classList.remove('highlight');
  }
}

updateValues();
window.onresize = updateValues;
