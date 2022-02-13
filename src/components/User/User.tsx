import './User.css';

type OwnProps = {
  name: string;
};

function User({ name }: OwnProps) {
  return <div className="user-container">{name}</div>;
}

export default User;
