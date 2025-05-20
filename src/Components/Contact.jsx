import React from 'react'

function Contact() {
  return (
    <div>
      <section class="bg-[#f6f6f6] text-black/60 pt-5">
      <div>
          <a
            href="#"
            target="_blank"
            class=" font-semibold flex items-center justify-center gap-2 text-[30px] border-gray-600 hover:text-gray-300 transition  my-5"
          >
            Visit My Channel
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m5-5h5v5m-11 11L21 3"
              />
            </svg>
          </a>
        </div>
  <div class="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 font-Poppins">
    
    {/* <!-- Left: Text + Info --> */}
    <div>
      <h2 class="text-4xl font-bold mb-6 leading-snug">
        I love to collaborate <br /> and make awesome <br /> content. Let’s talk!
      </h2>
      <div class="mt-10 border-t pt-6">
        <h4 class="text-sm uppercase tracking-wide text-gray-600 mb-2 font-semibold">Get In Touch</h4>
        <p class="font-semibold text-lg mb-2">Sector 15 Part 2, Sector 15, Gurugram, Haryana 122007.</p>
        <p class="text-lg font-medium mb-2">+91 **********</p>
        <a href="mailto:mail@example.com" class="text-lg text-black font-bold underline hover:text-blue-600 transition">deepranjan19@gmail.com</a>
      </div>
    </div>

    {/* <!-- Right: Contact Form --> */}
    <div class="bg-gray-50 p-8 rounded-lg shadow-md">
      <h4 class="uppercase text-sm font-semibold tracking-wide mb-4">Send Me a Message</h4>
      <form class="space-y-4">
        <input type="text" placeholder="Full name" class="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"/>
        <input type="email" placeholder="Email address" class="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"/>
        <input type="text" placeholder="Subject" class="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"/>
        <textarea placeholder="Your message" rows="4" class="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"></textarea>
        <button type="submit" class="px-6 py-2 border-2 border-black rounded-full font-semibold hover:bg-black hover:text-white transition">Send Message</button>
      </form>
    </div>
  </div>
</section>
    </div>
    
  )
}

export default Contact
