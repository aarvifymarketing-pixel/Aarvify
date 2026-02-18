import React from 'react';

interface LogoProps {
    className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12 w-auto" }) => {
    return (
        <div className={`flex items-center select-none ${className}`}>
            <img
                src="/AARVIFY LOGO.png"
                alt="AARVIFY Logo"
                className="h-full w-auto object-contain"
                draggable={false}
            />
        </div>
    );
};

export default Logo;
