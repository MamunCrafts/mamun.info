export default function Profile() {
    return (
        <div className="flex justify-center items-center  space-x-6 flex-col md:flex-row py-[2%]">
           <div>
           <img 
                src="https://s3.ap-south-1.amazonaws.com/bucket.portfolio.mamun/al-mamun-mim.jpg"
                alt="Profile Picture"
                className="rounded-full md:w-[250px] md:h-[250px] w-[150px] h-[150px] ring-2 ring-slate-700"
            />
            

           </div>
           
            <div>
                <p className="text-black font-semibold text-lg italic md:mt-[50%] mt-[2%]">
                    Connect With Me
                </p>
                <p className="flex space-x-2">
                <a href="https://www.linkedin.com/in/almamunmim1611177146/" target="_blank" rel="noopener noreferrer">
        <img src="./linkedin.png" alt="linkedin logo" className="custom-icon" />
      </a>
                    {/* <img src="./linkedin.png" alt="linkedin logo" className="custom-icon" /> */}
                    <a href="https://www.facebook.com/mamun.ru.ice" target="_blank" rel="noopener noreferrer">
                    <img src="./facebook.png" alt="facebook logo" className="custom-icon" />
                    </a>
                    {/* <img src="./facebook.png" alt="facebook logo" className="custom-icon" /> */}
                    
                    <img src="./gmail.png" alt="gmail logo" className="custom-icon" />
                </p>
            </div>
           
        </div>
    );
}