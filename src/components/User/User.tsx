import './User.css';

type OwnProps = {
  name: string;
  pictureUrl: string;
};

function User({ name, pictureUrl }: OwnProps) {
  return (
    <div className="user-container">
      <p className="name">{name}</p>
      <img className="avatar" src={pictureUrl} />
    </div>
  );
}

export default User;
