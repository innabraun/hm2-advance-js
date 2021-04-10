const books = [
    {
        author: "Скотт Бэккер",
        name: "Тьма, что приходит прежде",
        price: 70
    },
    {
        author: "Скотт Бэккер",
        name: "Воин-пророк",
        //price: 70
    },
    {
        //author: "Скотт Бэккер",
        name: "Тысячекратная мысль",
        price: 70
    },
    {
        author: "Скотт Бэккер",
        name: "Нечестивый Консульт",
        price: 70
    },
    {
        author: "Дарья Донцова",
        name: "Детектив на диете",
        price: 40
    },
    {
        author: "Дарья Донцова",
        name: "Дед Снегур и Морозочка",
        //price: 40
    }
];

let roots = document.getElementById('root');
function showMyList(arr){
    let item = arr.map((obj) => {
        const {author, name, price} = obj;
        try {
            if(author && name && price) {
                return `
                        <li>Author: ${author}</li>
                        <li>Name: ${name}</li>
                        <li>Price: ${price}</li>
                        `
            }
            else if (!author) {
                throw new Error('Ошибка. Не заполнено поле author.')
            } else if (!name) {
                throw new Error('Ошибка. Не заполнено поле name.')
            } else if (!price) {
                throw new Error('Ошибка. Не заполнено поле price.')
            }
        }  catch(e) {
            console.error(e);
        }

    })
    roots.innerHTML = `<ul>${item.join(`<br>`)}</ul>`;
}
showMyList(books)
