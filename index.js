window.addEventListener('load', () => {
  const app = document.getElementById('app');
  const wrapper = document.createElement('div');
  app.append(wrapper);
  wrapper.classList.add('wrapper')

  for (let i = 0; i < 9; i++) {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    wrapper.append(cell);
  }
});