
import React, { useState } from 'react'


export const StoreContext = React.createContext(null);

export default ({ children }) => {
    // các em đã vào nhà kho
    const [category, setCategory] = useState(null)
    const [movie, setMovie] = useState(null);
    const [currentGenres, setCurrentGenres] = useState("");
    const [currentPage,setCurrentPage]=useState(1);
    const [totalPage,setToTalPage]=useState(null);
  



    const store = {
        movie: [movie, setMovie],
        category: [category, setCategory],
        page:[currentPage,setCurrentPage],
        totalPage:[totalPage,setToTalPage],
        currentGenres:[currentGenres,setCurrentGenres]
        
    };

    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
};