import React from "react";
import bmwImage from "../../assets/images/bmw.webp";

function BMW() {
  const videos = [
    {
      type: "sponsored",
      title: "Birthday Gifts For Girlfriend",
      subtitle: '"Wear Your Memories: Personalized Photo Rings - Shop Now!"',
      image: "/sponsored.jpg",
      duration: "",
      channel: "Photo Jewels",
      views: "",
      time: "",
    },
    {
      title: "MY FIRST OFF ROADING EXPERIENCE FT @ShreeManLegenD - VLOG 115",
      channel: "Snax Gaming",
      image: "/vlog.jpg",
      duration: "25:03",
      views: "233K views",
      time: "5 hours ago",
    },
    {
      title: "Apple Launched NEW AI Features for India! *Apple Intelligence*",
      channel: "Tech Burner",
      image: "/apple.jpg",
      duration: "14:14",
      views: "448K views",
      time: "1 month ago",
    },
    {
      title: "RCB IN TOP 2?",
      channel: "RCB Sports",
      image: "/rcb.jpg",
      duration: "16:42",
      views: "",
      time: "",
    },
    {
      title: "SRINAGAR TO DELHI IN EXTREME WEATHER",
      channel: "Moto Vlogger",
      image: "/srinagar.jpg",
      duration: "18:51",
      views: "",
      time: "",
    },
    {
      title: "Ladakh | Season 5 | Episode 2",
      channel: "Bike Riders",
      image: "/ladakh.jpg",
      duration: "10:30",
      views: "",
      time: "",
    },
  ];

  const bikeDetails = {
    name: "BMW F 850 GSA",
    kilometers: "50,500 KM",
    vlogs: "9 vlogs featured",
    fuelType: "Petrol",
    topSpeed: "200 km/h",
    weight: "229 kg",
    engine: "853cc twin-cylinder",
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Top Section - Image & Details Side by Side */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 px-6 pt-10 pb-6">
        {/* Image */}
        <div className="text-center">
          <img
            src={bmwImage}
            className="w-[400px] rounded-md"
            alt={bikeDetails.name}
          />
        </div>

        {/* Details */}
        <div className="text-left text-gray-800 space-y-2 max-w-md">
          <h2 className="text-2xl font-bold">{bikeDetails.name}</h2>
          <p><span className="font-medium">Kilometers Travelled:</span> {bikeDetails.kilometers}</p>
          <p><span className="font-medium">Vlogs Available:</span> {bikeDetails.vlogs}</p>
          <p><span className="font-medium">Fuel Type:</span> {bikeDetails.fuelType}</p>
          <p><span className="font-medium">Top Speed:</span> {bikeDetails.topSpeed}</p>
          <p><span className="font-medium">Weight:</span> {bikeDetails.weight}</p>
          <p><span className="font-medium">Engine:</span> {bikeDetails.engine}</p>
        </div>
      </div>

      {/* Video Grid */}
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-black text-white">
        {videos.map((video, idx) => (
          <div key={idx} className="bg-gray-900 rounded-lg overflow-hidden shadow-md">
            <div className="relative">
              <img
                src={video.image}
                alt={video.title}
                className="w-full h-48 object-cover"
              />
              {video.duration && (
                <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-xs px-1.5 py-0.5 rounded">
                  {video.duration}
                </span>
              )}
            </div>
            <div className="p-3">
              {video.type === "sponsored" ? (
                <>
                  <p className="text-sm font-semibold">{video.title}</p>
                  <p className="text-xs italic">{video.subtitle}</p>
                  <p className="text-xs mt-1 text-gray-400">
                    <span className="font-bold">Sponsored</span> · {video.channel}
                  </p>
                </>
              ) : (
                <>
                  <h3 className="text-sm font-semibold line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">{video.channel}</p>
                  <p className="text-xs text-gray-500">
                    {video.views} · {video.time}
                  </p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>



      
    </div>
  );
}

export default BMW;
