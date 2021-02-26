import Head from 'next/head'
import styles from '../styles/Home.module.css'

import fetch from 'node-fetch'
import {RestClientApi} from 'mercadolibre-nodejs-sdk'


const category = 'MLM1430'
const accessToken = 'APP_USR-3249860603230326-022616-ef22fd2f3068028117261924ff6b1693-531228956'
const api = `https://api.mercadolibre.com/sites/MLM/search?category=${category}&access_token=${accessToken}`


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
      <h1 className="text-3xl text-yellow-400 text-center">Todos los productos</h1>
     {posts.results.map(post => (
       <div key="id">
        <a className="justify-items-start grid grid-cols-3 p-4">
          <h3>{ post.title }</h3>
          <h3>{ post.price }</h3>
          <h3>{ post.sold_quantity}</h3>
        </a>
       </div>
     ))} 
    </div>
  );
}
           

export default Home