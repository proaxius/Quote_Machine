import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import TextRender from './TextRender'
import AuthorRender from './authorRender'


const inter = Inter({ subsets: ['latin'] })
let fetchedData = {}
export default function Home() {
  const twitterLink = "twitter.com/intent/tweet";
  const [apiData , setNewData] = useState( " ")
  const newQuote =()=>{

   async function fetchApi(){
    const res = await fetch("https://api.quotable.io/random/");
    const data = await res.json();
setNewData(data)
   }
    fetchApi()
  }   
  useEffect(()=>{
    newQuote()
  },[])
  const TweetQuote =()=>{

  }
  return (
    <main 
    className={`flex flex-col h-screen place-items-center justify-center `}
    >
    
    <div className='gap-10 flex justify-center items-center  flex-col bg-[#25222281] p-4 rounded-lg h-auto w-[70%] m-4' id="quote-box">
    {/*quote box element*/}
   
   
    
    {/*text element*/}
    <text className='font-semibold  text-center' id="text">{JSON.stringify(apiData.content)}</text> 
    
    {/*author element*/}
     <text className="font-extrabold" id="author">{JSON.stringify(apiData.author)}</text>  
   
  
    
    {/*Tweet element*/}
    <a href="twitter.com/intent/tweet" id="tweet-quote"> <button className=' outline-double outline-stone-300 p-3 rounded-lg' formTarget='_blank' onClick={TweetQuote} > Tweet Quote</button></a>
   
    {/* New Quote element*/}
    <button id="new-quote" className=' outline-double outline-stone-300 p-3 rounded-lg' onClick={newQuote}>New Quote</button>					
   
            
            
          </div>
    </main>
  )
}
