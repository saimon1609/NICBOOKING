import "./featuredProperties.css";

export const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://t-cf.bstatic.com/xdata/images/hotel/max300/279077319.webp?k=8b1a7a3a133f60d528b586db3b1553eaf37e4bedf83033b5018a814d1129111b&o="
          alt=""
          className="fpImg"
        />
        <span className="fpName">Casa Sun and View</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://t-cf.bstatic.com/xdata/images/hotel/max300/144320723.webp?k=4a482a7447edda9694fee18ee290ef2d8652852a9fcc7d6e00e87544c0312d2c&o="
          alt=""
          className="fpImg"
        />
        <span className="fpName">XVA Art </span>
        <span className="fpCity">Dubai</span>
        <span className="fpPrice">Starting from $150</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Fabulous</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://t-cf.bstatic.com/xdata/images/hotel/max300/346517860.webp?k=4a38849afef4d6949ebea761695cc381b5bc9aa74c0d3809b54352156d1aa9e7&o="
          alt=""
          className="fpImg"
        />
        <span className="fpName">Heritage Home Guest House</span>
        <span className="fpCity">Dubai</span>
        <span className="fpPrice">Starting from $130</span>
        <div className="fpRating">
          <button>8.3</button>
          <span>Very good</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://t-cf.bstatic.com/xdata/images/hotel/max300/206210490.webp?k=683722b080e01876906f1c1459d61e46a93ee27a1cd3d24fb771588b6911cda2&o="
          alt=""
          className="fpImg"
        />
        <span className="fpName">Historic Canal View Suites</span>
        <span className="fpCity">Amsterdam</span>
        <span className="fpPrice">Starting from $200</span>
        <div className="fpRating">
          <button>9.4</button>
          <span> Superb</span>
        </div>
      </div>
    </div>
  );
};
