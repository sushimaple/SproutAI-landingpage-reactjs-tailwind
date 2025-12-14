import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

const features = [
  {
    title: "Ai Code Completion",
    description:
      "Intelligent code suggestions pwoered by advanced AI algorithms to help you write code faster and with fewer errors.",
    codeSnippet: `async function handleSubmit(payload) {
  const response = await fetch("/api/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  // AI completed the logic
  if (!response.ok) throw new Error("Submission failed");

  const data = await response.json();
  return data;
}`,
    imagePosition: "left",
  },
  {
    title: "Automated Testing",
    description:
      "Generate comprehensive unit and integration tests automatically to ensure your code is robust and reliable.",
    codeSnippet: `import { describe, it, expect } from "vitest";
import { handleSubmit } from "./submit";

describe("handleSubmit", () => {
  it("should return API response data", async () => {
    const result = await handleSubmit();
    expect(result).toHaveProperty("success", true);
  });
});`,
    imagePosition: "right",
  },
  {
    title: "Smart Debugging",
    description:
      "Identify and fix bugs quickly with AI-powered debugging tools that analyze your code and suggest solutions.",
    codeSnippet: `async function handleSubmit() {
  try {
    const response = await fetch("/api/submit");
    if (!response.ok) throw new Error("Request failed");
    return await response.json();
  } catch (error) {
    console.error("AI Insight:", error.message);
  }
}`,
    imagePosition: "left",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
              Your Complete Development
            </span>
            <br />
            <span className="bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Workflow
            </span>
          </h2>
        </div>
        <div className="space-y-16 sm:space-y-20 lg:space-y-32">
          {features.map((features, key) => (
            <div
              key={key}
              className={`flex flex-col lg:flex-grow items-center gap-8 sm:gap-12 ${
                features.imagePosition === "right" ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1 w-full">
                <div className="relative group">
                  <div
                    className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 
                rounded-xl sm:rounded-2xl p-4 sm:p-6 overflow-hidden group-hover:border-1 
                group-hover:border-blue-600/50 transition-all duration-300"
                  >
                    {/* IDE INTERFACE */}
                    <div className="bg-gray-950 rounded-lg p-3 sm:p-4 font-mono text-xs sm:text-sm">
                      <div className="flex items-center space-x-1 sm:space-x-2 mb-3 sm:mb-4">
                        <div className="flex items-center space-x-1 sm:space-x-2">
                          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                        </div>
                        <span className="text-gray-400 ml-2 sm:ml-4 text-xs sm:text-sm">
                          {features.title}
                        </span>
                      </div>
                      <div>
                        <SyntaxHighlighter
                          language="javascript"
                          style={nightOwl}
                          customStyle={{
                            margin: 0,
                            borderRadius: "8px",
                            fontSize: "0.75rem",
                            lineHeight: "1.4",
                            height: "100%",
                            border: "1px solid #3c3c3c",
                          }}
                          wrapLines={true}
                        >
                          {features.codeSnippet}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* {TEXT SECTION} */}
              <div className="flex-1 w-full">
                <div className="max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
                  <h3 className="text-4xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white">
                    {features.title}
                  </h3>
                  <p>{features.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
