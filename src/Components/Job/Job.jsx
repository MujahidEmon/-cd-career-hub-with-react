import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    salary,
    remote_or_onsite,
    job_type,
    location,
    id
  } = job;
  return (
    <div className=" bg-base-100   border border-gray-300 rounded-xl">
      <figure className="px-10 pt-10">
        <img src={logo} alt="logo" className="" />
      </figure>
      <div className="card-body gap-y-3">
        <h2 className="card-title text-[#474747] text-[24px] font-extrabold">
          {job_title}
        </h2>
        <p className="text-left text-[#757575]">{company_name}</p>
        <div className="flex gap-2">
          <p className="border-2 rounded px-3 max-w-max font-medium text-blue-400 border-blue-400">
            {remote_or_onsite}
          </p>
          <p className="border-2 rounded px-3 max-w-max font-medium text-blue-400 border-blue-400">
            {job_type}
          </p>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-1">
            <img src="/public/icons/Location.png" alt="" />
            <p className="text-left font-semibold text-[#757575]">{location}</p>
          </div>
          <div className="flex items-center gap-1">
            <img src="/public/icons/money.png" alt="" />
            <p className="text-left font-semibold text-[#757575]">
              Salary: {salary}
            </p>
          </div>
        </div>
        <div className="card-actions">
          <Link to={`/job/${id}`}>
            <button className="btn hover:text-black bg-blue-400 text-white font-extrabold">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
