import React from "react";
import { useSelector } from "react-redux";

const User = () => {
  const userData = useSelector((state) => state.user);
  const { username, email } = userData?.user || {};
  return (
    <div className="w-[100%] h-[800px] px-52 pt-10">
      <div
        className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
        style={{
          backgroundImage: `url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwcIBwcICAcHBwcHBwoHBwcHBw8ICQcKFREWIhUREx8YHSggGBolGxMfITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0OEA0NEC0ZFRktKy03Kys3LS0tNy0rNysrKysrKysrLSstNysrLSsrLSstKystLSsrKy0tKysrKysrLf/AABEIAJ8BPgMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAQIEB//EABYQAQEBAAAAAAAAAAAAAAAAAAABEf/EABoBAQADAQEBAAAAAAAAAAAAAAABAwQCBwX/xAAXEQEBAQEAAAAAAAAAAAAAAAAAAgER/9oADAMBAAIRAxEAPwD0gB9V9QAAAAAAAAAAAAAAAABUOd0AFe6KDlTVACFNUAiGeqBBDNdCCVDNdlQS0ZrtLUozaMt2Ws2lrNqWS7LWSiWeq67gFr1IAAAAAAAAAAAAAABUOd0AFe6KDlTVACFNUAiGeqEBDNVCCWoZrstQZtGa7LUpazaMt2Ws2lrNqWS7LWaCWeq6ADl3ALXqgAAAAAAAAAAAACoc7oAK90UEKaoAcqaoBEM9UICGa7EEqGa7KgzaM12WpaVm0ZbstZtLWbUsl2WsglnqugA5AAdwC16oAAAAAAAAAAAqHO6ACvdFBypqgBCmqARDPVCAhmuhBLUM12WoM2jNdlqUrNGS7LWbS1m1LLdlrIJZ63oAOQAAAHcAteqAAAAAAAAAKhzugAr3RQcqaoAQpqgEQz1QgIZqoQS1DNdmoM2jNdlqWlrNoy3ZazaWs2pZLstZKJZ9roAOQAAAAAHcAteqAAAAAAAKhzugAr3RQQpqgBypqgEQz1QgIZrsQS1DNdlqCWjNdpalpWbRluy1m0tZtSyXZayCWet6ADkAAAAAAAB3ALXqgAAAACoc7oAK90UEKaoAcqaoBEM9UIqIZrsQS1DNdlQZtGa7LUpWbRluy1m0tZtSyXZayCWeq6ADkAAAAAAAAAB3ALXqgAACoc7oAK90UEKaoAcqaoBEM9UICGaqEEtQzXYgzaM12WpaWs2jLdlrNpazalkuy1mglnqugA5AAAAAAAAAAAAdwC16oAqHO6ACvdFBypqgBCmqARDPVCAhmqhBKhmuy1Bm0ZrstS0rNoy3ZazaWs2pZLstZoJZ63oAOQAAAAAAAAAAAAAHcCrHqW6ACvdFBypqgBCmqARDPVCAhmuxBKhmuy1BLRmu0tSlZtGW7LWbS1m1LJdlrOlEs9b0AHIAAAAAAAAAAAAAAAD/2Q==)`,
        }}
      >
        <div className="dark:!border-navy-700 absolute -bottom-12 flex h-[120px] w-[120px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400">
          <img
            className="h-full w-full rounded-full"
            src="https://thesmsworks.co.uk/blog/wp-content/uploads/2022/06/cool-emoji-1.jpg"
            alt=""
          />
        </div>
      </div>

      {/* Name and position */}
      <div className="mt-16 flex flex-col items-center">
        <h4 className="text-navy-700 text-xl font-bold text-black uppercase">
          {username}
        </h4>
        <h5 className="text-base font-normal text-gray-600">{email}</h5>
      </div>

      {/* Post followers */}
      <div className="flex items-center justify-center mt-10">
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-navy-700 text-2xl font-bold text-black">
            Favoritos
          </h4>
          <p className="text-sm font-normal text-gray-600">1</p>
        </div>
      </div>
    </div>
  );
};

export default User;
