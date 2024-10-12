import agriculture from "@/public/assets/categories/agriculture.svg";
import animal from "@/public/assets/categories/animal.svg";
import business from "@/public/assets/categories/business.svg";
import education from "@/public/assets/categories/education.svg";
import electronic from "@/public/assets/categories/electronic.svg";
import essential from "@/public/assets/categories/essential.svg";
import fashion from "@/public/assets/categories/fashion.svg";
import garden from "@/public/assets/categories/garden.svg";
import jobs from "@/public/assets/categories/jobs.svg";
import other from "@/public/assets/categories/other.svg";
import property from "@/public/assets/categories/property.svg";
import sports from "@/public/assets/categories/sports.svg";
import vehicle from "@/public/assets/categories/vehicle.svg";
import work from "@/public/assets/categories/work.svg";
import service from "@/public/assets/categories/service.svg";
import { Category } from "@/types";
import fb from "@/public/assets/socials/fb.svg";
import tik from "@/public/assets/socials/tik.svg";
import x from "@/public/assets/socials/x.svg";
import yt from "@/public/assets/socials/yt.svg";

export const categories: Category[] = [
  {
    id: 1,
    name: "Electronics",
    ads: 100,
    image: electronic,
  },
  {
    id: 2,
    name: "Properties",
    ads: 200,
    image: property,
  },
  {
    id: 3,
    name: "Vehicles",
    ads: 300,
    image: vehicle,
  },
  {
    id: 4,
    name: "Home & Garden",
    ads: 400,
    image: garden,
  },

  {
    id: 5,
    name: "Services",
    ads: 500,
    image: service,
  },
  {
    id: 6,
    name: "Business & Industry",
    ads: 600,
    image: business,
  },
  {
    id: 7,
    name: "Jobs",
    ads: 700,
    image: jobs,
  },
  {
    id: 8,
    name: "Hobby,Sport & Kids",
    ads: 800,
    image: sports,
  },
  {
    id: 9,
    name: "Animals",
    ads: 900,
    image: animal,
  },
  {
    id: 10,
    name: "Fashion & Beauty",
    ads: 1000,
    image: fashion,
  },
  {
    id: 11,
    name: "Education",
    ads: 1100,
    image: education,
  },
  {
    id: 12,
    name: "Other",
    ads: 1200,
    image: other,
  },
  {
    id: 13,
    name: "Essential",
    ads: 1300,
    image: essential,
  },
  {
    id: 12,
    name: "Agriculture",
    ads: 1400,
    image: agriculture,
  },
  {
    id: 13,
    name: "Work Overseas",
    ads: 1500,
    image: work,
  },
];

export const quickLinks = [
  {
    id: 1,
    ads: "144,441 ads in Electronics",
    list: [
      "Mobile Phones",
      "Cameras & Camcorders",
      "Computers & Tablets",
      "TVs",
      "Air Conditions & Electrical fittings",
    ],
  },
  {
    id: 2,
    ads: "71,801 ads in Property",
    list: [
      "Land",
      "Houses For Sale",
      "House Rentals",
      "Apartments For Sale",
      "Apartment Rentals",
    ],
  },
  {
    id: 3,
    ads: "14,441 ads in Jobs",
    list: [
      "Data Entry Operator",
      "Driver",
      "Packing Officer",
      "Clerk",
      "Sales Executive",
    ],
  },
  {
    id: 4,
    ads: "65,384 ads in Vehicles",
    list: [
      "Cars",
      "Motorbikes",
      "Three Wheelers",
      "Auto Parts & Accessories",
      "Auto Services",
    ],
  },
];

export const footerLinks = [
  {
    id: 1,
    title: "More from ikman",
    list: ["Sell Fast", "Memership", "Banner Ads", "Boost Ad"],
  },
  {
    id: 2,
    title: "Help & Support",
    list: ["FAQ", "Stay Safe", "Contact Us"],
  },
  {
    id: 3,
    title: "About ikman",
    list: [
      "About Us",
      "Careers",
      "Terms & Conditions",
      "Privacy Policy",
      "Sitemap",
    ],
  },
  {
    id: 4,
    title: "Blogs & Guides",
    list: ["CarGuide", "BikeGuide", "PropertyGuide", "Official Blog"],
    socials: [
      {
        id: 1,
        image: fb,
        name: "facebook",
        link: "https://www.facebook.com/",
      },
      {
        id: 2,
        image: x,
        name: "x",
        link: "https://www.x.com/",
      },
      {
        id: 3,
        image: tik,
        name: "tiktok",
        link: "https://www.tiktok.com/",
      },
      {
        id: 2,
        image: yt,
        name: "youtube",
        link: "https://www.youtube.com/",
      },
    ],
  },
];
