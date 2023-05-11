import React, { useEffect, useState } from 'react'
import { useChat } from '../hooks/useChat'
import { Input } from '../components/Input'


export const Chat = () => {

const [prompt, setPrompt] = useState("")
const {model, response} = useChat()
// console.log(response)
return (
    <main className='h-screen grid justify-center place-items-center'>
      <div>Chat</div>
        <label>
          Name:
          <input className="border-solid border-black border-2" onChange={(e)=>{setPrompt(e.target.value)}} type="text" name="name" />
        </label>
        <Input/>
        <button onClick={()=>{model(prompt)}}>Consultar</button>
        <p>{response}</p>

    </main>

  )
}
