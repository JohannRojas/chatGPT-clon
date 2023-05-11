import {Configuration, OpenAIApi} from 'openai'
import { useState } from 'react';

export const useChat = () => {
    const configuration = new Configuration({
        apiKey: import.meta.env.VITE_OPENAI_API
    });
    
    const openai = new OpenAIApi(configuration);
    
    const [response, setResponse] = useState("")
    const model = async (message) => {
        let options = {
            model: 'text-davinci-003',
            temperature: 0,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ['/'],
        }
        let completeOptions = {
            ...options,
            prompt: message
        }
        const res = await openai.createCompletion(completeOptions);
        if(res.data.choices){
            setResponse(res.data.choices[0].text)
        }            
    };

    return{
        model, response
    }
}

