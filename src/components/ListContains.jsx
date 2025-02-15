const ListContains = ({ items, onDel, onUpdate }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} className="px-1 my-2 bg-gray-400 flex py-3 justify-between items-center text-white pl-3"> <span>{item}</span>
                <div className="flex gap-2 items-center">
                    <button onClick={()=> onUpdate(index)}
                     className="px-3 py-1 bg-green-600 hover:bg-green-700 text-[13px] cursor-pointer">Update</button>
                    <button onClick={()=>onDel(index)}
                     className="px-3 py-1 bg-red-600  hover:bg-red-700 text-[13px]  cursor-pointer">Delete</button>
                </div>
             </li>
      ))}
    </ul>
  );
};

export default ListContains;
