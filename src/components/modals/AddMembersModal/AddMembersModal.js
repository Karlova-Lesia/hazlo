import { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  Formik, Form, Field, FieldArray,
} from 'formik';
import { editProject } from '../../../api/projects';
import HeaderModal from '../common/HeaderModal';
import Checkbox from '../../Checkbox';
import Button from '../../common/Button';
import AddMembersIcon from '../../icons/AddMembersIcon';
import { ProjectsPageContext } from '../../../contexts/projectsContext';
import './styles.scss';

function AddMembersModal({
  id, title, description, ownerId, members, onClose, memberIds,
}) {
  const { setMemberIds } = useContext(ProjectsPageContext);

  const handleSubmit = ({ members: selectedMembers }) => {
    editProject(id, {
      id, title, description, ownerId, memberIds: selectedMembers,
    })
      .then(() => {
        setMemberIds(id, selectedMembers);

        onClose();
      });
  };

  return (
    <div className="add-members-modal-wrapper">
      <div className="add-members-modal">
        <HeaderModal onClose={onClose}>
          Select
          <br />
          Members
        </HeaderModal>
        <Formik
          initialValues={{ members: memberIds }}
          onSubmit={handleSubmit}
        >
          <Form className="form-select">
            <div className="checkbox-array">
              <FieldArray
                name="members"
                render={(arrayHelpers) => (
                  <>
                    {members.map((member) => (
                      <Field
                        key={member.id}
                        name={member.firstName}
                        render={({ field }) => (
                          <Checkbox
                            {...field}
                            id={member.id}
                            userId={member.id}
                            label={`${member.firstName} ${member.lastName}`}
                            arrayHelpers={arrayHelpers}
                            projectId={id}
                            memberIds={memberIds}
                          />
                        )}
                      />
                    ))}
                  </>
                )}
              />
            </div>
            <Button wrapperClasses="select-btn-wrapper" type="submit">
              <AddMembersIcon className="modal-add-members-icon" />
              Select
            </Button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

AddMembersModal.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  members: PropTypes.array,
  ownerId: PropTypes.number,
  memberIds: PropTypes.array,
  onClose: PropTypes.func,
};

AddMembersModal.defaultProps = {
  id: null,
  title: '',
  description: '',
  members: [],
  ownerId: null,
  memberIds: [],
  onClose: () => {},
};

export default AddMembersModal;
