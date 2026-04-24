import React from "react";
import SearchProductsGrid from "../search/SearchProductsGrid";
function Privacy() {
  return (
    <div>
      <SearchProductsGrid category="toys" CardComponent={ToysCard} />
    </div>
  );
}

export default Privacy;
