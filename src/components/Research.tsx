import { useEffect, useRef } from "react";

export default function Research() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 4.0; // Set playback speed to 2x
    }
  }, []);
  return (
    
    <>
      <div className="bg-slate-200 bg-opacity-30 backdrop-blur-sm shadow-lg w-full md:w-[56%] mx-auto p-[2%]">
        <div className="ml-2">
          <p className="text-black italic text-3xl md:text-5xl text-center">
            <span className="border-black border-b-[3px]">Academic Projects</span>
          </p>
          <p className="text-black pt-[3%] text-xl md:text-2xl  "> <span className="bg-yellow-300">Student Information Management System</span></p>
          <p className="text-black pt-[1%] text-lg md:text-xl  "> <span className="bg-white shadow-sm ">Supervisor : DR. MD. EMDADUL HAQUE</span></p>
          <p className="text-black pt-[1%] text-lg md:text-xl"> <span className="bg-white shadow-sm text-blue-600 underline cursor-pointer">Email : haque-ice@ru.ac.bd</span></p>
          <p className="text-black pt-[1%] text-lg md:text-xl "> <span className="bg-white shadow-sm">Professor,Department of Information and Communication Engineering</span></p>
          <p className="text-black pt-[1%] text-lg md:text-xl "> <span className="bg-white shadow-sm">University Of Rajshahi</span></p>

          <p className="text-slate-700 text-wrap text-justify text-lg my-[3%]">
            The Student Information Management System (SIMS) is a comprehensive software solution designed to streamline and enhance the management of student data within educational institutions. This system provides a centralized platform for storing, accessing, and processing essential student information, including personal details, enrollment data, academic records, and attendance tracking.
          </p>

          <p className="text-slate-700 text-wrap text-justify text-lg my-[1%]">
            Key features of SIMS include:
            <ul className="list-disc ml-5 my-2">
              <li><strong>Data Management:</strong> Efficiently manage student profiles, including demographic information, contact details, and academic history.</li>
              <li><strong>Enrollment Process:</strong> Simplify the enrollment process with automated workflows, allowing for easy registration and admission tracking.</li>
              <li><strong>Academic Records:</strong> Track and manage grades, course enrollments, and academic performance, enabling educators to monitor student progress effectively.</li>
              <li><strong>Attendance Monitoring:</strong> Implement attendance tracking features to record and analyze student attendance patterns, aiding in early identification of at-risk students.</li>
              <li><strong>Reporting and Analytics:</strong> Generate insightful reports and analytics on various aspects of student performance and institutional efficiency, supporting informed decision-making.</li>
              <li><strong>User Roles and Access Control:</strong> Define user roles (administrators, teachers and students) with specific access rights to ensure data security and privacy.</li>
            </ul>
          </p>

          <p className="text-slate-700 text-wrap text-justify text-lg my-[1%]">
            By leveraging the capabilities of SIMS, educational institutions can enhance operational efficiency, improve communication among stakeholders, and ultimately foster a more supportive learning environment for students.
          </p>
        </div>
        <div className="ml-2">
          <p className="text-black italic text-3xl md:text-5xl text-center">
            <span className="border-black border-b-[3px]"> Projects</span>
          </p>
       
          <h1 className="text-2xl md:text-3xl text-black font-bold  py-[4%] "><span className="bg-yellow-300">Fanfare Bangladesh Ltd.</span></h1>
      <p className="text-lg text-slate-700 text-justify mb-4">
        Fanfare Bangladesh Ltd. is a pioneering Social Commerce platform, established in 2019 as a joint venture between Singapore and Bangladesh. It offers a vibrant space for users to share and explore a limitless collection of short videos while facilitating innovative digital marketing solutions for brands.
      </p>
      <h2 className="text-2xl text-black font-semibold mb-4">Key Features:</h2>
      <ul className="list-disc text-black ml-5 space-y-3 text-slate-700">
        <li>
          <span className="font-semibold  ">Shoppable User-Generated Content:</span> Fanfare empowers brands to transform any user-generated content into shoppable videos, seamlessly connecting them with target customers and driving impactful marketing results.
        </li>
        <li>
          <span className="font-semibold ">AI-Driven Marketing:</span> Leveraging artificial intelligence and advanced analytics, the platform optimizes advertising spend across thousands of creator channels in diverse sectors such as fashion, beauty, technology, video games, cooking, automotive, travel, and luxury.
        </li>
        <li>
          <span className="font-semibold ">E-Commerce Enablement:</span> Verified brands, vendors, and SMEs can register to showcase and sell products directly on the platform, offering a streamlined e-commerce experience with dynamic features designed to enhance business growth.
        </li>
        <li>
          <span className="font-semibold ">Socio-Commerce Ecosystem:</span> Fanfare transcends traditional social media and marketing solutions by creating a comprehensive socio-commerce ecosystem. It serves as a one-stop solution for individuals and businesses, bridging the gap between content creation, consumer engagement, and commerce.
        </li>
      </ul>
      <p className="text-lg text-slate-700 text-justify mt-4">
        With its unique blend of social interaction and commercial functionality, Fanfare aims to foster an environment where users and businesses alike can thrive, making it a platform that truly caters to everyone.
      </p>
          <div className="flex flex-col pt-[2%] items-center justify-center ">
          <video
      ref={videoRef}
      width="800"
      autoPlay
      muted
      loop
      className="rounded-lg shadow-lg"
    >
      <source src="./fanfare.mp4" type="video/mp4" />
      Your network is slow, please wait for the video to load.
    </video>
    <p className="text-lg text-black text-justify mt-4">
    <span className="font-semibold">Images :</span> Showcasing the Key Features of the Fanfare Project
      </p>
</div>
        </div>
      </div>
    </>
  );
}
