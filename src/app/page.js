export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="bg-black h-screen w-full">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex flex-col items-center justify-center w-lg border-2 h-100 rounded-2xl">
          <h1 className="text-4xl text-blue-400 font-bold mb-10">
            Whatsapp Bot
          </h1>
            <input
              className="w-sm p-2 border-2 rounded-md"
              type="text"
              placeholder="Mail"
            />
            <input
              className="w-sm border-2 mt-5 mb-5 p-2 rounded-md"
              type="password"
              placeholder="OTP"
            />
            <button className="bg-blue-500 text-white p-2 rounded-md">
              Login
            </button>

          </div>
        </div>
      </div>
    </main>
  );
}
