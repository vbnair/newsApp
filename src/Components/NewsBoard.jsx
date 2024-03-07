/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import NewsItem from "./NewsItem"
const apiKey = import.meta.env.VITE_API_KEY

const NewsBoard = ({category}) => {

const [articles, setArticles] = useState([])

useEffect(() => {
// Fetch news articles based on the selected category
const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`
fetch(url)
.then(response => response.json())
.then(data => setArticles(data.articles))
// console.log(articles)

},[category])

  return (
    <div>
      <h2 className="text-center">Latest <span className="badge text-bg-warning">News</span></h2>
{articles.map((news, index) => {
  return  <NewsItem key={index} title={news.title} description ={news.description} src={news.urlToImage} url={news.url}/>
  })}
    </div>
  )
}

export default NewsBoard
