import Textarea from '../../../common/Textarea';
import './styles.scss';

function DescriptionEditor() {
  return (
    <>
      <div className="label-wrapper">
        <label className="label">Description</label>
      </div>
      <Textarea name="description" placeholder="Description" />
    </>
  );
}

export default DescriptionEditor;
