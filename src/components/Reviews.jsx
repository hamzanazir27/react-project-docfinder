import React, { useState, useEffect } from "react";

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      rating: 5,
      text: "Dr. Anna was very professional and kind. Highly recommended!",
      author: "Mika from Helsinki",
      initial: "M",
    },
    {
      id: 2,
      rating: 4,
      text: "Good experience, but waiting time was a bit long.",
      author: "Sara from Turku",
      initial: "S",
    },
    {
      id: 3,
      rating: 5,
      text: "Highly skilled and caring. Helped me a lot!",
      author: "Ahmed from Tampere",
      initial: "A",
    },
    {
      id: 4,
      rating: 5,
      text: "Excellent service and very knowledgeable staff. Will definitely come back!",
      author: "Emma from Espoo",
      initial: "E",
    },
    {
      id: 5,
      rating: 4,
      text: "Clean facility and friendly atmosphere. Treatment was effective.",
      author: "Jukka from Oulu",
      initial: "J",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 256 256"
        fill="currentColor"
        className={index < rating ? "text-orange-500" : "text-gray-300"}
      >
        <path d="M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.38,16.38,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.4,16.4,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.43,16.43,0,0,0,239.18,97.26Zm-15.34,5.47-48.7,42a8,8,0,0,0-2.56,7.91l14.88,62.8a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0l-54.72-33.65a8,8,0,0,0-8.38,0L69.09,215.94c-.15.09-.19.12-.38,0a.37.37,0,0,1-.17-.48l14.88-62.8a8,8,0,0,0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16A8,8,0,0,0,103,91.86l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153,91.86a8,8,0,0,0,6.75,4.92l63.92,5.16c.15,0,.24,0,.33.29S224,102.63,223.84,102.73Z"></path>
      </svg>
    ));
  };

  return (
    <div style={{ backgroundColor: "#FBE3D2" }}>
      <div
        className="max-w-4xl mx-auto p-8"
        style={{ backgroundColor: "#FBE3D2" }}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-xl text-gray-600">
            Real feedback from our satisfied patients
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Review Display */}
          <div className="bg-white rounded-lg shadow-lg p-8 mx-4 min-h-48 flex flex-col justify-between">
            <div>
              {/* Star Rating */}
              <div className="flex justify-center mb-4">
                {renderStars(reviews[currentIndex].rating)}
              </div>

              {/* Review Text */}
              <p className="text-lg text-gray-700 text-center mb-6 leading-relaxed">
                "{reviews[currentIndex].text}"
              </p>
            </div>

            {/* Author with Profile */}
            <div className="flex items-center justify-center space-x-3">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                style={{ backgroundColor: "#EF873D" }}
              >
                {reviews[currentIndex].initial}
              </div>
              <p className="font-semibold text-blue-600">
                {reviews[currentIndex].author}
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full transition-all duration-200 hover:scale-110"
            style={{ backgroundColor: "#EF873D", color: "white" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#ffffff"
              viewBox="0 0 256 256"
            >
              <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
            </svg>{" "}
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full transition-all duration-200 hover:scale-110"
            style={{ backgroundColor: "#EF873D", color: "white" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#ffffff"
              viewBox="0 0 256 256"
            >
              <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
            </svg>{" "}
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full  duration-200 ${
                index === currentIndex ? "w-8" : "hover:scale-125"
              }`}
              style={{
                backgroundColor: index === currentIndex ? "#EF873D" : "#ffffff",
                border: index === currentIndex ? "none" : "2px solid #EF873D",
              }}
            />
          ))}
        </div>

        {/* Review Counter */}
        <div className="text-center mt-4">
          <span className="text-gray-600">
            {currentIndex + 1} of {reviews.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
