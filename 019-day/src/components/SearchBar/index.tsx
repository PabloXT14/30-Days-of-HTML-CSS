import * as S from "./styles";
import { FaSearch, FaSpinner } from 'react-icons/fa';
import { useState } from "react";

export function SearchBar() {
  const [isSearchLoading, setIsSearchLoading] = useState(false);

  function handleLoading() {
    setIsSearchLoading(true)
    setTimeout(() => {
      setIsSearchLoading(false);
    }, 1500);
  }

  return (
    <S.SearchContainer isLoading={isSearchLoading}>
      <input 
        type="text" 
        placeholder="Search..." 
        onKeyDown={(event) => { 
          if(event.key === 'Enter') handleLoading()
        }}
      />
      <button onClick={handleLoading}>
        <FaSearch />
      </button>
      <S.Spinner className="spinner">
        <FaSpinner />
      </S.Spinner>
    </S.SearchContainer>
  )
}