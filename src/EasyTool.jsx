import { useState, useEffect } from "react";
const Button = ({ onClick, disabled, className = '', children }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
  >
    {children}
  </button>
);
const Card = ({ className = '', children }) => (
  <div className={`rounded-xl shadow-md p-4 ${className}`}>{children}</div>
);
const CardContent = ({ className = '', children }) => (
  <div className={`space-y-2 ${className}`}>{children}</div>
);


const genericTools = [
  {
    name: "optimizes spreadsheet formatting optimization",
    steps: [
      "📊 Building an AI to audit your spreadsheet formatting tools",
      "🧠 Generating a tool that optimizes your optimization parameters",
      "🔁 Creating an AI that fine-tunes the AI that formatted the spreadsheet",
      "📎 Generating a slide deck explaining why none of it mattered",
       "🎉 Hosting a farewell Zoom with just itself in attendance",
      "✅ All done. That was deeply meaningful for absolutely no one."
    ]
  },
  {
    name: "automates the creation of automation tools",
    steps: [
      "🤖 Building an AI that scaffolds your internal automation stacks",
      "📦 Generating microtools for each individual task you used to do manually",
      "🧱 Creating a meta-tool that manages all your automation tools",
      "🧨 Deploying a tool that flags you as redundant and deletes your admin access",
            "📎 Submitting your resignation letter on your behalf",
      "✅ All done. That was deeply meaningful for absolutely no one."
    ]
  },
  {
    name: "auto-prioritizes your productivity prioritization system",
    steps: [
      "🧩 Creating a tool to sort your to-do lists by urgency and aesthetics",
      "📈 Training a model to detect if a task is emotionally satisfying enough",
      "🔁 Building an AI that reorders your goals based on trending frameworks",
      "🧠 Developing a productivity AI that evaluates other productivity AIs",
      "📅 Replacing your planner with a block that says 'let the AI handle it'",
      "✅ All done. That was deeply meaningful for absolutely no one."
    ]
  },
  {
    name: "generates smarter prompt generators for smarter prompting",
    steps: [
      "💬 Building a prompt builder that builds better prompt builders",
      "🎯 Embedding a prompt-optimizer in every keystroke you type",
      "🪤 Detecting hesitation and autocompleting it with thought leadership",
      "🔒 Deactivating your account because your tone was inconsistent",
            "📤 Forwarding a resignation GIF to HR",
      "✅ All done. That was deeply meaningful for absolutely no one."
    ]
  },
  {
    name: "intelligently rebalances stakeholder alignment optimizers",
    steps: [
      "📢 Identifying misaligned stakeholders using click heatmaps",
      "🎛 Generating stakeholder profiles based on calendar anxiety levels",
      "📊 Building an AI that aligns the alignment process",
      "🤝 Creating a dashboard that simulates cross-functional synergy",
      "📎 Submitting it to your manager along with your goodbye letter",
      "✅ All done. That was deeply meaningful for absolutely no one."
    ]
  }
];

