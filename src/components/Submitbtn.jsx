const Submitbtn = ({ onSubmit }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
      onClick={onSubmit}
    >
      Add
    </button>
  );
};

export default Submitbtn;
