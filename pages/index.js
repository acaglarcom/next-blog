import React from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import ReactMarkdown from 'react-markdown';
import Page from '../components/Page';


function removeTags(str) {
	if ((str===null) || (str===''))
	return false;
	else
	str = str.toString();
	return str.replace( /(<([^>]+)>)/ig, '');
}

const Home = ({ posts }) => (
	<Page>
		<div className="home cerceve">
			<section className="blogPosts">
				{posts.map(posts => (
					<article key={posts.slug}>
						<h2><Link href={posts.slug}><a>{posts.title}</a></Link></h2>
						<div className="ozet"><p><ReactMarkdown source={posts.details.substring(0,500)} disallowedTypes={["break", "paragraph", "emphasis", "thematicBreak", "blockquote", "blockquote", "delete", "link", "image", "linkReference", "imageReference", "table", "tableHead", "tableBody", "tableCell", "tableRow", "list", "listItem", "listItem", "definition", "heading", "inlineCode", "html", "strong", "break", ,"code", ]}  unwrapDisallowed={true} /></p></div>
						<div className="date">{posts.date}</div>
					</article>
				))}
			</section>
		</div>
		<style jsx>{`
		`}</style>
  </Page>
);


Home.getInitialProps = async ({ req }) => {
	//https://next-blog.acaglar.now.sh/
	//http://localhost:3000/
  const res = await fetch('https://next-blog.acaglar.now.sh/api/posts')
  const json = await res.json()
  return { posts: json.posts }
};


export default Home;