export interface NavItem {
  label: string
  to: string
}

export const navItems: NavItem[] = [
  { label: 'Work', to: '/work' },
  { label: 'Experiments', to: '/experiments' },
  { label: 'Notes', to: '/notes' },
  { label: 'About', to: '/about' },
]
