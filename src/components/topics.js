import {
  Database,
  RefreshCw,
  Globe,
  Zap,
  Mouse,
  Keyboard,
  Eye,
  FileText,
  Smartphone,
} from "lucide-react";

import UseStateDemo from "./topics/UseStateDemo";
import PropsDemo from "./topics/PropsDemo";
import UseEffectDemo from "./topics/UseEffectDemo";

// import other topic components as needed...

const topics = [
  {
    id: 1,
    name: "useState Hook",
    icon: Database,
    description: "Manage state in functional components",
    component: UseStateDemo,
  },
  {
    id: 2,
    name: "Props",
    icon: Globe,
    description: "Pass data and event handlers to child components",
    component: PropsDemo,
  },
  {
    id: 3,
    name: "useEffect Hook",
    icon: Globe,
    description: "Manage side effects in functional components",
    component: UseEffectDemo,
  },
  // Add more topics as you create the components...
];

export default topics;
