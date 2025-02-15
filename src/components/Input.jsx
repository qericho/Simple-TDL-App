const Input = ({ value, onChange }) => {
  return (
    <input
      type="text"
      className="border p-2 w-full"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Enter a task..."
    />
  );
};

export default Input;
