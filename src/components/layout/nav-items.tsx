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
  href: string;
  icon: React.FC<IconProps>;
}

export const NavItems: NavItem[] = [
  {
    title: "Dashboard",
    icon: Dashboard,
    href: "#dashboard",
  },
  {
    title: "Analytics",
    icon: Analytics,
    href: "#analytics",
  },
  {
    title: "Users",
    icon: Users,
    href: "#users",
  },
  {
    title: "Inventory",
    icon: Inventory,
    href: "#inventory",
  },
  {
    title: "Promotions",
    icon: Promotions,
    href: "#promotions",
  },
  {
    title: "Info",
    icon: Info,
    href: "#info",
  },
];
