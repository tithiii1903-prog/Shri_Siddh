export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Rooms", href: "/rooms" },
  { label: "Services", href: "/services" },
  { label: "Dining", href: "/dining" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const navLeft: NavItem[] = navItems.slice(0, 4);
export const navRight: NavItem[] = navItems.slice(4);
