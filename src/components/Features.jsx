const features = [
  {
    title: "Ai Code Completion",
    description:
      "Intelligent code suggestions pwoered by advanced AI algorithms to help you write code faster and with fewer errors.",
    image: "code-completion",
    imagePosition: "left",
  },
  {
    title: "Automated Testing",
    description:
      "Generate comprehensive unit and integration tests automatically to ensure your code is robust and reliable.",
    image: "testing",
    imagePosition: "right",
  },
  {
    title: "Smart Debugging",
    description:
      "Identify and fix bugs quickly with AI-powered debugging tools that analyze your code and suggest solutions.",
    image: "debugging",
    imagePosition: "left",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-16 sm:py-20 px-10 sm:px-6 lg:8 relative"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-5xl sm:4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
              Your Complete Development
            </span>
            <br />
            <span className="bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Workflow
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
}
