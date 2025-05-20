import React from "react";
import deep from "../assets/images/Deep Ranjan Sachan.jpg";
import img1 from "../assets/rowimg/1.jpg";
import img2 from "../assets/rowimg/2.jpg";
import img3 from "../assets/rowimg/3.jpg";
import img4 from "../assets/rowimg/4.jpg";
import img5 from "../assets/rowimg/5.jpg";
import img6 from "../assets/rowimg/6.jpg";
import img7 from "../assets/rowimg/7.jpg";
import img8 from "../assets/rowimg/8.jpg";
function About() {
  return (
    <>
      <div className="bg-[#f6f6f6] text-[#1f1f1f] font-sans  pb-5 border-gray-800">
        <section class="max-w-7xl mx-auto px-6 pt-20">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <h1 class="text-4xl md:text-5xl font-serif font-semibold leading-snug mb-8">
                Never just one thing, never just one place
              </h1>
              <div class="space-y-8 text-[1.05rem] leading-relaxed font-light">
                <p>
                  I’m Deep Ranjan Sachan, and for as long as I can remember,
                  I’ve been drawn to the open road — not just to ride, but to
                  feel every mile, every face, every story that unfolds when you
                  stop looking at life as a destination and start living it as a
                  journey. I wasn’t always this way. I started as an engineer,
                  spending my days around machines and my nights dreaming of
                  mountains, highways, and faraway cities. I was building
                  someone else's future, but my own remained parked in neutral.
                  One day, I chose to shift gears — quite literally. I picked up
                  my camera, hopped on my bike, and started telling the stories
                  I always wanted to hear. My first video was raw and simple —
                  no drone shots, no sponsors, just me, my bike, and the road.
                  It didn’t go viral, but it felt right. Every ride after that
                  became a chapter in my life — and slowly, people started
                  reading. With every ride, I grew — not just as a creator, but
                  as a human. I captured places that maps barely show and voices
                  that news never covers. Over the years, my YouTube family has
                  grown to over 248,000 subscribers, and together, we’ve crossed
                  more than 48 million views. That number isn’t just data — it’s
                  a community of dreamers, travelers, and believers. I’ve ridden
                  over 7,000 km across India from Delhi to Kanyakumari, and once
                  I even did a Delhi to Kolkata stretch — 1,600 kilometers —
                  without stopping for sleep. Thirty hours on the saddle, with
                  my thoughts as company. It was brutal. It was beautiful. And
                  it made me realize I was exactly where I belonged. People
                  often ask me what my biggest achievement is —{" "}
                  <span className="text-xs">Deep Ranjan Sachan</span>
                </p>
              </div>
            </div>

            <div>
              <img
                src={deep}
                alt="Deep Ranjan Sachan"
                class="w-full h-auto rounded-md object-cover mt-20"
              />
            </div>
          </div>
        </section>
        <div class="max-w-screen-xl mx-auto px-4">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-2 py-8 ">
            {/* <!-- Replace src with your image URLs --> */}
            <img
              src={img1}
              class="w-full h-auto object-cover  rounded-2xl"
              alt="Image 1"
            />
            <img
              src={img2}
              class="w-full h-auto object-cover  rounded-2xl"
              alt="Image 2"
            />
            <img
              src={img3}
              class="w-full h-auto object-cover  rounded-2xl"
              alt="Image 3"
            />
            <img
              src={img5}
              class="w-full h-auto object-cover  rounded-2xl"
              alt="Image 4"
            />
            <img
              src={img4}
              class="w-full h-auto object-cover  rounded-2xl"
              alt="Image 5"
            />
            <img
              src={img6}
              class="w-full h-auto object-cover rounded-2xl"
              alt="Image 6"
            />
            <img
              src={img7}
              class="w-full h-auto object-cover  rounded-2xl"
              alt="Image 7"
            />
            <img
              src={img8}
              class="w-full h-auto object-cover  rounded-2xl"
              alt="Image 8"
            />
          </div>
        </div>
        
        <section class="flex flex-wrap justify-center items-center text-center divide-x divide-gray-300 pt-11 pb-5  px-4">
          <div class="px-6">
            <h2 class="text-2xl font-bold text-black">Most Popular</h2>
            <p class="text-gray-600">Bike Vlogger</p>
          </div>
          <div class="px-6">
            <h2 class="text-2xl font-bold text-black">2.3 Billion</h2>
            <p class="text-gray-600">Views on YouTube</p>
          </div>
          <div class="px-6">
            <h2 class="text-2xl font-bold text-black">248k</h2>
            <p class="text-gray-600">subscribers</p>
          </div>
          <div class="px-6">
            <h2 class="text-2xl font-bold text-black">500+ </h2>
            <p class="text-gray-600">Videos</p>
          </div>
          <div class="px-6">
            <h2 class="text-2xl font-bold text-black">Awards</h2>
            <p class="text-gray-600">& Recognitions</p>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
