const button = document.getElementById('purpleBtn')
const form = document.getElementById('form')


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const dd = document.getElementById('DD')
    const mm = document.getElementById('MM')
    const yy = document.getElementById('YY')


    const years = document.getElementById('years')

    years.innerText = dd.value;
})


