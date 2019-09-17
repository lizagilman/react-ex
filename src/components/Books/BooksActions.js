import axios from 'axios';
import uuidv1 from 'uuid/v1';
import { loremIpsum, noImgUrl } from '../helpers';
import {
  LOAD_BOOKS,
  OPEN_ADD_BOOK_MODAL,
  CLOSE_ADD_BOOK_MODAL,
} from './BooksConstants';

export const openAddBookModal = () => ({
  type: OPEN_ADD_BOOK_MODAL,
  payload: {},
});

export const closeAddBookModal = () => ({
  type: CLOSE_ADD_BOOK_MODAL,
  payload: {},
});

const loadBooks = results => ({
  type: LOAD_BOOKS,
  payload: { results },
});

export const getBooks = () => dispatch => axios.get('booksData.json')
  .then((response) => {
    const formatBookData = (book) => {
      const { id } = book;
      const {
        title, authors, publishedDate, description,
      } = book.volumeInfo;

      const { imageLinks } = book.volumeInfo;
      const thumbnail = imageLinks ? imageLinks.thumbnail : noImgUrl;
      const bookDescription = description || loremIpsum;
      const unavailable = 'No data available';

      return {
        id: id || uuidv1(),
        title: title || unavailable,
        author: authors ? authors[0] : 'No data available',
        date:
              publishedDate && publishedDate.length < 5
                ? `${publishedDate}-01-01`
                : publishedDate || unavailable,
        description: bookDescription,
        thumbnail,
      };
    };

    const formatResults = data => data.items.map(item => formatBookData(item));

    dispatch(loadBooks(formatResults(response.data)));
  })
  .catch((error) => {
    throw (error);
  });
