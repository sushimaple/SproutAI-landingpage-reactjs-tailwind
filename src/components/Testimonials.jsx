const testimonials = [
  {
    name: "Xian Chen",
    role: "Teach Lead",
    image: "https://images.pexels.com/photos/7652509/pexels-photo-7652509.jpeg",
    content:
      "Clean, fast, and surprisingly accurate—SproutAI has transformed my workflow by helping me build, iterate, and ship features faster with far less friction than before.",
  },
  {
    name: "Sarah Williams",
    role: "Senior Developer",
    image: "https://images.pexels.com/photos/5292189/pexels-photo-5292189.jpeg",
    content:
      "This AI app instantly improved my workflow and helped me build smarter features in half the time.",
  },
  {
    name: "Jane Guang",
    role: "CTO",
    image: "https://images.pexels.com/photos/7653469/pexels-photo-7653469.jpeg",
    content:
      "From idea to production, this AI app makes complex coding tasks feel effortless.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16">
          {/* {LEFT SIDE HEADER} */}
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              What Developers Are Saying About{" "}
              <span className="bg-gradient-to-r from-pink-300 via-blue-300 to-indigo-500 inline-block text-transparent bg-clip-text">
                Sprout AI
              </span>
            </h2>
            <p className="text-gray-400 text-base text-xl sm:text-lg max-w-2xl mx-auto">
              Everything you need to build, deploy, and manage your applications
              with ease.
            </p>
          </div>
          {/* RIGHT SIDE TESTIMONAILS */}

          <div className="lg:w-1/2 w-full ">
            <div className="space-y-6 sm:space-y-8">
              {testimonials.map((testimonial, key) => (
                <div
                  key={key}
                  className="bg-slate-900/50 p-4 sm:p-6 backdrop-blur-sm border border-slate-800 rounded-xl sm:rounded-xxl"
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0">
                      <div
                        className="text-2xl sm:text-3xl lg:text-4xl font-bold
                        bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text
                        text-transparent"
                      >
                        "
                      </div>
                    </div>
                    <div className="flex-grow">
                      <p className="text-white text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">
                        {testimonial.content}
                      </p>
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-semibold text-white text-sm sm:text-base">
                            {testimonial.name}
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-400">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
