
import React from "react";
import GoalSetter from "./GoalSetter";
import { Progress } from "@/components/ui/progress";

type AppCardProps = {
  app: {
    id: string;
    name: string;
    icon: string;
    goalMinutes: number;
    minutesUsedToday: number;
  };
  onGoalChange: (id: string, newGoal: number) => void;
};

const AppProgressCard: React.FC<AppCardProps> = ({ app, onGoalChange }) => {
  const pct = Math.min(100, Math.round((app.minutesUsedToday / app.goalMinutes) * 100));
  const reached = app.minutesUsedToday >= app.goalMinutes;
  return (
    <div className="bg-white/90 rounded-xl shadow-md p-4 flex gap-4 items-center">
      <img src={app.icon} alt={app.name} className="w-12 h-12 rounded" />
      <div className="flex-1">
        <div className="flex justify-between items-baseline">
          <h2 className="text-lg font-semibold">{app.name}</h2>
          <span className={`text-xs font-bold ${reached ? "text-red-600" : "text-gray-500"}`}>
            {app.minutesUsedToday} / {app.goalMinutes} min
          </span>
        </div>
        <Progress value={pct} className={`h-2 mt-2 ${reached ? "bg-red-100" : "bg-green-100"}`} />
        <GoalSetter value={app.goalMinutes} onChange={val => onGoalChange(app.id, val)} />
        {reached && (
          <div className="mt-1 text-red-500 text-xs font-semibold">Goal reached today 🎉</div>
        )}
      </div>
    </div>
  );
};

export default AppProgressCard;
