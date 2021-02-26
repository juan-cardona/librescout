import Head from 'next/head'
import styles from '../styles/Home.module.css'

import fetch from 'node-fetch'
import {RestClientApi} from 'mercadolibre-nodejs-sdk'


const api = "https://api.mercadolibre.com/sites/MLM/search?category=MLM1430&access_token=APP_USR-3249860603230326-022616-ef22fd2f3068028117261924ff6b1693-531228956"

export async function getStaticProps() {
  const res = await fetch(api);
  const data = await res.json();
  
  return {
    props: { posts : data }
  }
}

const Home = ({posts}) => {
  return (
    <div>
      <h1>all posts</h1>
     {posts.results.map(post => (
       <div key="id">
        <a>
          <h3>{ post.title }</h3>
        </a>
       </div>
     ))} 
    </div>
  );
}
           

export default Home