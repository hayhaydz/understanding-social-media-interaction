import React, { useState } from 'react';
import { Layout, Header, InteractionGrid, ResponseGrid } from '../components';

const Home = () => {
  const [isInteraction, setIsInteraction] = useState(true);

  return (
    <Layout>
      <Header isInteraction={isInteraction} setIsInteraction={setIsInteraction} />
      {isInteraction ?
        <InteractionGrid />
        : <ResponseGrid />
      }
    </Layout>
  )
}
export default Home