import React from 'react';
import HeaderSection from '../../components/HeaderSection';
import CardJoinUs from '../../components/JoinCard';
import MainNav from '../../components/MidNav';


const Homepage = props => {
  return (
    <>
    <section className="homepage">
      <HeaderSection/> 
    </section>
      <MainNav/>
      <CardJoinUs/>
    </>
  );
};

export default Homepage;