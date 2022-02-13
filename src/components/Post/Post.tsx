import './Post.css';

type OwnProps = {
  text: string;
  publishDate: string;
  name: string;
};

function Post({ text, publishDate, name }: OwnProps) {
  return (
    <div className="post-container">
      <p>{name}</p>
      <p>{new Date(publishDate).toLocaleString()}</p>
      <p>{text}</p>
    </div>
  );
}

export default Post;
