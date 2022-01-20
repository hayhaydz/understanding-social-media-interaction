import React, { useState } from 'react';
import { Layout, Header, Footer, InteractionGrid, ResponseGrid } from '../components';

const Home = () => {
  const [isInteraction, setIsInteraction] = useState(true);

  return (
    <Layout>
      <Header isInteraction={isInteraction} setIsInteraction={setIsInteraction} />
      {isInteraction ?
        <InteractionGrid />
        : <ResponseGrid />
      }
      <Footer />
    </Layout>
  )
}
export default Home