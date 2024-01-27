import {
  Analytics,
  Dashboard,
  Users,
  Inventory,
  Promotions,
  Info,
} from "@/components/icons";

interface IconProps {
  className?: string;
  color?: string;
}

export interface NavItem {
  title: string;
  icon: React.FC<IconProps>;
}

export const NavItems: NavItem[] = [
  {
    title: "Dashboard",
    icon: Dashboard,
  },
  {
    title: "Analytics",
    icon: Analytics,
  },
  {
    title: "Users",
    icon: Users,
  },
  {
    title: "Inventory",
    icon: Inventory,
  },
  {
    title: "Promotions",
    icon: Promotions,
  },
  {
    title: "Info",
    icon: Info,
  },
];
