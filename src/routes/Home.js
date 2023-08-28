import React from 'react';
import Navbar from '../components/Navbar';
import Heroimg from '../components/Heroimg';
import Myworks from '../components/Myworks';
import Details from '../components/Details';
import Form from '../components/Form';

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
