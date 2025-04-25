
import React from "react";
import { Slider } from "@/components/ui/slider";

interface GoalSetterProps {
  value: number;
  onChange: (newVal: number) => void;
}

const GoalSetter: React.FC<GoalSetterProps> = ({ value, onChange }) => (
  <div className="flex items-center gap-3 mt-2">
    <Slider
      min={5}
      max={120}
      step={5}
      value={[value]}
      onValueChange={vals => onChange(vals[0])}
      className="flex-1"
    />
    <input
      type="number"
      className="w-16 border border-slate-300 rounded px-1 py-1 ml-2 text-center"
      min={5}
      max={120}
      step={5}
      value={value}
      onChange={e => onChange(Number(e.target.value))}
    />
    <span className="text-slate-600 ml-1">min</span>
  </div>
);

export default GoalSetter;
