import { ImageSourcePropType } from 'react-native';

import { IMAGES } from '@constants/Colors';

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
  { name: 'Men’s Fashion', icon: '👔' },
  { name: 'Women’s Fashion', icon: '👗' },
  { name: 'Accessories', icon: '🧣' },
  { name: 'Electronics', icon: '💻' },
  { name: 'Furniture', icon: '🛋' },
  { name: 'Toys', icon: '🧸' },
  { name: 'Books', icon: '📚' },
  { name: 'Games', icon: '🎮' },
  { name: 'Arts', icon: '️️🖼' },
  { name: 'Beauty', icon: '💄' },
  { name: 'Sports', icon: '🏈' },
  { name: 'Pets', icon: '🦊' },
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
