export default function App() {
  const fields = ["Your Name:", "Email:", "Your github link:"];

  return (
    <div className="min-h-screen bg-[#f4eefb] p-6 flex justify-center">
      <div className="w-full max-w-4xl space-y-6">
        <div className="bg-white rounded-xl border-t-8 border-purple-600 p-8 shadow-sm">
          <h1 className="text-5xl mb-6">Buwigs Design Frontend</h1>

          <p className="text-2xl mb-8">
            This is the design link you have to replicate in react:
          </p>

          <p className="text-xl break-all">
            https://www.figma.com/design/RHhQcS2J6cjL1G7MXWepEd/Jm-store
          </p>
        </div>

        {fields.map((x) => (
          <div
            key={x}
            className="bg-white rounded-xl p-8 min-h-[220px] shadow-sm"
          >
            <h2 className="text-4xl font-semibold mb-16">{x}</h2>

            <input
              placeholder="Your answer"
              className="w-full max-w-xl border-b-2 border-gray-300 outline-none text-2xl pb-2 focus:border-purple-600"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
