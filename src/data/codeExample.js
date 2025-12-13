export const codeExamples = {
  "App.jsx": `
    import { useState } from "react";
    import { SproutAI } from "sprout-ai-sdk";
    const [code, setCode] = useState("");
    
    const handleAICompletion = async () => {
        const suggestion = await SproutAI.complete(code);
        setCode(suggestion);
    };
    
    return (
        <div className="app">
            <CodeEditor
                onChange={setCode}
                onAI={handleAICompletion}
            />
        </div>
    );
    }`,
  "Hero.jsx": `
    import { useState } from "react";
    import { SproutAI } from "sprout-ai-sdk";

    export default function Hero() {
    const [prompt, setPrompt] = useState("Write a React hook");
    const [result, setResult] = useState("");

    const handleAI = async () => {
    const output = await SproutAI.complete({ prompt, role: "frontend" });
    setResult(output);
    };

    return (
        <section className="min-h-screen flex flex-col items-center justify-center gap-4 bg-slate-950 text-white">
            <h1 className="text-4xl font-bold">SproutAI</h1>
            <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="w-80 h-24 bg-slate-900 border border-slate-800 rounded p-2"
            />
            <button 
            onClick={handleAI}
            className="px-4 py-2 bg-emerald-500 text-black rounded">
                Run AI
            </button>
            <pre className="w-80 h-40 bg-slate-900 border border-slate-800 rounded p-2 text-sm overflow-auto">
                {result}
            </pre>
        </section>
    );
    }`,
  "Navbar.jsx": `
    import { useState } from "react";

    export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full bg-slate-950 text-white p-4 flex justify-between">
            <span className="font-bold">
                SproutAI
            </span>
            <button onClick={() => setOpen(!open)} className="text-sm">
                {open ? "Close" : "Menu"}
            </button>
        </nav>
    );
    }`,
};
