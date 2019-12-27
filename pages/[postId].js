import React from 'react';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Page from '../components/Page';

const BlogPost = ({ post }) => (
  <Page>
		<div className="cerceve">
			<section className="blogPost">
				<article>
					<h2><Link href={post.slug}><a className="blog-baslik-link">{post.title}</a></Link></h2>
					<div className="ozet"><ReactMarkdown source={post.details} /></div>
					<div className="date">{post.date}</div>
				</article>
			</section>
		</div>
  </Page>
);




BlogPost.getInitialProps = async ({ req,  query }) => {
	//https://next-blog.acaglar.now.sh/
	//http://localhost:3000/
	const res = await fetch(`https://next-blog.acaglar.now.sh/api/post/${query.postId}`);
	const json = await res.json();
  return { post: json.post };
}


export default BlogPost;
