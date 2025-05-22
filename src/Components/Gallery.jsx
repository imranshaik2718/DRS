import { motion } from "framer-motion";

import img1 from "../assets/images/Gallery/img1.jpg";
import img2 from "../assets/images/Gallery/img2.jpg";
import img3 from "../assets/images/Gallery/img3.jpg";
import img4 from "../assets/images/Gallery/img4.jpg";
import img5 from "../assets/images/Gallery/img5.jpg";
import img6 from "../assets/images/Gallery/img6.jpg";
import img7 from "../assets/images/Gallery/img7.jpg";
import img8 from "../assets/images/Gallery/img8.jpg";
import img9 from "../assets/images/Gallery/img9.jpg";
import img10 from "../assets/images/Gallery/img10.jpg";
import img11 from "../assets/images/Gallery/img11.jpg";
import img12 from "../assets/images/Gallery/img12.jpg";
import img13 from "../assets/images/Gallery/img13.jpg";
import img14 from "../assets/images/Gallery/img14.jpg";
import img15 from "../assets/images/Gallery/img15.jpg";
import img16 from "../assets/images/Gallery/img16.jpg";
import img17 from "../assets/images/Gallery/img17.jpg";
import img18 from "../assets/images/Gallery/img18.jpg";
import img19 from "../assets/images/Gallery/img19.jpg";
import img20 from "../assets/images/Gallery/img20.jpg";
import img21 from "../assets/images/Gallery/img21.jpg";
import img22 from "../assets/images/Gallery/img22.jpg";
import img23 from "../assets/images/Gallery/img23.jpg";
import img24 from "../assets/images/Gallery/img24.jpg";
import img25 from "../assets/images/Gallery/img25.jpg";
import img26 from "../assets/images/Gallery/img26.jpg";
import img27 from "../assets/images/Gallery/img27.jpg";
import img28 from "../assets/images/Gallery/img28.jpg";
import img29 from "../assets/images/Gallery/img29.jpg";
import img30 from "../assets/images/Gallery/img30.jpg";
import img31 from "../assets/images/Gallery/img31.jpg";

export default function Gallery() {
  const items = [
    { src: img1, alt: "Gallery Image 1" },
    { src: img2, alt: "Gallery Image 2" },
    { src: img3, alt: "Gallery Image 3" },
    { src: img4, alt: "Gallery Image 4" },
    { src: img5, alt: "Gallery Image 5" },
    { src: img6, alt: "Gallery Image 6" },
    { src: img7, alt: "Gallery Image 7" },
    { src: img8, alt: "Gallery Image 8" },
    { src: img9, alt: "Gallery Image 9" },
    { src: img10, alt: "Gallery Image 10" },
    { src: img11, alt: "Gallery Image 11" },
    { src: img12, alt: "Gallery Image 12" },
    { src: img13, alt: "Gallery Image 13" },
    { src: img14, alt: "Gallery Image 14" },
    { src: img15, alt: "Gallery Image 15" },
    { src: img16, alt: "Gallery Image 16" },
    { src: img17, alt: "Gallery Image 17" },
    { src: img18, alt: "Gallery Image 18" },
    { src: img19, alt: "Gallery Image 19" },
    { src: img20, alt: "Gallery Image 20" },
    { src: img21, alt: "Gallery Image 21" },
    { src: img22, alt: "Gallery Image 22" },
    { src: img23, alt: "Gallery Image 23" },
    { src: img24, alt: "Gallery Image 24" },
    { src: img25, alt: "Gallery Image 25" },
    { src: img26, alt: "Gallery Image 26" },
    { src: img27, alt: "Gallery Image 27" },
    { src: img28, alt: "Gallery Image 28" },
    { src: img29, alt: "Gallery Image 29" },
    { src: img30, alt: "Gallery Image 30" },
   
  ];

  return (
    <motion.div
      className="bg-black min-h-screen px-4 py-10 pb-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="text-5xl font-extrabold text-white mb-4 tracking-wide"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Photo Gallery
        </motion.h2>

        <motion.p
          className="text-gray-400 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Explore our collection of timeless moments, stories, and visuals
          captured with passion and precision.
        </motion.p>

        <motion.div
          className="mt-6 w-28 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          style={{ transformOrigin: "left" }}
        />
      </motion.div>

      {/* Gallery Grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {items.map((image, index) => (
          <motion.div
            key={index}
            className="w-full h-full overflow-hidden "
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover rounded"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
