import React from 'react';
import Hero from './components/Hero';
import CourseCard from './components/CourseCard';
import Book from './components/Book';
import GoogleReviews from './components/GoogleReviews';
import FloatingCallButton from './components/FloatingCallButton';
import Dropdown from './components/LocationDropdown';
import CallSection from './components/CallSection';
import { decryptNumber } from './components/shahidSecret';
import { eNum } from './const';

export default function App() {

  const items = ["Item 1", "Item 2", "Item 3"];

  // Example usage
  const decryptedNumber = decryptNumber(eNum);

  return (
    <>
    <Hero />
    <GoogleReviews />
    <CourseCard />
    {/* <Book /> */}
    <FloatingCallButton number={decryptedNumber}/>
    {/* <Dropdown items={items} /> */}
    <CallSection number={decryptedNumber} />
    </>
  )
}