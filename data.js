const colorPalettes = [
  // Palette 1 - Maya Blue, Prussian Blue, Celadon
  {
    id: 1,
    name: "Ocean Depths",
    colors: [
      { hex: "#55C1FF", rgb: "85, 193, 255", cmyk: "67, 24, 0, 0" },
      { hex: "#102E4A", rgb: "16, 46, 74", cmyk: "78, 38, 0, 71" },
      { hex: "#AFE3C0", rgb: "175, 227, 192", cmyk: "23, 0, 15, 11" }
    ],
    tags: ["blue", "cool", "tranquil"]
  },
  // Palette 2 - Maize, Atomic Tangerine, Blush
  {
    id: 2,
    name: "Sunset Glow",
    colors: [
      { hex: "#FEE440", rgb: "254, 228, 64", cmyk: "0, 10, 75, 0" },
      { hex: "#FCA17D", rgb: "252, 161, 125", cmyk: "0, 36, 50, 1" },
      { hex: "#DA627D", rgb: "218, 98, 125", cmyk: "0, 55, 43, 15" }
    ],
    tags: ["warm", "vibrant", "sunset"]
  },
  // Palette 3 - Plum, Celadon, Tiffany Blue
  {
    id: 3,
    name: "Spring Garden",
    colors: [
      { hex: "#9A348E", rgb: "154, 52, 142", cmyk: "0, 66, 8, 40" },
      { hex: "#AFE3C0", rgb: "175, 227, 192", cmyk: "23, 0, 15, 11" },
      { hex: "#97EAD2", rgb: "151, 234, 210", cmyk: "36, 0, 10, 8" }
    ],
    tags: ["contrast", "fresh", "spring"]
  },
  // Palette 4 - Indigo, Rusty Red, Sunglow
  {
    id: 4,
    name: "Bold Contrast",
    colors: [
      { hex: "#540D6E", rgb: "84, 13, 110", cmyk: "24, 88, 0, 57" },
      { hex: "#DC2E3F", rgb: "220, 46, 63", cmyk: "0, 79, 71, 14" },
      { hex: "#FFD23F", rgb: "255, 210, 63", cmyk: "0, 18, 75, 0" }
    ],
    tags: ["bold", "vibrant", "contrast"]
  },
  // Palette 5 - Lavender Blush, Tiffany Blue, Indigo Dye
  {
    id: 5,
    name: "Pastel Dreams",
    colors: [
      { hex: "#F6E8EA", rgb: "246, 232, 234", cmyk: "0, 6, 5, 4" },
      { hex: "#97EAD2", rgb: "151, 234, 210", cmyk: "36, 0, 10, 8" },
      { hex: "#08415C", rgb: "8, 65, 92", cmyk: "91, 29, 0, 64" }
    ],
    tags: ["pastel", "contrast", "serene"]
  },
  // Palette 6 - Cherry Blossom Pink, Light Coral, Thulian Pink
  {
    id: 6,
    name: "Pink Paradise",
    colors: [
      { hex: "#F7B2B7", rgb: "247, 178, 183", cmyk: "0, 28, 26, 3" },
      { hex: "#F7717D", rgb: "247, 113, 125", cmyk: "0, 54, 49, 3" },
      { hex: "#DE639A", rgb: "222, 99, 154", cmyk: "0, 55, 31, 13" }
    ],
    tags: ["pink", "feminine", "soft"]
  },
  // Palette 7 - Mardi Gras, Dark Purple, Indigo Dye
  {
    id: 7,
    name: "Royal Depth",
    colors: [
      { hex: "#7F2982", rgb: "127, 41, 130", cmyk: "2, 68, 0, 49" },
      { hex: "#16001E", rgb: "22, 0, 30", cmyk: "27, 100, 0, 88" },
      { hex: "#08415C", rgb: "8, 65, 92", cmyk: "91, 29, 0, 64" }
    ],
    tags: ["dark", "royal", "deep"]
  },
  // Palette 8 - Blue Munsell, Aquamarine, Lavender Web
  {
    id: 8,
    name: "Ocean Breeze",
    colors: [
      { hex: "#388697", rgb: "56, 134, 151", cmyk: "63, 11, 0, 41" },
      { hex: "#B5FFE1", rgb: "181, 255, 225", cmyk: "29, 0, 12, 0" },
      { hex: "#DAD4EF", rgb: "218, 212, 239", cmyk: "9, 11, 0, 6" }
    ],
    tags: ["blue", "aqua", "calming"]
  },
  // Palette 9 - Bright Pink, Aquamarine, Blue Munsell
  {
    id: 9,
    name: "Tropical Splash",
    colors: [
      { hex: "#FC6471", rgb: "252, 100, 113", cmyk: "0, 60, 55, 1" },
      { hex: "#B5FFE1", rgb: "181, 255, 225", cmyk: "29, 0, 12, 0" },
      { hex: "#388697", rgb: "56, 134, 151", cmyk: "63, 11, 0, 41" }
    ],
    tags: ["tropical", "vibrant", "fresh"]
  },
  // Palette 10 - Mocha Mousse, Sage Green, Cream
  {
    id: 10,
    name: "Earthy Comfort",
    colors: [
      { hex: "#3C280D", rgb: "60, 40, 13", cmyk: "0, 33, 78, 76" },
      { hex: "#7D8C6D", rgb: "125, 140, 109", cmyk: "11, 0, 22, 45" },
      { hex: "#F9F5E3", rgb: "249, 245, 227", cmyk: "0, 2, 9, 2" }
    ],
    tags: ["earthy", "natural", "warm"]
  },
  // Palette 11 - Dusty Rose, Cherry Red, Butter Yellow
  {
    id: 11,
    name: "Elegant Contrast",
    colors: [
      { hex: "#C9ADA7", rgb: "201, 173, 167", cmyk: "0, 14, 17, 21" },
      { hex: "#A22522", rgb: "162, 37, 34", cmyk: "0, 77, 79, 36" },
      { hex: "#F3DE8A", rgb: "243, 222, 138", cmyk: "0, 9, 43, 5" }
    ],
    tags: ["elegant", "contrast", "sophisticated"]
  },
  // Palette 12 - Khaki, Pale Blue, White
  {
    id: 12,
    name: "Coastal Calm",
    colors: [
      { hex: "#BFB48F", rgb: "191, 180, 143", cmyk: "0, 6, 25, 25" },
      { hex: "#A4C2F4", rgb: "164, 194, 244", cmyk: "33, 20, 0, 4" },
      { hex: "#FFFFFF", rgb: "255, 255, 255", cmyk: "0, 0, 0, 0" }
    ],
    tags: ["coastal", "calm", "light"]
  },
  // Palette 13 - Terracotta, White, Sage
  {
    id: 13,
    name: "Mediterranean",
    colors: [
      { hex: "#CD5D31", rgb: "205, 93, 49", cmyk: "0, 55, 76, 20" },
      { hex: "#FFFFFF", rgb: "255, 255, 255", cmyk: "0, 0, 0, 0" },
      { hex: "#8A9A5B", rgb: "138, 154, 91", cmyk: "10, 0, 41, 40" }
    ],
    tags: ["mediterranean", "warm", "natural"]
  },
  // Palette 14 - Ruby Red, Emerald Green, Sapphire Blue
  {
    id: 14,
    name: "Jewel Tones",
    colors: [
      { hex: "#E0115F", rgb: "224, 17, 95", cmyk: "0, 92, 58, 12" },
      { hex: "#046307", rgb: "4, 99, 7", cmyk: "96, 0, 93, 61" },
      { hex: "#0F52BA", rgb: "15, 82, 186", cmyk: "92, 56, 0, 27" }
    ],
    tags: ["jewel", "rich", "vibrant"]
  },
  // Palette 15 - Honeyed Neutrals, Serene Blue, Ruby Red
  {
    id: 15,
    name: "Balanced Contrast",
    colors: [
      { hex: "#D0B49F", rgb: "208, 180, 159", cmyk: "0, 13, 24, 18" },
      { hex: "#4A6D7C", rgb: "74, 109, 124", cmyk: "40, 12, 0, 51" },
      { hex: "#C32148", rgb: "195, 33, 72", cmyk: "0, 83, 63, 24" }
    ],
    tags: ["balanced", "sophisticated", "contrast"]
  },
  // Palette 16 - Mint Green, Coral, Navy Blue
  {
    id: 16,
    name: "Coastal Sunset",
    colors: [
      { hex: "#98D7C2", rgb: "152, 215, 194", cmyk: "29, 0, 10, 16" },
      { hex: "#FF7F50", rgb: "255, 127, 80", cmyk: "0, 50, 69, 0" },
      { hex: "#1B365D", rgb: "27, 54, 93", cmyk: "71, 42, 0, 64" }
    ],
    tags: ["coastal", "sunset", "contrast"]
  },
  // Palette 17 - Lavender, Mint, Peach
  {
    id: 17,
    name: "Soft Pastels",
    colors: [
      { hex: "#D8B4E2", rgb: "216, 180, 226", cmyk: "4, 20, 0, 11" },
      { hex: "#B2EBD6", rgb: "178, 235, 214", cmyk: "24, 0, 9, 8" },
      { hex: "#FFD8BE", rgb: "255, 216, 190", cmyk: "0, 15, 25, 0" }
    ],
    tags: ["pastel", "soft", "gentle"]
  },
  // Palette 18 - Charcoal, Teal, Coral
  {
    id: 18,
    name: "Modern Contrast",
    colors: [
      { hex: "#2F4550", rgb: "47, 69, 80", cmyk: "41, 14, 0, 69" },
      { hex: "#2E8B99", rgb: "46, 139, 153", cmyk: "70, 9, 0, 40" },
      { hex: "#F26D5B", rgb: "242, 109, 91", cmyk: "0, 55, 62, 5" }
    ],
    tags: ["modern", "contrast", "bold"]
  },
  // Palette 19 - Forest Green, Mustard Yellow, Burgundy
  {
    id: 19,
    name: "Autumn Harvest",
    colors: [
      { hex: "#2C5F2D", rgb: "44, 95, 45", cmyk: "54, 0, 53, 63" },
      { hex: "#FFB30F", rgb: "255, 179, 15", cmyk: "0, 30, 94, 0" },
      { hex: "#97033F", rgb: "151, 3, 63", cmyk: "0, 98, 58, 41" }
    ],
    tags: ["autumn", "harvest", "rich"]
  },
  // Palette 20 - Sky Blue, Cloud White, Sunshine Yellow
  {
    id: 20,
    name: "Clear Skies",
    colors: [
      { hex: "#87CEEB", rgb: "135, 206, 235", cmyk: "43, 12, 0, 8" },
      { hex: "#F0F8FF", rgb: "240, 248, 255", cmyk: "6, 3, 0, 0" },
      { hex: "#FFDD33", rgb: "255, 221, 51", cmyk: "0, 13, 80, 0" }
    ],
    tags: ["sky", "bright", "cheerful"]
  },
  // Palette 21 - Deep Purple, Electric Blue, Hot Pink
  {
    id: 21,
    name: "Neon Nights",
    colors: [
      { hex: "#5F0F40", rgb: "95, 15, 64", cmyk: "0, 84, 33, 63" },
      { hex: "#0F4C81", rgb: "15, 76, 129", cmyk: "88, 41, 0, 49" },
      { hex: "#FF3E6C", rgb: "255, 62, 108", cmyk: "0, 76, 58, 0" }
    ],
    tags: ["neon", "vibrant", "night"]
  },
  // Palette 22 - Olive Green, Cream, Terracotta
  {
    id: 22,
    name: "Tuscan Villa",
    colors: [
      { hex: "#708238", rgb: "112, 130, 56", cmyk: "14, 0, 57, 49" },
      { hex: "#FFF8E7", rgb: "255, 248, 231", cmyk: "0, 3, 9, 0" },
      { hex: "#C35831", rgb: "195, 88, 49", cmyk: "0, 55, 75, 24" }
    ],
    tags: ["tuscan", "earthy", "warm"]
  },
  // Palette 23 - Slate Gray, Dusty Blue, Blush Pink
  {
    id: 23,
    name: "Misty Morning",
    colors: [
      { hex: "#708090", rgb: "112, 128, 144", cmyk: "22, 11, 0, 44" },
      { hex: "#B0C4DE", rgb: "176, 196, 222", cmyk: "21, 12, 0, 13" },
      { hex: "#F4C2C2", rgb: "244, 194, 194", cmyk: "0, 20, 20, 4" }
    ],
    tags: ["misty", "soft", "morning"]
  },
  // Palette 24 - Dark Chocolate, Caramel, Cream
  {
    id: 24,
    name: "Coffee & Cream",
    colors: [
      { hex: "#3C1414", rgb: "60, 20, 20", cmyk: "0, 67, 67, 76" },
      { hex: "#C68E17", rgb: "198, 142, 23", cmyk: "0, 28, 88, 22" },
      { hex: "#FFF5E1", rgb: "255, 245, 225", cmyk: "0, 4, 12, 0" }
    ],
    tags: ["coffee", "warm", "cozy"]
  },
  // Palette 25 - Navy Blue, Seafoam Green, Coral Pink
  {
    id: 25,
    name: "Nautical Breeze",
    colors: [
      { hex: "#003366", rgb: "0, 51, 102", cmyk: "100, 50, 0, 60" },
      { hex: "#A7E8BD", rgb: "167, 232, 189", cmyk: "28, 0, 19, 9" },
      { hex: "#FF9999", rgb: "255, 153, 153", cmyk: "0, 40, 40, 0" }
    ],
    tags: ["nautical", "fresh", "coastal"]
  },
  // Palette 26 - Emerald Green, Gold, Ruby Red
  {
    id: 26,
    name: "Regal Elegance",
    colors: [
      { hex: "#046307", rgb: "4, 99, 7", cmyk: "96, 0, 93, 61" },
      { hex: "#D4AF37", rgb: "212, 175, 55", cmyk: "0, 17, 74, 17" },
      { hex: "#A31420", rgb: "163, 20, 32", cmyk: "0, 88, 80, 36" }
    ],
    tags: ["regal", "elegant", "rich"]
  },
  // Palette 27 - Lilac, Mint Green, Periwinkle
  {
    id: 27,
    name: "Garden Party",
    colors: [
      { hex: "#C8A2C8", rgb: "200, 162, 200", cmyk: "0, 19, 0, 22" },
      { hex: "#AAF0D1", rgb: "170, 240, 209", cmyk: "29, 0, 13, 6" },
      { hex: "#CCCCFF", rgb: "204, 204, 255", cmyk: "20, 20, 0, 0" }
    ],
    tags: ["garden", "pastel", "spring"]
  },
  // Palette 28 - Charcoal, Silver, Ice Blue
  {
    id: 28,
    name: "Urban Frost",
    colors: [
      { hex: "#36454F", rgb: "54, 69, 79", cmyk: "32, 13, 0, 69" },
      { hex: "#C0C0C0", rgb: "192, 192, 192", cmyk: "0, 0, 0, 25" },
      { hex: "#E0FFFF", rgb: "224, 255, 255", cmyk: "12, 0, 0, 0" }
    ],
    tags: ["urban", "cool", "modern"]
  },
  // Palette 29 - Burnt Orange, Olive Green, Cream
  {
    id: 29,
    name: "Autumn Leaves",
    colors: [
      { hex: "#CC5500", rgb: "204, 85, 0", cmyk: "0, 58, 100, 20" },
      { hex: "#556B2F", rgb: "85, 107, 47", cmyk: "21, 0, 56, 58" },
      { hex: "#FFFDD0", rgb: "255, 253, 208", cmyk: "0, 1, 18, 0" }
    ],
    tags: ["autumn", "earthy", "warm"]
  },
  // Palette 30 - Midnight Blue, Turquoise, Coral
  {
    id: 30,
    name: "Tropical Night",
    colors: [
      { hex: "#191970", rgb: "25, 25, 112", cmyk: "78, 78, 0, 56" },
      { hex: "#40E0D0", rgb: "64, 224, 208", cmyk: "71, 0, 7, 12" },
      { hex: "#FF7F50", rgb: "255, 127, 80", cmyk: "0, 50, 69, 0" }
    ],
    tags: ["tropical", "night", "vibrant"]
  },
  // Palette 31 - Dusty Rose, Sage Green, Cream
  {
    id: 31,
    name: "Vintage Garden",
    colors: [
      { hex: "#D8A7B1", rgb: "216, 167, 177", cmyk: "0, 23, 18, 15" },
      { hex: "#B7CAB1", rgb: "183, 202, 177", cmyk: "9, 0, 12, 21" },
      { hex: "#F5F5DC", rgb: "245, 245, 220", cmyk: "0, 0, 10, 4" }
    ],
    tags: ["vintage", "garden", "soft"]
  },
  // Palette 32 - Burgundy, Forest Green, Gold
  {
    id: 32,
    name: "Holiday Classic",
    colors: [
      { hex: "#800020", rgb: "128, 0, 32", cmyk: "0, 100, 75, 50" },
      { hex: "#014421", rgb: "1, 68, 33", cmyk: "99, 0, 51, 73" },
      { hex: "#FFD700", rgb: "255, 215, 0", cmyk: "0, 16, 100, 0" }
    ],
    tags: ["holiday", "classic", "rich"]
  },
  // Palette 33 - Sky Blue, Lavender, Peach
  {
    id: 33,
    name: "Sunset Pastels",
    colors: [
      { hex: "#87CEEB", rgb: "135, 206, 235", cmyk: "43, 12, 0, 8" },
      { hex: "#E6E6FA", rgb: "230, 230, 250", cmyk: "8, 8, 0, 2" },
      { hex: "#FFDAB9", rgb: "255, 218, 185", cmyk: "0, 15, 27, 0" }
    ],
    tags: ["pastel", "sunset", "soft"]
  },
  // Palette 34 - Teal, Coral, Navy
  {
    id: 34,
    name: "Coastal Sunset",
    colors: [
      { hex: "#008080", rgb: "0, 128, 128", cmyk: "100, 0, 0, 50" },
      { hex: "#FF6F61", rgb: "255, 111, 97", cmyk: "0, 56, 62, 0" },
      { hex: "#000080", rgb: "0, 0, 128", cmyk: "100, 100, 0, 50" }
    ],
    tags: ["coastal", "sunset", "contrast"]
  },
  // Palette 35 - Mustard, Rust, Cream
  {
    id: 35,
    name: "Autumn Warmth",
    colors: [
      { hex: "#E1AD01", rgb: "225, 173, 1", cmyk: "0, 23, 100, 12" },
      { hex: "#A52A2A", rgb: "165, 42, 42", cmyk: "0, 75, 75, 35" },
      { hex: "#FFF8DC", rgb: "255, 248, 220", cmyk: "0, 3, 14, 0" }
    ],
    tags: ["autumn", "warm", "cozy"]
  },
  // Palette 36 - Slate Blue, Mint Green, Blush Pink
  {
    id: 36,
    name: "Serene Harmony",
    colors: [
      { hex: "#6A5ACD", rgb: "106, 90, 205", cmyk: "48, 56, 0, 20" },
      { hex: "#98FB98", rgb: "152, 251, 152", cmyk: "39, 0, 39, 2" },
      { hex: "#FFB6C1", rgb: "255, 182, 193", cmyk: "0, 29, 24, 0" }
    ],
    tags: ["serene", "harmony", "soft"]
  },
  // Palette 37 - Deep Purple, Turquoise, Magenta
  {
    id: 37,
    name: "Electric Dreams",
    colors: [
      { hex: "#4B0082", rgb: "75, 0, 130", cmyk: "42, 100, 0, 49" },
      { hex: "#40E0D0", rgb: "64, 224, 208", cmyk: "71, 0, 7, 12" },
      { hex: "#FF00FF", rgb: "255, 0, 255", cmyk: "0, 100, 0, 0" }
    ],
    tags: ["electric", "vibrant", "bold"]
  },
  // Palette 38 - Olive, Terracotta, Cream
  {
    id: 38,
    name: "Mediterranean Villa",
    colors: [
      { hex: "#808000", rgb: "128, 128, 0", cmyk: "0, 0, 100, 50" },
      { hex: "#E2725B", rgb: "226, 114, 91", cmyk: "0, 50, 60, 11" },
      { hex: "#FFFAF0", rgb: "255, 250, 240", cmyk: "0, 2, 6, 0" }
    ],
    tags: ["mediterranean", "warm", "earthy"]
  },
  // Palette 39 - Navy, Powder Blue, White
  {
    id: 39,
    name: "Nautical Classic",
    colors: [
      { hex: "#000080", rgb: "0, 0, 128", cmyk: "100, 100, 0, 50" },
      { hex: "#B0E0E6", rgb: "176, 224, 230", cmyk: "23, 3, 0, 10" },
      { hex: "#FFFFFF", rgb: "255, 255, 255", cmyk: "0, 0, 0, 0" }
    ],
    tags: ["nautical", "classic", "clean"]
  },
  // Palette 40 - Forest Green, Burnt Orange, Cream
  {
    id: 40,
    name: "Autumn Forest",
    colors: [
      { hex: "#228B22", rgb: "34, 139, 34", cmyk: "76, 0, 76, 45" },
      { hex: "#CC5500", rgb: "204, 85, 0", cmyk: "0, 58, 100, 20" },
      { hex: "#FFF8E7", rgb: "255, 248, 231", cmyk: "0, 3, 9, 0" }
    ],
    tags: ["autumn", "forest", "natural"]
  },
  // Palette 41 - Charcoal, Dusty Blue, Blush
  {
    id: 41,
    name: "Modern Elegance",
    colors: [
      { hex: "#36454F", rgb: "54, 69, 79", cmyk: "32, 13, 0, 69" },
      { hex: "#8CBED6", rgb: "140, 190, 214", cmyk: "35, 11, 0, 16" },
      { hex: "#F3CFC6", rgb: "243, 207, 198", cmyk: "0, 15, 19, 5" }
    ],
    tags: ["modern", "elegant", "sophisticated"]
  },
  // Palette 42 - Deep Teal, Copper, Cream
  {
    id: 42,
    name: "Copper Patina",
    colors: [
      { hex: "#004E64", rgb: "0, 78, 100", cmyk: "100, 22, 0, 61" },
      { hex: "#B87333", rgb: "184, 115, 51", cmyk: "0, 38, 72, 28" },
      { hex: "#FFF8E1", rgb: "255, 248, 225", cmyk: "0, 3, 12, 0" }
    ],
    tags: ["copper", "patina", "rich"]
  },
  // Palette 43 - Plum, Sage, Cream
  {
    id: 43,
    name: "Vineyard Harvest",
    colors: [
      { hex: "#673147", rgb: "103, 49, 71", cmyk: "0, 52, 31, 60" },
      { hex: "#9CAF88", rgb: "156, 175, 136", cmyk: "11, 0, 22, 31" },
      { hex: "#F8F0E3", rgb: "248, 240, 227", cmyk: "0, 3, 8, 3" }
    ],
    tags: ["vineyard", "harvest", "earthy"]
  },
  // Palette 44 - Sky Blue, Sunshine Yellow, Cloud White
  {
    id: 44,
    name: "Summer Day",
    colors: [
      { hex: "#87CEEB", rgb: "135, 206, 235", cmyk: "43, 12, 0, 8" },
      { hex: "#FFD700", rgb: "255, 215, 0", cmyk: "0, 16, 100, 0" },
      { hex: "#F0F8FF", rgb: "240, 248, 255", cmyk: "6, 3, 0, 0" }
    ],
    tags: ["summer", "bright", "cheerful"]
  },
  // Palette 45 - Emerald, Gold, Ruby
  {
    id: 45,
    name: "Precious Gems",
    colors: [
      { hex: "#50C878", rgb: "80, 200, 120", cmyk: "60, 0, 40, 22" },
      { hex: "#FFD700", rgb: "255, 215, 0", cmyk: "0, 16, 100, 0" },
      { hex: "#E0115F", rgb: "224, 17, 95", cmyk: "0, 92, 58, 12" }
    ],
    tags: ["gems", "precious", "vibrant"]
  },
  // Palette 46 - Slate Gray, Dusty Rose, Cream
  {
    id: 46,
    name: "Vintage Charm",
    colors: [
      { hex: "#708090", rgb: "112, 128, 144", cmyk: "22, 11, 0, 44" },
      { hex: "#D8A7B1", rgb: "216, 167, 177", cmyk: "0, 23, 18, 15" },
      { hex: "#FFF8DC", rgb: "255, 248, 220", cmyk: "0, 3, 14, 0" }
    ],
    tags: ["vintage", "charm", "soft"]
  },
  // Palette 47 - Navy, Coral, Mint
  {
    id: 47,
    name: "Coastal Retreat",
    colors: [
      { hex: "#000080", rgb: "0, 0, 128", cmyk: "100, 100, 0, 50" },
      { hex: "#FF7F50", rgb: "255, 127, 80", cmyk: "0, 50, 69, 0" },
      { hex: "#98FB98", rgb: "152, 251, 152", cmyk: "39, 0, 39, 2" }
    ],
    tags: ["coastal", "retreat", "fresh"]
  },
  // Palette 48 - Burgundy, Forest Green, Gold
  {
    id: 48,
    name: "Holiday Tradition",
    colors: [
      { hex: "#800020", rgb: "128, 0, 32", cmyk: "0, 100, 75, 50" },
      { hex: "#014421", rgb: "1, 68, 33", cmyk: "99, 0, 51, 73" },
      { hex: "#FFD700", rgb: "255, 215, 0", cmyk: "0, 16, 100, 0" }
    ],
    tags: ["holiday", "traditional", "festive"]
  },
  // Palette 49 - Lavender, Periwinkle, Lilac
  {
    id: 49,
    name: "Purple Haze",
    colors: [
      { hex: "#E6E6FA", rgb: "230, 230, 250", cmyk: "8, 8, 0, 2" },
      { hex: "#CCCCFF", rgb: "204, 204, 255", cmyk: "20, 20, 0, 0" },
      { hex: "#C8A2C8", rgb: "200, 162, 200", cmyk: "0, 19, 0, 22" }
    ],
    tags: ["purple", "soft", "dreamy"]
  },
  // Palette 50 - Charcoal, Silver, Ice Blue
  {
    id: 50,
    name: "Winter Frost",
    colors: [
      { hex: "#36454F", rgb: "54, 69, 79", cmyk: "32, 13, 0, 69" },
      { hex: "#C0C0C0", rgb: "192, 192, 192", cmyk: "0, 0, 0, 25" },
      { hex: "#F0F8FF", rgb: "240, 248, 255", cmyk: "6, 3, 0, 0" }
    ],
    tags: ["winter", "frost", "cool"]
  },
  // Palette 51 - Mocha, Cream, Dusty Rose
  {
    id: 51,
    name: "Café Comfort",
    colors: [
      { hex: "#3C280D", rgb: "60, 40, 13", cmyk: "0, 33, 78, 76" },
      { hex: "#FFF8E1", rgb: "255, 248, 225", cmyk: "0, 3, 12, 0" },
      { hex: "#D8A7B1", rgb: "216, 167, 177", cmyk: "0, 23, 18, 15" }
    ],
    tags: ["café", "comfort", "warm"]
  },
  // Palette 52 - Teal, Coral, Navy
  {
    id: 52,
    name: "Ocean Sunset",
    colors: [
      { hex: "#008080", rgb: "0, 128, 128", cmyk: "100, 0, 0, 50" },
      { hex: "#FF7F50", rgb: "255, 127, 80", cmyk: "0, 50, 69, 0" },
      { hex: "#000080", rgb: "0, 0, 128", cmyk: "100, 100, 0, 50" }
    ],
    tags: ["ocean", "sunset", "vibrant"]
  },
  // Palette 53 - Sage, Terracotta, Cream
  {
    id: 53,
    name: "Desert Oasis",
    colors: [
      { hex: "#9CAF88", rgb: "156, 175, 136", cmyk: "11, 0, 22, 31" },
      { hex: "#E2725B", rgb: "226, 114, 91", cmyk: "0, 50, 60, 11" },
      { hex: "#FFF8E7", rgb: "255, 248, 231", cmyk: "0, 3, 9, 0" }
    ],
    tags: ["desert", "oasis", "warm"]
  },
  // Palette 54 - Midnight Blue, Electric Blue, Aqua
  {
    id: 54,
    name: "Deep Ocean",
    colors: [
      { hex: "#191970", rgb: "25, 25, 112", cmyk: "78, 78, 0, 56" },
      { hex: "#0000FF", rgb: "0, 0, 255", cmyk: "100, 100, 0, 0" },
      { hex: "#00FFFF", rgb: "0, 255, 255", cmyk: "100, 0, 0, 0" }
    ],
    tags: ["ocean", "deep", "blue"]
  },
  // Palette 55 - Forest Green, Moss Green, Cream
  {
    id: 55,
    name: "Forest Retreat",
    colors: [
      { hex: "#228B22", rgb: "34, 139, 34", cmyk: "76, 0, 76, 45" },
      { hex: "#8FBC8F", rgb: "143, 188, 143", cmyk: "24, 0, 24, 26" },
      { hex: "#FFF8DC", rgb: "255, 248, 220", cmyk: "0, 3, 14, 0" }
    ],
    tags: ["forest", "retreat", "natural"]
  },
  // Palette 56 - Plum, Lavender, White
  {
    id: 56,
    name: "Lavender Fields",
    colors: [
      { hex: "#673147", rgb: "103, 49, 71", cmyk: "0, 52, 31, 60" },
      { hex: "#E6E6FA", rgb: "230, 230, 250", cmyk: "8, 8, 0, 2" },
      { hex: "#FFFFFF", rgb: "255, 255, 255", cmyk: "0, 0, 0, 0" }
    ],
    tags: ["lavender", "fields", "purple"]
  },
  // Palette 57 - Rust, Mustard, Cream
  {
    id: 57,
    name: "Autumn Spice",
    colors: [
      { hex: "#A52A2A", rgb: "165, 42, 42", cmyk: "0, 75, 75, 35" },
      { hex: "#E1AD01", rgb: "225, 173, 1", cmyk: "0, 23, 100, 12" },
      { hex: "#FFF8E7", rgb: "255, 248, 231", cmyk: "0, 3, 9, 0" }
    ],
    tags: ["autumn", "spice", "warm"]
  },
  // Palette 58 - Charcoal, Dusty Blue, Blush
  {
    id: 58,
    name: "Urban Sophistication",
    colors: [
      { hex: "#36454F", rgb: "54, 69, 79", cmyk: "32, 13, 0, 69" },
      { hex: "#8CBED6", rgb: "140, 190, 214", cmyk: "35, 11, 0, 16" },
      { hex: "#F3CFC6", rgb: "243, 207, 198", cmyk: "0, 15, 19, 5" }
    ],
    tags: ["urban", "sophisticated", "modern"]
  },
  // Palette 59 - Emerald, Gold, Burgundy
  {
    id: 59,
    name: "Royal Luxury",
    colors: [
      { hex: "#50C878", rgb: "80, 200, 120", cmyk: "60, 0, 40, 22" },
      { hex: "#FFD700", rgb: "255, 215, 0", cmyk: "0, 16, 100, 0" },
      { hex: "#800020", rgb: "128, 0, 32", cmyk: "0, 100, 75, 50" }
    ],
    tags: ["royal", "luxury", "rich"]
  },
  // Palette 60 - Sky Blue, Cloud White, Grass Green
  {
    id: 60,
    name: "Spring Meadow",
    colors: [
      { hex: "#87CEEB", rgb: "135, 206, 235", cmyk: "43, 12, 0, 8" },
      { hex: "#F0F8FF", rgb: "240, 248, 255", cmyk: "6, 3, 0, 0" },
      { hex: "#7CFC00", rgb: "124, 252, 0", cmyk: "51, 0, 100, 1" }
    ],
    tags: ["spring", "meadow", "fresh"]
  },
  // Palette 61 - Mocha Mousse, Honeyed Neutral, Ruby Red
  {
    id: 61,
    name: "Rich Contrast",
    colors: [
      { hex: "#3C280D", rgb: "60, 40, 13", cmyk: "0, 33, 78, 76" },
      { hex: "#D0B49F", rgb: "208, 180, 159", cmyk: "0, 13, 24, 18" },
      { hex: "#E0115F", rgb: "224, 17, 95", cmyk: "0, 92, 58, 12" }
    ],
    tags: ["rich", "contrast", "sophisticated"]
  },
  // Palette 62 - Dusty Rose, Cherry Red, Butter Yellow
  {
    id: 62,
    name: "Warm Elegance",
    colors: [
      { hex: "#D8A7B1", rgb: "216, 167, 177", cmyk: "0, 23, 18, 15" },
      { hex: "#A22522", rgb: "162, 37, 34", cmyk: "0, 77, 79, 36" },
      { hex: "#F3DE8A", rgb: "243, 222, 138", cmyk: "0, 9, 43, 5" }
    ],
    tags: ["warm", "elegant", "sophisticated"]
  },
  // Palette 63 - Khaki, Pale Blue, White
  {
    id: 63,
    name: "Coastal Breeze",
    colors: [
      { hex: "#BFB48F", rgb: "191, 180, 143", cmyk: "0, 6, 25, 25" },
      { hex: "#A4C2F4", rgb: "164, 194, 244", cmyk: "33, 20, 0, 4" },
      { hex: "#FFFFFF", rgb: "255, 255, 255", cmyk: "0, 0, 0, 0" }
    ],
    tags: ["coastal", "breeze", "light"]
  },
  // Palette 64 - Terracotta, White, Sage
  {
    id: 64,
    name: "Tuscan Summer",
    colors: [
      { hex: "#CD5D31", rgb: "205, 93, 49", cmyk: "0, 55, 76, 20" },
      { hex: "#FFFFFF", rgb: "255, 255, 255", cmyk: "0, 0, 0, 0" },
      { hex: "#8A9A5B", rgb: "138, 154, 91", cmyk: "10, 0, 41, 40" }
    ],
    tags: ["tuscan", "summer", "warm"]
  },
  // Palette 65 - Ruby Red, Emerald Green, Sapphire Blue
  {
    id: 65,
    name: "Classic Jewels",
    colors: [
      { hex: "#E0115F", rgb: "224, 17, 95", cmyk: "0, 92, 58, 12" },
      { hex: "#046307", rgb: "4, 99, 7", cmyk: "96, 0, 93, 61" },
      { hex: "#0F52BA", rgb: "15, 82, 186", cmyk: "92, 56, 0, 27" }
    ],
    tags: ["jewels", "classic", "rich"]
  },
  // Palette 66 - Honeyed Neutrals, Serene Blue, Ruby Red
  {
    id: 66,
    name: "Balanced Beauty",
    colors: [
      { hex: "#D0B49F", rgb: "208, 180, 159", cmyk: "0, 13, 24, 18" },
      { hex: "#4A6D7C", rgb: "74, 109, 124", cmyk: "40, 12, 0, 51" },
      { hex: "#C32148", rgb: "195, 33, 72", cmyk: "0, 83, 63, 24" }
    ],
    tags: ["balanced", "beauty", "sophisticated"]
  },
  // Palette 67 - Mint Green, Coral, Navy Blue
  {
    id: 67,
    name: "Seaside Sunset",
    colors: [
      { hex: "#98D7C2", rgb: "152, 215, 194", cmyk: "29, 0, 10, 16" },
      { hex: "#FF7F50", rgb: "255, 127, 80", cmyk: "0, 50, 69, 0" },
      { hex: "#1B365D", rgb: "27, 54, 93", cmyk: "71, 42, 0, 64" }
    ],
    tags: ["seaside", "sunset", "contrast"]
  },
  // Palette 68 - Lavender, Mint, Peach
  {
    id: 68,
    name: "Pastel Dream",
    colors: [
      { hex: "#D8B4E2", rgb: "216, 180, 226", cmyk: "4, 20, 0, 11" },
      { hex: "#B2EBD6", rgb: "178, 235, 214", cmyk: "24, 0, 9, 8" },
      { hex: "#FFD8BE", rgb: "255, 216, 190", cmyk: "0, 15, 25, 0" }
    ],
    tags: ["pastel", "dream", "soft"]
  },
  // Palette 69 - Charcoal, Teal, Coral
  {
    id: 69,
    name: "Modern Pop",
    colors: [
      { hex: "#2F4550", rgb: "47, 69, 80", cmyk: "41, 14, 0, 69" },
      { hex: "#2E8B99", rgb: "46, 139, 153", cmyk: "70, 9, 0, 40" },
      { hex: "#F26D5B", rgb: "242, 109, 91", cmyk: "0, 55, 62, 5" }
    ],
    tags: ["modern", "pop", "bold"]
  },
  // Palette 70 - Forest Green, Mustard Yellow, Burgundy
  {
    id: 70,
    name: "Autumn Harvest",
    colors: [
      { hex: "#2C5F2D", rgb: "44, 95, 45", cmyk: "54, 0, 53, 63" },
      { hex: "#FFB30F", rgb: "255, 179, 15", cmyk: "0, 30, 94, 0" },
      { hex: "#97033F", rgb: "151, 3, 63", cmyk: "0, 98, 58, 41" }
    ],
    tags: ["autumn", "harvest", "rich"]
  },
  // Palette 71 - Indigo, Turquoise, Hot Pink
  {
    id: 71,
    name: "Electric Fusion",
    colors: [
      { hex: "#4B0082", rgb: "75, 0, 130", cmyk: "42, 100, 0, 49" },
      { hex: "#40E0D0", rgb: "64, 224, 208", cmyk: "71, 0, 7, 12" },
      { hex: "#FF69B4", rgb: "255, 105, 180", cmyk: "0, 59, 29, 0" }
    ],
    tags: ["electric", "fusion", "vibrant"]
  },
  // Palette 72 - Olive Green, Cream, Terracotta
  {
    id: 72,
    name: "Mediterranean Warmth",
    colors: [
      { hex: "#708238", rgb: "112, 130, 56", cmyk: "14, 0, 57, 49" },
      { hex: "#FFF8E7", rgb: "255, 248, 231", cmyk: "0, 3, 9, 0" },
      { hex: "#C35831", rgb: "195, 88, 49", cmyk: "0, 55, 75, 24" }
    ],
    tags: ["mediterranean", "warmth", "earthy"]
  },
  // Palette 73 - Slate Gray, Dusty Blue, Blush Pink
  {
    id: 73,
    name: "Soft Sophistication",
    colors: [
      { hex: "#708090", rgb: "112, 128, 144", cmyk: "22, 11, 0, 44" },
      { hex: "#B0C4DE", rgb: "176, 196, 222", cmyk: "21, 12, 0, 13" },
      { hex: "#F4C2C2", rgb: "244, 194, 194", cmyk: "0, 20, 20, 4" }
    ],
    tags: ["soft", "sophisticated", "elegant"]
  },
  // Palette 74 - Dark Chocolate, Caramel, Cream
  {
    id: 74,
    name: "Sweet Indulgence",
    colors: [
      { hex: "#3C1414", rgb: "60, 20, 20", cmyk: "0, 67, 67, 76" },
      { hex: "#C68E17", rgb: "198, 142, 23", cmyk: "0, 28, 88, 22" },
      { hex: "#FFF5E1", rgb: "255, 245, 225", cmyk: "0, 4, 12, 0" }
    ],
    tags: ["sweet", "indulgence", "warm"]
  },
  // Palette 75 - Navy Blue, Seafoam Green, Coral Pink
  {
    id: 75,
    name: "Coastal Charm",
    colors: [
      { hex: "#003366", rgb: "0, 51, 102", cmyk: "100, 50, 0, 60" },
      { hex: "#A7E8BD", rgb: "167, 232, 189", cmyk: "28, 0, 19, 9" },
      { hex: "#FF9999", rgb: "255, 153, 153", cmyk: "0, 40, 40, 0" }
    ],
    tags: ["coastal", "charm", "fresh"]
  }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { colorPalettes };
}
