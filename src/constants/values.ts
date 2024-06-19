import {ProductType} from "@shared/types/generaltypes";
import {IMAGES} from "@constants/Colors";

export const timeOptions = {
    hour: "numeric" as const,
    minute: "numeric" as const,
    hour12: true,
};

export const dateOptions = {
    year: "numeric" as const,
    month: "long" as const,
    day: "numeric" as const,
};

export const CATEGORIES = [
    "All",
    "Electronics",
    "Computers",
    "Games",
    "Vehicles",
    "Property",
];
export const CATEGORIES2 = [
    {name: "Men’s Fashion", icon: "👔"},
    {name: "Women’s Fashion", icon: "👗"},
    {name: "Accessories", icon: "🧣"},
    {name: "Electronics", icon: "💻"},
    {name: "Furniture", icon: "🛋"},
    {name: "Toys", icon: "🧸"},
    {name: "Books", icon: "📚"},
    {name: "Games", icon: "🎮"},
    {name: "Arts", icon: "️️🖼"},
    {name: "Beauty", icon: "💄"},
    {name: "Sports", icon: "🏈"},
    {name: "Pets", icon: "🦊"},
];


export const PRODUCTS: ProductType[] = [
    {
        key: 1,
        category: "Men's Fashion",
        uri: IMAGES.SneakerSale,
        title: "Adidas Shoes",
        price: 15.00,
        item: 100,
        rating: 3.6,
        ccy: "\u00A3",
        store: "Zee Store",
        badgeText: "New",
        favorite: true
    },
    {
        key: 2,
        category: "Men's Fashion",
        uri: IMAGES.SneakerSale,
        title: "Adidas Shoes",
        price: 15.00,
        item: 100,
        rating: 4.6,
        ccy: "\u00A3",
        store: "Zee Store",
        badgeText: "New",
        favorite: false
    },
    {
        key: 3,
        category: "Men's Fashion",
        uri: IMAGES.SneakerSale,
        title: "Adidas Shoes",
        price: 15.00,
        item: 100,
        rating: 4.6,
        ccy: "\u00A3",
        store: "Zee Store",
        badgeText: "New",
        favorite: true
    },
    {
        key: 4,
        category: "Men's Fashion",
        uri: IMAGES.SneakerSale,
        title: "Adidas Shoes",
        price: 15.00,
        item: 100,
        rating: 4.6,
        ccy: "\u00A3",
        store: "Zee Store",
        badgeText: "New",
        favorite: false
    },
];
