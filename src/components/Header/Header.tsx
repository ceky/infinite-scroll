import { ContentEnum, ContentType } from '../../types/ContentType';
import AwesomeButton from '../AwesomeButton/AwesomeButton';
import './Header.css';

type OwnProps = {
  selectedContentType: ContentType;
  onUpdateContentType: (type: ContentType) => void;
};

function Header({ selectedContentType, onUpdateContentType }: OwnProps) {
  return (
    <header>
      {selectedContentType === ContentEnum.POSTS ? (
        <AwesomeButton
          type={ContentEnum.USERS}
          onClick={() => onUpdateContentType(ContentEnum.USERS)}
        />
      ) : (
        <AwesomeButton
          type={ContentEnum.POSTS}
          onClick={() => onUpdateContentType(ContentEnum.POSTS)}
        />
      )}

      <h2>{selectedContentType.toUpperCase()}</h2>
    </header>
  );
}

export default Header;
