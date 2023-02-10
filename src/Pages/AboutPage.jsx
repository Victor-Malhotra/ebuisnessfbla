import AboutUs from '../Components/AboutPageAboutUs';
import TermsAndServices from '../Components/AboutPageTermsAndPrivacy';
import '../Styles/about.css'
import AttractionDisplay from '../Components/AttractionDisplay';
function AboutPage() {
  return (
    <div className='bg-[#404959] text-[#eee] p-5 flex flex-wrap md:mt-6 sm: mt-11'>
      <div className='flex flex-col w-full lg:w-1/2 '>
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3331.237321438808!2d-111.85446648465796!3d33.39097218079098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872ba8036d5ee495%3A0x1d473a8c4739f80c!2s902%20W%20Grove%20Ave%2C%20Mesa%2C%20AZ%2085210!5e0!3m2!1sen!2sus!4v1674856415655!5m2!1sen!2sus" width="900" height="480" style={{borderRadius: "2rem"}} className="p-5 w-full" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='Hotel Location'></iframe>
        </div>
        <div className='w-full'>
        <form
        action='https://formsubmit.co/8c66de1c39ebda66ec301f39f2d769b3 '
        method='POST'
          encType='multipart/form-data'
        >
        <div className='flex -mr-1 -ml-1'>
          <div className='mb-4 w-full md: pr-4 pl-4'>
            <input
              type='text'
              className='block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded'
              id='name'
              name='name'
              placeholder='Full Name *'
              required
            />
          </div>
          
        </div>
        

        <div className='flex -mr-1 -ml-1'>
          <div className='mb-4 w-full pr-4 pl-4'>
            <input
              type='tel'
              className='block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded'
              id='phone'
              name='phone'
              placeholder='Phone Number *'
              required
            />
          </div>
        </div>
        <div className='flex flex-wrap -mr-1 -ml-1'>
          <div className='mb-4 w-full md: pr-4 pl-4'>
            <input
              type='text'
              className='block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded'
              id='subject'
              name='_subject'
              placeholder='Subject *'
              required
            />
          </div>
        </div>
        <div className='flex flex-wrap -mr-1 -ml-1 '>
          <div className='mb-4 w-full md: pr-4 pl-4'>
            <textarea
              className='block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded'
              rows='5'
              id='message'
              name='message'
              placeholder='Type your message here'></textarea>
          </div>
        </div>
        <br />
        <div className='flex flex-wrap -mr-1 -ml-1'>
          <div className='mb-4 w-full md: pr-4 pl-4 text-center'>
            <a href='mailto:victorrmalhotra@gmail.com'>
              <button
                type='submit'
                className='inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600'>
                <i className='fa fa-send'></i> Send Message
              </button>
            </a>
          </div>
          <input
            type='hidden'
            name='_cc'
            value='tblock579@west-mec.org'
            style={{ display: 'none' }}
          />
          <input
            type='hidden'
            name='_autoresponse'
            value='You have made contact with victor please wait for at least a day for a message'
          />
          <input
            type='hidden'
            name='_next'
            value='http://localhost:3000/about'
          />
          <input
            type='hidden'
            name='_url'
            value='http://localhost:3000/about'
          />
          <input type='hidden' name='_template' value='box' />
          <input type='text' name='_honey' style={{ display: 'none' }} />
        </div>
          </form>
          </div>
      </div>
      <div className='text-white flex flex-col w-full lg:w-1/2'>
        <div className='p-5'>
          <h1 className='text-4xl'>Attractions Nearby</h1>
          <AttractionDisplay name="Golfland Sunsplash" address="155 W Hampton Ave, Mesa, AZ 85210" times="Sunday 11 AM-10 PM, Monday 10 AM-10 PM,Tuesday 10 AM-10 PM,Wednesday 10 AM-10 PM,Thursday 10 AM-10 PM, Friday 10 AM-12 AM, Saturday 10 AM-12 AM" website="https://www.golfland.com/mesa/"/>
        </div>
      </div>
    </div>
  );
}
export default AboutPage;
