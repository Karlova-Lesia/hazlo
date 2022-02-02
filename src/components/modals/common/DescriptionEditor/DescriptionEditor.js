import FontIcon from '../../../icons/FontIcon';
import FontWeightIcon from '../../../icons/FontWeightIcon';
import FontItalicIcon from '../../../icons/FontItalicIcon';
import FontColorIcon from '../../../icons/FontColorIcon';
import Textarea from '../../../common/Textarea';
import './styles.scss';

function DescriptionEditor() {
  return (
    <>
      <div className="label-wrapper">
        <label className="label">Description</label>
        <div className="modal-btn-group">
          <button>
            <FontIcon />
          </button>
          <button>
            <FontWeightIcon />
          </button>
          <button>
            <FontItalicIcon />
          </button>
          <button>
            <FontColorIcon />
          </button>
        </div>
      </div>
      <Textarea name="description" placeholder="Description" />
    </>
  );
}

export default DescriptionEditor;
