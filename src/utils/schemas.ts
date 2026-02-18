export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AARVIFY TECH SERVICES PRIVATE LIMITED",
    "url": "https://aarvify.com",
    "logo": "https://aarvify.com/logo.png",
    "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": "info@aarvify.com"
    },
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot No. 190, Udyog Vihar, Phase 4",
        "addressLocality": "Gurugram",
        "addressRegion": "Haryana",
        "postalCode": "122016",
        "addressCountry": "IN"
    }
};

export const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "AARVIFY TECH SERVICES PRIVATE LIMITED",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot No. 190, Udyog Vihar, Phase 4",
        "addressLocality": "Gurugram",
        "addressRegion": "Haryana",
        "postalCode": "122016",
        "addressCountry": "IN"
    },
    "email": "info@aarvify.com",
    "openingHours": "Mo-Sa 09:00-18:00",
    "priceRange": "$$"
};

export const breadcrumbSchema = (items: { name: string, item: string }[]) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.item
    }))
});
