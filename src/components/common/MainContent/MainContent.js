import PropTypes from 'prop-types';
import './styles.scss';

function MainContent({
  title, children, style, className,
}) {
  return (
    <main className="main-content-wrapper">
      <h3 className="title">{title}</h3>
      <div className={className} style={style}>
        {children}
      </div>
    </main>
  );
}

MainContent.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]),
  style: PropTypes.object,
  className: PropTypes.string,
};

MainContent.defaultProps = {
  title: '',
  children: [],
  style: {},
  className: 'main-content',
};

export default MainContent;
