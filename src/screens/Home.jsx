import { IconMessageChatbot } from '@tabler/icons-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Title } from '../components/Title';

export const Home = () => {
  return (
    <main className='bg-white grid grid-cols-5 w-screen h-screen'>
      <aside className='flex flex-col col-span-2 align-middle justify-center items-center'>
        <IconMessageChatbot color='#645CBB' size={120} />
        <Title title={'ChatGPT - Clon'} />
      </aside>
      <section className='flex flex-col col-span-2 align-middle justify-center items-center'>
        <button className='bg-sky-300 p-4 rounded'>
          <Link to='chat'>Ir al chat</Link>
        </button>

      </section>
    </main>
  )
}
