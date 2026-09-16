import {
  CalendarDays,
  ClipboardList,
  FileText,
  HelpCircle,
  Layers,
  Library,
  Sparkles,
  Stethoscope,
  Video,
} from "lucide-react";

const MAP = {
  video: Video,
  help: HelpCircle,
  file: FileText,
  stethoscope: Stethoscope,
  library: Library,
  clipboard: ClipboardList,
  calendar: CalendarDays,
  spark: Sparkles,
  layers: Layers,
};

export function MethodIcon({
  name,
  className = "size-5",
}: {
  name: keyof typeof MAP;
  className?: string;
}) {
  const Icon = MAP[name];
  return <Icon className={className} strokeWidth={2.1} />;
}
