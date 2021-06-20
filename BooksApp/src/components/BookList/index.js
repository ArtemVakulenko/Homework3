import { connect } from 'react-redux';
import BookList from './BookList.jsx';
import { booksGetRequest } from '../../store/books/asyncActions';
import { getBooksReducerStoreList } from '../../store/books/selectors';

const mapStateToProps = (state) => ({
    books: getBooksReducerStoreList(state),
});

const mapDispatchToProps = {
    booksGetRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
