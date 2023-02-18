import { useQuery } from "@tanstack/react-query";
import React from "react";

const Exprerience = () => {
  const { data: expJobs, isLoading } = useQuery({
    queryKey: ["expJob"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/experienced");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <p>Loading......</p>;
  }
  console.log(expJobs);
  return (
    <div className="  ">
      <p className="bg-sky-200 text-center text-3xl font-semibold">
        Experienced Job
      </p>
      <div>
        {expJobs.map((expJob) => (
          <div key={expJob._id} className=" px-4 bg-slate-400 mt-4">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="single_jobs white-bg flex justify-between">
                  <div className="jobs_left flex items-center">
                    <div className="thumb">
                      <img src="img/svg_icon/1.svg" alt="" />
                    </div>
                    <div className="jobs_conetent">
                      <a href="job_details.html">
                        <h4 className=" text-2xl">{expJob.company_name}</h4>
                      </a>

                      <p className=" font-semibold">
                        Position: {expJob.position_name}
                      </p>
                      <p>Job Type: {expJob.job_type}</p>
                      <div className="links_locat flex items-center">
                        <div className="location">
                          <p>
                            {" "}
                            <i className="fa fa-map-marker"></i> Location:{" "}
                            {expJob.job_location}
                            &nbsp;
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
                      <p>Date line: {expJob.post_date}</p>
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
        ))}
      </div>
    </div>
  );
};
export default Exprerience;
