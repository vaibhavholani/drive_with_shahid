import React from 'react';
import Hero from './components/Hero';
import CourseCard from './components/CourseCard';
import Book from './components/Book';
import GoogleReviews from './components/GoogleReviews';

export default function App() {
  return (
    <>
    <Hero />
    <GoogleReviews />
    <CourseCard />
    <Book />
    </>
  )
}