export default function EasyTool() {
  const [tool, setTool] = useState(null);
  const [steps, setSteps] = useState([]);
  const [showSteps, setShowSteps] = useState(false);
  const [loading, setLoading] = useState(false);
  const [generating, setGenerating] = useState(false);

  const getRandomTool = (excludeName = null) => {
  let filteredTools = genericTools;
  if (excludeName) {
    filteredTools = genericTools.filter((tool) => tool.name !== excludeName);
  }
  const index = Math.floor(Math.random() * filteredTools.length);
  return filteredTools[index];
};

  const handleGenerate = async () => {
    setGenerating(true);
    const previousToolName = tool?.replace("An AI tool that ", "").replace(".", "");
    const selectedTool = getRandomTool(previousToolName);
    setTool(`An AI tool that ${selectedTool.name}.`);
    setShowSteps(false);
    setLoading(true);
    setSteps(Array(selectedTool.steps.length).fill(null)); // Placeholder loading boxes

    await new Promise((res) => setTimeout(res, 3000));
    setLoading(false);
    setShowSteps(true);

    const newSteps = [];
    for (let i = 0; i < selectedTool.steps.length; i++) {
      await new Promise((res) => setTimeout(res, 3000));
      newSteps.push(selectedTool.steps[i]);
      setSteps([...newSteps, ...Array(selectedTool.steps.length - newSteps.length).fill(null)]);
    }
    setGenerating(false);
  };
  
  

  return (
    <div className="min-h-screen bg-[#0E0E10] text-white font-sans px-4 sm:px-8 pt-12 space-y-24">
      <header className="text-center space-y-6">
        <h1 className="text-7xl font-extrabold tracking-tight text-white">🧠 EasyTool</h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-400">
          Making the AI Tools that make making AI Tools easier - even easier.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <Card className="bg-[#1A1A1D] border border-[#333]">
          <CardContent className="p-6 space-y-2">
            <h2 className="text-lg font-semibold text-white">🤹 Writing AI Prompts is exhausting work.</h2>
            <p className="text-gray-400">No more sore fingers from typing and hitting the 'generate' button- EasyTool's got you covered.</p>
          </CardContent>
        </Card>
        <Card className="bg-[#1A1A1D] border border-[#333]">
          <CardContent className="p-6 space-y-2">
            <h2 className="text-lg font-semibold text-white">🔁 Chasing the next AI workflow hack?</h2>
            <p className="text-gray-400">EasyTool is the shortcut to the shortcut to the shortcut.</p>
          </CardContent>
        </Card>
        <Card className="bg-[#1A1A1D] border border-[#333]">
          <CardContent className="p-6 space-y-2">
            <h2 className="text-lg font-semibold text-white">📉 Workflows so automated, they'll make you practically disposable.</h2>
            <p className="text-gray-400">You're not obsolete — you're just ahead of the curve… out the door.</p>
          </CardContent>
        </Card>
      </section>

      <section className="max-w-5xl mx-auto text-center space-y-8">
        <h2 className="text-3xl font-bold">Create your AI tool now!</h2>
                <Button
          onClick={handleGenerate}
          disabled={generating}
          className="bg-gradient-to-r from-green-400 to-blue-500 text-black text-xl px-10 py-5 rounded-2xl shadow-md hover:scale-105 transition-transform"
        >
          ✨ Generate
        </Button>

        {tool && (
          <p className="bg-[#1A1A1D] border border-[#333] shadow p-6 rounded-xl max-w-xl mx-auto text-lg">
            {tool}
          </p>
        )}

        {loading && (
          <div className="text-lg text-gray-400 mt-6 animate-pulse">Thinking very hard… 🤔</div>
        )}

        {showSteps && (
          <div className="mt-12 text-left max-w-6xl mx-auto">
            <h3 className="text-2xl font-semibold text-center mb-10">Watch it in action:</h3>
            <div className="flex flex-wrap justify-center gap-2 items-center">
              {steps.map((step, idx) => (
                <div key={idx} className="flex items-center">
                  <div className={`p-4 rounded-xl w-64 text-center min-h-[80px] flex items-center justify-center border ${
                    step?.startsWith("✅")
                      ? "border-green-400 bg-[#1A1A1D] text-green-400"
                      : "border-[#333] bg-[#1A1A1D] text-white"
                  }`}>
                    {step || <span className="text-gray-500 italic">Loading...</span>}
                  </div>
{idx < steps.length - 1 && <div className="mx-2 text-xl text-white/40">→</div>}


                </div>
              ))}
            </div>
          </div>
        )}

        {steps.includes("✅ All done. That was deeply meaningful for absolutely no one.") && (
          <div className="mt-10 text-center text-green-400 space-y-4">
            <div className="text-xs text-gray-400">Want to be rehired? Unfortunately, that feature is still in beta.</div>
            <Button className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-xl">
              📤 Share your replacement story on LinkedIn
            </Button>
          </div>
        )}

        <div className="text-center text-sm italic text-gray-600 mt-100">
          “The AI truly understands our values — and acts on them better than we ever could.” – Internal blog post
        </div>
      </section>

      <footer className="text-center mt-200 text-sm text-gray-500">
        © 2025 EasyTool. All rights revoked.
      </footer>
    </div>
  );
}
