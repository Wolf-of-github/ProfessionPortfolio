import React from 'react'
import Parallax from '../components/Parallax'
import './Home.css';

export default function Home() {
  return (
    <div>
      <Parallax />
      <div className='about'>
        <h2>
          Lorem ipsum
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit laborum ipsam corrupti asperiores magnam quos cumque animi tempore vero repellendus, harum odio neque quis, non temporibus. Inventore asperiores repudiandae praesentium ut, fugit quo esse, placeat ullam quibusdam perspiciatis delectus ducimus nihil. Dolorum nam veniam aperiam sapiente corporis! Quisquam, veritatis repellendus?</p>
      </div>
    </div>
  )
}