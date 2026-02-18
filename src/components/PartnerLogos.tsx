import PartnerIcon from './PartnerIcon';

const PartnerLogos = () => {
    // Financial Consulting removed as per user request
    const partnerNames = ['Home Credit', 'LoanTap', 'Finnable', 'i-Loan'];

    return (
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 px-4">
            {partnerNames.map((name) => (
                <div key={name} className="h-16 md:h-24 flex items-center justify-center transition-all hover:scale-110 duration-300 filter grayscale hover:grayscale-0 opacity-80 hover:opacity-100 cursor-pointer">
                    <PartnerIcon name={name} className="h-full w-auto object-contain" />
                </div>
            ))}
        </div>
    );
};

export default PartnerLogos;
