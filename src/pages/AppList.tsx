
import React, { useState } from "react";
import GoalSetter from "../components/GoalSetter";
import AppProgressCard from "../components/AppProgressCard";
import { Button } from "@/components/ui/button";

type TrackedApp = {
  id: string;
  name: string;
  icon: string; // URL or local
  goalMinutes: number;
  minutesUsedToday: number;
};

const MOCK_APPS: TrackedApp[] = [
  {
    id: "com.duolingo",
    name: "Duolingo",
    icon: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Duolingo_logo.png",
    goalMinutes: 30,
    minutesUsedToday: 10,
  },
  {
    id: "com.khanacademy",
    name: "Khan Academy",
    icon: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Khan_Academy_logomark.svg",
    goalMinutes: 25,
    minutesUsedToday: 5,
  },
];

const ALL_APPS = [
  ...MOCK_APPS,
  {
    id: "com.coursera",
    name: "Coursera",
    icon: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Coursera_logo.svg",
    goalMinutes: 0,
    minutesUsedToday: 0,
  },
  {
    id: "com.udemy",
    name: "Udemy",
    icon: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Udemy_logo.png",
    goalMinutes: 0,
    minutesUsedToday: 0,
  },
];

const AppList = () => {
  const [trackedApps, setTrackedApps] = useState<TrackedApp[]>(MOCK_APPS);
  const [showAdd, setShowAdd] = useState(false);

  const handleAddApp = (app: TrackedApp) => {
    setTrackedApps([...trackedApps, { ...app, goalMinutes: 15, minutesUsedToday: 0 }]);
    setShowAdd(false);
  };

  const handleGoalChange = (id: string, newGoal: number) => {
    setTrackedApps(apps =>
      apps.map(app => app.id === id ? { ...app, goalMinutes: newGoal } : app)
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-green-50 px-4 py-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Your Tracked Learning Apps</h1>
      <div className="flex flex-col gap-6 w-full max-w-lg">
        {trackedApps.map(app => (
          <AppProgressCard
            key={app.id}
            app={app}
            onGoalChange={handleGoalChange}
          />
        ))}
      </div>
      <Button className="mt-8 w-full max-w-xs" onClick={() => setShowAdd(true)}>
        + Add another app
      </Button>
      {showAdd && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-10">
          <div className="bg-white rounded-xl shadow-lg max-w-xs w-full p-6">
            <h2 className="font-semibold text-lg mb-3">Add App</h2>
            <div className="flex flex-col gap-2">
              {ALL_APPS.filter(app => !trackedApps.some(t => t.id === app.id)).map(app => (
                <button
                  key={app.id}
                  className="flex items-center gap-2 px-4 py-2 rounded hover:bg-indigo-100"
                  onClick={() => handleAddApp(app)}
                >
                  <img src={app.icon} alt={app.name} className="w-7 h-7 rounded-lg" />
                  <span className="flex-1 text-slate-700">{app.name}</span>
                </button>
              ))}
            </div>
            <Button
              variant="secondary"
              className="mt-4 w-full"
              onClick={() => setShowAdd(false)}
            >
              Cancel
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppList;
