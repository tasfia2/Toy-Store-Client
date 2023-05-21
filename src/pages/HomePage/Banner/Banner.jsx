

const Banner = () => {
  return (

      <div className="mb-5 mt-5">
        <div className="container mt-5">
          <div className="row md:py-5 d-flex align-items-center">
            <div className="col-12 col-md-6  sm-12 ,md:mt-5 ">
                
              <div>

                <img src="https://png.pngtree.com/png-clipart/20230401/original/pngtree-40-discount-offer-banner-price-tag-design-png-image_9014448.png" alt="" className="w-50 m-5" />
              </div>

              <p className="fw-light ms-5">
              Big Sale Save 50 Shop Now 
              </p>

            </div>
            <div className="col-12 col-md-6 sm-12 ms-6">
              <img
                className="img-fluid"
                src="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/E/M/130061_1652888737.jpg"
                loading="lazy"  alt=""
              />
            </div>
          </div>
        </div>
      </div>

  );
};

export default Banner;
