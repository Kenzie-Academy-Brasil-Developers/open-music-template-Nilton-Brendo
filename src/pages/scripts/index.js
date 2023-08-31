/* Desenvolva sua lógica aqui ... */

import {products, categories} from '../../scripts/productsData.js';
import {renderCategory, renderCards, renderPreferences, renderFilteredCategory, renderFilteredValue} from '../../scripts/render.js';
import {themeMode} from '../../scripts/theme.js';

export const handleSearch = (arrayCategories, arrayProducts) => {
    const buttonsCategory = document.querySelectorAll('.category__list > li > button');

    buttonsCategory.forEach((button) => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const element = event.target;

            arrayCategories.forEach(() => {
                const index = arrayCategories.indexOf(element.innerText);
                localStorage.setItem('indexOfCategory', index);
            });

            buttonsCategory.forEach((activeButton) => {
                if(activeButton.classList.contains('button__primary--active')) {
                    activeButton.classList.remove('button__primary--active');
                    activeButton.classList.add('button__primary');
                };
            });

            localStorage.setItem('lastCategoryClicked', element.innerText);
            element.classList.add('button__primary--active');
            element.classList.remove('button__primary');
            renderFilteredCategory(arrayProducts);
        });
    });
    renderPreferences();
};

export const handleSearchInput = (arrayProducts) => {
    const inputRange = document.querySelector('#input__range');
    const priceRange = document.querySelector('.price__container > div > p');

    inputRange.addEventListener('input', (event) => {
        event.preventDefault();
        localStorage.setItem('inputValue', inputRange.value);

        const rangeValue = localStorage.getItem('inputValue');
        priceRange.innerText = `Até R$ ${Number(rangeValue).toFixed(2).replace('.', ',')}`;

        renderFilteredValue(arrayProducts);
    });
};


renderCategory(categories);
renderCards(products);
handleSearch(categories, products);
handleSearchInput(products);
themeMode();