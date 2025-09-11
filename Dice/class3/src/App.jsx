import { useEffect, useState } from 'react'

function App() {
  const [apiData, setApiData] = useState([])
  const [input , setInput] = useState('')
  const [searchItem, setSearchItem] = useState("") 

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((res) => setApiData(res))
  }, [])

  // filter products based on searchItem
  const result = apiData.filter((item) =>
    item.title.toLowerCase().includes(searchItem.toLowerCase())
  )

  return (
    <main> 
      <header className=' bg-black fixed top-0  w-full '>
        <nav className='flex justify-between  p-[10px] '>
          <p className='text-pink-700 text-xl font-bold text-shadow-pink-600 p-[10px] '>Isha's Store</p>
          <div className=' p-[10px] flex justify-between w-[400px]'>
            <input 
              type="text" 
              placeholder='search here...' 
              className=' bg-black  text-white'
              onChange={(e) => setInput(e.target.value)}
              value={input}
              
            />
            <button 
              className='bg-pink-700
              p-[10px] rounded-2xl text-white'
              onClick={() => setSearchItem(input)}
            >
              Search Here
            </button>
          </div>
          <div></div>
        </nav>
      </header>

      {/* cards container  */}
      <div className='flex   justify-center  align-center  flex-wrap  gap-[20px]  mt-[90px]'>
        {result.length > 0 ? (
          result.map(item => (
            <div key={item.id} className='bg-white border-none outline-none size-[height: 60vh]  rounded-2xl w-[20vw] flex flex-col justify-center items-center gap-[10px]  p-[20px] shadow-red-500 '>
              <img src={item.image} className='w-[10vw]  h-[20vh]  rounded-3xl mb-[30px] '/>
              <h2 className='text-xl font-bold'>{item.title}</h2>
              <p className='text-xl text-red-600'>Price: ${item.price}</p>
            </div>
          ))
        ) : (
          <h1 className='text-xl text-red-500 mt-[200px] ml-[600px]'>Sorry no result found !!</h1>
        )}
      </div>
    </main>
  )
}

export default App
