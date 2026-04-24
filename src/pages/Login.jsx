import React from "react";
import SearchProductsGrid from "../search/SearchProductsGrid";
function Login() {
  return (
    <section className="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-sm sm:p-10">
      <h1 className="text-3xl font-semibold text-slate-900">Login</h1>
      <p className="mt-4 text-slate-600">
        Sign in to manage your cart, save favorites, and checkout faster.
      </p>
      <SearchProductsGrid category="toys" CardComponent={ToysCard} />
    </section>
  );
}

export default Login;
