import {
  LOAD_BOOKS,
  OPEN_ADD_BOOK_MODAL,
  CLOSE_ADD_BOOK_MODAL,
  ADD_NEW_BOOK,
} from './BooksConstants';
import { DELETE_BOOK } from '../Book/BookConstants';
import { UPDATE_BOOK } from '../Book/components/EditBookModal/EditBookModalConstants';

const initialState = {
  allBooks: [],
  isModalOpen: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BOOKS:
      return { ...state, allBooks: action.payload.results };

    case DELETE_BOOK:
      return {
        ...state,
        allBooks: state.allBooks.filter(book => book.id !== action.payload.id),
      };

    case UPDATE_BOOK:
      return {
        ...state,
        allBooks: state.allBooks.map(
          book => (book.id === action.payload.bookDataToUpdate.id
            ? action.payload.bookDataToUpdate
            : book),
        ),
      };

    case OPEN_ADD_BOOK_MODAL:
      return { ...state, isModalOpen: true };

    case CLOSE_ADD_BOOK_MODAL:
      return { ...state, isModalOpen: false };

    case ADD_NEW_BOOK:
      return {
        ...state,
        allBooks: [...state.allBooks, action.payload.newBookData],
      };
    default:
      return state;
  }
};
