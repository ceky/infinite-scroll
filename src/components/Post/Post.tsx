import './Post.css';

type OwnProps = {
  text: string;
  publishDate: string;
  name: string;
};

function Post({ text, publishDate, name }: OwnProps) {
  return (
    <div className="post-container">
      <p className="name">{name}</p>
      <p className="date">{new Date(publishDate).toLocaleString()}</p>
      <p className="post">{text}</p>
    </div>
  );
}

export default Post;
