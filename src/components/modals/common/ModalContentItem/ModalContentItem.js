import PropTypes from 'prop-types';
import './styles.scss';

function ModalContentItem({ labelValue, itemValue, className }) {
  return (
    <>
      <span className="label">{labelValue}</span>
      <div className={className}>{itemValue}</div>
    </>
  );
}

ModalContentItem.propTypes = {
  labelValue: PropTypes.string,
  itemValue: PropTypes.string,
  className: PropTypes.string,
};

ModalContentItem.defaultProps = {
  labelValue: '',
  itemValue: '',
  className: '',
};

export default ModalContentItem;
