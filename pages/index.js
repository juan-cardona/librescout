import Head from 'next/head'


import fetch from 'node-fetch'
import { Windmill } from '@windmill/react-ui'

const category = 'MLM1430'
const accessToken = 'APP_USR-3249860603230326-022622-2b2d95a8eed3d17dd604610ae55fc53f-531228956'
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
    <Windmill usePreferences>
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
    </Windmill>
  );
}
           

export default Home