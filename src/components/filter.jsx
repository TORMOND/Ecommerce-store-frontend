import React, { useState } from "react";
import items from "./items";

const SearchExample = () => {
  const [filterText, setFilterText] = useState("");

  const filteredItems = items.filter(
    item =>
      item.description.toLocaleLowerCase().includes(filterText) ||
      item.title.toLocaleLowerCase().includes(filterText)
  );

  const itemsToDisplay = filterText ? filteredItems : items;

  return (
    <div style={{ padding: "20px 50px" }}>
      <h1>Search Page</h1>
      <input
        type="text"
        placeholder="Filter items by keyword"
        value={filterText}
        onChange={e => setFilterText(e.target.value.toLocaleLowerCase())}
      />
      <hr />
      {!filteredItems.length && (
        <div>There are no items to display adjust your filter criteria</div>
      )}
      {itemsToDisplay.map(item => (
        <div key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchExample;
