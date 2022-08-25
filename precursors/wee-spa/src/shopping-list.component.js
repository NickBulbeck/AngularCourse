const items = ['Bread',
                'Cheese',
                'Wine',
                'Kwafi',
                'Chocolate'];

const list = document.createElement('ul');
items.forEach(item => {
    list.innerHTML += `<li>${item}</li>`;
});

export default list; 