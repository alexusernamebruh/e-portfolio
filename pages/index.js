import { useCallback, useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import TiltPhaseSix from '../components/SkewOnHover';

function Home() {
  const [scroll1, setScroll1] = useState([]);
  const [scroll2, setScroll2] = useState([]);
  useEffect(() => {
    const newScroll1 = [];
    const newScroll2 = [];
    for (let i = 0; i < 100; i++) {
      if (i % 2 === 0) {
        newScroll1.push(
          <img
            src='https://www.svgrepo.com/show/50313/engineering.svg'
            className='w-28 h-28 shadow p-2 rounded-2xl bg-white '
          />,
        );
      } else {
        newScroll1.push(
          <img
            src='https://th.bing.com/th/id/OIP.Fyj4OKO8PBxP-lUFiLcKXwHaHa?pid=ImgDet&rs=1'
            className='w-28 h-28 shadow p-2 rounded-2xl bg-white '
          />,
        );
      }
    }

    for (let i = 0; i < 33; i++) {
      newScroll2.push(
        <img
          src='https://www.svgrepo.com/show/353396/angular-icon.svg'
          className='w-28 h-28 shadow p-2 rounded-2xl bg-white '
        />,
      );
      newScroll2.push(
        <img
          src='https://www.svgrepo.com/show/354478/typescript-icon.svg'
          className='w-28 h-28 shadow p-2 rounded-2xl bg-white '
        />,
      );

      newScroll2.push(
        <img
          src='https://www.svgrepo.com/show/354259/react.svg'
          className='w-28 h-28 shadow p-2 rounded-2xl bg-white '
        />,
      );
      newScroll2.push(
        <img
          src='https://www.svgrepo.com/show/452091/python.svg'
          className='w-28 h-28 shadow p-2 rounded-2xl bg-white '
        />,
      );
      newScroll2.push(
        <img
          src='https://www.svgrepo.com/show/353925/javascript.svg'
          className='w-28 h-28 shadow p-2 rounded-2xl bg-white '
        />,
      );
      newScroll2.push(
        <img
          src='https://www.svgrepo.com/show/452228/html-5.svg'
          className='w-28 h-28 shadow p-2 rounded-2xl bg-white '
        />,
      );
      newScroll2.push(
        <img
          src='https://www.svgrepo.com/show/349330/css3.svg'
          className='w-28 h-28 shadow p-2 rounded-2xl bg-white '
        />,
      );
      newScroll2.push(
        <img
          src='https://www.svgrepo.com/show/333609/tailwind-css.svg'
          className='w-28 h-28 shadow p-2 rounded-2xl bg-white '
        />,
      );
    }
    setScroll1(newScroll1);
    setScroll2(newScroll2);
  }, []);
  return (
    <div>
      <div className='p-8 w-screen flex flex-col h-screen bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 '>
        <div className=' bg-white flex flex-col rounded-2xl p-4 w-1/3 bg-opacity-20 mx-auto mt-[10rem]'>
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
          <div className='flex flex-col'>
            <div className='absolute flex gap-x-8 left-20 w-full h-32 top-10 animate-marquee-infinite'>
              {scroll1.map((v, i) => v)}
            </div>
            <div className='absolute flex gap-x-8 left-20 w-full h-32 top-10 animate-marquee-infinite'>
              {scroll2.map((v, i) => v)}
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white p-4 w-full'>
        <div className='my-12 flex flex-col'>
          <div className='flex'>
            <div className='w-[40%]'>
              <TiltPhaseSix>
                <img
                  className='w-full shadow-lg h-full rounded-2xl  ml-[4rem] '
                  src='https://i0.wp.com/picjumbo.com/wp-content/uploads/astronaut-in-fantasy-psychedelic-scenery-free-photo.jpg?w=600&quality=100'
                />
              </TiltPhaseSix>
            </div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col bg-cover bg-fixed bg-no-repeat bg-[url('https://4kwallpapers.com/images/wallpapers/glass-light-abstract-background-blue-background-3d-4480x2520-8738.jpg')]">
        <p className='mx-auto font-semibold mt-4 text-8xl text-white'>
          Projects
        </p>
        <div className='p-8 w-screen h-screen grid gap-x-10 grid-cols-2 '>
          <div className='w-full h-[50%] rounded-2xl shadow-lg  border border-white'>
            <iframe
              src='https://docs.google.com/presentation/d/e/2PACX-1vT7n1W4pJ0ZdoBHmAMcvN-aQib_i2nGcA3KC8glPeSVyCTl7zgGr1ygGmu2wzV2PEiP3cF-D-AmFagv/embed?start=true&loop=true&delayms=3000'
              frameborder='0'
              className='w-full h-full rounded-2xl'
              allowfullscreen='true'
              mozallowfullscreen='true'
              webkitallowfullscreen='true'
            ></iframe>
          </div>
          <div className='w-full h-[50%] rounded-2xl shadow-lg  border border-white'></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
