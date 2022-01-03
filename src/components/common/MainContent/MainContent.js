import PropTypes from 'prop-types';
import './styles.scss';

function MainContent({ title, children }) {
  return (
    <main className="main-content-wrapper">
      <h3 className="title">{title}</h3>
      <div className="main-content">
        {children}
      </div>
    </main>
  );
}

MainContent.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]),
};

MainContent.defaultProps = {
  title: '',
  children: [[], null],
};

export default MainContent;
