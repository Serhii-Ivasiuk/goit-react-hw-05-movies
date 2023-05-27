const RewiewItem = ({ data: { author, content } }) => {
  return (
    <li>
      <p>Author: {author}</p>
      <p>{content}</p>
    </li>
  );
};

export default RewiewItem;
