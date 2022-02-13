import { ContentEnum, ContentType } from '../../types/ContentType';
import AwesomeButton from '../AwesomeButton/AwesomeButton';

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
    </header>
  );
}

export default Header;
