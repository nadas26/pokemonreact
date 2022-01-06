import { useState } from "react";

const MultiAttributes = ({ attrs, title }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen((isOpen) => !isOpen);

  return (
    <li>
      <h3 className="font-bold">
        {title}{" "}
        <button className="text-lg" onClick={handleClick}>
          {open ? "▼" : "▶"}
        </button>
      </h3>
      {open ? (
        <ul className="list-inside list-disc pl-4">
          {attrs.map((attr) => (
            <li key={attr}>{attr}</li>
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default MultiAttributes;
