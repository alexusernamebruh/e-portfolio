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
  //eportfolio is high tech, with neon blue and purple colors and dark theme
  return (
    <div className='flex bg-grid flex-col min-h-screen bg-gray-900 w-full h-full'>
      <div className='w-screen h-screen flex flex-col'>
        <div className='w-full fixed flex inset-x-0 mx-auto mt-6'>
          <div className='rounded-full bg-gray-900 bg-opacity-50 mx-auto flex border space-x-4 border-white px-6 py-3'>
            <p className='text-white font-bold hover:underline hover:cursor-pointer'>
              Home
            </p>
            <p className='text-white font-bold hover:underline hover:cursor-pointer'>
              About
            </p>
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
                          href='#'
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
                  .start();
              }}
              options={{
                loop: true,
              }}
            />
          </div>
        </div>
        {/* <div className='w-[5rem]'>
          <img
            className='w-[5rem]'
            src='https://i.pinimg.com/originals/6a/ae/67/6aae67a108b40f15c4f64e67ccc4f3cc.gif'
          />
        </div> */}
      </div>
      {/* <div className="bg-[url('https://cdn.pixabay.com/photo/2018/05/09/17/38/gears-3385696_1280.jpg')] bg-no-repeat bg-cover"></div> */}
      <div className='w-screen h-screen'>
        <div className='mt-24 mx-auto text-center'>
          <p className='font-extrabold text-5xl text-white'>About me</p>
          <div className='mt-6'>
            <p className='font-semibold text-2xl text-white'>
              Hi, my name is Alex
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
