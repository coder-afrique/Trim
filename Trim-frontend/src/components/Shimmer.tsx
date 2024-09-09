import React from 'react';

interface ShimmerProps {
  children: React.ReactNode;
  className?: string;
  shimmerWidth?: number;
}

const Shimmer: React.FC<ShimmerProps> = ({ 
  children, 
  className = '', 
  shimmerWidth = 100 
}) => {
  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{ 
        '--shimmer-width': `${shimmerWidth}px`,
        background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
        backgroundSize: '400% 100%'
      } as React.CSSProperties}
    >
      <div className="animate-shimmer absolute inset-0"></div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Shimmer;
