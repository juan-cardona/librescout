// import Head from 'next/head'
// import styles from '../styles/Home.module.css'

// import fetch from 'node-fetch'
// import {RestClientApi} from 'mercadolibre-nodejs-sdk'

// function Example(posts) {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Create Next App</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>

//         <h1 className="text-5xl text-yellow-300 text-center font-bold">
//           Welcome to <a href="https://nextjs.org">Next.js!</a>
//         </h1>

//       </main>

//       <footer className={styles.footer}>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{' '}
//           <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
//         </a>
//         <ul>
//       {posts.map((post) => (
//         <li>{post.text}</li>
//       ))}
//     </ul>
//       </footer>
//     </div>
//   )
//       }
    

      
// const api = "https://api.mercadolibre.com/users/me?access_token=APP_USR-3249860603230326-022523-f6159a4e99f13474edaed0ad62f07e2b-531228956"

// export async function getStaticProps() {
//     let apiInstance = new RestClientApi();
//     let resource = "sites/MLM/search?category=MLM1430"; // String | 
//     let accessToken = "APP_USR-3249860603230326-022616-ef22fd2f3068028117261924ff6b1693-531228956"; // String | 
//     apiInstance.resourceGet(resource, accessToken, (error, data, response) => {
//       if (error) {
//         console.error(error);
//       } else {
//         console.log('API called successfully.');
//         console.log(response)
//       }
//     });
// }
// export default Example