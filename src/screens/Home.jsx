import { IconMessageChatbot } from '@tabler/icons-react';
import React from 'react';
import { Title } from '../components/Title';

export const Home = () => {
  return (
    <main className='bg-gradient-to-tr from-light-pink to-light-violet grid grid-cols-5 w-screen h-screen'>
      <aside className='flex flex-col  col-span-2 align-middle justify-center items-center'>
        <IconMessageChatbot color='#645CBB' size={120} />
        <Title title={'ChatGPT - Clon'} />
      </aside>

    </main>
  )
}
