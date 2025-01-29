// DropdownContext.tsx
import React, { createContext, useState, useContext } from 'react';

interface DropdownContextType {
  openDropdown: string | null;
  setOpenDropdown: (id: string | null) => void;
}

const DropdownContext = createContext<DropdownContextType | undefined>(undefined);

export const DropdownProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <DropdownContext.Provider value={{ openDropdown, setOpenDropdown }}>
      {children}
    </DropdownContext.Provider>
  );
};

export const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (context === undefined) {
    throw new Error('useDropdown must be used within a DropdownProvider');
  }
  return context;
};
