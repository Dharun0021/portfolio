import SignupFormDemo from "./Form";
import MovingBorderDemo from "./MovingBorderDemo";
import { socialIcons } from '@/data';

export const Contact = () => {
  return (
    <section className="py-10 w-full" id="contact"> {/* Reduced py-20 to py-10 */}
      <h1 className="heading text-white">
        <span className="text-violet-500" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Contact
        </span>
      </h1>

      <div className="mt-5 flex flex-col md:flex-row justify-center items-center space-y-5 md:space-y-0 md:space-x-10 mx-5 md:mx-10">
        {/* Left Side: Signup Form */}
        <div className="w-full md:w-1/2">
          <SignupFormDemo />
        </div>

        {/* Right Side: Moving Border */}
        <div className="w-full md:w-1/3 mt-10" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <MovingBorderDemo />
        </div>
      </div>

      <footer className='w-full pt-10 pb-5 p-4' id='footer'> {/* Removed mt-10 to eliminate margin-top */}
    <div className='flex flex-col items-center'>
        <p className='text-white my-5 text-center'>
            Ready to take the next step? I’m just a message away to help you achieve your aspirations.
        </p>
        <div className='flex justify-between items-center w-full'> {/* Added w-full to ensure it takes the full width */}
            <p className='md:text-white text-sm md:font-normal font-light mr-4'>
                Copyright © 2024 Modern Website
            </p>
            <div className="flex items-center md:gap-3 gap-6">
                {
                    socialIcons.map((info, index) => (
                        <div key={index}>
                            <img src={info.img} alt='icon' width={20} height={20} />
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
</footer>


    </section>
  );
};

export default Contact;
