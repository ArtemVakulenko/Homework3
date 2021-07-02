import { connect } from 'react-redux';
import { booksDeleteRequest, setFieldPut, toggleModal } from '../../store/booksCrudActions/actions';

import BookItem from './BookItem.jsx';

const mapDispatchToProps = { 
    booksDeleteRequest, setFieldPut, toggleModal,
};

export default connect(null, mapDispatchToProps)(BookItem);
