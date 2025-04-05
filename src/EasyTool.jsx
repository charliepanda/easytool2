
import { useState, useEffect } from "react";
const Button = ({ onClick, disabled, className = '', children }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
  >
    {children}
  </button>
);
const Card = ({ className = '', children }) => (
  <div className={`rounded-xl shadow-md p-4 ${className}`}>{children}</div>
);
const CardContent = ({ className = '', children }) => (
  <div className={`space-y-2 ${className}`}>{children}</div>
);

// ... rest of the EasyTool component omitted for brevity (insert full code if needed)
