const root = document.querySelector('.wrapper');

const fruits = ['Banana', 'Apple', 'Orange', 'Lemon'];

const onlyAppleFruits = fruits.map(fruit => fruit === 'Apple' ? 'Only ' + fruit : fruit)

function render() {
  const list = document.createElement('ol');
  Array.from(onlyAppleFruits, (fruit) => {
    const li = document.createElement('li');
    li.textContent = fruit;
    list.appendChild(li);
  })
  
  root.appendChild(list);
}

render();