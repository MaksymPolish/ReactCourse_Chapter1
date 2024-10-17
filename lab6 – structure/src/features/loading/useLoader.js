import { useState } from "react";

const useLoader = () => {
    const [isLoading, setIsLoading] = useState(true);
    return {isLoading, setIsLoading}; 
};
  
export default useLoader;