import React from 'react';
import Navbar from '../components/Navbar';
import Heroimg from '../components/Heroimg';
import Details from '../components/Details';
import Form from '../components/Form';
import Myworks from '../components/Myworks';

const Home = () => (
  <div>
    <Navbar />
    <Heroimg />
    <Myworks />
    <Details />
    <Form />
  </div>
);

export default Home;
