import React from "react";

const Freshers = () => {
  return (
    <div className="  ">
      <p className="bg-sky-200 text-center text-3xl font-semibold">
        Freshers Job
      </p>
      <div className=" px-4 bg-slate-400 mt-4">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="single_jobs white-bg flex justify-between">
              <div className="jobs_left flex items-center">
                <div className="thumb">
                  <img src="img/svg_icon/1.svg" alt="" />
                </div>
                <div className="jobs_conetent">
                  <a href="job_details.html">
                    <h4 className=" text-2xl">Software Engineer</h4>
                  </a>
                  <div className="links_locat flex items-center">
                    <div className="location">
                      <p>
                        {" "}
                        <i className="fa fa-map-marker"></i> California, USA
                        &nbsp;
                      </p>
                    </div>
                    <div className="location">
                      <p>
                        {" "}
                        <i className="fa fa-clock-o"></i> Part-time
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="jobs_right">
                <div className="apply_now">
                  <a className="heart_mark" href="#">
                    {" "}
                    <i className="ti-heart"></i>{" "}
                  </a>
                  <a
                    href="job_details.html"
                    className=" px-6 py-2 bg-green-700 text-white font-bold rounded-md"
                  >
                    Apply Now
                  </a>
                </div>
                <div className="date mt-4">
                  <p>Date line: 31 Jan 2020</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="single_jobs white-bg flex justify-content-between">
              <div className="jobs_left flex align-items-center">
                <div className="thumb">
                  <img src="img/svg_icon/2.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" px-4 bg-slate-400 mt-4">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="single_jobs white-bg flex justify-between">
              <div className="jobs_left flex items-center">
                <div className="thumb">
                  <img src="img/svg_icon/1.svg" alt="" />
                </div>
                <div className="jobs_conetent">
                  <a href="job_details.html">
                    <h4 className=" text-2xl">Software Engineer</h4>
                  </a>
                  <div className="links_locat flex items-center">
                    <div className="location">
                      <p>
                        {" "}
                        <i className="fa fa-map-marker"></i> California, USA
                        &nbsp;
                      </p>
                    </div>
                    <div className="location">
                      <p>
                        {" "}
                        <i className="fa fa-clock-o"></i> Part-time
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="jobs_right">
                <div className="apply_now">
                  <a className="heart_mark" href="#">
                    {" "}
                    <i className="ti-heart"></i>{" "}
                  </a>
                  <a
                    href="job_details.html"
                    className=" px-6 py-2 bg-green-700 text-white font-bold rounded-md"
                  >
                    Apply Now
                  </a>
                </div>
                <div className="date mt-4">
                  <p>Date line: 31 Jan 2020</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="single_jobs white-bg flex justify-content-between">
              <div className="jobs_left flex align-items-center">
                <div className="thumb">
                  <img src="img/svg_icon/2.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Freshers;
