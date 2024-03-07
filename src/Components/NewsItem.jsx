/* eslint-disable react/prop-types */
import img from '../assets/news-cm.jpg'

const defTitle = "Latest News Headline Unavailable - Check back for updates. "
const defDesc = "Sorry, the detailed information for this article is currently unavailable. Stay tuned for updates. "

const NewsItem = ({title, description, src, url}) => {
  return (
<div className="card bg-secondary text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}} >
   {/* Display news image or default image */}
  <img src={src?src:img} style={{height: "200px", width:"330px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
     {/* Display news title or error message if title is unavailable */}
    <h5 className="card-title">{title?title.slice(0,50): defTitle}</h5>
    {/* Display news description or error message if description is unavailable */}
    <p className="card-text">{description?description.slice(0,90): defDesc}</p>
    {/* Button to read more, linked to the full article */}
    <a href={url} className="btn btn-light">Read More</a>
  </div>
</div>
  )
}

export default NewsItem
