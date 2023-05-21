const Banner = () => {
  return (
    <div className="mb-5 mt-5">
      <div className="container mt-5">
        <div className="row md:py-5 d-flex align-items-center">
          <div className="col-12 col-md-6  sm-12 ,md:mt-5 ">
            <div>
              <h2 className="text-center fs-2 fst-italic">
                Stay in the <span className="text-danger">L O O P ! </span>{" "}
              </h2>
            </div>

            <p className="fw-light">
              Everything a little foodie needs to create the best meal ever
              imagined is here in the Battat Cooking Set! 21 play kitchen
              accessories that are break-resistant and dishwasher safe. Perfect
              to bake some imaginary cupcakes or yummy chocolate chip cookies!
              Pretend play is an important part of childhood and a great way to
              improve hand-eye coordination, develop social and communication
              skills. This cooking play set is perfect to imagine the best
              pastries to bring to the most awesome tea parties.
            </p>
          </div>
          <div className="col-12 col-md-6 sm-12 ms-6">
            <img
              className="img-fluid rounded-2"
              src="https://images.unsplash.com/photo-1579705745177-b13f157e7f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              loading="lazy"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
