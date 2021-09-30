import React, { useEffect, useState } from 'react';
import AddCommentForm from '../components/AddCommentForm';
import Articles from '../components/Articles';
import CommentList from '../components/CommentList';
import articles from './ArticleContent';
import NotFound from './NotFound';

const Article = ({match}) => {
  const name = match.params.name;
  const article = articles.find((article) => article.name === name);

  const [articleInfo, setArticleInfo] = useState({ comments: [] });

  //console.log(articleInfo);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      console.log(body);
      setArticleInfo(body);
    };
    fetchData();
  },[name]);

  if(!article) return <NotFound/>;
  const otherArticles = articles.filter(article => article.name !== name);
  return (
    <>
    <h1 className="sm:text-4xl text-2xl font-bold mt-6 mb-6 text-gray-900">
      {article.title}
    </h1>
    {
      article.content.map((paragraph, index) => (
        <p className="mx-auto leading-relaxed text-base mb-4" key={index}>
          {paragraph}
        </p>
      ))
    }
    <CommentList comments={articleInfo.comments}/>
    <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
    <h1 className="sm:text-2x text-xl font-bold mt-4 mb-4 text-gray-900">
      Other Articles 
    </h1>
    <div className="flex flex-wrap -m-4">
      <Articles articles={otherArticles}/>
    </div>
  </>
  );
};

export default Article;