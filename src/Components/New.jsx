/* eslint-disable react/prop-types */
// Alternate approach to Custom-style NewsItem component with inline CSS, providing a flexible design instead of bootstrap
// This enables consistent height and width for uniform appearance, handling varying content lengths gracefully in cards. 
import img from '../assets/news-cm.jpg'

const defTitle = " Latest News Headline Unavailable! - Check back for updates. "
const defDesc = " Sorry, the detailed information for this article is currently unavailable. Stay tuned for updates. "


const New = ({title, description, src, url}) => {
  return (
  
// Outer container with inline-flex display, margin, and padding
<div className="outer-div" style={{display:"inline-flex", margin:"10px", padding:"10px"}} >
   {/* Card container with specified width, height, margin, and box-sizing */}
<div className="card" style={{ width: "360px", height: "450px", margin: "5px", boxSizing: "border-box" }}>
  {/* Image container with flex ratio, overflow, and image styling */}
  <div className="img" style={{ flex: "3", overflow: "hidden" }}>
    {/* Image content goes here */}
    <img src={src?src:img} alt="Card Image" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
  </div>
   {/* Description container with flex ratio, padding, and overflow */}
  <div className="description" style={{ flex: "3", padding: "10px 5px", boxSizing: "border-box", overflow: "hidden" }}>
    {/* Description content goes here */}
    <h5 className="card-title">{title?title.slice(0,50): defTitle}</h5>
    <p className="card-text">{description?description.slice(0,180): defDesc}</p>
  </div>
   {/* Link container with flex ratio, padding, and overflow */}
  <div className="link" style={{ flex: "0.5", padding: "5px 5px", boxSizing: "border-box", overflow: "hidden"}}>
    {/* Link content goes here */}
    <small className="text-body-secondary"><a href={url} className="btn btn-light btn-sm">Read More</a></small>
  </div>
</div>

</div>
  )
}

export default New

