import AboutUs from "../Components/AboutPageAboutUs"
import TermsAndServices from "../Components/AboutPageTermsAndPrivacy"
function AboutPage() {
  return (
    <div className="bg-[#404959] text-[#eee] mt-[-.5rem]">
			<form action="https://formsubmit.co/8c66de1c39ebda66ec301f39f2d769b3 " method="POST" enctype="multipart/form-data">
                        <div class="flex flex-wrap -mr-1 -ml-1">
                            <div class="mb-4 md:w-1/2 pr-4 pl-4">
                                <input type="text" class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" id="name" name="name" placeholder="Full Name *" required/>
                            </div>
                            <div class="mb-4 md:w-1/2 pr-4 pl-4">
                                <input type="email" class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" id="email" name="email" placeholder="Email Address *" required/>
                            </div>
                        </div>

                        <div class="flex flex-wrap -mr-1 -ml-1">
                            <div class="mb-4 md:w-1/2 pr-4 pl-4">
                                <input type="tel" class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" id="phone" name="phone" placeholder="Phone Number *" required/>
                            </div>
                           
                        </div>
                        <div class="flex flex-wrap -mr-1 -ml-1">
                            <div class="mb-4 md:w-full pr-4 pl-4">
                                <input type="text" class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" id="subject" name="_subject" placeholder="Subject *" required />
                            </div>
                        </div>
                        <div class="flex flex-wrap -mr-1 -ml-1">
                            <div class="mb-4 md:w-full pr-4 pl-4">
                                <textarea class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" rows="5" id="message" name="message" placeholder="Type your message here"></textarea>
                            </div>
                        </div>
                        <br/>
                        <div class="flex flex-wrap -mr-1 -ml-1">
                            <div class="mb-4 md:w-full pr-4 pl-4 text-center">
                                <a href="mailto:victorrmalhotra@gmail.com">
                                    <button type="submit" class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600"><i class="fa fa-send"></i> Send Message</button>
                                </a>
                            </div>
                            <input type="hidden" name="_cc" value="tblock579@west-mec.org" style={{display:"none"}}/>
					<input type="hidden" name="_autoresponse" value="You have made contact with victor please wait for at least a day for a message" />
					<input type="hidden" name="_next" value="http://localhost:3000/about"/>
					<input type="hidden" name="_url" value="http://localhost:3000/about"/>
                            <input type="hidden" name="_template" value="box"/>
                            <input type="text" name="_honey" style={{display:"none"}}/>
                        </div>
                    </form>
        </div>
    )
}
export default AboutPage