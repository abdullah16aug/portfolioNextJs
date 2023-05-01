import React from 'react'
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import myImage from '../../public/dev.png';
import Image from "next/image";
import { RainbowHighlight } from "./RainbowHighlight";
const Hero = () => {
    const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
    return (
        <>
        <div className="flex flex-row justify-center items-start overflow-hidden">
          {/* Text container */}
    
          <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
            <RoughNotationGroup type='underline' show={true}>
              <RainbowHighlight color={colors[0]}>
                <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
                  Developer.
                </h1>
              </RainbowHighlight>
              <RainbowHighlight type='underline' color={colors[4]} >
                <h1 className="text-4xl mt-2 md:text-8xl font-bold text-gray-700 dark:text-gray-400 my-2">
                    Designer.
                </h1>
                </RainbowHighlight>
                <RainbowHighlight color={colors[1]}>
                <h1 className="text-4xl mt-3 md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
                    Creator.
                </h1>
              </RainbowHighlight>
                <RainbowHighlight color={colors[3]}>
                <h1 className="text-4xl mt-3 md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
                    Programmer.
                </h1>
              </RainbowHighlight>
           </RoughNotationGroup>
         </div>
          {/* Image container */}
            <div className=''>
              <Image src={myImage}
              ></Image>
              <p className="text-lg text-center  font-mono">Abdullah Asad</p>
            </div>
            </div>
         
        
         
         {/* <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={myImage} layout="fill" objectFit="cover" />
            </div> */}
      
        </>
    
       );
}

export default Hero