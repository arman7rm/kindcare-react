import React from "react";

interface MobileMenuBtnProps {
  onToggle: () => void;
  isExpanded: boolean;
}

const MobileMenuBtn: React.FC<MobileMenuBtnProps> = ({
  onToggle,
  isExpanded,
}) => {
  return (
    <div className="grid grid-cols-3 bg-white p-4 lg:hidden">
      <div className="col-start-1"></div>

      <div className="col-start-2 flex items-center justify-center">
        <img
          src="../assets/kindcare.png"
          alt="KindCare Wellness Logo"
          className="h-30 max-w-full"
        />
      </div>

      <div className="col-start-3 flex items-center justify-end">
        <button
          onClick={onToggle}
          className="p-2 text-2xl text-[var(--primary)]"
          aria-label={isExpanded ? "Close menu" : "Menu"}
          aria-expanded={isExpanded}
          aria-controls="mobile-menu"
        >
          <span
            className="mobile-menu-btn fas fa-bars"
            aria-hidden="true"
          ></span>
        </button>
      </div>
    </div>
  );
};

export default MobileMenuBtn;
