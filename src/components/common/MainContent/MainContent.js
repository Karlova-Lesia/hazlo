import PropTypes from 'prop-types';
import './styles.scss';

function MainContent({ title, children, style }) {
  return (
    <main className="main-content-wrapper">
      <h3 className="title">{title}</h3>
      <div className="main-content" style={style}>
        {children}
      </div>
    </main>
  );
}

MainContent.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]),
  style: PropTypes.object,
};

MainContent.defaultProps = {
  title: '',
  children: [],
  style: {},
};

export default MainContent;
