import type { ComponentType, SVGProps } from "react";

export type NavItem = {
  label: string;
  href: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

function createIcon(path: string) {
  const Icon: ComponentType<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
      {...props}
    >
      <path d={path} />
    </svg>
  );

  Icon.displayName = "NavIcon";

  return Icon;
}

export const OverviewIcon = createIcon(
  "M4 9h16M4 15h7m3 0h6M6 5h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"
);

export const UsersIcon = createIcon(
  "M8 17a4 4 0 1 1 8 0M5 19a7 7 0 0 1 14 0M12 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"
);

export const OrdersIcon = createIcon(
  "M5 6h14l-1 12H6L5 6zm3 0V4h8v2"
);

export const ProductsIcon = createIcon(
  "M4 7l8-4 8 4-8 4-8-4zm0 6l8 4 8-4"
);

export const SettingsIcon = createIcon(
  "M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM4 12h2m12 0h2m-9-8v2m0 12v2m-6.36-3.64l1.42-1.42m9.9-9.9l1.42-1.42m0 12.74-1.42-1.42m-9.9-9.9L6.64 5.64"
);

export const navItems: NavItem[] = [
  {
    label: "Overview",
    href: "/dashboard",
    description: "Key metrics and overall performance insights.",
    icon: OverviewIcon,
  },
  {
    label: "Users",
    href: "/dashboard/users",
    description: "Manage user accounts, invitations, and roles.",
    icon: UsersIcon,
  },
  {
    label: "Orders",
    href: "/dashboard/orders",
    description: "Track order statuses and fulfillment progress.",
    icon: OrdersIcon,
  },
  {
    label: "Products",
    href: "/dashboard/products",
    description: "Review catalog inventory and pricing details.",
    icon: ProductsIcon,
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    description: "Configure workspace preferences and automation.",
    icon: SettingsIcon,
  },
];
