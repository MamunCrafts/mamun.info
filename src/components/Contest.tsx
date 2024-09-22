export default function Contest() {
    return <>
        <>
            <div className="bg-slate-200 bg-opacity-30 backdrop-blur-sm shadow-lg  w-full md:w-[56%] mx-auto  p-[2%]">
                <div className="ml-2">
                    <p className="text-black italic text-3xl md:text-5xl text-center  ">
                        <span className="border-black  border-b-[3px]">
                            {" "}
                            Contest Experience{" "}
                        </span>
                    </p>

                    <p className="text-slate-700 text-wrap text-justify text-lg my-[5%]">
                    I have extensive contest experience, having participated in over 82 contests on Codeforces, where I solved more than 620 problems. Additionally, I competed in IEEE Xtreme 14.0, achieving 5th rank domestically and 184nd rank globally. My involvement also includes solving over 100 problems on LeetCode and various online judges, which has significantly enhanced my problem-solving skills and coding proficiency.
                    </p>

                    <div className="flex flex-col justify-between md:flex-row">
                        <div className="ml-2">
                            <p className="text-black text-2xl md:text-3xl ">
                                <span className="border-black  border-b-[3px]">
                                    IEE Xtreme 14.0 (2020)
                                </span>
                            </p>

                            <p className="text-black text-lg ">
                                Rank: 5, Bangladesh
                            </p>
                            <p className="text-black text-lg ">
                                Rank: 184, Global
                            </p>
                            <p className="text-gray-500 text-md ">
                                
I participated in the prestigious IEEE Xtreme competition, a global 24-hour programming challenge organized by IEEE. The event involved solving algorithmic problems as a team, showcasing our coding skills and problem-solving abilities. It was an excellent opportunity to compete against students from around the world and enhance my technical expertise.
                                </p>
                            <a
                                className="text-blue-500 underline text-lg"
                                href="https://ieeextreme.org/ieeextreme-14-0-ranking/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Final Standings(See 184 Rank)
                            </a>
                            <br />
                            <a
                                className="text-blue-500 underline text-lg"
                                href="https://s3.ap-south-1.amazonaws.com/bucket.portfolio.mamun/IEEE++Xtreme+14.0+Certificaiton.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Certification
                            </a>

                        </div>
                        <div className="w-1/3">
                            <img
                                src="./ieeextreme.png"
                                alt="University Of Rajshahi"
                                className="w-[150px] h-[50px] align-top"
                            ></img>
                        </div>
                    </div>
                    <div className="w-4/5">
                        <img
                            src="./ieeextreme-certificate.png"
                            onClick={() => window.open("https://s3.ap-south-1.amazonaws.com/bucket.portfolio.mamun/IEEE++Xtreme+14.0+Certificaiton.pdf")}
                            alt="IEEE Xtreme 14.0 Certification"
                            className="w-[150px] h-[100px] align-top hover:scale-150 pt-[1%]"
                        />
                        <p className=" text-black mt-2 font-thin">Xtreme 14.0 Certification</p>
                    </div>
                    <div className="flex flex-col justify-between md:flex-row">
                        <div className="ml-2">
                            <p className="text-black text-2xl md:text-3xl ">
                                <span className="border-black  border-b-[3px]">
                                Codeforces Problem Solving& Contests 
                                </span>
                            </p>

                            <p className="text-black text-lg ">
                                Total Contests: 82
                            </p>
                            <p className="text-black text-lg ">
                                Total Problem Solved: 620
                            </p>
                            <p className="text-gray-500 text-md ">
                                
                            I actively participated in Codeforces contests, solving over 620 algorithmic problems, which demonstrated my strong analytical skills and proficiency in problem-solving under time constraints. This experience allowed me to gain expertise in a variety of algorithms and data structures, significantly enhancing my coding abilities and competitive programming skills.                                </p>
                            <a
                                className="text-blue-500 underline text-lg"
                                href="https://codeforces.com/contests/with/Mamun"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Highest Rank Pupil(1225)
                            </a>
                            <br />
                            <a
                                className="text-blue-500 underline text-lg"
                                href="https://codeforces.com/profile/Mamun"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Codeforces Profile
                            </a>

                        </div>
                        <div className="w-1/3">
                            <img
                                src="./codeforces_logo.png"
                                alt="Codeforces"
                                className="w-[150px] h-[60px] align-top"
                            ></img>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between md:flex-row">
                        <div className="ml-2">
                            <p className="text-black text-2xl md:text-3xl ">
                                <span className="border-black  border-b-[3px]">
                                Leetcode Problem Solving
                                </span>
                            </p>

                           
                            <p className="text-black text-lg ">
                                Total Problem Solved: 119
                            </p>
                            <p className="text-gray-500 text-md ">
                                
                            I have solved 119 problems on LeetCode, focusing on various data structures. This has allowed me to deepen my understanding of algorithms and enhance my problem-solving skills, helping me tackle a wide range of technical challenges effectively.

</p>
                            
                           
                            <a
                                className="text-blue-500 underline text-lg"
                                href="https://leetcode.com/u/Mamun16/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Leetcode Profile
                            </a>

                        </div>
                        <div className="w-1/3">
                            <img
                                src="./leetcode.png"
                                alt="Codeforces"
                                className="w-[250px] h-[200px] align-top text-black"
                            ></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    </>
}