import { useCallback, useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';

function Home() {
  return (
    <div>
      <div className="p-8 w-screen flex flex-col h-screen bg-cover bg-no-repeat bg-[url('https://a-static.besthdwallpaper.com/vibrant-abstract-waves-wallpaper-3840x2160-16986_54.jpg')]">
        <div className='flex mx-auto mt-7'>
          <p className='text-7xl font-semibold tracking-wide text-gray-400'>
            E-Portfolio
          </p>
          <p className='text-7xl font-semibold tracking-wide text-white absolute -ml-1.5'>
            E-Portfolio
          </p>
        </div>
        <div className='flex mx-auto mt-2'>
          <p className='text-5xl mx-auto text-gray-400 font-semibold'>
            By Alex Yang
          </p>
          <p className='text-5xl mx-auto text-white absolute -ml-1 font-semibold'>
            By Alex Yang
          </p>
        </div>
        <img
          className='mx-auto rounded-full w-[10rem] h-[10rem] border-4 border-white shadow mt-4'
          src='https://avatars.githubusercontent.com/u/85073684?v=4'
        />
        <div className='p-2 rounded-2xl bg-black bg-opacity-20 mx-auto'>
          <p className='text-6xl font-semibold text-white mt-8 text-center mb-2'>
            I am a...
          </p>
          <div className='flex flex-col mx-auto'>
            <div className='flex text-center text-8xl font-semibold text-white'>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString('Student')
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString('Coder')
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString('Musician')
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString('Friend')
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString('Engineer')
                    .pauseFor(2500)
                    .deleteAll()
                    .start();
                }}
                options={{
                  loop: true,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
