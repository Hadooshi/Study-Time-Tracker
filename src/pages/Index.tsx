
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-blue-100 to-indigo-50 flex flex-col items-center justify-center px-4 py-8">
      <h1 className="text-4xl sm:text-5xl font-bold text-indigo-700 mb-5 drop-shadow-lg tracking-tight">
        Learn Limit Monitor
      </h1>
      <p className="text-lg sm:text-xl text-slate-700 max-w-lg mb-8">
        Set daily time goals for your favorite educational apps! Stay focused, learn consistently, and get notified when you’ve reached your goal.
      </p>
      <Link to="/apps">
        <button className="bg-indigo-600 hover:bg-indigo-800 transition text-white text-lg font-semibold px-8 py-3 rounded-xl shadow-md">
          Get Started
        </button>
      </Link>
      <p className="text-xs text-gray-500 mt-10">Currently preview mode — Android notifications and real usage coming soon!</p>
    </div>
  );
};

export default Index;
