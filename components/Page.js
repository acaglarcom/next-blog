
import Head from 'next/head';
import Header from './header/Header';
import Footer from './Footer/Footer';


const Layout = props => (
  <div>
    <Head>
      <title>ApiQ Blog</title>
      <link rel="icon" href="public/favicon.ico" />
    </Head>

    <Header />
    <main>
      {props.children}
    </main>
    <Footer />

    <style jsx global>{`
      img {max-width:100%}
      body { 
        background: rgb(185,181,149); background: linear-gradient(135deg, rgba(185,181,149,1) 0%, rgba(127,153,136,1) 50%, rgba(79,141,149,1) 100%); background-attachment: fixed;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        font-size: 16px; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;
        margin:0; padding:0;
      }
      a {color: #0ba1bf;text-decoration: none; padding:5px; transition: all .1s ease-in-out;}
      a:hover {color: #1279b5;}
      a:focus {background: rgba(0,0,0,.1);}
      main {margin:40px 0;}
      .cerceve {width: 85%;max-width: 1200px;margin: 0 auto;}
      article {
        background: rgba(255,255,255,.7);
				box-shadow: 0 0 50px 0px rgba(0,0,0,.2);
				border-radius: 10px;
        padding:50px;
      }
      .blogPosts article {
				box-shadow: 0 0 10px -4px rgba(0,0,0,.3);
        padding:20px;
				margin-bottom: 30px;
      }
			article h2 {
				font-size:18px;
				margin:0 0 20px 0;
			}
    `}</style>
  </div>
);

export default Layout;