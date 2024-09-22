export default function Academics() {
  return (
    <>
      <>
        <div className="bg-slate-200 bg-opacity-30 backdrop-blur-sm shadow-lg  w-full md:w-[56%] mx-auto  p-[2%]">
          <div className="ml-2">
            <p className="text-black italic text-3xl md:text-5xl text-center  ">
              <span className="border-black  border-b-[3px]">
                {" "}
                Academics Credentials{" "}
              </span>
            </p>

            <p className="text-slate-700 text-wrap text-justify text-lg my-[5%]">
              I am a passionate tech and research enthusiast with a background
              in Information and Communication Engineering. Currently, I am
              working as a software engineer, but I am also pursuing
              opportunities as a research assistant to explore the fascinating
              intersection of technology and innovation. I am particularly
              interested in areas like data optimization, artificial
              intelligence, scalable system architecture, and web security. I
              believe these fields have the potential to solve some of the most
              pressing challenges we face today. My goal is to contribute to
              research and projects that make a real impact, whether it is
              improving the efficiency of large-scale data systems, enhancing
              the security of web applications, or developing intelligent
              solutions for social media platforms. I am always eager to learn,
              innovate, and collaborate with others to push the boundaries of
              what technology can achieve.
            </p>

            <div className="flex flex-col justify-between md:flex-row">
              <div className="ml-2">
                <p className="text-black text-2xl md:text-3xl ">
                  <span className="border-black  border-b-[3px]">
                    Bachelor Of Science In Engineering
                  </span>
                </p>
                <p className="text-black text-lg ">
                  Information And Communication Engineering
                </p>
                <p className="text-black text-lg ">
                  University Of Rajshahi,Bangladesh
                </p>
                <p className="text-black text-lg ">CGPA 3.21/4.00</p>
                <p className="text-black text-lg ">
                  (17 January 2017- 10 June 2022)
                </p>
              </div>
              <div className="w-1/3">
                <img
                  src="./ru.png"
                  alt="University Of Rajshahi"
                  className="w-[150px] h-[100px] align-top"
                ></img>
              </div>
            </div>

            <div className="flex flex-col justify-between md:flex-row pt-[3%]">
              <div className="ml-2">
                <p className="text-black text-2xl md:3xl ">
                  <span className="border-black  border-b-[3px]">
                    Higher Secondary School Certificate
                  </span>
                </p>
                <p className="text-black text-lg ">
                  Holy Land College, Dinajpur
                </p>
                {/* <p className="text-black text-lg ">University Of Rajshahi,Bangladesh</p> */}
                <p className="text-black text-lg ">GPA 5.00/5.00</p>
                <p className="text-black text-lg ">(Passed 2015)</p>
              </div>
              <div className="w-1/3">
                <img
                  src="./hlc.png"
                  alt="Holy Land College"
                  className="w-[200px] h-[100px] align-top"
                ></img>
              </div>
            </div>

            <div className="flex flex-col justify-between md:flex-row pt-[3%]">
              <div className="ml-2">
                <p className="text-black text-2xl md:3xl ">
                  <span className="border-black  border-b-[3px]">
                    {" "}
                    Secondary School Certificate
                  </span>
                </p>
                <p className="text-black text-lg ">
                  Chirirbandar Pilot High School, Dinajpur
                </p>
                {/* <p className="text-black text-lg ">University Of Rajshahi,Bangladesh</p> */}
                <p className="text-black text-lg ">GPA 5.00/5.00</p>
                <p className="text-black text-lg ">(Passed 2013)</p>
              </div>
              <div className="w-1/3">
                <img
                  src="./school.png"
                  alt="Chirirbandar Pilot  High School"
                  className="w-[150px] h-[100px] align-top"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
