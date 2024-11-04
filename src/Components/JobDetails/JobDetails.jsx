import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
    const jobDetail = useLoaderData();
    const {id} = useParams();
    const intId = parseInt(id);

    const job = jobDetail.find(job => job.id ===intId)
    console.log(job)
    return (
        <div className="lg:max-w-7xl flex gap-6 my-6">


            <div className="w-4/6  px-5  gap-y-3 flex flex-col">
                <p className="text-justify"><span className="font-extrabold text-base">Job Details: </span><span className="text-[#757575]">A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.</span></p>

                <p className="text-justify"><span className="font-extrabold text-base text-justify">Job Responsibility: </span><span className="text-[#757575]">A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.</span></p>
                
                <h2 className="font-extrabold text-base">Educational Requirements:</h2>
                <p id="requirements" className="text-[#757575] text-base">Bachelor degree to complete any reputational university.</p>

                <h2 className="font-extrabold text-base">Experiences:</h2>
                <p id="experience" className="text-[#757575] text-base">2-3 Years in this field.</p>
                
            </div>


            <div className="">
                <div className=" px-5 py-3  bg-gradient-to-r from-[#7E90FE1A] to-[#9873FF1A] rounded-lg"> 
                    <h2 className="text-2xl font-bold ">Job Details</h2>
                    <div className="divider my-2"></div>
                    <div className="mt-5 flex flex-col gap-y-2">

                        <div className="flex items-center gap-2">
                            <img src="/public/icons/money.png" alt="" />
                            <p className="font-medium text-xl">Salary: <span className="text-[#757575]">100K - 150K (Per Month)</span></p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <img src="/public/icons/calendar.png" alt="" />
                            <p className="font-medium text-xl">Job Title: <span className="text-[#757575]">Product Designer</span></p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold mt-6">Contact Information</h2>
                    <div className="divider my-2"></div>

                    <div className="mt-5 flex flex-col gap-y-2">
                        <div className="flex gap-2 items-center">
                            <img src="/public/icons/phone.png" alt="" />
                            <p className="font-medium text-xl">Phone: <span className="text-[#757575]">01750-00 00 00</span></p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <img src="/public/icons/email.png" alt="" />
                            <p className="font-medium text-xl">Email: <span className="text-[#757575]">info@gmail.comr</span></p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <img src="/public/icons/location2.png" alt="" />
                            <p className="font-medium text-xl">Address: <span className="text-[#757575]">Dhanmondi 32, Sukrabad
                            Dhaka, Bangladesh</span></p>
                        </div>
                    </div>
                </div>
                <button className="btn border-none text-white font-extrabold text-xl mt-4 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] btn-primary w-full">Apply Now</button>
            </div>
            
        </div>
    );
};

export default JobDetails;