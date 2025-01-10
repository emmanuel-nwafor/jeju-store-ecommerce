import React from "react";

const Skeleton = ({
  width = "w-full",
  height = "h-4",
  rounded = "rounded-md",
  additionalClasses = "",
}) => {
  return (
    <div
      className={`bg-gray-300 animate-pulse ${width} ${height} ${rounded} ${additionalClasses}`}
    ></div>
  );
};

export default Skeleton;
