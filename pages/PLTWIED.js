import { useCallback, useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import TiltPhaseSix from '../components/SkewOnHover';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function PLTWIED() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }
  //https://www.geeksforgeeks.org/explosion-animation-in-canvas/
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
        className='hidden md:block  absolute w-[4rem] h-[4rem] animate-pulse rounded-full border-2 shadow-around border-white pointer-events-none'
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
              href='/#about'
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

        {/* <div className={className} id='followCursor'>
          
        </div> */}

        {/* cursor explode out animation when clicked */}
        <div className='my-auto mx-auto'>
          <p class='text-7xl text-shadow-neon blurIn -mt-[6rem] text-center font-extrabold bg-gradient-to-br from-purple-500 to-blue-500 py-1 text-transparent bg-clip-text'>
            PLTW IED
          </p>
          <div className='text-4xl font-bold fadeIn text-white text-center mt-6'>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('This is the PLTW IED course page')
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString(
                    'I took this course in my freshman year of high school',
                  )
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString('Below are my activities and projects')
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
      <div className='h-full w-full'>
        <div className='mt-24 mx-auto text-center w-3/4'>
          <p className='font-extrabold text-5xl text-white'>Course overview</p>
          <div className='mt-6'>
            <div className='font-semibold text-2xl text-white'>
              This course is technically a college course. We have learned many
              things over the duration of this course. We have learned about 3d
              printing, CAD, engineering, woodworking, and some business and
              marketing along with some graphics design. We have mostly gone
              in-depth with CAD, 3d printing, and engineering, with skills such
              as technical drawings, how to operate/use a 3d printer, how to
              slice a CAD file, how to do project documentation, and some basic
              woodworking.
            </div>
          </div>
          <p className='font-extrabold text-5xl text-white mt-[14rem]'>
            Lab Safety
          </p>
          <div className='mt-6'>
            <div className='font-semibold text-2xl text-white'>
              One of the most important aspects of this class and is taught
              first is lab safety. Before we have even started anything, we were
              required to take a test on safety, and how to use machines. Lab
              Safety just cannot be skipped over, there is also the risk of
              death of improper use of machines.
            </div>
          </div>
          <p className='font-extrabold text-5xl text-white mt-[14rem]'>
            Career research project
          </p>
          <div className='mt-6'>
            <div className='font-semibold text-2xl text-white'>
              In this class, we had to research a career that we could possibly
              go into. I researched possible careers and their salaries, I also
              researched some colleges and some specs that are needed to get in
              the colleges. I now know and understand different careers and
              colleges I can head into. I liked this project because it allowed
              me a better look into my future. This project was significant in
              expanding my knowledge because I now know what I should aim for
              and what I shouldn't. This project will stick with me for years to
              come because I would like to attend a college one day and this
              project helped me decide which I might want to go to. Below is my
              project.
            </div>
            <div className='my-8 flex justify-center'>
              <iframe
                src='https://docs.google.com/presentation/d/e/2PACX-1vTABXNB3bGZDOml7-1887LxZvtJ02WxIsEsl1eXjAy-A8JxY-OzDHFclRLofZTQt97eXBvwESj7wRLY/embed?start=true&loop=true&delayms=3000'
                frameborder='0'
                width='960'
                height='569'
                allowfullscreen='true'
                mozallowfullscreen='true'
                webkitallowfullscreen='true'
              />
            </div>
          </div>
          <p className='font-extrabold text-5xl text-white mt-[14rem]'>
            Unit 1. Intro to Design and Problem Solving
          </p>
          <div className='mt-6'>
            <div className='font-semibold text-2xl text-white'>
              In unit 1, we learned the basics of design and problem solving
            </div>
            <div className='font-semibold text-5xl mt-12 text-white'>
              Lesson 1.1. Design Basics
            </div>
            <div className='font-semibold text-2xl mt-2 text-white'>
              Our first lesson was on design basics, we were to do activities
              that would strengthen our skills
            </div>
            <div className='space-y-[10rem] flex flex-col'>
              <div>
                <div className='font-semibold text-3xl mt-4 text-white'>
                  Activity 1.1.1. Design as a process
                </div>
                <div className='font-semibold text-2xl mt-2 text-white'>
                  In this activity, we learned how to apply a design process to
                  creatively solve a problem, contribute to the efforts of a
                  team to develop ideas, and develop a model to represent a
                  design idea. We used these skills to develop a fling
                  machine(that throws a ping pong ball, whichever team threw it
                  the farthest got the best grade). We used a spreadsheet to
                  keep track of the data. Below is my work and the spreadsheet
                  that kept track of the data.
                </div>
                <a
                  href='https://docs.google.com/document/d/1ukrcxj8M7oCF2c89CgnRCTfB3CEUzSCzt8fTCN7xoNA/edit?usp=sharing'
                  className='font-semibold text-2xl mt-2 text-blue-400 underline'
                >
                  https://docs.google.com/document/d/1ukrcxj8M7oCF2c89CgnRCTfB3CEUzSCzt8fTCN7xoNA/edit?usp=sharing
                </a>
                <br />
                <a
                  href='https://docs.google.com/spreadsheets/d/1CjQ8qj-f9TC2agmtTzsAOsGgBOX6JtzFM4nJ16H5L60/edit#gid=846972451'
                  className='font-semibold text-2xl mt-2 text-blue-400 underline'
                >
                  https://docs.google.com/spreadsheets/d/1CjQ8qj-f9TC2agmtTzsAOsGgBOX6JtzFM4nJ16H5L60/edit#gid=846972451
                </a>
              </div>
              <div>
                <div className='font-semibold text-3xl mt-4 text-white'>
                  Activity 1.1.2. Iterate and Redesign
                </div>
                <div className='font-semibold text-2xl mt-2 text-white'>
                  In this activity, we learned how to iterate on steps of the
                  design process to improve a solution, use statistics to
                  compare center and spread of two or more data sets, and draw
                  conclusions related to a prediction and support conclusions
                  using experimental data. We used this to reiterate and
                  redesign our fling machine, this time, we had to fling a ping
                  pong ball as close to possible to a number in inches. Below is
                  my work and the spreadsheet of data.
                </div>
                <a
                  href='https://docs.google.com/document/d/1oSDkNe94XhqtSWl4cLbaaS4wX5GZ2GZzR5TaiJk2lsM/edit?usp=sharing'
                  className='font-semibold text-2xl mt-2 text-blue-400 underline'
                >
                  https://docs.google.com/document/d/1oSDkNe94XhqtSWl4cLbaaS4wX5GZ2GZzR5TaiJk2lsM/edit?usp=sharing
                </a>
                <br />
                <a
                  href='https://docs.google.com/spreadsheets/d/1CjQ8qj-f9TC2agmtTzsAOsGgBOX6JtzFM4nJ16H5L60/edit#gid=2027126563'
                  className='font-semibold text-2xl mt-2 text-blue-400 underline'
                >
                  https://docs.google.com/spreadsheets/d/1CjQ8qj-f9TC2agmtTzsAOsGgBOX6JtzFM4nJ16H5L60/edit#gid=2027126563
                </a>
              </div>
              <div>
                <div className='font-semibold text-3xl mt-4 text-white'>
                  Activity 1.1.3. Concept Sketching
                </div>
                <div className='font-semibold text-2xl mt-2 text-white'>
                  In this activity, we learned how to give and receive feedback
                  to influence personal and professional development,
                  effectively document engineering work in an organized notebook
                  so someone unfamiliar can follow and understand the process,
                  and develop a model(realistic sketch) to represent a design
                  idea. Below is my work
                </div>
                <a
                  href='https://docs.google.com/document/d/1MR8awCAAGjOoQzF52YgNT1W98Pt848ZSj9rWgeyElFU/edit?usp=sharing'
                  className='font-semibold text-2xl mt-2 text-blue-400 underline'
                >
                  https://docs.google.com/document/d/1MR8awCAAGjOoQzF52YgNT1W98Pt848ZSj9rWgeyElFU/edit?usp=sharing
                </a>
              </div>
              <div>
                <div className='font-semibold text-3xl mt-4 text-white'>
                  Activity 1.1.4. Targeting Success Using Data
                </div>
                <div className='font-semibold text-2xl mt-2 text-white'>
                  In this activity, we learned how to give and receive feedback
                  to influence personal and professional development,
                  effectively document engineering work in an organized notebook
                  so someone unfamiliar can follow and understand the process,
                  and develop a model(realistic sketch) to represent a design
                  idea. We used our learned skills to make a table of our fling
                  machine and how much it deviates from perfect. Below is my
                  work and the spreadsheet data.
                </div>
                <a
                  href='https://docs.google.com/document/d/1a2MZOL8-8FsfLKGgej-f2vP2hyEN6D12IhIuoPtagLE/edit?usp=sharing'
                  className='font-semibold text-2xl mt-2 text-blue-400 underline'
                >
                  https://docs.google.com/document/d/1a2MZOL8-8FsfLKGgej-f2vP2hyEN6D12IhIuoPtagLE/edit?usp=sharing
                </a>
                <a
                  href='https://docs.google.com/spreadsheets/d/1CjQ8qj-f9TC2agmtTzsAOsGgBOX6JtzFM4nJ16H5L60/edit#gid=1301454682'
                  className='font-semibold text-2xl mt-2 text-blue-400 underline'
                >
                  https://docs.google.com/spreadsheets/d/1CjQ8qj-f9TC2agmtTzsAOsGgBOX6JtzFM4nJ16H5L60/edit#gid=1301454682
                </a>
              </div>
              <div>
                <div className='font-semibold text-3xl mt-4 text-white'>
                  Activity 1.1.5. Design a game
                </div>
                <div className='font-semibold text-2xl mt-2 text-white'>
                  In this project, we learned how to apply the design process to
                  creatively solve a problem. We created a carnival game with
                  the new skills we have learned in this unit. I liked this
                  project because it was fun and exciting to do, some things
                  that will stick with me is the trial and error it took to make
                  our design better. We now know and understand how to make a
                  game that is fun and exciting but still profitable. This
                  project helped us expand our knowledge because we learned how
                  to make a game that is fun and still profitable. Some main
                  take-aways is how to balance out profit and customer
                  happiness. Below is our presentation.
                </div>
                <div className='my-8 flex justify-center'>
                  <iframe
                    src='https://docs.google.com/presentation/d/e/2PACX-1vRfsbO7PC0wGas0pZYH4UNkrcq12OogPcU7xcSs4iLdbeZpwE7CwwQr4EUQp1-VCq-HxDn-nuratO8K/embed?start=true&loop=true&delayms=3000'
                    frameborder='0'
                    width='960'
                    height='569'
                    allowfullscreen='true'
                    mozallowfullscreen='true'
                    webkitallowfullscreen='true'
                  ></iframe>
                </div>
              </div>
            </div>
            <div className='font-semibold text-5xl mt-12 text-white'>
              Lesson 1.2. Visualization and solid modeling
            </div>
            <div className='font-semibold text-2xl mt-2 text-white'>
              Our second lesson was about visualization and solid modeling, we
              created isometric sketches and used fusion to model and draw
              technical drawings.
            </div>
            <div className='space-y-[10rem] flex flex-col'>
              <div>
                <div className='font-semibold text-3xl mt-4 text-white'>
                  Activity 1.2.1. Isometric sketching
                </div>
                <div className='font-semibold text-2xl mt-2 text-white'>
                  In this activity, we learned how to hand sketch isometric
                  views of a simple object or part at a given scale using the
                  actual object, a detailed verbal description of the object, or
                  pictorial view of the object, and give and receive effective
                  feedback to influence personal and professional development.
                  Below is my work.
                </div>
                <a
                  href='https://docs.google.com/document/d/1UfaKcdMNyqT50s4jhhNlABOkZ246zNVbqeWWextAFEg/edit?usp=sharing'
                  className='font-semibold text-2xl mt-2 text-blue-400 underline'
                >
                  https://docs.google.com/document/d/1UfaKcdMNyqT50s4jhhNlABOkZ246zNVbqeWWextAFEg/edit?usp=sharing
                </a>
              </div>
              <div>
                <div className='font-semibold text-3xl mt-4 text-white'>
                  Activity 1.2.2. 3D Solid Modeling
                </div>
                <div className='font-semibold text-2xl mt-2 text-white'>
                  In this activity, we learned how to build a 3D computer
                  model(in fusion360) to represent a physical object, and build
                  a 3D computer model to represent a design idea. Below is my
                  work.
                </div>
                <a
                  href='https://docs.google.com/document/d/12_Jh3ECSvr4oBtNynIPo_2_LUxCkY3KZ4daW-je_F7g/edit?usp=sharing'
                  className='font-semibold text-2xl mt-2 text-blue-400 underline'
                >
                  https://docs.google.com/document/d/12_Jh3ECSvr4oBtNynIPo_2_LUxCkY3KZ4daW-je_F7g/edit?usp=sharing
                </a>
              </div>{' '}
              <div>
                <div className='font-semibold text-3xl mt-4 text-white'>
                  Activity 1.2.3. Multiview drawings
                </div>
                <div className='font-semibold text-2xl mt-2 text-white'>
                  In this activity, we learned how to identify error and
                  omissions in orthographic projections and multiview drawings,
                  hand sketch an isometric view or build a physical
                  representation of an object based on a multiview drawing of
                  the object, and use fusion360 to create multiview drawings
                  using base and projected views. Below is my work.
                </div>
                <a
                  href='https://docs.google.com/document/d/1I5wYMQo-I-UutmVO1yMpaLPAqN6UbcHgFhaJAK4lHsU/edit?usp=sharing'
                  className='font-semibold text-2xl mt-2 text-blue-400 underline'
                >
                  https://docs.google.com/document/d/1I5wYMQo-I-UutmVO1yMpaLPAqN6UbcHgFhaJAK4lHsU/edit?usp=sharing
                </a>
              </div>
              <div>
                <div className='font-semibold text-3xl mt-4 text-white'>
                  Activity 1.2.4. Fundamentals of Dimensioning
                </div>
                <div className='font-semibold text-2xl mt-2 text-white'>
                  In this activity, we learned how to identify error and
                  omissions in orthographic projections and multiview drawings,
                  generate an annotated multiview drawing using CAD software,
                  and create and edit a sketch, multiview drawing, and add
                  annotations to a drawing in fusion360. Below is my work
                </div>
                <a
                  href='https://docs.google.com/document/d/1rTNNAoQ5b2p-2VI4mR4QefsXjeqWaF3oWUnVI0jOMMU/edit?usp=sharing'
                  className='font-semibold text-2xl mt-2 text-blue-400 underline'
                >
                  https://docs.google.com/document/d/1rTNNAoQ5b2p-2VI4mR4QefsXjeqWaF3oWUnVI0jOMMU/edit?usp=sharing
                </a>
              </div>
              <div>
                <div className='font-semibold text-3xl mt-4 text-white'>
                  Project 1.2.6 Charmed I'm sure.
                </div>
                <div className='font-semibold text-2xl mt-2 text-white'>
                  In this project we used all our skills learned from the
                  previous units to create a keychain in fusion360. I liked this
                  assignment because it gave us a chance to apply our learning
                  into real world applications. After this project, we now know
                  and understand how to create a keychain, how to make it
                  visually appealing and how to follow constraints and criteria
                  better. This project is significant in expanding my knowledge
                  as I learned extra skills during this project. This project
                  will stick with me years to come because it is the first real
                  world application(in my opinion) that we thoroughly used our
                  skills we have learned, it also helped us with marketing and
                  what customers should or should not expect. Below is our
                  presentation.
                </div>
                <div className='my-auto flex justify-center'>
                  <iframe
                    src='https://docs.google.com/presentation/d/e/2PACX-1vSX36CqU4J8rUWI-BmUfRrjGfbv5MPkHWUU2rEShdhQzB7ew_3fpldUt7FrOmKOKa54sVjfTo3bjUhp/embed?start=true&loop=true&delayms=3000'
                    frameborder='0'
                    width='960'
                    height='569'
                    allowfullscreen='true'
                    mozallowfullscreen='true'
                    webkitallowfullscreen='true'
                  ></iframe>
                </div>
              </div>
            </div>
            <div className='font-semibold text-5xl mt-12 text-white'>
              Lesson 1.3. CAD Fundamentals
            </div>
            <div className='font-semibold text-2xl mt-2 text-white'>
              Our third lesson was about the fundamentals of CAD, we learned
              this via fusion360.
            </div>
            <div className='space-y-[10rem] flex flex-col'>
              <div>
                <div className='font-semibold text-3xl mt-4 text-white'>
                  Activity 1.3.1. Measure It!
                </div>
                <div className='font-semibold text-2xl mt-2 text-white'>
                  In this activity, we learned how to explain that all
                  measurements are an approximation of the true value of a
                  quantity, choose a measurement device based on the level of
                  precision and accuracy needed, and apply inferential reasoning
                  to make and/or support claims about populations based on data.
                  Below is my work.
                </div>
                <a
                  href='https://docs.google.com/document/d/1yWiMlGM0WYd3PX-430hh4bLXnByOxtJBbGT3xGewhdA/edit?usp=sharing'
                  className='font-semibold text-2xl mt-2 text-blue-400 underline'
                >
                  https://docs.google.com/document/d/1yWiMlGM0WYd3PX-430hh4bLXnByOxtJBbGT3xGewhdA/edit?usp=sharing
                </a>
              </div>
              <div>
                <div className='font-semibold text-3xl mt-4 text-white'>
                  Activity 1.3.2. Making Holes in CAD
                </div>
                <div className='font-semibold text-2xl mt-2 text-white'>
                  In this activity, we learned how to read and interpret a hole
                  note to identify the size and type of hole specified, and
                  create and constrain a 3D model to represent the physical
                  characteristics of a physical object. Below is my work.
                </div>
                <a
                  href='https://docs.google.com/document/d/1GlXnL4lQuEOBEzud0pxSDf8ozBIJ2mFS6WigbaaxI60/edit?usp=sharing'
                  className='font-semibold text-2xl mt-2 text-blue-400 underline'
                >
                  https://docs.google.com/document/d/1GlXnL4lQuEOBEzud0pxSDf8ozBIJ2mFS6WigbaaxI60/edit?usp=sharing
                </a>
              </div>
              <div>
                <div className='font-semibold text-3xl mt-4 text-white'>
                  Activity 1.3.3. Constraining a Sketch
                </div>
                <div className='font-semibold text-2xl mt-2 text-white'>
                  In this activity, we learned how to create a computer model to
                  represent a conceptual idea and inform design decisions, and
                  create and constrain a 3D model to represent the physical
                  characteristics of a design idea or physical object. Below is
                  my work.
                </div>
                <a
                  href='https://docs.google.com/document/d/16VdYUr6jiOk5L7mxKbyX3Wjz5bUav6sHqyvMhxOyWsE/edit?usp=sharing'
                  className='font-semibold text-2xl mt-2 text-blue-400 underline'
                >
                  https://docs.google.com/document/d/16VdYUr6jiOk5L7mxKbyX3Wjz5bUav6sHqyvMhxOyWsE/edit?usp=sharing
                </a>
              </div>
              <div>
                <div className='font-semibold text-3xl mt-4 text-white'>
                  Activity 1.3.4. CAD Modeling Skills
                </div>
                <div className='font-semibold text-2xl mt-2 text-white'>
                  In this activity, we learned how to correctly build and
                  constrain a three-dimensional solid computer model to
                  accurately represent the physical characteristics and
                  behaviors of a design idea or real object. Below is my work.
                  my work.
                </div>
                <a
                  href='https://docs.google.com/document/d/1nvKtDFC5BrFM3wD-9krIg9U9lQUHIqlV-pIDGl4NIsg/edit?usp=sharing'
                  className='font-semibold text-2xl mt-2 text-blue-400 underline'
                >
                  https://docs.google.com/document/d/1nvKtDFC5BrFM3wD-9krIg9U9lQUHIqlV-pIDGl4NIsg/edit?usp=sharing
                </a>
              </div>
              <div>
                <div className='font-semibold text-3xl mt-4 text-white'>
                  Activity 1.3.5. Documenting a Design
                </div>
                <div className='font-semibold text-2xl mt-2 text-white'>
                  In this activity, we learned how to identify
                  necessary/appropriate views to fully detail a part or
                  assembly, use CAD software to generate a multiview drawing
                  from a 3D solid model, and apply appropriate and sufficient
                  annotation (including dimensioning) to a drawing to fully
                  describe an object. Below is my work.
                </div>
                <a
                  href='https://docs.google.com/document/d/1iDgzOJVpFbvE7GETDlDGHcUpdliMJcCOnn2bbTsx16A/edit?usp=sharing'
                  className='font-semibold text-2xl mt-2 text-blue-400 underline'
                >
                  https://docs.google.com/document/d/1iDgzOJVpFbvE7GETDlDGHcUpdliMJcCOnn2bbTsx16A/edit?usp=sharing
                </a>
              </div>
              <div>
                <div className='font-semibold text-3xl mt-4 text-white'>
                  Activity 1.3.6. I Section That!
                </div>
                <div className='font-semibold text-2xl mt-2 text-white'>
                  In this activity, we learned how to identify
                  necessary/appropriate views, especially a section view, to
                  fully detail a part or assembly, and identify errors in a full
                  or half-section view. Below is my work.
                </div>
                <a
                  href='https://docs.google.com/document/d/14FWDvf-aFQHRX0VhuTEcw4hHOdX_HBU9RJmtnvUqbZs/edit?usp=sharing'
                  className='font-semibold text-2xl mt-2 text-blue-400 underline'
                >
                  https://docs.google.com/document/d/14FWDvf-aFQHRX0VhuTEcw4hHOdX_HBU9RJmtnvUqbZs/edit?usp=sharing
                </a>
              </div>
              <div>
                <div className='font-semibold text-3xl mt-4 text-white'>
                  Project 1.3.7. Design a Protective case
                </div>
                <div className='font-semibold text-2xl mt-2 text-white'>
                  In this project, we used all of the skills we learned so far
                  to design a protective case. This will stick with me years to
                  come because we used the skills we learned in fusion360 to
                  help create our project, these skills are one of the most
                  important and include joints and hinges. This project was
                  significant in expanding my knowledge because it helped me
                  apply my skills and I learned other skills along the way, such
                  as how to protect something better. I now understand and know
                  how to effectively design a protective case. I liked this
                  assignment because it was a challenge to do, our first
                  prototype was a bust. Below is our project.
                </div>
                <div className='my-auto flex justify-center'>
                  <iframe
                    src='https://docs.google.com/presentation/d/e/2PACX-1vTmVzrf5kLcigSwUAQDN5W_1j340OroteCm_Cg5yOaYtOEUd4Bj8ycF3kF8Z6CCO5GO4-1jGohdffIk/embed?start=true&loop=true&delayms=3000'
                    frameborder='0'
                    width='960'
                    height='569'
                    allowfullscreen='true'
                    mozallowfullscreen='true'
                    webkitallowfullscreen='true'
                  ></iframe>
                </div>
              </div>
            </div>
            <p className='font-extrabold text-5xl text-white mt-[14rem]'>
              Unit 2. Assembly Design
            </p>
            <div className='font-semibold text-5xl mt-12 text-white'>
              Lesson 2.1. Put it together
            </div>
            <div className='font-semibold text-2xl mt-2 text-white'>
              Our first lesson was about the assembly process.
            </div>
            <div className='space-y-[10rem] flex flex-col'>
              <div>
                <div className='font-semibold text-3xl mt-4 text-white'>
                  Activity 2.1.1 Tolerate This!
                </div>
                <div className='font-semibold text-2xl mt-2 text-white'>
                  In this activity, we learned how to apply appropriate
                  engineering tolerances to specify the allowable variation,
                  size of individual features, and orientation and location
                  between features of an object, and use the mean and standard
                  deviation of a data set to ﬁt it to a normal distribution and
                  use the Empirical Rule to estimate population percentages.
                  Below is my work
                </div>
                <a
                  href='https://docs.google.com/document/d/1-ZpgJY0AhavACN5TL2O7Phcp3JsjMSSv__Ny8os5oPY/edit?usp=sharing'
                  className='font-semibold text-2xl mt-2 text-blue-400 underline'
                >
                  https://docs.google.com/document/d/1-ZpgJY0AhavACN5TL2O7Phcp3JsjMSSv__Ny8os5oPY/edit?usp=sharing
                </a>
              </div>
              <div>
                <div className='font-semibold text-3xl mt-4 text-white'>
                  Activity 2.1.2 Hold It Together!
                </div>
                <div className='font-semibold text-2xl mt-2 text-white'>
                  In this activity, we worked with a team to create a slideshow
                  presentation and class handout that will teach our classmates
                  about my teams assigned topic, our topic was snap fit joints.
                  I liked this project because we got to do public speaking.
                  Some main takeaways is how to do public speaking, and how to
                  design handouts. We now know how to do public speaking and how
                  snap-fit joints work. This helped expand my knowledge because
                  I learned new skills such as how to design a handout and how
                  to use snap-fit joints. Below is the handout(south western
                  school district people logged into canva can view) and our
                  presentation.
                </div>
                <a
                  href='https://www.canva.com/design/DAF1AjmzeN0/i_g2l5QWdodpLEHWtD5xeA/edit?utm_content=DAF1AjmzeN0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
                  className='font-semibold text-2xl mt-2 text-blue-400 underline'
                >
                  https://www.canva.com/design/DAF1AjmzeN0/i_g2l5QWdodpLEHWtD5xeA/edit?utm_content=DAF1AjmzeN0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton
                </a>
                <div className='my-auto flex justify-center'>
                  <iframe
                    src='https://docs.google.com/presentation/d/e/2PACX-1vRJcpbQeBi-LOLG5ZhlAfhQu7Bzr4Bq3XIEJA7zbSlEx9MNV37iAhjrQ-A_2_lh-PViOHyC1RPaUzSK/embed?start=true&loop=true&delayms=3000'
                    frameborder='0'
                    width='960'
                    height='569'
                    allowfullscreen='true'
                    mozallowfullscreen='true'
                    webkitallowfullscreen='true'
                  ></iframe>
                </div>
              </div>
              <div>
                <div className='font-semibold text-3xl mt-4 text-white'>
                  Activity 2.1.3 Putting It Together
                </div>
                <div className='font-semibold text-2xl mt-2 text-white'>
                  In this activity, we learned how to identify joints that allow
                  movement between parts in an assembly and the resulting
                  degrees of freedom, correctly build and constrain a
                  three-dimensional solid computer model to accurately represent
                  the physical characteristics and behaviors of a physical
                  object, and correctly apply joints to constrain
                  multi-component models and/or simulate realistic relative
                  motion of the component parts. Below is my work.
                </div>
                <a
                  href='https://docs.google.com/document/d/1RFr6mo5KOboPnC4UOi2eC3MsSYSXDtWVHyqSeu8P1Jc/edit?usp=sharing'
                  className='font-semibold text-2xl mt-2 text-blue-400 underline'
                >
                  https://docs.google.com/document/d/1RFr6mo5KOboPnC4UOi2eC3MsSYSXDtWVHyqSeu8P1Jc/edit?usp=sharing
                </a>
              </div>
              <div>
                <div className='font-semibold text-3xl mt-4 text-white'>
                  Project 2.1.5 Redesign a protective case
                </div>
                <div className='font-semibold text-2xl mt-2 text-white'>
                  In this project, we collected feedback from our previous
                  protective case and redesigned it. We learned how to reiterate
                  and design things, and how to take feedback and evaluate what
                  we could have done better. I liked this project because it
                  shows a real world application as you reiterate on a design
                  and improve it. Some things that will stick with me is how to
                  effectively take feedback and fix problems. We now know and
                  understand how to reiterate and redesign. Below is our
                  presentation for our project.
                </div>
                <div className='my-auto flex justify-center'>
                  <iframe
                    src='https://docs.google.com/presentation/d/e/2PACX-1vRu8sJvLNYvth1OJ0EDzBAZnbL1oCgdUG8SuEzzdk5wtRqNBPz1wC40dIk3e4nfm9O3CBw8bL8dYZbs/embed?start=true&loop=true&delayms=3000'
                    frameborder='0'
                    width='960'
                    height='569'
                    allowfullscreen='true'
                    mozallowfullscreen='true'
                    webkitallowfullscreen='true'
                  ></iframe>
                </div>
              </div>
            </div>
            <div className='font-semibold text-5xl mt-12 text-white'>
              Lesson 2.2. Take it Apart
            </div>
            <div className='font-semibold text-2xl mt-2 text-white'>
              Our second lesson is about taking stuff apart and reverse
              engineering.
            </div>
            <div className='space-y-[10rem] flex flex-col'>
              <div>
                <div className='font-semibold text-3xl mt-4 text-white'>
                  Activity 2.2.1 What is Reverse Engineering?
                </div>
                <div className='font-semibold text-2xl mt-2 text-white'>
                  In this activity, we learned how to describe the processes and
                  purposes of reverse engineering. Below is my work.
                </div>
                <a
                  href='https://docs.google.com/document/d/1IoD4uKTDmF8RkLxi5IGtTngHAnwbRmW2wMF52XqK5u8/edit?usp=sharing'
                  className='font-semibold text-2xl mt-2 text-blue-400 underline'
                >
                  https://docs.google.com/document/d/1IoD4uKTDmF8RkLxi5IGtTngHAnwbRmW2wMF52XqK5u8/edit?usp=sharing
                </a>
              </div>
              <div>
                <div className='font-semibold text-3xl mt-4 text-white'>
                  Activity 2.2.2 Visual Analysis
                </div>
                <div className='font-semibold text-2xl mt-2 text-white'>
                  In this activity, we learned how to describe the reverse
                  engineering process of visual analysis, and perform a visual
                  analysis of an object and describe the apparent visual
                  elements and principles of design. Below is my work.
                </div>
                <a
                  href='https://docs.google.com/document/d/1jqlG_bUFzKJM5JXMZ1DE7typ4ilxxYieuNHtgJRl0tA/edit?usp=sharing'
                  className='font-semibold text-2xl mt-2 text-blue-400 underline'
                >
                  https://docs.google.com/document/d/1jqlG_bUFzKJM5JXMZ1DE7typ4ilxxYieuNHtgJRl0tA/edit?usp=sharing
                </a>
              </div>
              <div>
                <div className='font-semibold text-3xl mt-4 text-white'>
                  Activity 2.2.3 Functional Analysis & the Black Box
                </div>
                <div className='font-semibold text-2xl mt-2 text-white'>
                  In this activity, we learned how to describe the reverse
                  engineering process of functional analysis, and perform a
                  functional analysis of a product or system to determine the
                  purpose, inputs and outputs, and operation of a product or
                  system. Below is my work.
                </div>
                <a
                  href='https://docs.google.com/document/d/1GNsaIyVgYFiE4Tb7n_eCmLb95hdGAxUeYSY3yPvpMco/edit?usp=sharing'
                  className='font-semibold text-2xl mt-2 text-blue-400 underline'
                >
                  https://docs.google.com/document/d/1GNsaIyVgYFiE4Tb7n_eCmLb95hdGAxUeYSY3yPvpMco/edit?usp=sharing
                </a>
              </div>
              <div>
                <div className='font-semibold text-3xl mt-4 text-white'>
                  Activity 2.2.4 Struct. Analysis/Prod. Disassembly
                </div>
                <div className='font-semibold text-2xl mt-2 text-white'>
                  In this activity, we learned how to describe the reverse
                  engineering process of structural analysis, perform a
                  structural analysis of a product or system to determine the
                  materials used, the form of component parts, as well as the
                  configuration and interaction of component parts when
                  assembled, and develop a model to accurately represent
                  information or important characteristics of an object, data,
                  process, or design idea for an intended purpose. Below is my
                  work.
                </div>
                <a
                  href='https://docs.google.com/document/d/110rbJrOmMKs7Hrr0ewUCHW9aP_16ht9zxvoWSx8HzI4/edit?usp=sharing'
                  className='font-semibold text-2xl mt-2 text-blue-400 underline'
                >
                  https://docs.google.com/document/d/110rbJrOmMKs7Hrr0ewUCHW9aP_16ht9zxvoWSx8HzI4/edit?usp=sharing
                </a>
              </div>
              <div>
                <div className='font-semibold text-3xl mt-4 text-white'>
                  Activity 2.2.5 CAD Design Tools
                </div>
                <div className='font-semibold text-2xl mt-2 text-white'>
                  In this activity, we learned how to correctly build and
                  constrain a three-dimensional solid computer model to
                  accurately represent the physical characteristics and
                  behaviors of a design idea or real object. Below is my work.
                </div>
                <a
                  href='https://docs.google.com/document/d/10Hg6e4SOotMHfbwDq7tvQPrDB1Ghatq1jG8P1udpqTM/edit?usp=sharing'
                  className='font-semibold text-2xl mt-2 text-blue-400 underline'
                >
                  https://docs.google.com/document/d/10Hg6e4SOotMHfbwDq7tvQPrDB1Ghatq1jG8P1udpqTM/edit?usp=sharing
                </a>
              </div>
              <div>
                <div className='font-semibold text-3xl mt-4 text-white'>
                  Project 2.2.6 Automoblox Car
                </div>
                <div className='font-semibold text-2xl mt-2 text-white'>
                  In this project we reverse engineered a automoblox car and
                  remade it in fusion360. I liked this project because for the
                  first time it looked really professional. Some main takeaways
                  are how to do professional technical drawings, and assembly
                  and joints in fusion360. This was significant in expanding my
                  knowledge because it helped us perfect our skills and make it
                  look professional. We now know and understand how to make
                  professional drawings. Below is the exploded view of the car
                  we reverse engineering and remade in fusion360.
                </div>
                <div className='flex justify-center my-4'>
                  <img src='./car.png' />
                </div>
              </div>
              <div>
                <div className='font-semibold text-3xl mt-4 text-white'>
                  Activity 2.2.7 Design for Manufact. & Assembly
                </div>
                <div className='font-semibold text-2xl mt-2 text-white'>
                  In this project we learned how to apply the principles of
                  design for manufacturability and assembly of mechanical
                  products, and identify design flaws of and potential
                  enhancements to a proposed design solution. Below is my work
                </div>
                <a
                  href='https://docs.google.com/document/d/1pNVedVo6jSoMh42ZI5Q5Urqb88Xn1VeTGlccBrjltZM/edit?usp=sharing'
                  className='font-semibold text-2xl mt-2 text-blue-400 underline'
                >
                  https://docs.google.com/document/d/1pNVedVo6jSoMh42ZI5Q5Urqb88Xn1VeTGlccBrjltZM/edit?usp=sharing
                </a>
              </div>
              <div>
                <div className='font-semibold text-3xl mt-4 text-white'>
                  Activity 2.2.8 Design an Integrated Assembly
                </div>
                <div className='font-semibold text-2xl mt-2 text-white'>
                  In this project we learned how to define measurable visual,
                  functional, and structural design requirements (criteria) and
                  realistic constraints against which solution alternatives can
                  be evaluated and optimized, apply effective techniques and
                  appropriate guidelines to generate multiple creative ideas and
                  solutions to a problem, carry out a plan to compare competing
                  solution ideas and justify the selection of a solution path
                  with respect to design requirements and constraints, and
                  present information, findings, and supporting evidence
                  clearly, concisely, and logically in writing in which the
                  development, organization, and style are appropriate to task,
                  purpose, and audience. I liked this because it was another
                  real world application that we might encounter. This project
                  was significant in expanding my knowledge because it used all
                  the skills we have learned over this course and learned how to
                  apply it. A main takeaways are how to combine 3d printed and
                  non 3d printed parts to make a functioning system. Below is
                  our presentation.
                </div>
                <div className='flex justify-center my-4'>
                  <iframe
                    src='https://docs.google.com/presentation/d/e/2PACX-1vRcGGLO3YssPxdaZHTSGGvAXlNJKrn0Yc7Z3mns_WFCgg5ugIZr-Ap3UUIJXGLdo72lIYL48TbQzAr1/embed?start=true&loop=true&delayms=3000'
                    frameborder='0'
                    width='960'
                    height='569'
                    allowfullscreen='true'
                    mozallowfullscreen='true'
                    webkitallowfullscreen='true'
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <p className='font-extrabold text-5xl text-white mt-[14rem] mb-[3rem]'>
            Course Feedback
          </p>
          <p className='font-semibold text-2xl text-white mb-[25rem]'>
            Overall I enjoyed this course although I personally wouldn't
            recommend or not recommend this course to another student, there
            were pretty good stuff covered in this course that would definitely
            be useful in the real world, but it wasn't over the top bad or good,
            just a medium.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PLTWIED;
