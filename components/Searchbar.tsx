"use client";

import { useState } from "react";
import SearchManufacturer from "./SearchManufacturer"

const Searchbar = () => {
  const [manufacturer, setManuFacturer] = useState("");
  const handleSearch = () => {}

  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchManufacturer
          manufacturer={manufacturer}
          setManuFacturer={setManuFacturer}
         />
      </div>
    </form>
  )
}

export default Searchbar