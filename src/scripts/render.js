
export const renderFilteredCategory = (arrayProducts) => {
    let indexCategory = Number(localStorage.getItem('indexOfCategory'));
    const filteredInput = arrayProducts.filter((product) => {
        if (indexCategory === product.category) {
            return product;
        } else if (indexCategory === 0) {
            return product;
        };
    });
    renderCards(filteredInput);
};

export const renderFilteredValue = (arrayProducts) => {
    let indexCategory = Number(localStorage.getItem('indexOfCategory'));
    let inputRange = Number(localStorage.getItem('inputValue'));

    const filteredInput = arrayProducts.filter((product) => {

        if (inputRange >= product.price && indexCategory === product.category) {
            return product;
        } else if (inputRange >= product.price && indexCategory === 0) {
            return product;
        };
    });
    renderCards(filteredInput);
};

export const renderPreferences = () => {
    const lastFilter = localStorage.getItem('lastCategoryClicked');
    const buttons = document.querySelectorAll('.category__list > li > button');

    buttons.forEach((button) => {
        if(button.innerText === lastFilter) {
            button.classList.add('button__primary--active');
        };
    });
};

const createCategoryList = (categoryList) => {
    const liTag = document.createElement('li');
    const buttonTag = document.createElement('button');

    buttonTag.classList.add('button__primary');
    buttonTag.innerText = categoryList;

    liTag.appendChild(buttonTag);
    return liTag;
};

const createCards = ({title, category, price, img, band, year, id}) => {

    const liCard = document.createElement('li');
    const figureAlbum = document.createElement('figure');
    const imgAlbum = document.createElement('img');
    const divCaption = document.createElement('div');
    const figcaptionBandName = document.createElement('figcaption');
    const figcaptionAlbumYear = document.createElement('figcaption');
    const divDescription = document.createElement('div');
    const h3TittleAlbum = document.createElement('h3');
    const divPriceArea = document.createElement('div');
    const pPrice = document.createElement('p');
    const buttonBuy = document.createElement('button');

    liCard.classList.add('backgroundCard');
    divPriceArea.classList.add('price__area');
    buttonBuy.classList.add('button__secondary');
    imgAlbum.dataset.categoryId = category;
    liCard.dataset.idCard = id;

    imgAlbum.src = img;
    imgAlbum.alt = `${band} ${title} ${year} preço ${price}`;
    figcaptionBandName.innerText = band;
    figcaptionAlbumYear.innerText = year;

    h3TittleAlbum.innerText = title;
    pPrice.innerText = `R$ ${price.toFixed(2).replace('.', ',')}`;
    buttonBuy.innerText = 'Comprar';

    divCaption.append(figcaptionBandName, figcaptionAlbumYear);
    figureAlbum.append(imgAlbum, divCaption);

    divPriceArea.append(pPrice, buttonBuy);
    divDescription.append(h3TittleAlbum, divPriceArea);

    liCard.append(figureAlbum, divDescription);

    return liCard;
};

export const renderCategory = (arrayCategory) => {
    const ulCategoryList = document.querySelector('.category__list');

    arrayCategory.forEach((category) => {
        const listCategory = createCategoryList(category);
        ulCategoryList.appendChild(listCategory);
    });
};

export const renderCards = (arrayProducts) => {
    const ulCards = document.querySelector('.albums__list');

    ulCards.innerHTML = '';
    arrayProducts.forEach((product) => {
        const cardProduct = createCards(product);
        ulCards.appendChild(cardProduct);
    });
};