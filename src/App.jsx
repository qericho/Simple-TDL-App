import Input from './components/Input'
import Submitbtn from './components/Submitbtn'
import ListContains from './components/ListContains'
import { useState } from 'react'

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]); 

  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]); 
      setInputValue(""); 
    }
  };

  const handleDeleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index)); 
  };
  
  const handleUpdateItem = (index) => {
    const newValue = window.prompt("Update your task:", items[index]); 
    if (newValue === null || newValue.trim() === "") return; 
  
    const updatedItems = items.map((item, i) => (i === index ? newValue : item));
    setItems(updatedItems);
  };
  

  return (
    <div className='w-full h-screen flex md:p-0 p-4
    items-center justify-center bg-gradient-to-r from-blue-200 to-cyan-200'>
      <div className="w-full md:w-[500px] max-h-full container mx-auto p-2 bg-white">
        <h1 className='text-2xl font-bold'>Todo</h1>
        {/* Input */}
        <div className='px-10 py-2'>
          <div className='flex justify-center items-center gap-1 my-2'>
            <Input value={inputValue} onChange={setInputValue} />
            <Submitbtn onSubmit={handleAddItem} />
          </div>
        </div>
        {/* UL */}
        <ListContains items={items} onDel={handleDeleteItem} onUpdate={handleUpdateItem}/>
      </div>
    </div>
  )
}

export default App
