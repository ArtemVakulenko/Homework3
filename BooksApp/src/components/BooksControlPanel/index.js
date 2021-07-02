import { connect } from 'react-redux';
import BooksControlPanel from './BooksControlPanel.jsx';
import { booksPostRequest, clearFields, booksPutRequest, toggleModal } from '../../store/booksCrudActions/actions';
import { getStatusPostOrPut, getStatusShowModal } from '../../store/booksCrudActions/selectors';

const mapStateToProps = (state) => ({
    flagPost: getStatusPostOrPut(state),
    flagModal: getStatusShowModal(state),
});

const mapDispatchToProps = (dispatch) => ({
    booksPostRequest: () => dispatch(booksPostRequest()),
    booksPutRequest: () => dispatch(booksPutRequest()),
    clearFields: () => dispatch(clearFields()),
    toggleModal: (payload) => dispatch(toggleModal(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksControlPanel);
