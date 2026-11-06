
export interface RiceSpecs {
    length: string;
    moisture: string;
    broken: string;
    purity: string;
    milling: string;
    cropYear?: string;
}

export interface RiceVariety {
    id: string;
    name: string;
    series: string;
    category: "Basmati Rice Varieties" | "Non-Basmati Rice Variants";
    desc: string;
    image: string;
    tag: string;
    price?: string;
    specs: RiceSpecs;
}

export const riceVarieties: RiceVariety[] = [
    // Basmati - 1121 Series
    {
        id: "1121-white-sella",
        name: "1121 White Sella Basmati Rice",
        series: "1121 Series",
        category: "Basmati Rice Varieties",
        desc: "Premium extra long grain 1121 Basmati, processed as White Sella (Creamy Sella). Known for its length and excellent cooking qualities.",
        image: "/rice/1121_white_sella.png",
        tag: "Premium Basmati",
        price: "$818 / MT",
        specs: {
            length: "8.35 mm",
            moisture: "12.5% Max",
            broken: "1% Max",
            purity: "95%",
            milling: "Well Milled & Sortex Cleaned"
        }
    },
    {
        id: "1121-golden-sella",
        name: "1121 Golden Sella Basmati Rice",
        series: "1121 Series",
        category: "Basmati Rice Varieties",
        desc: "Golden parboiled 1121 Basmati rice, distinct for its golden color and non-sticky texture after cooking.",
        image: "/rice/1121_golden_sella.png",
        tag: "Golden Sella",
        price: "$955 / MT",
        specs: {
            length: "8.30 mm",
            moisture: "13% Max",
            broken: "1% Max",
            purity: "95%",
            milling: "Sortex Cleaned"
        }
    },
    {
        id: "1121-steam",
        name: "1121 Steam Basmati Rice",
        series: "1121 Series",
        category: "Basmati Rice Varieties",
        desc: "Steamed 1121 Basmati rice, retaining the natural aroma and purity of the grain.",
        image: "/rice/1121_steam.png",
        tag: "Steamed",
        price: "$966 / MT",
        specs: {
            length: "8.35 mm",
            moisture: "12.5% Max",
            broken: "1% Max",
            purity: "95%",
            milling: "Well Milled & Silky Polish"
        }
    },

    // Basmati - 1401 Series
    {
        id: "1401-raw",
        name: "1401 Raw Basmati Rice",
        series: "1401 Series",
        category: "Basmati Rice Varieties",
        desc: "Traditional aromatic 1401 Raw Basmati, offering an authentic taste and superior fragrance.",
        image: "/rice/1401_raw.png",
        tag: "Raw Basmati",
        price: "$920 / MT",
        specs: {
            length: "7.70 mm",
            moisture: "13% Max",
            broken: "1% Max",
            purity: "95%",
            milling: "Well Milled"
        }
    },
    {
        id: "1401-steam",
        name: "1401 Steam Basmati Rice",
        series: "1401 Series",
        category: "Basmati Rice Varieties",
        desc: "Steamed 1401 Basmati rice with enhanced durability and distinct aroma.",
        image: "/rice/1401_steam.png",
        tag: "Steamed",
        price: "$910 / MT",
        specs: {
            length: "7.75 mm",
            moisture: "13% Max",
            broken: "1% Max",
            purity: "95%",
            milling: "Silky Sortex"
        }
    },

    // Basmati - 1509 Series
    {
        id: "1509-white-sella",
        name: "1509 White Sella Basmati Rice",
        series: "1509 Series",
        category: "Basmati Rice Varieties",
        desc: "Fine grain 1509 Basmati, White Sella processed for a smooth texture and uniform cooking.",
        image: "/rice/1509_white_sella.png",
        tag: "White Sella",
        price: "$773 / MT",
        specs: {
            length: "8.40 mm",
            moisture: "12.5% Max",
            broken: "1% Max",
            purity: "95%",
            milling: "Sortex Cleaned"
        }
    },
    {
        id: "1509-golden-sella",
        name: "1509 Golden Sella Basmati Rice",
        series: "1509 Series",
        category: "Basmati Rice Varieties",
        desc: "Golden Sella 1509 Basmati rice, capable of long holding times after cooking.",
        image: "/rice/1509_golden_sella.png",
        tag: "Golden Sella",
        price: "$790 / MT",
        specs: {
            length: "8.35 mm",
            moisture: "13% Max",
            broken: "1% Max",
            purity: "95%",
            milling: "Sortex Cleaned"
        }
    },
    {
        id: "1509-steam",
        name: "1509 Steam Basmati Rice",
        series: "1509 Series",
        category: "Basmati Rice Varieties",
        desc: "High yielding 1509 Steam Basmati, offering great value and quality.",
        image: "/rice/1509_steam.png",
        tag: "Steamed",
        price: "$780 / MT",
        specs: {
            length: "8.40 mm",
            moisture: "12.5% Max",
            broken: "1% Max",
            purity: "95%",
            milling: "Well Milled"
        }
    },

    // Other Specialized
    {
        id: "pusa-creamy-sella",
        name: "Pusa Creamy Sella Basmati Rice",
        series: "Other Specialized Varieties",
        category: "Basmati Rice Varieties",
        desc: "Pusa variety processed as Creamy Sella, known for its elongation and taste.",
        image: "/rice/pusa_creamy_sella.png",
        tag: "Pusa Basmati",
        price: "$852 / MT",
        specs: {
            length: "7.50 mm",
            moisture: "13% Max",
            broken: "1% Max",
            purity: "95%",
            milling: "Sortex Cleaned"
        }
    },
    {
        id: "sarbati-creamy-sella",
        name: "Sarbati Creamy Sella Basmati Rice",
        series: "Other Specialized Varieties",
        category: "Basmati Rice Varieties",
        desc: "Sarbati variety, excellent daily consumption rice with creamy sella processing.",
        image: "/rice/sarbati_creamy_sella.png",
        tag: "Sarbati",
        price: "$670 / MT",
        specs: {
            length: "6.90 mm",
            moisture: "13% Max",
            broken: "1% Max",
            purity: "95%",
            milling: "Well Milled"
        }
    },
    {
        id: "sarbati-golden-sella",
        name: "Sarbati Golden Sella Basmati Rice",
        series: "Other Specialized Varieties",
        category: "Basmati Rice Varieties",
        desc: "Golden parboiled Sarbati rice, robust and non-sticky.",
        image: "/rice/sarbati_golden_sella.png",
        tag: "Sarbati",
        price: "$690 / MT",
        specs: {
            length: "6.85 mm",
            moisture: "13% Max",
            broken: "1% Max",
            purity: "95%",
            milling: "Sortex Cleaned"
        }
    },
    {
        id: "sharbati-steam",
        name: "Sharbati Steam Basmati Rice",
        series: "Other Specialized Varieties",
        category: "Basmati Rice Varieties",
        desc: "Steamed Sharbati grains, economical yet aromatic.",
        image: "/rice/sharbati_steam.png",
        tag: "Sharbati",
        price: "$670 / MT",
        specs: {
            length: "6.90 mm",
            moisture: "13% Max",
            broken: "1% Max",
            purity: "95%",
            milling: "Silky Polish"
        }
    },
    {
        id: "sugandha-white-sella",
        name: "Sugandha White Sella Basmati Rice",
        series: "Other Specialized Varieties",
        category: "Basmati Rice Varieties",
        desc: "Sugandha variety, often called the 'scented' rice, in White Sella form.",
        image: "/rice/sugandha_white_sella.png",
        tag: "Sugandha",
        price: "$830 / MT",
        specs: {
            length: "7.80 mm",
            moisture: "13% Max",
            broken: "1% Max",
            purity: "95%",
            milling: "Sortex Cleaned"
        }
    },
    {
        id: "sugandha-golden-sella",
        name: "Sugandha Golden Sella Basmati Rice",
        series: "Other Specialized Varieties",
        category: "Basmati Rice Varieties",
        desc: "Golden Sella Sugandha rice with excellent aroma and length.",
        image: "/rice/sugandha_golden_sella.png",
        tag: "Sugandha",
        price: "$850 / MT",
        specs: {
            length: "7.75 mm",
            moisture: "13% Max",
            broken: "1% Max",
            purity: "95%",
            milling: "Sortex Cleaned"
        }
    },
    {
        id: "sugandha-steam",
        name: "Sugandha Steam Basmati Rice",
        series: "Other Specialized Varieties",
        category: "Basmati Rice Varieties",
        desc: "Steamed Sugandha rice, perfect for biryanis and pulao.",
        image: "/rice/sugandha_steam.png",
        tag: "Sugandha",
        price: "$830 / MT",
        specs: {
            length: "7.85 mm",
            moisture: "13% Max",
            broken: "1% Max",
            purity: "95%",
            milling: "Silky Polish"
        }
    },
    {
        id: "traditional-creamy-sella",
        name: "Traditional Creamy Sella Basmati Rice",
        series: "Other Specialized Varieties",
        category: "Basmati Rice Varieties",
        desc: "The classic authentic Basmati, processed as Creamy Sella.",
        image: "/rice/traditional_creamy_sella.png",
        tag: "Traditional",
        price: "$1,125 / MT",
        specs: {
            length: "7.40 mm",
            moisture: "13% Max",
            broken: "1% Max",
            purity: "95%",
            milling: "Well Milled"
        }
    },
    {
        id: "traditional-raw",
        name: "Traditional Raw Basmati Rice",
        series: "Other Specialized Varieties",
        category: "Basmati Rice Varieties",
        desc: "Original raw Basmati rice, aged to perfection for the best aroma.",
        image: "/rice/traditional_raw.png",
        tag: "Traditional",
        price: "$1,182 / MT",
        specs: {
            length: "7.45 mm",
            moisture: "13.5% Max",
            broken: "1% Max",
            purity: "95%",
            milling: "Double Polished"
        }
    },

    // Non-Basmati - Broken
    {
        id: "100-broken-parboiled",
        name: "100% Broken Parboiled Rice",
        series: "Broken Rice",
        category: "Non-Basmati Rice Variants",
        desc: "High quality parboiled broken rice, ideal for various food processing needs.",
        image: "/rice/broken_parboiled.png",
        tag: "Broken",
        price: "$350 / MT",
        specs: {
            length: "N/A",
            moisture: "14% Max",
            broken: "100%",
            purity: "96%",
            milling: "Sortex Cleaned"
        }
    },
    {
        id: "100-broken-raw",
        name: "100% Broken Raw Rice",
        series: "Broken Rice",
        category: "Non-Basmati Rice Variants",
        desc: "Raw broken rice, widely used in batters and flour making.",
        image: "/rice/broken_raw.png",
        tag: "Broken",
        price: "$340 / MT",
        specs: {
            length: "N/A",
            moisture: "14% Max",
            broken: "100%",
            purity: "96%",
            milling: "Sortex Cleaned"
        }
    },

    // Non-Basmati - IR 64
    {
        id: "ir64-parboiled",
        name: "IR 64 Parboiled Rice",
        series: "IR 64 Series",
        category: "Non-Basmati Rice Variants",
        desc: "Long grain non-basmati parboiled rice, popular for daily cooking.",
        image: "/rice/ir64_parboiled.png",
        tag: "IR 64",
        price: "$398 / MT",
        specs: {
            length: "6.00 mm",
            moisture: "14% Max",
            broken: "5% Max",
            purity: "95%",
            milling: "Sortex Cleaned"
        }
    },
    {
        id: "ir64-raw",
        name: "IR 64 Raw Rice",
        series: "IR 64 Series",
        category: "Non-Basmati Rice Variants",
        desc: "Raw long grain IR 64 rice, versatile and cost-effective.",
        image: "/rice/ir64_raw.png",
        tag: "IR 64",
        price: "$385 / MT",
        specs: {
            length: "6.00 mm",
            moisture: "14% Max",
            broken: "5% Max",
            purity: "95%",
            milling: "Double Polished"
        }
    },

    // Non-Basmati - PR 11/14
    {
        id: "pr11-14-creamy-sella",
        name: "PR 11/14 Creamy Sella",
        series: "PR 11/14 Series",
        category: "Non-Basmati Rice Variants",
        desc: "PR 11/14 variety processed as Creamy Sella (White Sella), offering good length.",
        image: "/rice/pr11_creamy_sella.png",
        tag: "PR 11/14",
        price: "$557 / MT",
        specs: {
            length: "6.80 mm",
            moisture: "13% Max",
            broken: "2% Max",
            purity: "95%",
            milling: "Sortex Cleaned"
        }
    },
    {
        id: "pr11-14-golden-sella",
        name: "PR 11/14 Golden Sella",
        series: "PR 11/14 Series",
        category: "Non-Basmati Rice Variants",
        desc: "Golden Sella PR 11/14 rice, non-sticky and durable.",
        image: "/rice/pr11_golden_sella.png",
        tag: "PR 11/14",
        price: "$570 / MT",
        specs: {
            length: "6.75 mm",
            moisture: "13% Max",
            broken: "2% Max",
            purity: "95%",
            milling: "Sortex Cleaned"
        }
    },
    {
        id: "pr11-14-steam",
        name: "PR 11/14 Steam Rice",
        series: "PR 11/14 Series",
        category: "Non-Basmati Rice Variants",
        desc: "Steamed PR 11/14 rice, a popular non-basmati long grain option.",
        image: "/rice/pr11_steam.png",
        tag: "PR 11/14",
        price: "$550 / MT",
        specs: {
            length: "6.80 mm",
            moisture: "13% Max",
            broken: "2% Max",
            purity: "95%",
            milling: "Silky Polish"
        }
    },

    // Non-Basmati - Sona Masoori
    {
        id: "sona-masoori-parboiled",
        name: "Sona Masoori Parboiled Rice",
        series: "Sona Masoori Series",
        category: "Non-Basmati Rice Variants",
        desc: "Lightweight, medium-grain parboiled rice known for its digestive qualities.",
        image: "/rice/sona_masoori_parboiled.png",
        tag: "Sona Masoori",
        price: "$511 / MT",
        specs: {
            length: "5.10 mm",
            moisture: "13.5% Max",
            broken: "5% Max",
            purity: "97%",
            milling: "Sortex Cleaned"
        }
    },
    {
        id: "sona-masoori-raw",
        name: "Sona Masoori Raw Rice",
        series: "Sona Masoori Series",
        category: "Non-Basmati Rice Variants",
        desc: "Raw Sona Masoori rice, aromatic and light, a staple in South India.",
        image: "/rice/sona_masoori_raw.png",
        tag: "Sona Masoori",
        price: "$520 / MT",
        specs: {
            length: "5.15 mm",
            moisture: "13.5% Max",
            broken: "5% Max",
            purity: "97%",
            milling: "Silky Polish"
        }
    },
    {
        id: "sona-masoori-steam",
        name: "Sona Masoori Steam Rice",
        series: "Sona Masoori Series",
        category: "Non-Basmati Rice Variants",
        desc: "Steamed version of the popular Sona Masoori, retaining lightness.",
        image: "/rice/sona_masoori_steam.png",
        tag: "Sona Masoori",
        price: "$511 / MT",
        specs: {
            length: "5.20 mm",
            moisture: "13% Max",
            broken: "5% Max",
            purity: "97%",
            milling: "Well Milled"
        }
    },

    // Non-Basmati - Swarna
    {
        id: "swarna-parboiled",
        name: "Swarna Parboiled Rice",
        series: "Swarna Series",
        category: "Non-Basmati Rice Variants",
        desc: "Short grain parboiled Swarna rice, widely consumed and economical.",
        image: "/rice/swarna_parboiled.png",
        tag: "Swarna",
        price: "$395 / MT",
        specs: {
            length: "5.00 mm",
            moisture: "14% Max",
            broken: "5% Max",
            purity: "95%",
            milling: "Sortex Cleaned"
        }
    },
    {
        id: "swarna-raw",
        name: "Swarna Raw Rice",
        series: "Swarna Series",
        category: "Non-Basmati Rice Variants",
        desc: "Raw Swarna rice, perfect for traditional daily meals.",
        image: "/rice/swarna_raw.png",
        tag: "Swarna",
        price: "$386 / MT",
        specs: {
            length: "5.00 mm",
            moisture: "14% Max",
            broken: "5% Max",
            purity: "95%",
            milling: "Double Polished"
        }
    }
];
