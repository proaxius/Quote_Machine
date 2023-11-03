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
    
    <div className='gap-10 flex justify-center items-center  flex-col bg-[#25222281] p-4 rounded-lg h-auto w-auto m-4'>
    {/*quote box element*/}
    <div id="quote-box">
    <div className='gap-10 flex justify-around '>
    
    {/*text element*/}
    <TextRender id="text" quote={JSON.stringify(apiData.content)}/>
    
    {/*author element*/}
    <span> <AuthorRender id="author" author={JSON.stringify(apiData.author)}/> </span>
    </div>
    </div>
    <div className='flex gap-10 items-center '>
    <div >
    
    {/*Tweet element*/}
    <a href={twitterLink}> <button id="tweet-quote" onClick={TweetQuote} > Tweet Quote</button></a>
    </div>
    <div>
    {/* New Quote element*/}
    <button id="new-quote" onClick={newQuote}>New Quote</button>					
    </div>
    </div>
            
            
          </div>
    </main>
  )
}
