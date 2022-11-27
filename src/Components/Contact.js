import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#62738c] flex justify-center items-center p-4"
    >
      <form action="" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-semibold inline border-b-4 border-[#ccd6f6]  text-[#2b3242]">
            Contact
          </p>
          <p className="text-[#ccd6f6] py-4">
            Fill out the form to get in touch or personally send me an email - email
          </p>
              </div>
              <input name='name' type='text' placeholder="Name" className="p-2" />
              <input name='name' type='text' placeholder="Email" className="my-4 p-2" />
              <textarea name='message' rows='10' placeholder="Message" className="p-2" />
              <button className="text-gray-200 hover:bg-[#4a5057] hover:border-[#4a5057] border-2 px-4 py-2 mx-auto my-8 flex items-center">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
