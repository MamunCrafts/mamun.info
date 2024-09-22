export default function ProfessionalExperience() {
  return (
    <>
      <div className=" text-center text-black text-xl md:text-5xl pt-[2%] ">
        {" "}
        <span className="relative custom-border bg-white">
          Professional Experience
        </span>
      </div>

      <div className="mt-[2%] space-y-1">
        <div className="bg-white bg-opacity-30 backdrop-blur-sm shadow-lg  w-full md:w-[56%] mx-auto  p-[2%]">
          <div className="flex flex-col md:flex-row">
            <div className="w-3/4">
              <img
                src="./fanfare.png"
                alt="Fanfare Bangladesh"
                className="w-[400px] h-[200px] "
              ></img>
            </div>
            <div className="ml-2">
              <p className="text-black text-3xl ">Software Engineer</p>
              <p className="text-black text-lg ">Fanfare Bangladesh</p>
              <p className="text-black text-lg ">2022-Present</p>
              <p className="text-black text-lg ">Dhaka, Bangladesh</p>
              <p className="text-slate-700 text-wrap text-justify">
                I have been working as a Software Developer at Fanfare
                Bangladesh Ltd , a dynamic social commerce platform that
                represents a joint venture between Singapore and Bangladesh, for
                the past two years. During my time at Fanfare, I have made
                significant contributions that have been recognized with the
                Tech Genius Award, highlighting my commitment to innovation and
                excellence in the field. My experience has allowed me to develop
                and implement solutions that enhance user experiences while
                driving the companyCredentials mission forward.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-200 bg-opacity-30 backdrop-blur-sm shadow-lg  w-full md:w-[56%] mx-auto  p-[2%]">
          <div className="flex flex-col md:flex-row">
            <div className="w-3/4">
              <img
                src="./talentpro-global-logo.png"
                alt="Talent Pro Bangladesh"
                className="w-[450px] h-[150px] "
              ></img>
            </div>
            <div className="ml-2">
              <p className="text-black text-3xl ">Software Engineer Intern</p>
              <p className="text-black text-lg ">Talent Pro</p>
              <p className="text-black text-lg ">Dhaka, Bangladesh</p>
              <p className="text-slate-700 text-wrap text-justify">
                As a Software Engineer Intern at Talent Pro, I developed a Quran Analyzer web application using the MERN stack, which significantly enhanced user engagement through an intuitive interface. I implemented NestJS for backend services, ensuring a scalable and maintainable architecture, while utilizing Next.js to optimize performance with server-side rendering. For robust data management, I integrated MongoDB for efficient data storage and retrieval, and employed GraphQL for flexible querying, resulting in a responsive and high-performing application.
              </p>
            </div>
          </div>
        </div>
        <div className=" text-center text-black text-xl md:text-5xl pt-[2%] ">
          {" "}
          <span className="relative custom-border bg-white">
            Tech Genius Award
          </span>
        </div>

        <div className="flex flex-wrap w-[57%] mx-auto pt-[2%] gap-x-4">
          <img
            className=" rounded-lg"
            src="https://s3.ap-south-1.amazonaws.com/bucket.portfolio.mamun/genius.jpg"
            width="45%"
            height="10%"
            alt="genius"
          />

          <img
            className=" rounded-lg"
            width="45%"
            height="10%"
            src="https://s3.ap-south-1.amazonaws.com/bucket.portfolio.mamun/award.jpg"
            alt="genius"
          />
        </div>
      </div>
    </>
  );
}
