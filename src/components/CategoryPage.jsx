import React from "react";

const CategoryPage = ({ name }) => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{name}</h1>
      <p className="mt-2">Welcome to the {name} category page!</p>
    </div>
  );
};

export default CategoryPage;
