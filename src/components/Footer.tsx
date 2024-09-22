export  default function Footer() {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        timeZoneName: 'short'
    };
    const formattedDate = now.toLocaleString('en-GB', options).replace(',', '');

    
    return <div className="animate-jump-in animate-once">
        <p className="text-center text-black  text-lg italic mt-4 pb-6">
        <span className="bg-white">
         Thank You for Visiting My Website
         </span>
         <br/>
         <span className="bg-white">
         © {formattedDate} Md Al Mamun Mim. All Rights Reserved.
         </span>
            </p>
    </div>
}