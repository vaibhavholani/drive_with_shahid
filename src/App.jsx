import React from 'react';
import Hero from './components/Hero';
import CourseCard from './components/CourseCard';
import Book from './components/Book';
import GoogleReviews from './components/GoogleReviews';
import FloatingCallButton from './components/FloatingCallButton';
import Dropdown from './components/LocationDropdown';
import CallSection from './components/CallSection';

export default function App() {

  const items = ["Item 1", "Item 2", "Item 3"];

  return (
    <>
    <Hero />
    <GoogleReviews />
    <CourseCard />
    {/* <Book /> */}
    <FloatingCallButton />
    {/* <Dropdown items={items} /> */}
    <CallSection />
    </>
  )
}