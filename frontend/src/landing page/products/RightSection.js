import React from "react";
function RightSection() {
  return (
    <div className="text-center">
      <img
        src="/media/images/images/homeHero.png"
        alt="products"
        style={{ width: "100%" }}
      />

      <div className="d-flex justify-content-center gap-3 mt-3">
        <img
          src="/media/images/images/googlePlayBadge.svg"
          alt="google play"
          style={{ width: "25%" }}
        />
        <img
          src="/media/images/images/appstoreBadge.svg"
          alt="app store"
          style={{ width: "25%" }}
        />
      </div>
    </div>
  );
}
export default RightSection;
