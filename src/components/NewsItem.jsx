import image from "../assets/news.jpg";

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "330px" }}
    >
      <img
        src={src ? src : image}
        style={{ height: "170px", width: "310px" }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "The preview of description of this news is not available as of now. Stay tuned for more updates!"}
        </p>
        <a href={url} className="btn btn-primary"></a>
      </div>
    </div>
  );
};
export default NewsItem;
