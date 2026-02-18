import React from 'react';

interface Props {
    name: string;
    className?: string;
}

const PartnerIcon: React.FC<Props> = ({ name, className = "h-full w-auto" }) => {
    let imageSrc = '';
    // Normalize name: remove spaces, lowercase
    // Note: 'i-loan' becomes 'i-loan' if only spaces are removed.
    // 'I Loan' becomes 'iloan'.
    const normalizedName = name.toLowerCase().replace(/\s/g, '');

    switch (normalizedName) {
        case 'homecredit':
            imageSrc = '/partners/home-credit.png';
            break;
        case 'loantap':
            imageSrc = '/partners/loantap.png';
            break;
        case 'finnable':
            imageSrc = '/partners/finnable.png';
            break;
        case 'iloan':
        case 'i-loan':
            imageSrc = '/partners/i-loan.png';
            break;
        default:
            // Fallback or empty if not found
            return null;
    }

    return (
        <img
            src={imageSrc}
            alt={`${name} Logo`}
            className={`${className} object-contain`}
            loading="lazy"
            draggable={false}
        />
    );
};

export default PartnerIcon;
