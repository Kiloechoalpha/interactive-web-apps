const BOOKS_PER_PAGE = 36;
let page = 1;
let books = []; // assuming the books data is fetched from an API or database

const day = {
    dark: '10, 10, 20',
    light: '255, 255, 255',
};

const night = {
    dark: '255, 255, 255',
    light: '10, 10, 20',
};

const dataHeaderSearch = document.querySelector('.data-header-search');
const dataSearchOverlay = document.querySelector('.data-search-overlay');
const dataSearchTitle = document.querySelector('.data-search-title');
const dataSearchGenres = document.querySelector('.data-search-genres');
const dataSearchAuthors = document.querySelector('.data-search-authors');
const dataListItems = document.querySelector('.data-list-items');
const dataListButton = document.querySelector('.data-list-button');
const dataListRemaining = document.querySelector('.list__remaining');
const dataListMessage = document.querySelector('.list__message');
const dataListActive = document.querySelector('.data-list-active');
const dataListClose = document.querySelector('.data-list-close');
const dataSettingsTheme = document.querySelector('.data-settings-theme');
const dataSettingsOverlay = document.querySelector('.data-settings-overlay');
const dataSettingsForm = document.querySelector('.data-settings-form');
const dataSettingsCancel = document.querySelector('.data-settings-cancel');

if (!books || !Array.isArray(books)) {
  throw new Error('Source required');
}

if (!range || range.length < 2) {
  throw new Error('Range must be an array with two numbers');
}

function createPreview({ author, id, image, title, summary, publicationDate, genres }) {
  const element = document.createElement('button');
  element.classList = 'preview';
  element.setAttribute('data-preview', id);

  element.innerHTML = /* html */ `
    <img class="preview__image" src="${image}" alt="${title}" />
    <div class="preview__info">
      <h3 class="preview__title">${title}</h3>
      <div class="preview__author">${author}</div>
      <div class="preview__publication-date">${publicationDate}</div>
      <div class="preview__genres">${genres.join(', ')}</div>
      <div class="preview__summary">${summary}</div>
    </div>
  `;

  return element;
}

function createPreviewsFragment(books, startIndex, endIndex) {
  const fragment = document.createDocumentFragment();

  for (let i = startIndex; i < endIndex && i < books.length; i++) {
    const book = books[i];
    const preview = createPreview({
      author: book.author,
      id: book.id,
      image: book.image,
      title: book.title,
      summary: book.summary,
      publicationDate: book.publicationDate,
      genres: book.genres,
    });
    fragment.appendChild(preview);
  }

  return fragment;
}

function updateRemaining() {
  const remaining = books.length - page * BOOKS_PER_PAGE;
  const text = `(${remaining > 0 ? remaining : 0})`;

  dataListButton.disabled = !(remaining > 0);
  dataListRemaining.textContent = text;
}

function filterBooks(filters) {
  const filteredBooks = books.filter((book) => {
    const titleMatch =
      filters.title.trim() === '' ||
      book.title.toLowerCase().includes(filters.title.toLowerCase());

    const authorMatch = filters.author === 'any' || book.author === filters.author;

    const genreMatch =
      filters.genre === 'any' ||
      book.genres.some((genre) => genre.toLowerCase() === filters.genre.toLowerCase());

    return titleMatch && authorMatch && genreMatch;
  });