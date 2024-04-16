import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

// Step 1: Create a context with an initial value
interface OriginContextType {
  origin: string;
  setOrigin: React.Dispatch<React.SetStateAction<string>>;
}

const OriginContext = createContext<OriginContextType | undefined>(undefined);

// Step 2: Create a state hook
const OriginProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [origin, setOrigin] = useState('');

  

  // localStorage.setItem('cachedData', origin);
  useEffect(() => {
    const getcachedData = localStorage.getItem('origin');
    getcachedData ? setOrigin(getcachedData) : setOrigin("hollywood");
    // const cachedData = localStorage.setItem('cachedData');
  }, []);
  
  useEffect(() => {
    // setOrigin('hollywood')
    // setOrigin(cachedData)
  }, [])

  // function handleStoreInCache (item) {
  //   setOrigin(item);
  // };

  return (
    // Step 3: Provide the context
    <OriginContext.Provider value={{ origin, setOrigin }}>
      {children}
    </OriginContext.Provider>
  );
};

// Custom hook to access origin context
const useOrigin = (): OriginContextType => {
  const context = useContext(OriginContext);
  if (context === undefined) {
    throw new Error('useOrigin must be used within a OriginProvider');
  }
  return context;
};


export { OriginProvider, useOrigin };
