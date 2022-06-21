import "./feature.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://r-xx.bstatic.com/xdata/images/xphoto/max1200/144112620.jpg?k=c9656b619dff98d780cbd0f387ed38699b4cecafdab7354dbe4dc751afad2323&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Istanbul</h1>
          <h1>123 properties</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://r-xx.bstatic.com/xdata/images/xphoto/max1200/134462960.jpg?k=41b74758dcacc7cce0a4a53b1f1b9e764202aff9d2d6dd5089cf54cb8b49cded&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>London</h1>
          <h1>456 properties</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://r-xx.bstatic.com/xdata/images/xphoto/max1200/144104637.jpg?k=eb9b6197839ecffbc1fcfb3c734dcb5b7eebc7503ff764f57bd051a5a56f9660&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Hagia Sophia</h1>
          <h1>789 properties</h1>
        </div>
      </div>
    </div>
  );
};

export default Featured;
