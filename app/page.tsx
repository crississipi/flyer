"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setTimeout(() => {
      setIsFlipped(!isFlipped);
    }, 300)
  };

  return (
    <main className="h-[100vh] w-[100vw] flex items-center justify-center relative">
      <div className="h-full md:h-9/10 w-full flex items-center justify-center select-none">
        <div className="h-full w-full absolute top-1/2 left-1/2 -translate-1/2 before:h-full before:w-full before:absolute before:bg-white/30 before:backdrop-blur-lg">
          <Image
            height={4096}
            width={4096}
            alt="flyer"
            src='/mam-boj.jpg' 
            className="h-full w-full object-cover object-center"
            priority
draggable={false}
          />
        </div>
        
        {/** Paper flip card */}
        <div className="hidden md:block relative w-3/5 h-full z-50">
          <div 
            className={`relative w-full h-full transition-all duration-1000 preserve-3d cursor-pointer ${
              isFlipped ? 'flip-paper' : ''
            }`}
            onClick={handleFlip}
            style={{
              transformStyle: 'preserve-3d',
              perspective: '1000px'
            }}
          >
            {/* Front of card - with paper texture */}
            <div 
              className="absolute top-1/2 -translate-y-1/2 w-full h-max backface-hidden rounded-lg shadow-2xl"
              style={{
                transform: 'rotateY(0deg)',
                backfaceVisibility: 'hidden',
                background: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)'
              }}
            >
              <Image
                height={4096}
                width={4096}
                alt="card back"
                src='/updated-images/back-image.jpg'
                className="h-full w-full object-cover rounded-lg"
                priority
draggable={false}
              />
            </div>
            
            {/* Back of card - with paper texture */}
            <div 
              className="absolute top-1/2 -translate-y-1/2 w-full h-max backface-hidden rounded-lg shadow-2xl"
              style={{
                transform: 'rotateY(180deg)',
                backfaceVisibility: 'hidden',
                background: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)'
              }}
            >
              <Image
                height={4096}
                width={4096}
                alt="card front"
                src='/updated-images/front-image.jpg'
                className="h-full w-full object-cover rounded-lg"
                priority
draggable={false}
              />
            </div>
          </div>
          
          {/* Flip button styled like a paper tab */}
          <button 
            onClick={handleFlip}
            className="absolute top-1/2 -left-10 transform -translate-1/2 bg-black/10 font-black pb-2 px-5 rounded-full shadow-lg text-3xl text-white transition-all duration-300 ease-out backdrop-blur-xs border border-gray-200 hover:shadow-xl hover:border-white hover:bg-black/20 cursor-pointer"
          >
            ↫
          </button>
          <button 
            onClick={handleFlip}
            className="absolute top-1/2 -right-10 translate-x-1/2 -translate-y-1/2 transform bg-black/10 font-black pb-2 px-5 rounded-full shadow-lg text-3xl text-white transition-all duration-300 ease-out backdrop-blur-xs border border-gray-200 hover:shadow-xl hover:border-white hover:bg-black/20 cursor-pointer"
          >
            ↬
          </button>
        </div>
        
        <div className="h-full md:hidden w-full flex flex-col overflow-x-hidden z-50">
          <Image
            height={4096}
            width={4096}
            alt="flyer"
            src='/updated-images/front-page.jpg' 
            className="h-max w-full object-cover object-center"
            priority
            draggable={false}
          />
          <Image
            height={4096}
            width={4096}
            alt="flyer"
            src='/updated-images/page-1.jpg' 
            className="h-max w-full object-cover object-center"
            priority
            draggable={false}
          />
          <Image
            height={4096}
            width={4096}
            alt="flyer"
            src='/updated-images/page-2.jpg' 
            className="h-max w-full object-cover object-center"
            priority
            draggable={false}
          />
          <Image
            height={4096}
            width={4096}
            alt="flyer"
            src='/updated-images/page-3.jpg' 
            className="h-max w-full object-cover object-center"
            priority
            draggable={false}
          />
          <Image
            height={4096}
            width={4096}
            alt="flyer"
            src='/updated-images/page-4.jpg' 
            className="h-max w-full object-cover object-center"
            priority
            draggable={false}
          />
          <Image
            height={4096}
            width={4096}
            alt="flyer"
            src='/updated-images/page-5.jpg' 
            className="h-max w-full object-cover object-center"
            priority
            draggable={false}
          />
        </div>
      </div>
    </main>
  );
}