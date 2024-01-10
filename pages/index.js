import { useCallback, useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import TiltPhaseSix from '../components/SkewOnHover';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function Home() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }
  const [className, setClassName] = useState('hidden');
  const images = [
    'https://www.svgrepo.com/show/353396/angular-icon.svg',
    'https://www.svgrepo.com/show/354478/typescript-icon.svg',
    'https://www.svgrepo.com/show/354259/react.svg',
    'https://www.svgrepo.com/show/452091/python.svg',
    'https://www.svgrepo.com/show/353925/javascript.svg',
    'https://www.svgrepo.com/show/452228/html-5.svg',
    'https://www.svgrepo.com/show/349330/css3.svg',
    'https://www.svgrepo.com/show/333609/tailwind-css.svg',
  ];
  // if (typeof window !== 'undefined') {
  //   let mouseDown = 0;
  //   window.onmousedown = () => {
  //     ++mouseDown;
  //     if (mouseDown) {
  //       console.log('mouse button down');
  //     }
  //     setClassName('absolute');
  //   };
  //   window.onmouseup = () => {
  //     --mouseDown;
  //     if (mouseDown) {
  //       console.log('mouse button down');
  //     }
  //     setClassName('hidden');
  //   };
  // }

  if (typeof window !== 'undefined') {
    const moveCursor = (e) => {
      const mouseY = e.clientY;
      const mouseX = e.clientX;
      followCursor.style.transform = `translate3d(${mouseX - 30}px, ${
        window.scrollY + mouseY - 30
      }px, 0)`;

      // cursorPointed.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };
    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('scroll', moveCursor);
  }

  //eportfolio is high tech, with neon blue and purple colors and dark theme
  return (
    <div className='flex bg-grid flex-col min-h-screen bg-gray-900 w-full h-full'>
      <div
        id='followCursor'
        className='hidden md:block text-white  absolute w-[4rem] h-[4rem] animate-pulse rounded-full border-2 shadow-around border-white pointer-events-none'
      />
      <div className='w-screen h-screen flex flex-col'>
        <div className='w-full fixed flex inset-x-0 mx-auto mt-6'>
          <div className='rounded-full bg-gray-900 bg-opacity-50 mx-auto flex border space-x-4 border-white px-6 py-3'>
            <a
              href='/'
              className='text-white font-bold hover:underline hover:cursor-pointer'
            >
              Home
            </a>
            <a
              href='#about'
              className='text-white font-bold hover:underline hover:cursor-pointer'
            >
              About
            </a>
            <Menu as='div' className='relative inline-block text-left'>
              <div>
                <Menu.Button className='inline-flex w-full justify-center gap-x-1.5 '>
                  <p className='text-white font-bold hover:underline hover:cursor-pointer'>
                    Courses
                  </p>
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'
              >
                <Menu.Items className='absolute right-0 z-10 mt-6 w-[6rem] rounded-md border border-white focus:outline-none'>
                  <div className='py-1'>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href='/PLTWIED'
                          className={classNames(
                            active ? 'text-white underline' : 'text-white',
                            'block px-3 py-2 text-center font-semibold text-sm',
                          )}
                        >
                          PLTW IED
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>

        {/* <div className={className} id='followCursor'>
          
        </div> */}

        {/* cursor explode out animation when clicked */}
        <div className='my-auto mx-auto'>
          <p class='text-7xl text-shadow-neon blurIn -mt-[6rem] text-center font-extrabold bg-gradient-to-br from-purple-500 to-blue-500 py-1 text-transparent bg-clip-text'>
            Welcome to my E-Portfolio
          </p>
          <div className='text-4xl font-bold fadeIn text-white text-center mt-6'>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('Hey!')
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString('My name is Alex')
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString('And this is my E-Portfolio')
                  .pauseFor(5000)
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
      {/* <div className="bg-[url('https://cdn.pixabay.com/photo/2018/05/09/17/38/gears-3385696_1280.jpg')] bg-no-repeat bg-cover"></div> */}
      <div id='about' className='w-screen h-screen'>
        <div className='mt-24 mx-auto text-center'>
          <p className='font-extrabold text-5xl text-white'>About me</p>
          <div className='mt-6'>
            <p className='font-semibold text-2xl text-white'>
              Hi, my name is Alex, I am a current student at south western high
              school.
            </p>
          </div>
        </div>
        {/* <div className='flex overflow-hidden'>
          <div className='flex marquee1 space-x-6'>
            {images.map((v, i) => (
              <div key={i}>
                <img
                  src={v}
                  className='w-28 h-28 shadow p-2 rounded-2xl bg-white'
                />
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Home;
