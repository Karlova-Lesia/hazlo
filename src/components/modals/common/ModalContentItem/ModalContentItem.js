import PropTypes from 'prop-types';
import './styles.scss';

function ModalContentItem({
  label, itemValue, className, wrapperClass,
}) {
  return (
    <div className={wrapperClass}>
      <div className="card-item">
        <h4 className="card-item-label">{label}</h4>
        <p className={className}>{itemValue}</p>
      </div>
    </div>
  );
}

ModalContentItem.propTypes = {
  label: PropTypes.string,
  itemValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  className: PropTypes.string,
  wrapperClass: PropTypes.string,
};

ModalContentItem.defaultProps = {
  label: '',
  itemValue: '',
  className: '',
  wrapperClass: '',
};

export default ModalContentItem;
