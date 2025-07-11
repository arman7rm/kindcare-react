import React from "react";
import kindCareLogo from "../assets/kindcare.png";
interface MobileMenuBtnProps {
  onToggle: () => void;
  isExpanded: boolean;
  buttonRef: React.RefObject<HTMLButtonElement | null>; 
}

const MobileMenuBtn: React.FC<MobileMenuBtnProps> = ({
  onToggle,
  isExpanded,
  buttonRef,
}) => {
  return (
    <div className="grid grid-cols-3 bg-white p-4 lg:hidden">
      <div className="col-start-1"></div>

      <div className="col-start-2 flex items-center justify-center">
        <img
          src={kindCareLogo}
          alt="KindCare Wellness Logo"
          className="h-30 max-w-full"
        />
      </div>

      <div className="col-start-3 flex items-center justify-end">
        <button
          ref={buttonRef}
          onClick={() => {
            console.log("menu button clicked");
            onToggle();
          }}
          className="p-2 text-2xl text-[var(--primary)]"
          aria-label={isExpanded ? "Close menu" : "Menu"}
          aria-expanded={isExpanded}
          aria-controls="mobile-menu"
        >
          <span
            className={`mobile-menu-btn fas ${isExpanded ? "fa-times" : "fa-bars"}`}
            aria-hidden="true"
          ></span>
        </button>
      </div>
    </div>
  );
};

export default MobileMenuBtn;
