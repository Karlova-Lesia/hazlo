import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import IsSelectedIcon from '../icons/IsSelectedIcon';
import IsNotSelectedIcon from '../icons/IsNotSelectedIcon';
import './styles.scss';

function Checkbox({
  userId, id, label, arrayHelpers, memberIds,
}) {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    setIsSelected(!!memberIds.find((value) => value === userId));
  }, []);

  const onAddMembers = () => {
    const { members } = arrayHelpers.form.values;

    if (members.includes(userId)) {
      members.forEach((member, index) => {
        if (member === userId) {
          setIsSelected(false);
          arrayHelpers.remove(index);
        }
      });
    } else {
      setIsSelected(true);
      arrayHelpers.push(userId);
    }
  };

  return (
    <div className="checkbox-wrapper">
      {isSelected ? <IsSelectedIcon /> : <IsNotSelectedIcon />}
      <input
        type="checkbox"
        name={userId}
        id={id}
        className="checkbox"
        checked={isSelected}
        onChange={onAddMembers}
      />
      <label className="checkbox-label" htmlFor={id}>{label}</label>
    </div>
  );
}

Checkbox.propTypes = {
  userId: PropTypes.number,
  id: PropTypes.number,
  label: PropTypes.string,
  arrayHelpers: PropTypes.object,
  memberIds: PropTypes.array,
};

Checkbox.defaultProps = {
  userId: null,
  id: null,
  label: '',
  arrayHelpers: {},
  memberIds: [],
};

export default Checkbox;
