import { useCallback, useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';

function Home() {
  return (
    <div>
      <div className="p-8 w-screen flex flex-col h-screen bg-cover bg-fixed bg-no-repeat bg-[url('https://www.creativefabrica.com/wp-content/uploads/2021/09/11/Abstract-dark-blue-geometric-background-Graphics-17136224-1.jpg')]">
        <div className=' bg-white flex flex-col rounded-2xl p-4 w-1/4 bg-opacity-20 mx-auto mt-[12rem]'>
          <div className='flex mx-auto'>
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
            src='https://qolhubwebsite.sfo3.digitaloceanspaces.com/avatars/PFPelectricblue.png'
          />
          <div className='mt-2 mx-auto'>
            <p className='text-6xl font-semibold text-white mt-2  text-center mb-2'>
              I am a...
            </p>
            <div className='flex flex-col mx-auto text-center'>
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
      <div className='bg-white p-4 w-full'>
        <div className='mt-12 flex flex-col'>
          <div className='flex'>
            <img
              className='w-[40%] shadow-lg h-[60%] rounded-2xl  ml-[4rem] '
              src='https://i0.wp.com/picjumbo.com/wp-content/uploads/astronaut-in-fantasy-psychedelic-scenery-free-photo.jpg?w=600&quality=100'
            />
            <div className='mx-auto'>
              <p className='font-semibold text-6xl text-center'>
                Welcome to Alex's IED Portfolio!
              </p>
              <div className='text-2xl font-normal mt-3 mx-auto text-center max-w-2xl'>
                <p>
                  Hello, my name is Alex Yang. At the time I made this, I was a
                  freshman at South western high school. I like to tackle
                  challenges and do difficult courses because it will help me
                  grow as a learner and a person. As of the time making this, I
                  plan to attend CMU for a masters degree in computer science.
                </p>
                <p className='mt-2'>
                  I play 3 instruments: The saxophone(tenor and alto), The
                  piano, and the Guitar. My hobbies are basketball(although at
                  the time of writing I wasn't very good), my 3 instruments,
                  Programming(mainly web development), and reading.
                </p>
                <p className='mt-2'>
                  I already had a job at 14 for web development. Here is their
                  website:{' '}
                  <a
                    href='https://thefuturesphere.com'
                    className='text-blue-500 underline'
                  >
                    https://thefuturesphere.com
                  </a>
                </p>
                <p>
                  Note to self: finish this, with robotics team, also add navbar
                  at top, and in projects include qolhub(remove this when
                  pushing to github), also have the astronaut image thing follow
                  mouse and skew also add spacers for paralax effect
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
