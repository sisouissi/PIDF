
import React, { useState } from 'react';
import { SectionId, MenuItem } from '../types';
import { MENU_ITEMS } from '../constants';
import { ChevronRight, BookOpen, ExternalLink } from './icons';

interface SidebarProps {
  activeSection: SectionId;
  setActiveSection: (section: SectionId) => void;
  onOpenAbbreviations: () => void;
  onOpenReferences: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection, onOpenAbbreviations, onOpenReferences }) => {
  const findParent = (sectionId: SectionId) => MENU_ITEMS.find(item => item.subItems?.some(sub => sub.id === sectionId));

  const [openMenu, setOpenMenu] = useState<SectionId | null>(() => {
    const parent = findParent(activeSection);
    return parent ? parent.id : null;
  });

  const sidebarStyle = {
    background: 'radial-gradient(ellipse at center, rgba(81, 90, 90, 0.4) 0%, rgba(81, 90, 90, 0) 60%), linear-gradient(to bottom right, #5499c7, #1a5276)',
  };

  const handleMenuClick = (item: MenuItem) => {
    if (item.subItems && item.subItems.length > 0) {
      const isOpening = openMenu !== item.id;
      setOpenMenu(isOpening ? item.id : null);
      
      const parentOfActive = findParent(activeSection);
      if (isOpening && (!parentOfActive || parentOfActive.id !== item.id)) {
        setActiveSection(item.subItems[0].id);
      }
    } else {
      setActiveSection(item.id);
      // Close any open parent menu when a top-level item without children is clicked
      const parent = findParent(item.id);
      if (!parent) {
        setOpenMenu(null);
      }
    }
  };
  
  return (
    <div 
      className="w-96 text-white flex flex-col flex-shrink-0 rounded-2xl shadow-lg overflow-hidden"
      style={sidebarStyle}
    >
      <div className="p-4 border-b border-white/20 flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold leading-tight">Les PID Fibrosantes</h1>
          <p className="text-indigo-200 text-base mt-1">L'essentiel pour tout retenir !</p>
        </div>
      </div>
      
      <nav className="flex-1 p-2 space-y-0.5 overflow-y-auto no-scrollbar">
        {MENU_ITEMS.map((item) => {
          const IconComponent = item.icon;
          const isParentOfActive = item.subItems?.some(sub => sub.id === activeSection);
          const isMenuOpen = openMenu === item.id;
          const isActive = activeSection === item.id;

          return (
            <div key={item.id}>
              <button
                onClick={() => handleMenuClick(item)}
                className={`w-full text-left p-2.5 rounded-lg transition-all duration-200 flex items-center justify-between space-x-3 relative ${
                  (isActive && !item.subItems) || isParentOfActive
                    ? 'bg-white/20 font-semibold'
                    : 'text-indigo-100 hover:bg-white/10 hover:text-white'
                }`}
                aria-expanded={isMenuOpen}
              >
                <div className="flex items-center space-x-3">
                    {(isActive && !item.subItems) && <div className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-full"></div>}
                    <span className={`${(isActive && !item.subItems) || isParentOfActive || isMenuOpen ? 'text-white' : 'text-indigo-200'}`}>
                      <IconComponent className="w-6 h-6" />
                    </span>
                    <span className="text-base">{item.title}</span>
                </div>
                {item.subItems && (
                  <ChevronRight className={`w-5 h-5 transition-transform duration-200 ${isMenuOpen ? 'rotate-90' : ''}`} />
                )}
              </button>

              {item.subItems && isMenuOpen && (
                <div className="pl-6 mt-0.5 space-y-0.5 animate-fade-in-fast">
                  {item.subItems.map(subItem => {
                    const SubIcon = subItem.icon;
                    const isSubActive = activeSection === subItem.id;
                    return (
                      <button
                        key={subItem.id}
                        onClick={() => setActiveSection(subItem.id)}
                        className={`w-full text-left p-2 pl-4 rounded-lg transition-all duration-200 flex items-center space-x-3 relative ${
                          isSubActive
                            ? 'bg-white/20 font-semibold'
                            : 'text-indigo-100 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        {isSubActive && <div className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-full"></div>}
                        <span className={`${isSubActive ? 'text-white' : 'text-indigo-200'}`}>
                          <SubIcon className="w-5 h-5" />
                        </span>
                        <span className="text-sm">{subItem.title}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
      
      <div className="p-2 border-t border-white/20">
        <div>
              <button
                onClick={onOpenReferences}
                className="w-full text-left p-2.5 rounded-lg transition-all duration-200 flex items-center space-x-3 text-indigo-100 hover:bg-white/10 hover:text-white"
              >
                <ExternalLink className="w-6 h-6 text-indigo-200" />
                <span className="text-base">Références</span>
              </button>
        </div>
        <div>
              <button
                onClick={onOpenAbbreviations}
                className="w-full text-left p-2.5 rounded-lg transition-all duration-200 flex items-center space-x-3 text-indigo-100 hover:bg-white/10 hover:text-white"
              >
                <BookOpen className="w-6 h-6 text-indigo-200" />
                <span className="text-base">Abréviations</span>
              </button>
        </div>
      </div>
    </div>
  );
};
