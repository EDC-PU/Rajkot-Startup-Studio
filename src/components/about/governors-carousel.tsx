
'use client';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const people = [
  {
    name: 'Dr. Devanshu J Patel',
    designation: 'President',
    description:
      'Dr. Devanshu Patel, a dynamic visionary president of Parul University, whose unflinching commitment towards education has made an impact not only in Gujarat but in all the diversified states of India, and going beyond national borders.',
    imageId: 'governor-devanshu',
  },
  {
    name: 'Dr. Parul Patel',
    designation: 'Vice President (Student Affairs & General Administration) and Chair Admissions Committee',
    description:
      'Dr. Parul Patel is a resilient administrator, Managing trustee and Vice President of Parul University whose tenderheartedness has allowed her to maintain close relations with the students while guiding them through their academic journey',
    imageId: 'governor-parul',
  },
  {
    name: 'Dr. Geetika M. Patel',
    designation: 'Vice President (Quality, Research & Health Sciences) and Medical Director',
    description:
      'Dr Geetika Madan Patel is a proficient doctor and administrator having pursued her MBBS and MD in Community Medicine with Gold Medal from the illustrious Maharaja Sayajirao University of Baroda. Currently she is the Member of Board of Governance and Medical Director of Parul University.',
    imageId: 'governor-geetika',
  },
  {
    name: 'Dr. Komal Patel',
    designation: 'Vice President (Medical & Paramedical Health Sciences) & Medical Director',
    description:
      "Dr.Komal Patel serves as Member of the Governing Body in the University's Medical Director. She oversees smooth functioning of the University's Ayurveda Hospital along with the Department of Obstetrics and Gynaecology in Parul Sevashram Hospital.",
    imageId: 'governor-komal',
  },
  {
    name: 'Dr. Amit Ganatra',
    designation: 'Vice Chancellor (Provost)',
    description:
      "'I am truly honoured to be a part of PU and I believe that we will be able to go a long in achieving greater heights for the University across all spheres and as long as we work together, we will surely develop the future careers of our students and the many youths across the nation', shared Dr. Ganatra.",
    imageId: 'governor-amit',
  },
  {
    name: 'Manish Pandya',
    designation: 'Registrar',
    description:
      'Prof. Manish Pandya is a passion driven academician whose career and depth of technical expertise has inspired his far reaching passion for innovation in education. With his career spanning for over 19 years in the industry and in higher education.',
    imageId: 'governor-manish',
  },
];

const GovernorsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    appendDots: (dots: React.ReactNode) => (
      <div style={{ bottom: '20px' }}>
        <ul className="m-0 p-0">{dots}</ul>
      </div>
    ),
     customPaging: (i: number) => (
      <div className="w-2.5 h-2.5 bg-white/50 rounded-full transition-colors duration-300 hover:bg-white" />
    ),
  };

  const bgImage = PlaceHolderImages.find((p) => p.id === 'governor-bg');

  return (
    <div
      className="relative w-full py-16 text-foreground overflow-hidden bg-cover bg-center bg-card"
    >
        <div className="container mx-auto px-4 md:px-6 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Board of Governors
            </h2>
            <Slider {...settings} className="max-w-4xl mx-auto">
                {people.map((person) => {
                    const personImage = PlaceHolderImages.find((p) => p.id === person.imageId);
                    return (
                        <div key={person.name} className="px-4">
                            <div className="flex flex-col md:flex-row items-center gap-8">
                                {personImage && (
                                    <div className="flex-shrink-0 w-48 h-48 md:w-56 md:h-56 relative">
                                    <Image
                                        src={personImage.imageUrl}
                                        alt={person.name}
                                        width={224}
                                        height={224}
                                        className="rounded-full object-cover border-4 border-background shadow-lg"
                                        data-ai-hint={personImage.imageHint}
                                    />
                                    </div>
                                )}
                                <div className="text-center md:text-left">
                                    <h3 className="text-2xl font-bold">{person.name}</h3>
                                    <p className="text-md text-primary font-semibold mt-1 mb-3">{person.designation}</p>
                                    <p className="text-base text-muted-foreground">{person.description}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    </div>
  );
};

export default GovernorsCarousel;
