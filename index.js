window.addEventListener('load', () => {
  const app = document.getElementById('app');
  const wrapper = document.createElement('div');
  app.append(wrapper);
  wrapper.classList.add('wrapper')

  const cells = [];

  for (let i = 0; i < 9; i++) {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    wrapper.append(cell);
    cells.push(cell)
  }

  let step = 1;

  cells.forEach(element => {
    element.addEventListener('click', () => {
      /* Brute force solution */
      // if (element.innerText === '' && step % 2 !== 0 ) {
      //   element.innerText = 'X';
      //   step++;
      // } else if (element.innerText === '') {
      //   element.innerText = '0';
      //   step++;
      // }
      
      /* Refectored version */
      if (element.innerText === '') {
        element.innerText = step % 2 !== 0 ? 'X' : 'O';
        step++;
      }
    })
  });

  console.log(cells)

});