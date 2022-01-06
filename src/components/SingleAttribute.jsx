const SingleAttribute = ({ keyName, children }) => (
  <li>
    <span className="font-bold">{keyName}</span>: <span>{children}</span>
  </li>
);

export default SingleAttribute;
