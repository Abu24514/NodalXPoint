export interface MegaMenuItem {
  title: string;
  description: string;
  href: string;
  icon: string;
  children?: MegaMenuItem[];
}

export interface NavItem {
  title: string;
  href: string;
  megaMenu?: MegaMenuItem[];
}