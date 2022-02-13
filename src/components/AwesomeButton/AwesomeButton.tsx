import { ContentType } from '../../types/ContentType';
import './AwesomeButton.css';

type OwnProps = {
  type: ContentType;
  onClick: (type: ContentType) => void;
};

const AwesomeButton = ({ type, onClick }: OwnProps) => {
  return (
    <a href="#" className={`btn-${type} btn`} onClick={() => onClick(type)}>
      Render {type.toUpperCase()}
    </a>
  );
};

export default AwesomeButton;
