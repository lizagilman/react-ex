import { connect } from 'react-redux';
import { getBooks, openAddBookModal, closeAddBookModal } from './BooksActions';

import Books from './Books';

const mapStateToProps = ({ books }) => ({
  allBooks: books.allBooks || [],
  isModalOpen: books.isModalOpen,
});

const mapDispatchToProps = { getBooks, openAddBookModal, closeAddBookModal };

export default connect(mapStateToProps, mapDispatchToProps)(Books);
