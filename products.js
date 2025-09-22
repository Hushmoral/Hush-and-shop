const PRODUCTS = [
  {
    "id": 1,
    "name": "Wireless Bluetooth Headphones",
    "category": "Electronics",
    "price": 286.19,
    "image": "images/electronics/electronics_1.jpg",
    "description": "High-quality Wireless Bluetooth Headphones perfect for electronics.",
    "stock": 68,
    "on_sale": true,
    "orig_price": 129.0,
    "sale_price": 96.75
  },
  {
    "id": 2,
    "name": "Bluetooth Speaker",
    "category": "Electronics",
    "price": 231.92,
    "image": "images/electronics/electronics_2.jpg",
    "description": "High-quality Bluetooth Speaker perfect for electronics.",
    "stock": 63
  },
  {
    "id": 3,
    "name": "Smartphone Stand",
    "category": "Electronics",
    "price": 391.47,
    "image": "images/electronics/electronics_3.jpg",
    "description": "High-quality Smartphone Stand perfect for electronics.",
    "stock": 102
  },
  {
    "id": 4,
    "name": "4K UHD Monitor",
    "category": "Electronics",
    "price": 217.27,
    "image": "images/electronics/electronics_4.jpg",
    "description": "High-quality 4K UHD Monitor perfect for electronics.",
    "stock": 35
  },
  {
    "id": 5,
    "name": "Gaming Mouse Pro",
    "category": "Electronics",
    "price": 365.04,
    "image": "images/electronics/electronics_5.jpg",
    "description": "High-quality Gaming Mouse Pro perfect for electronics.",
    "stock": 33
  },
  {
    "id": 6,
    "name": "Mechanical Keyboard",
    "category": "Electronics",
    "price": 372.31,
    "image": "images/electronics/electronics_6.jpg",
    "description": "High-quality Mechanical Keyboard perfect for electronics.",
    "stock": 115
  },
  {
    "id": 7,
    "name": "Portable Power Bank",
    "category": "Electronics",
    "price": 172.1,
    "image": "images/electronics/electronics_7.jpg",
    "description": "High-quality Portable Power Bank perfect for electronics.",
    "stock": 62
  },
  {
    "id": 8,
    "name": "Action Camera",
    "category": "Electronics",
    "price": 382.58,
    "image": "images/electronics/electronics_8.jpg",
    "description": "High-quality Action Camera perfect for electronics.",
    "stock": 54
  },
  {
    "id": 9,
    "name": "Compact Drone",
    "category": "Electronics",
    "price": 358.38,
    "image": "images/electronics/electronics_9.jpg",
    "description": "High-quality Compact Drone perfect for electronics.",
    "stock": 20
  },
  {
    "id": 10,
    "name": "VR Headset",
    "category": "Electronics",
    "price": 252.56,
    "image": "images/electronics/electronics_10.jpg",
    "description": "High-quality VR Headset perfect for electronics.",
    "stock": 22
  },
  {
    "id": 11,
    "name": "Smartwatch Series 3",
    "category": "Electronics",
    "price": 352.63,
    "image": "images/electronics/electronics_11.jpg",
    "description": "High-quality Smartwatch Series 3 perfect for electronics.",
    "stock": 89
  },
  {
    "id": 12,
    "name": "Noise-Canceling Earbuds",
    "category": "Electronics",
    "price": 66.91,
    "image": "images/electronics/electronics_12.jpg",
    "description": "High-quality Noise-Canceling Earbuds perfect for electronics.",
    "stock": 22
  },
  {
    "id": 13,
    "name": "External SSD 1TB",
    "category": "Electronics",
    "price": 400.24,
    "image": "images/electronics/electronics_13.jpg",
    "description": "High-quality External SSD 1TB perfect for electronics.",
    "stock": 13
  },
  {
    "id": 14,
    "name": "USB-C Multiport Hub",
    "category": "Electronics",
    "price": 25.18,
    "image": "images/electronics/electronics_14.jpg",
    "description": "High-quality USB-C Multiport Hub perfect for electronics.",
    "stock": 50
  },
  {
    "id": 15,
    "name": "Mesh WiFi Router",
    "category": "Electronics",
    "price": 347.28,
    "image": "images/electronics/electronics_15.jpg",
    "description": "High-quality Mesh WiFi Router perfect for electronics.",
    "stock": 63
  },
  {
    "id": 16,
    "name": "Classic Denim Jacket",
    "category": "Fashion & Apparel",
    "price": 133.25,
    "image": "images/fashion/fashion_1.jpg",
    "description": "High-quality Classic Denim Jacket perfect for fashion & apparel.",
    "stock": 47,
    "on_sale": true,
    "orig_price": 89.0,
    "sale_price": 62.3
  },
  {
    "id": 17,
    "name": "Leather Sneakers",
    "category": "Fashion & Apparel",
    "price": 14.99,
    "image": "images/fashion/fashion_2.jpg",
    "description": "High-quality Leather Sneakers perfect for fashion & apparel.",
    "stock": 75
  },
  {
    "id": 18,
    "name": "Slim Fit Chinos",
    "category": "Fashion & Apparel",
    "price": 24.89,
    "image": "images/fashion/fashion_3.jpg",
    "description": "High-quality Slim Fit Chinos perfect for fashion & apparel.",
    "stock": 117
  },
  {
    "id": 19,
    "name": "Casual Hoodie",
    "category": "Fashion & Apparel",
    "price": 108.15,
    "image": "images/fashion/fashion_4.jpg",
    "description": "High-quality Casual Hoodie perfect for fashion & apparel.",
    "stock": 16
  },
  {
    "id": 20,
    "name": "Summer Maxi Dress",
    "category": "Fashion & Apparel",
    "price": 186.28,
    "image": "images/fashion/fashion_5.jpg",
    "description": "High-quality Summer Maxi Dress perfect for fashion & apparel.",
    "stock": 114
  },
  {
    "id": 21,
    "name": "Wool Scarf",
    "category": "Fashion & Apparel",
    "price": 18.24,
    "image": "images/fashion/fashion_6.jpg",
    "description": "High-quality Wool Scarf perfect for fashion & apparel.",
    "stock": 83
  },
  {
    "id": 22,
    "name": "Leather Belt",
    "category": "Fashion & Apparel",
    "price": 198.31,
    "image": "images/fashion/fashion_7.jpg",
    "description": "High-quality Leather Belt perfect for fashion & apparel.",
    "stock": 58
  },
  {
    "id": 23,
    "name": "Aviator Sunglasses",
    "category": "Fashion & Apparel",
    "price": 185.07,
    "image": "images/fashion/fashion_8.jpg",
    "description": "High-quality Aviator Sunglasses perfect for fashion & apparel.",
    "stock": 54
  },
  {
    "id": 24,
    "name": "Canvas Backpack",
    "category": "Fashion & Apparel",
    "price": 193.53,
    "image": "images/fashion/fashion_9.jpg",
    "description": "High-quality Canvas Backpack perfect for fashion & apparel.",
    "stock": 65
  },
  {
    "id": 25,
    "name": "Wool Fedora Hat",
    "category": "Fashion & Apparel",
    "price": 37.14,
    "image": "images/fashion/fashion_10.jpg",
    "description": "High-quality Wool Fedora Hat perfect for fashion & apparel.",
    "stock": 77
  },
  {
    "id": 26,
    "name": "Silk Tie",
    "category": "Fashion & Apparel",
    "price": 156.43,
    "image": "images/fashion/fashion_11.jpg",
    "description": "High-quality Silk Tie perfect for fashion & apparel.",
    "stock": 32
  },
  {
    "id": 27,
    "name": "Ankle Boots",
    "category": "Fashion & Apparel",
    "price": 106.57,
    "image": "images/fashion/fashion_12.jpg",
    "description": "High-quality Ankle Boots perfect for fashion & apparel.",
    "stock": 45
  },
  {
    "id": 28,
    "name": "Cotton Tee",
    "category": "Fashion & Apparel",
    "price": 64.82,
    "image": "images/fashion/fashion_13.jpg",
    "description": "High-quality Cotton Tee perfect for fashion & apparel.",
    "stock": 26
  },
  {
    "id": 29,
    "name": "Athletic Shorts",
    "category": "Fashion & Apparel",
    "price": 130.23,
    "image": "images/fashion/fashion_14.jpg",
    "description": "High-quality Athletic Shorts perfect for fashion & apparel.",
    "stock": 26
  },
  {
    "id": 30,
    "name": "Crossbody Handbag",
    "category": "Fashion & Apparel",
    "price": 26.17,
    "image": "images/fashion/fashion_15.jpg",
    "description": "High-quality Crossbody Handbag perfect for fashion & apparel.",
    "stock": 114
  },
  {
    "id": 31,
    "name": "LED Desk Lamp",
    "category": "Home & Garden",
    "price": 249.89,
    "image": "images/home/home_1.jpg",
    "description": "High-quality LED Desk Lamp perfect for home & garden.",
    "stock": 75,
    "on_sale": true,
    "orig_price": 49.0,
    "sale_price": 39.2
  },
  {
    "id": 32,
    "name": "Air Purifier Plus",
    "category": "Home & Garden",
    "price": 186.6,
    "image": "images/home/home_2.jpg",
    "description": "High-quality Air Purifier Plus perfect for home & garden.",
    "stock": 38
  },
  {
    "id": 33,
    "name": "Robot Vacuum Cleaner",
    "category": "Home & Garden",
    "price": 225.44,
    "image": "images/home/home_3.jpg",
    "description": "High-quality Robot Vacuum Cleaner perfect for home & garden.",
    "stock": 77
  },
  {
    "id": 34,
    "name": "Stainless Knife Set",
    "category": "Home & Garden",
    "price": 18.61,
    "image": "images/home/home_4.jpg",
    "description": "High-quality Stainless Knife Set perfect for home & garden.",
    "stock": 78
  },
  {
    "id": 35,
    "name": "Ceramic Vase",
    "category": "Home & Garden",
    "price": 52.94,
    "image": "images/home/home_5.jpg",
    "description": "High-quality Ceramic Vase perfect for home & garden.",
    "stock": 9
  },
  {
    "id": 36,
    "name": "Memory Foam Pillow",
    "category": "Home & Garden",
    "price": 175.47,
    "image": "images/home/home_6.jpg",
    "description": "High-quality Memory Foam Pillow perfect for home & garden.",
    "stock": 65
  },
  {
    "id": 37,
    "name": "Plush Throw Blanket",
    "category": "Home & Garden",
    "price": 262.46,
    "image": "images/home/home_7.jpg",
    "description": "High-quality Plush Throw Blanket perfect for home & garden.",
    "stock": 94
  },
  {
    "id": 38,
    "name": "Indoor Fiddle Leaf Fig",
    "category": "Home & Garden",
    "price": 129.26,
    "image": "images/home/home_8.jpg",
    "description": "High-quality Indoor Fiddle Leaf Fig perfect for home & garden.",
    "stock": 37
  },
  {
    "id": 39,
    "name": "Automatic Coffee Maker",
    "category": "Home & Garden",
    "price": 213.09,
    "image": "images/home/home_9.jpg",
    "description": "High-quality Automatic Coffee Maker perfect for home & garden.",
    "stock": 30
  },
  {
    "id": 40,
    "name": "Electric Pressure Cooker",
    "category": "Home & Garden",
    "price": 379.53,
    "image": "images/home/home_10.jpg",
    "description": "High-quality Electric Pressure Cooker perfect for home & garden.",
    "stock": 36
  },
  {
    "id": 41,
    "name": "Non-stick Cookware Set",
    "category": "Home & Garden",
    "price": 46.57,
    "image": "images/home/home_11.jpg",
    "description": "High-quality Non-stick Cookware Set perfect for home & garden.",
    "stock": 42
  },
  {
    "id": 42,
    "name": "Abstract Wall Art",
    "category": "Home & Garden",
    "price": 206.92,
    "image": "images/home/home_12.jpg",
    "description": "High-quality Abstract Wall Art perfect for home & garden.",
    "stock": 53
  },
  {
    "id": 43,
    "name": "Solid Wood Bookshelf",
    "category": "Home & Garden",
    "price": 246.54,
    "image": "images/home/home_13.jpg",
    "description": "High-quality Solid Wood Bookshelf perfect for home & garden.",
    "stock": 43
  },
  {
    "id": 44,
    "name": "Foldable Laundry Basket",
    "category": "Home & Garden",
    "price": 287.6,
    "image": "images/home/home_14.jpg",
    "description": "High-quality Foldable Laundry Basket perfect for home & garden.",
    "stock": 94
  },
  {
    "id": 45,
    "name": "Modern Floor Lamp",
    "category": "Home & Garden",
    "price": 315.61,
    "image": "images/home/home_15.jpg",
    "description": "High-quality Modern Floor Lamp perfect for home & garden.",
    "stock": 110
  },
  {
    "id": 46,
    "name": "Electric Toothbrush",
    "category": "Health & Beauty",
    "price": 179.17,
    "image": "images/health/health_1.jpg",
    "description": "High-quality Electric Toothbrush perfect for health & beauty.",
    "stock": 110
  },
  {
    "id": 47,
    "name": "Ionic Hair Dryer",
    "category": "Health & Beauty",
    "price": 190.38,
    "image": "images/health/health_2.jpg",
    "description": "High-quality Ionic Hair Dryer perfect for health & beauty.",
    "stock": 78
  },
  {
    "id": 48,
    "name": "Vitamin C Face Serum",
    "category": "Health & Beauty",
    "price": 48.81,
    "image": "images/health/health_3.jpg",
    "description": "High-quality Vitamin C Face Serum perfect for health & beauty.",
    "stock": 23,
    "on_sale": true,
    "orig_price": 34.99,
    "sale_price": 26.24
  },
  {
    "id": 49,
    "name": "Hydrating Moisturizer",
    "category": "Health & Beauty",
    "price": 39.68,
    "image": "images/health/health_4.jpg",
    "description": "High-quality Hydrating Moisturizer perfect for health & beauty.",
    "stock": 29
  },
  {
    "id": 50,
    "name": "Aromatherapy Diffuser",
    "category": "Health & Beauty",
    "price": 144.94,
    "image": "images/health/health_5.jpg",
    "description": "High-quality Aromatherapy Diffuser perfect for health & beauty.",
    "stock": 57
  },
  {
    "id": 51,
    "name": "Deep Tissue Massage Gun",
    "category": "Health & Beauty",
    "price": 51.36,
    "image": "images/health/health_6.jpg",
    "description": "High-quality Deep Tissue Massage Gun perfect for health & beauty.",
    "stock": 62
  },
  {
    "id": 52,
    "name": "Beard Trimmer Kit",
    "category": "Health & Beauty",
    "price": 142.34,
    "image": "images/health/health_7.jpg",
    "description": "High-quality Beard Trimmer Kit perfect for health & beauty.",
    "stock": 16
  },
  {
    "id": 53,
    "name": "Complete Makeup Set",
    "category": "Health & Beauty",
    "price": 126.21,
    "image": "images/health/health_8.jpg",
    "description": "High-quality Complete Makeup Set perfect for health & beauty.",
    "stock": 24
  },
  {
    "id": 54,
    "name": "Nail Care Kit",
    "category": "Health & Beauty",
    "price": 130.76,
    "image": "images/health/health_9.jpg",
    "description": "High-quality Nail Care Kit perfect for health & beauty.",
    "stock": 7
  },
  {
    "id": 55,
    "name": "SPF 50 Sunscreen",
    "category": "Health & Beauty",
    "price": 101.69,
    "image": "images/health/health_10.jpg",
    "description": "High-quality SPF 50 Sunscreen perfect for health & beauty.",
    "stock": 112
  },
  {
    "id": 56,
    "name": "Gentle Facial Cleanser",
    "category": "Health & Beauty",
    "price": 125.26,
    "image": "images/health/health_11.jpg",
    "description": "High-quality Gentle Facial Cleanser perfect for health & beauty.",
    "stock": 5
  },
  {
    "id": 57,
    "name": "Clarifying Shampoo",
    "category": "Health & Beauty",
    "price": 16.65,
    "image": "images/health/health_12.jpg",
    "description": "High-quality Clarifying Shampoo perfect for health & beauty.",
    "stock": 26
  },
  {
    "id": 58,
    "name": "Body Lotion Duo",
    "category": "Health & Beauty",
    "price": 41.09,
    "image": "images/health/health_13.jpg",
    "description": "High-quality Body Lotion Duo perfect for health & beauty.",
    "stock": 39
  },
  {
    "id": 59,
    "name": "Hand Sanitizer Pack",
    "category": "Health & Beauty",
    "price": 170.24,
    "image": "images/health/health_14.jpg",
    "description": "High-quality Hand Sanitizer Pack perfect for health & beauty.",
    "stock": 97
  },
  {
    "id": 60,
    "name": "Fitness Activity Band",
    "category": "Health & Beauty",
    "price": 101.94,
    "image": "images/health/health_15.jpg",
    "description": "High-quality Fitness Activity Band perfect for health & beauty.",
    "stock": 49
  },
  {
    "id": 61,
    "name": "Extra Virgin Olive Oil 500ml",
    "category": "Groceries",
    "price": 59.91,
    "image": "images/groceries/groceries_1.jpg",
    "description": "High-quality Extra Virgin Olive Oil 500ml perfect for groceries.",
    "stock": 11,
    "on_sale": true,
    "orig_price": 18.0,
    "sale_price": 15.3
  },
  {
    "id": 62,
    "name": "Artisan Coffee Beans 1kg",
    "category": "Groceries",
    "price": 59.79,
    "image": "images/groceries/groceries_2.jpg",
    "description": "High-quality Artisan Coffee Beans 1kg perfect for groceries.",
    "stock": 13
  },
  {
    "id": 63,
    "name": "Creamy Almond Butter",
    "category": "Groceries",
    "price": 36.18,
    "image": "images/groceries/groceries_3.jpg",
    "description": "High-quality Creamy Almond Butter perfect for groceries.",
    "stock": 60
  },
  {
    "id": 64,
    "name": "Gluten-Free Pasta Pack",
    "category": "Groceries",
    "price": 52.13,
    "image": "images/groceries/groceries_4.jpg",
    "description": "High-quality Gluten-Free Pasta Pack perfect for groceries.",
    "stock": 111
  },
  {
    "id": 65,
    "name": "Wildflower Honey Jar",
    "category": "Groceries",
    "price": 28.72,
    "image": "images/groceries/groceries_5.jpg",
    "description": "High-quality Wildflower Honey Jar perfect for groceries.",
    "stock": 102
  },
  {
    "id": 66,
    "name": "Premium Green Tea",
    "category": "Groceries",
    "price": 57.92,
    "image": "images/groceries/groceries_6.jpg",
    "description": "High-quality Premium Green Tea perfect for groceries.",
    "stock": 118
  },
  {
    "id": 67,
    "name": "Whey Protein 1kg",
    "category": "Groceries",
    "price": 51.93,
    "image": "images/groceries/groceries_7.jpg",
    "description": "High-quality Whey Protein 1kg perfect for groceries.",
    "stock": 118
  },
  {
    "id": 68,
    "name": "Multigrain Cereal",
    "category": "Groceries",
    "price": 44.54,
    "image": "images/groceries/groceries_8.jpg",
    "description": "High-quality Multigrain Cereal perfect for groceries.",
    "stock": 45
  },
  {
    "id": 69,
    "name": "Single Origin Dark Chocolate",
    "category": "Groceries",
    "price": 5.91,
    "image": "images/groceries/groceries_9.jpg",
    "description": "High-quality Single Origin Dark Chocolate perfect for groceries.",
    "stock": 91
  },
  {
    "id": 70,
    "name": "Organic Dried Fruits",
    "category": "Groceries",
    "price": 3.41,
    "image": "images/groceries/groceries_10.jpg",
    "description": "High-quality Organic Dried Fruits perfect for groceries.",
    "stock": 7
  },
  {
    "id": 71,
    "name": "Aromatic Basmati Rice 5kg",
    "category": "Groceries",
    "price": 47.09,
    "image": "images/groceries/groceries_11.jpg",
    "description": "High-quality Aromatic Basmati Rice 5kg perfect for groceries.",
    "stock": 93
  },
  {
    "id": 72,
    "name": "Premium Canned Tuna",
    "category": "Groceries",
    "price": 17.45,
    "image": "images/groceries/groceries_12.jpg",
    "description": "High-quality Premium Canned Tuna perfect for groceries.",
    "stock": 54
  },
  {
    "id": 73,
    "name": "Gourmet Spice Set",
    "category": "Groceries",
    "price": 38.26,
    "image": "images/groceries/groceries_13.jpg",
    "description": "High-quality Gourmet Spice Set perfect for groceries.",
    "stock": 88
  },
  {
    "id": 74,
    "name": "Pure Maple Syrup",
    "category": "Groceries",
    "price": 42.72,
    "image": "images/groceries/groceries_14.jpg",
    "description": "High-quality Pure Maple Syrup perfect for groceries.",
    "stock": 67
  },
  {
    "id": 75,
    "name": "Energy Granola Bars",
    "category": "Groceries",
    "price": 56.29,
    "image": "images/groceries/groceries_15.jpg",
    "description": "High-quality Energy Granola Bars perfect for groceries.",
    "stock": 45
  },
  {
    "id": 76,
    "name": "Bestselling Fiction Novel",
    "category": "Books & Media",
    "price": 17.94,
    "image": "images/books/books_1.jpg",
    "description": "High-quality Bestselling Fiction Novel perfect for books & media.",
    "stock": 112,
    "on_sale": true,
    "orig_price": 24.0,
    "sale_price": 19.2
  },
  {
    "id": 77,
    "name": "Healthy Cooking Cookbook",
    "category": "Books & Media",
    "price": 41.76,
    "image": "images/books/books_2.jpg",
    "description": "High-quality Healthy Cooking Cookbook perfect for books & media.",
    "stock": 99
  },
  {
    "id": 78,
    "name": "Children's Picture Book",
    "category": "Books & Media",
    "price": 24.57,
    "image": "images/books/books_3.jpg",
    "description": "High-quality Children's Picture Book perfect for books & media.",
    "stock": 37
  },
  {
    "id": 79,
    "name": "Science Monthly Magazine",
    "category": "Books & Media",
    "price": 34.41,
    "image": "images/books/books_4.jpg",
    "description": "High-quality Science Monthly Magazine perfect for books & media.",
    "stock": 33
  },
  {
    "id": 80,
    "name": "World Travel Guide",
    "category": "Books & Media",
    "price": 8.63,
    "image": "images/books/books_5.jpg",
    "description": "High-quality World Travel Guide perfect for books & media.",
    "stock": 74
  },
  {
    "id": 81,
    "name": "Landscape Photography Book",
    "category": "Books & Media",
    "price": 45.51,
    "image": "images/books/books_6.jpg",
    "description": "High-quality Landscape Photography Book perfect for books & media.",
    "stock": 109
  },
  {
    "id": 82,
    "name": "Award-winning Graphic Novel",
    "category": "Books & Media",
    "price": 34.33,
    "image": "images/books/books_7.jpg",
    "description": "High-quality Award-winning Graphic Novel perfect for books & media.",
    "stock": 97
  },
  {
    "id": 83,
    "name": "Startup Business Guide",
    "category": "Books & Media",
    "price": 16.96,
    "image": "images/books/books_8.jpg",
    "description": "High-quality Startup Business Guide perfect for books & media.",
    "stock": 71
  },
  {
    "id": 84,
    "name": "Personal Growth Handbook",
    "category": "Books & Media",
    "price": 30.26,
    "image": "images/books/books_9.jpg",
    "description": "High-quality Personal Growth Handbook perfect for books & media.",
    "stock": 59
  },
  {
    "id": 85,
    "name": "Mystery Thriller Paperback",
    "category": "Books & Media",
    "price": 26.02,
    "image": "images/books/books_10.jpg",
    "description": "High-quality Mystery Thriller Paperback perfect for books & media.",
    "stock": 32
  },
  {
    "id": 86,
    "name": "Contemporary Art Collection",
    "category": "Books & Media",
    "price": 39.96,
    "image": "images/books/books_11.jpg",
    "description": "High-quality Contemporary Art Collection perfect for books & media.",
    "stock": 49
  },
  {
    "id": 87,
    "name": "Selected Poems",
    "category": "Books & Media",
    "price": 22.21,
    "image": "images/books/books_12.jpg",
    "description": "High-quality Selected Poems perfect for books & media.",
    "stock": 82
  },
  {
    "id": 88,
    "name": "Kids Activity Book",
    "category": "Books & Media",
    "price": 39.98,
    "image": "images/books/books_13.jpg",
    "description": "High-quality Kids Activity Book perfect for books & media.",
    "stock": 97
  },
  {
    "id": 89,
    "name": "Modern History Compendium",
    "category": "Books & Media",
    "price": 9.55,
    "image": "images/books/books_14.jpg",
    "description": "High-quality Modern History Compendium perfect for books & media.",
    "stock": 71
  },
  {
    "id": 90,
    "name": "Language Learning Textbook",
    "category": "Books & Media",
    "price": 15.44,
    "image": "images/books/books_15.jpg",
    "description": "High-quality Language Learning Textbook perfect for books & media.",
    "stock": 36
  },
  {
    "id": 91,
    "name": "Eco Yoga Mat",
    "category": "Sports & Outdoors",
    "price": 187.43,
    "image": "images/sports/sports_1.jpg",
    "description": "High-quality Eco Yoga Mat perfect for sports & outdoors.",
    "stock": 47
  },
  {
    "id": 92,
    "name": "3-Person Camping Tent",
    "category": "Sports & Outdoors",
    "price": 244.28,
    "image": "images/sports/sports_2.jpg",
    "description": "High-quality 3-Person Camping Tent perfect for sports & outdoors.",
    "stock": 74,
    "on_sale": true,
    "orig_price": 129.0,
    "sale_price": 90.3
  },
  {
    "id": 93,
    "name": "Ultralight Hiking Backpack",
    "category": "Sports & Outdoors",
    "price": 204.44,
    "image": "images/sports/sports_3.jpg",
    "description": "High-quality Ultralight Hiking Backpack perfect for sports & outdoors.",
    "stock": 64
  },
  {
    "id": 94,
    "name": "Advanced Fitness Tracker",
    "category": "Sports & Outdoors",
    "price": 295.51,
    "image": "images/sports/sports_4.jpg",
    "description": "High-quality Advanced Fitness Tracker perfect for sports & outdoors.",
    "stock": 11
  },
  {
    "id": 95,
    "name": "Aero Cycling Helmet",
    "category": "Sports & Outdoors",
    "price": 20.66,
    "image": "images/sports/sports_5.jpg",
    "description": "High-quality Aero Cycling Helmet perfect for sports & outdoors.",
    "stock": 66
  },
  {
    "id": 96,
    "name": "Insulated Water Bottle 1L",
    "category": "Sports & Outdoors",
    "price": 267.09,
    "image": "images/sports/sports_6.jpg",
    "description": "High-quality Insulated Water Bottle 1L perfect for sports & outdoors.",
    "stock": 38
  },
  {
    "id": 97,
    "name": "Resistance Bands Set",
    "category": "Sports & Outdoors",
    "price": 102.4,
    "image": "images/sports/sports_7.jpg",
    "description": "High-quality Resistance Bands Set perfect for sports & outdoors.",
    "stock": 53
  },
  {
    "id": 98,
    "name": "Adjustable Dumbbell Set",
    "category": "Sports & Outdoors",
    "price": 259.0,
    "image": "images/sports/sports_8.jpg",
    "description": "High-quality Adjustable Dumbbell Set perfect for sports & outdoors.",
    "stock": 8
  },
  {
    "id": 99,
    "name": "Trail Running Shoes",
    "category": "Sports & Outdoors",
    "price": 33.71,
    "image": "images/sports/sports_9.jpg",
    "description": "High-quality Trail Running Shoes perfect for sports & outdoors.",
    "stock": 24
  },
  {
    "id": 100,
    "name": "Official Basketball",
    "category": "Sports & Outdoors",
    "price": 135.28,
    "image": "images/sports/sports_10.jpg",
    "description": "High-quality Official Basketball perfect for sports & outdoors.",
    "stock": 84
  },
  {
    "id": 101,
    "name": "Pro Tennis Racket",
    "category": "Sports & Outdoors",
    "price": 199.19,
    "image": "images/sports/sports_11.jpg",
    "description": "High-quality Pro Tennis Racket perfect for sports & outdoors.",
    "stock": 32
  },
  {
    "id": 102,
    "name": "Cold-Weather Sleeping Bag",
    "category": "Sports & Outdoors",
    "price": 25.28,
    "image": "images/sports/sports_12.jpg",
    "description": "High-quality Cold-Weather Sleeping Bag perfect for sports & outdoors.",
    "stock": 45
  },
  {
    "id": 103,
    "name": "Carbon Fishing Rod",
    "category": "Sports & Outdoors",
    "price": 266.8,
    "image": "images/sports/sports_13.jpg",
    "description": "High-quality Carbon Fishing Rod perfect for sports & outdoors.",
    "stock": 15
  },
  {
    "id": 104,
    "name": "Golf Training Gloves",
    "category": "Sports & Outdoors",
    "price": 92.58,
    "image": "images/sports/sports_14.jpg",
    "description": "High-quality Golf Training Gloves perfect for sports & outdoors.",
    "stock": 112
  },
  {
    "id": 105,
    "name": "Climbing Safety Rope",
    "category": "Sports & Outdoors",
    "price": 133.59,
    "image": "images/sports/sports_15.jpg",
    "description": "High-quality Climbing Safety Rope perfect for sports & outdoors.",
    "stock": 46
  },
  {
    "id": 106,
    "name": "RC Racing Car",
    "category": "Toys & Hobbies",
    "price": 74.89,
    "image": "images/toys/toys_1.jpg",
    "description": "High-quality RC Racing Car perfect for toys & hobbies.",
    "stock": 108,
    "on_sale": true,
    "orig_price": 89.0,
    "sale_price": 66.75
  },
  {
    "id": 107,
    "name": "Wooden Building Blocks",
    "category": "Toys & Hobbies",
    "price": 98.81,
    "image": "images/toys/toys_2.jpg",
    "description": "High-quality Wooden Building Blocks perfect for toys & hobbies.",
    "stock": 102
  },
  {
    "id": 108,
    "name": "1000pc Jigsaw Puzzle",
    "category": "Toys & Hobbies",
    "price": 110.42,
    "image": "images/toys/toys_3.jpg",
    "description": "High-quality 1000pc Jigsaw Puzzle perfect for toys & hobbies.",
    "stock": 18
  },
  {
    "id": 109,
    "name": "Model Airplane Kit",
    "category": "Toys & Hobbies",
    "price": 121.36,
    "image": "images/toys/toys_4.jpg",
    "description": "High-quality Model Airplane Kit perfect for toys & hobbies.",
    "stock": 35
  },
  {
    "id": 110,
    "name": "Complete Art Supplies",
    "category": "Toys & Hobbies",
    "price": 55.1,
    "image": "images/toys/toys_5.jpg",
    "description": "High-quality Complete Art Supplies perfect for toys & hobbies.",
    "stock": 9
  },
  {
    "id": 111,
    "name": "Strategic Board Game",
    "category": "Toys & Hobbies",
    "price": 104.43,
    "image": "images/toys/toys_6.jpg",
    "description": "High-quality Strategic Board Game perfect for toys & hobbies.",
    "stock": 116
  },
  {
    "id": 112,
    "name": "Mini Camera Drone",
    "category": "Toys & Hobbies",
    "price": 101.05,
    "image": "images/toys/toys_7.jpg",
    "description": "High-quality Mini Camera Drone perfect for toys & hobbies.",
    "stock": 79
  },
  {
    "id": 113,
    "name": "Plush Teddy Bear",
    "category": "Toys & Hobbies",
    "price": 58.97,
    "image": "images/toys/toys_8.jpg",
    "description": "High-quality Plush Teddy Bear perfect for toys & hobbies.",
    "stock": 43
  },
  {
    "id": 114,
    "name": "Magnetic Train Set",
    "category": "Toys & Hobbies",
    "price": 115.74,
    "image": "images/toys/toys_9.jpg",
    "description": "High-quality Magnetic Train Set perfect for toys & hobbies.",
    "stock": 116
  },
  {
    "id": 115,
    "name": "Kids Science Kit",
    "category": "Toys & Hobbies",
    "price": 104.55,
    "image": "images/toys/toys_10.jpg",
    "description": "High-quality Kids Science Kit perfect for toys & hobbies.",
    "stock": 88
  },
  {
    "id": 116,
    "name": "Collectible Card Game",
    "category": "Toys & Hobbies",
    "price": 79.06,
    "image": "images/toys/toys_11.jpg",
    "description": "High-quality Collectible Card Game perfect for toys & hobbies.",
    "stock": 31
  },
  {
    "id": 117,
    "name": "Beginner Magic Set",
    "category": "Toys & Hobbies",
    "price": 66.82,
    "image": "images/toys/toys_12.jpg",
    "description": "High-quality Beginner Magic Set perfect for toys & hobbies.",
    "stock": 9
  },
  {
    "id": 118,
    "name": "Watercolor Paint Set",
    "category": "Toys & Hobbies",
    "price": 80.21,
    "image": "images/toys/toys_13.jpg",
    "description": "High-quality Watercolor Paint Set perfect for toys & hobbies.",
    "stock": 100
  },
  {
    "id": 119,
    "name": "RC Speed Boat",
    "category": "Toys & Hobbies",
    "price": 118.34,
    "image": "images/toys/toys_14.jpg",
    "description": "High-quality RC Speed Boat perfect for toys & hobbies.",
    "stock": 8
  },
  {
    "id": 120,
    "name": "Kite for Kids",
    "category": "Toys & Hobbies",
    "price": 39.52,
    "image": "images/toys/toys_15.jpg",
    "description": "High-quality Kite for Kids perfect for toys & hobbies.",
    "stock": 16
  },
  {
    "id": 121,
    "name": "Universal Phone Mount",
    "category": "Automotive",
    "price": 45.14,
    "image": "images/automotive/automotive_1.jpg",
    "description": "High-quality Universal Phone Mount perfect for automotive.",
    "stock": 75
  },
  {
    "id": 122,
    "name": "Portable Jump Starter",
    "category": "Automotive",
    "price": 190.5,
    "image": "images/automotive/automotive_2.jpg",
    "description": "High-quality Portable Jump Starter perfect for automotive.",
    "stock": 96
  },
  {
    "id": 123,
    "name": "Comfort Seat Cover",
    "category": "Automotive",
    "price": 31.62,
    "image": "images/automotive/automotive_3.jpg",
    "description": "High-quality Comfort Seat Cover perfect for automotive.",
    "stock": 116
  },
  {
    "id": 124,
    "name": "Full HD Dash Cam",
    "category": "Automotive",
    "price": 90.89,
    "image": "images/automotive/automotive_4.jpg",
    "description": "High-quality Full HD Dash Cam perfect for automotive.",
    "stock": 73,
    "on_sale": true,
    "orig_price": 69.99,
    "sale_price": 48.99
  },
  {
    "id": 125,
    "name": "Electric Tire Inflator",
    "category": "Automotive",
    "price": 218.52,
    "image": "images/automotive/automotive_5.jpg",
    "description": "High-quality Electric Tire Inflator perfect for automotive.",
    "stock": 33
  },
  {
    "id": 126,
    "name": "Handheld Car Vacuum",
    "category": "Automotive",
    "price": 199.13,
    "image": "images/automotive/automotive_6.jpg",
    "description": "High-quality Handheld Car Vacuum perfect for automotive.",
    "stock": 112
  },
  {
    "id": 127,
    "name": "Fresh Breeze Air Freshener",
    "category": "Automotive",
    "price": 169.71,
    "image": "images/automotive/automotive_7.jpg",
    "description": "High-quality Fresh Breeze Air Freshener perfect for automotive.",
    "stock": 42
  },
  {
    "id": 128,
    "name": "LED Headlight Kit",
    "category": "Automotive",
    "price": 141.18,
    "image": "images/automotive/automotive_8.jpg",
    "description": "High-quality LED Headlight Kit perfect for automotive.",
    "stock": 67
  },
  {
    "id": 129,
    "name": "Mechanic Tool Kit",
    "category": "Automotive",
    "price": 34.62,
    "image": "images/automotive/automotive_9.jpg",
    "description": "High-quality Mechanic Tool Kit perfect for automotive.",
    "stock": 46
  },
  {
    "id": 130,
    "name": "Fast Car Charger",
    "category": "Automotive",
    "price": 50.53,
    "image": "images/automotive/automotive_10.jpg",
    "description": "High-quality Fast Car Charger perfect for automotive.",
    "stock": 19
  },
  {
    "id": 131,
    "name": "Windshield Sunshade",
    "category": "Automotive",
    "price": 36.49,
    "image": "images/automotive/automotive_11.jpg",
    "description": "High-quality Windshield Sunshade perfect for automotive.",
    "stock": 20
  },
  {
    "id": 132,
    "name": "Roof Cargo Rack",
    "category": "Automotive",
    "price": 91.29,
    "image": "images/automotive/automotive_12.jpg",
    "description": "High-quality Roof Cargo Rack perfect for automotive.",
    "stock": 17
  },
  {
    "id": 133,
    "name": "High Performance Brake Pads",
    "category": "Automotive",
    "price": 249.62,
    "image": "images/automotive/automotive_13.jpg",
    "description": "High-quality High Performance Brake Pads perfect for automotive.",
    "stock": 96
  },
  {
    "id": 134,
    "name": "Premium Oil Filter",
    "category": "Automotive",
    "price": 98.41,
    "image": "images/automotive/automotive_14.jpg",
    "description": "High-quality Premium Oil Filter perfect for automotive.",
    "stock": 70
  },
  {
    "id": 135,
    "name": "Battery Maintainer",
    "category": "Automotive",
    "price": 208.5,
    "image": "images/automotive/automotive_15.jpg",
    "description": "High-quality Battery Maintainer perfect for automotive.",
    "stock": 61
  },
  {
    "id": 136,
    "name": "Durable Dog Leash",
    "category": "Pets",
    "price": 45.85,
    "image": "images/pets/pets_1.jpg",
    "description": "High-quality Durable Dog Leash perfect for pets.",
    "stock": 72
  },
  {
    "id": 137,
    "name": "Interactive Cat Toy",
    "category": "Pets",
    "price": 108.74,
    "image": "images/pets/pets_2.jpg",
    "description": "High-quality Interactive Cat Toy perfect for pets.",
    "stock": 32
  },
  {
    "id": 138,
    "name": "Orthopedic Dog Bed",
    "category": "Pets",
    "price": 69.94,
    "image": "images/pets/pets_3.jpg",
    "description": "High-quality Orthopedic Dog Bed perfect for pets.",
    "stock": 54,
    "on_sale": true,
    "orig_price": 79.0,
    "sale_price": 63.2
  },
  {
    "id": 139,
    "name": "Automatic Pet Feeder",
    "category": "Pets",
    "price": 59.33,
    "image": "images/pets/pets_4.jpg",
    "description": "High-quality Automatic Pet Feeder perfect for pets.",
    "stock": 50
  },
  {
    "id": 140,
    "name": "Aquarium Filter System",
    "category": "Pets",
    "price": 42.25,
    "image": "images/pets/pets_5.jpg",
    "description": "High-quality Aquarium Filter System perfect for pets.",
    "stock": 32
  },
  {
    "id": 141,
    "name": "Complete Grooming Kit",
    "category": "Pets",
    "price": 9.28,
    "image": "images/pets/pets_6.jpg",
    "description": "High-quality Complete Grooming Kit perfect for pets.",
    "stock": 93
  },
  {
    "id": 142,
    "name": "Natural Dog Chews",
    "category": "Pets",
    "price": 94.23,
    "image": "images/pets/pets_7.jpg",
    "description": "High-quality Natural Dog Chews perfect for pets.",
    "stock": 101
  },
  {
    "id": 143,
    "name": "Clumping Cat Litter",
    "category": "Pets",
    "price": 123.12,
    "image": "images/pets/pets_8.jpg",
    "description": "High-quality Clumping Cat Litter perfect for pets.",
    "stock": 98
  },
  {
    "id": 144,
    "name": "Spacious Bird Cage",
    "category": "Pets",
    "price": 119.98,
    "image": "images/pets/pets_9.jpg",
    "description": "High-quality Spacious Bird Cage perfect for pets.",
    "stock": 108
  },
  {
    "id": 145,
    "name": "Silent Hamster Wheel",
    "category": "Pets",
    "price": 70.44,
    "image": "images/pets/pets_10.jpg",
    "description": "High-quality Silent Hamster Wheel perfect for pets.",
    "stock": 68
  },
  {
    "id": 146,
    "name": "Gentle Pet Shampoo",
    "category": "Pets",
    "price": 81.0,
    "image": "images/pets/pets_11.jpg",
    "description": "High-quality Gentle Pet Shampoo perfect for pets.",
    "stock": 9
  },
  {
    "id": 147,
    "name": "Reflective Pet Collar",
    "category": "Pets",
    "price": 30.55,
    "image": "images/pets/pets_12.jpg",
    "description": "High-quality Reflective Pet Collar perfect for pets.",
    "stock": 60
  },
  {
    "id": 148,
    "name": "Premium Fish Food",
    "category": "Pets",
    "price": 7.86,
    "image": "images/pets/pets_13.jpg",
    "description": "High-quality Premium Fish Food perfect for pets.",
    "stock": 60
  },
  {
    "id": 149,
    "name": "Insulated Dog Jacket",
    "category": "Pets",
    "price": 14.28,
    "image": "images/pets/pets_14.jpg",
    "description": "High-quality Insulated Dog Jacket perfect for pets.",
    "stock": 37
  },
  {
    "id": 150,
    "name": "Portable Pet Carrier",
    "category": "Pets",
    "price": 74.22,
    "image": "images/pets/pets_15.jpg",
    "description": "High-quality Portable Pet Carrier perfect for pets.",
    "stock": 6
  }
];