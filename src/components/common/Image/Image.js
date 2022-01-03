import PropTypes from 'prop-types';
import './styles.scss';

function Image({ source, altText }) {
  return (
    <div className="image-wrapper">
      <img src={source} alt={altText} />
    </div>
  );
}

Image.propTypes = {
  source: PropTypes.string,
  altText: PropTypes.string,
};

Image.defaultProps = {
  source: '',
  altText: '',
};

export default Image;
