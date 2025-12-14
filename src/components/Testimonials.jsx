const testimonials = [
  {
    name: "Xian Chen",
    role: "Senior Developer",
    image:
      "https://www.pexels.com/photo/man-in-black-dress-shirt-standing-beside-gray-wall-7652509/",
    content:
      "Clean, fast, and surprisingly accurate. SproutAI has transformed my workflow.",
  },
  {
    name: "Sarah Williams",
    role: "Teach Lead",
    image: "https://images.pexels.com/photos/5292189/pexels-photo-5292189.jpeg",
    content:
      "Clean, fast, and surprisingly accurate. SproutAI has transformed my workflow.",
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
      id="pricing"
      className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
              Simple, Transparent
            </span>
            <br />
            <span className="bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Pricing Plans
            </span>
          </h2>
          <p className="text-gray-400 text-base text-xl sm:text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include a 14-day
            free trial.
          </p>
        </div>
      </div>
    </section>
  );
}
