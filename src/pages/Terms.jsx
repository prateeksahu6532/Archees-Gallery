import React from "react";
import SearchProductsGrid from "../search/SearchProductsGrid";
function Terms() {
  return (
    <div>
      <SearchProductsGrid category="toys" CardComponent={ToysCard} />
    </div>
  );
}

export default Terms;
