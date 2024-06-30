import { ImageSourcePropType } from 'react-native';

import { COLORS, IMAGES } from '@constants/Colors';

import { ItemType, NotificationType, ProductType } from '@shared/types/generaltypes';

export const timeOptions = {
  hour: 'numeric' as const,
  minute: 'numeric' as const,
  hour12: true,
};

export const dateOptions = {
  year: 'numeric' as const,
  month: 'long' as const,
  day: 'numeric' as const,
};

export const CATEGORIES = [
  'All',
  'Electronics',
  'Computers',
  'Games',
  'Vehicles',
  'Property',
];
export const CATEGORIES2 = [
  {
    name: 'Men’s Fashion',
    icon: '👔',
    color: COLORS.light.colorOneLight2,
    textColor: COLORS.light.colorOne,
  },
  {
    name: 'Women’s Fashion',
    icon: '👗',
    color: COLORS.light.catPurpleLight,
    textColor: COLORS.light.catPurple,
  },
  {
    name: 'Accessories',
    icon: '🧣',
    color: COLORS.light.catBlueLight,
    textColor: COLORS.light.catBlue,
  },
  {
    name: 'Electronics',
    icon: '💻',
    color: COLORS.light.catYellowLight,
    textColor: COLORS.light.catYellow,
  },
  {
    name: 'Toys',
    icon: '🧸',
    color: COLORS.light.catPurpleLight,
    textColor: COLORS.light.catPurple,
  },
  {
    name: 'Furniture',
    icon: '🛋',
    color: COLORS.light.catBrownLight,
    textColor: COLORS.light.catBrown,
  },
  {
    name: 'Books',
    icon: '📚',
    color: COLORS.light.catYellowLight,
    textColor: COLORS.light.catYellow,
  },
  {
    name: 'Beauty',
    icon: '💄',
    color: COLORS.light.advertGreenLight,
    textColor: COLORS.light.price,
  },
  {
    name: 'Games',
    icon: '🎮',
    color: COLORS.light.catTBlueLight,
    textColor: COLORS.light.catTBlue,
  },
  {
    name: 'Arts',
    icon: '️️🖼',
    color: COLORS.light.colorOneLight2,
    textColor: COLORS.light.colorOne,
  },
  {
    name: 'Sports',
    icon: '🏈',
    color: COLORS.light.catBrownLight,
    textColor: COLORS.light.catBrown,
  },
  {
    name: 'Pets',
    icon: '🦊',
    color: COLORS.light.catBlueLight,
    textColor: COLORS.light.catBlue,
  },
];

export const TRENDINGSEARCHES = [
  { name: 'Accessories' },
  { name: 'Electronics' },
  { name: 'Furniture' },
  { name: 'Fashion' },
  { name: 'Kitchen Utensils' },
  { name: 'Health' },
];

export const PRODUCTS: ProductType[] = [
  {
    key: 1,
    category: "Men's Fashion",
    uri: IMAGES.SneakerSale,
    title: 'Adidas Shoes',
    price: 15.0,
    item: 100,
    rating: 3.6,
    ccy: '\u00A3',
    store: 'Zee Store',
    badgeText: 'New',
    favorite: true,
  },
  {
    key: 2,
    category: "Men's Fashion",
    uri: IMAGES.SneakerSale,
    title: 'Adidas Shoes',
    price: 15.0,
    item: 100,
    rating: 4.6,
    ccy: '\u00A3',
    store: 'Zee Store',
    badgeText: 'New',
    favorite: false,
  },
  {
    key: 3,
    category: "Men's Fashion",
    uri: IMAGES.SneakerSale,
    title: 'Adidas Shoes',
    price: 15.0,
    item: 100,
    rating: 4.6,
    ccy: '\u00A3',
    store: 'Zee Store',
    badgeText: 'New',
    favorite: true,
  },
  {
    key: 4,
    category: "Men's Fashion",
    uri: IMAGES.SneakerSale,
    title: 'Adidas Shoes',
    price: 15.0,
    item: 100,
    rating: 4.6,
    ccy: '\u00A3',
    store: 'Zee Store',
    badgeText: 'New',
    favorite: false,
  },
];

export const ITEMS: ItemType[] = [
  {
    key: 1,
    uri: IMAGES.ShoeFem,
    title: 'Fashion Nova',
    price: 100.0,
    ccy: '\u00A3',
    date: '10-April-2024',
    time: '7:30am',
    reference: 'ID-235424',
    deliveryStatus: 'Delivered',
  },
  {
    key: 2,
    uri: IMAGES.ShoeFem,
    title: 'Fashion Nova',
    price: 100.0,
    ccy: '\u00A3',
    date: '10-April-2024',
    time: '7:30am',
    reference: 'ID-235424',
    deliveryStatus: 'Pending',
  },
  {
    key: 3,
    uri: IMAGES.ShoeFem,
    title: 'Fashion Nova',
    price: 100.0,
    ccy: '\u00A3',
    date: '10-April-2024',
    time: '7:30am',
    reference: 'ID-235424',
    deliveryStatus: 'Delivered',
  },
  {
    key: 4,
    uri: IMAGES.ShoeFem,
    title: 'Fashion Nova',
    price: 100.0,
    ccy: '\u00A3',
    date: '10-April-2024',
    time: '7:30am',
    reference: 'ID-235424',
    deliveryStatus: 'Pending',
  },
  {
    key: 5,
    uri: IMAGES.ShoeFem,
    title: 'Fashion Nova',
    price: 100.0,
    ccy: '\u00A3',
    date: '10-April-2024',
    time: '7:30am',
    reference: 'ID-235424',
    deliveryStatus: 'Delivered',
  },
];

export const TestNotifications: NotificationType[] = [
  {
    key: 1,
    uri: IMAGES.ZeeStoreWorkspace,
    time: '2',
    store: 'Zee’s Store',
    desc: 'Payment complete for Adidas Shoe',
  },
  {
    key: 2,
    uri: IMAGES.ZeeStoreBag,
    time: '2',
    store: 'Zee’s Store',
    desc: 'Your order has is successfully placed',
  },
  {
    key: 3,
    uri: IMAGES.ZeeStoreShoe,
    time: '2',
    store: 'Zee’s Store',
    desc: 'Your order is successfully delivered',
  },
  {
    key: 4,
    uri: IMAGES.ZeeStoreDiningTable,
    time: '2',
    store: 'Zee’s Store',
    desc: 'Items from your wishlist are on sale',
  },
  {
    key: 5,
    uri: IMAGES.ZeeStoreF15,
    time: '2',
    store: 'Zee’s Store',
    desc: 'Exclusive deals just for you! Shop now!',
  },
  {
    key: 6,
    uri: IMAGES.ZeeStoreBlackFriday,
    time: '2',
    store: 'Zee’s Store',
    desc: 'Discover products tailored just for you',
  },
  {
    key: 7,
    uri: IMAGES.ZeeStoreAccountInfo,
    time: '2',
    store: 'Zee’s Store',
    desc: 'Account information has been updated',
  },
];
