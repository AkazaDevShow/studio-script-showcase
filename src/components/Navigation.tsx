import { Button } from '@/components/ui/button';

type Section = 'home' | 'work' | 'pricing' | 'contact';

interface NavigationProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  const navItems = [
    { id: 'home' as Section, label: 'Home' },
    { id: 'work' as Section, label: 'My Work' },
    { id: 'pricing' as Section, label: 'Pricing' },
    { id: 'contact' as Section, label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 card-surface border-b border-border/20 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gradient">
            Roblox Scripter
          </div>
          <div className="flex space-x-4">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? 'default' : 'ghost'}
                onClick={() => onSectionChange(item.id)}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
