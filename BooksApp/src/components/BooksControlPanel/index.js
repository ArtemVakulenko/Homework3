import { connect } from 'react-redux';
import BooksControlPanel from './BooksControlPanel.jsx';
import { booksGetRequest } from '../../store/books/asyncActions';

// const mapStateToProps = (state) => {

// }
const mapDispatchToProps = {
    booksGetRequest,
};

export default connect(null, mapDispatchToProps)(BooksControlPanel);
