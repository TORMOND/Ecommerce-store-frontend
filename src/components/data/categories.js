import  {
furniture,
medicalEquipment,
stationary,
clothes,
buildingmaterials,
safetyTools,
solar,
fertilizers,
pipes,
hardware,
camera,
electronics
}
from '../../assets'

const allCategories = [
          {categoryName: "Electronics",
           items: 45,
           id: 1,
           img: electronics
          },
          {categoryName: "Solar",
           items: 45,
           id: 2,
           img:solar
          },
          {categoryName: "Plumbing",
           items: 45,
           id: 3,
           img:pipes
          },
          {categoryName: "Medical Equipments",
           items: 45,
           id: 4,
           img:medicalEquipment
          },
          {categoryName: "Hardware",
           items: 45,
           id: 5,
           img:hardware
          },
          {categoryName: "Building Materials",
           items: 45,
           id: 6,
           img:buildingmaterials
          },
          {categoryName: "furniture",
           items: 45,
           id: 7,
           img:furniture
          },
          {categoryName: "Safety",
           items: 45,
           id: 8,
           img:safetyTools
          },
          {categoryName: "Security",
           items: 45,
           id: 9,
           img:camera
          },
          {categoryName: "Food",
           items: 45,
           id: 10,
           img:fertilizers
          },
          {categoryName: "Stationary",
           items: 45,
           id: 11,
           img:stationary
          },
          {categoryName: "Clothes",
           items: 45,
           id: 12,
           img:clothes
          },

]

// SOLAR PRODUCTS

const solarProducts = [
  {
    "item": "Solar Panel",
    "itemID": "SP001",
    "description": "High-efficiency solar panel for generating clean energy.",
    "price": 199.99,
    "categoryName": "Solar Products"
  },
  {
    "item": "Solar Charger",
    "itemID": "SC002",
    "description": "Portable solar charger for recharging electronic devices on the go.",
    "price": 49.99,
    "categoryName": "Solar Products"
  },
  {
    "item": "Solar Lantern",
    "itemID": "SL003",
    "description": "Solar-powered lantern for outdoor lighting.",
    "price": 29.99,
    "categoryName": "Solar Products"
  },
  {
    "item": "Solar Water Heater",
    "itemID": "SWH004",
    "description": "Efficient solar water heater for domestic use.",
    "price": 299.99,
    "categoryName": "Solar Products"
  },
  {
    "item": "Solar Power Bank",
    "itemID": "SPB005",
    "description": "Portable power bank with built-in solar panels.",
    "price": 69.99,
    "categoryName": "Solar Products"
  },
  {
    "item": "Solar Garden Lights",
    "itemID": "SGL006",
    "description": "Decorative lights powered by solar energy for your garden.",
    "price": 19.99,
    "categoryName": "Solar Products"
  },
  {
    "item": "Solar Backpack",
    "itemID": "SB007",
    "description": "Backpack with integrated solar panel for charging electronic devices.",
    "price": 79.99,
    "categoryName": "Solar Products"
  },
  {
    "item": "Solar Ventilation Fan",
    "itemID": "SVF008",
    "description": "Solar-powered fan for better ventilation in enclosed spaces.",
    "price": 39.99,
    "categoryName": "Solar Products"
  },
  {
    "item": "Solar Inverter",
    "itemID": "SI009",
    "description": "Inverter for converting solar energy into usable electricity.",
    "price": 149.99,
    "categoryName": "Solar Products"
  },
  {
    "item": "Solar Water Pump",
    "itemID": "SWP010",
    "description": "Solar-powered pump for irrigation and water circulation.",
    "price": 249.99,
    "categoryName": "Solar Products"
  },
  {
    "item": "Solar Street Light",
    "itemID": "SSL011",
    "description": "Street light powered by solar energy, ideal for public areas.",
    "price": 159.99,
    "categoryName": "Solar Products"
  },
  {
    "item": "Solar Cooker",
    "itemID": "SC012",
    "description": "Cooking appliance that uses solar energy for preparing food.",
    "price": 89.99,
    "categoryName": "Solar Products"
  },
  {
    "item": "Solar Air Conditioner",
    "itemID": "SAC013",
    "description": "Air conditioner running on solar power, reducing energy consumption.",
    "price": 799.99,
    "categoryName": "Solar Products"
  },
  {
    "item": "Solar Fountain",
    "itemID": "SF014",
    "description": "Water fountain powered by solar energy, suitable for gardens or ponds.",
    "price": 129.99,
    "categoryName": "Solar Products"
  },
  {
    "item": "Solar Roof Tiles",
    "itemID": "SRT015",
    "description": "Roof tiles embedded with solar cells, blending aesthetics with energy generation.",
    "price": 299.99,
    "categoryName": "Solar Products"
  },
  {
    "item": "Solar Bluetooth Speaker",
    "itemID": "SBS016",
    "description": "Wireless Bluetooth speaker with integrated solar panel for charging.",
    "price": 59.99,
    "categoryName": "Solar Products"
  },
  {
    "item": "Solar Vent",
    "itemID": "SV017",
    "description": "Solar-powered ventilation system for improved air circulation indoors.",
    "price": 69.99,
    "categoryName": "Solar Products"
  },
  {
    "item": "Solar Security Camera",
    "itemID": "SSC018",
    "description": "Security camera powered by solar energy, ideal for remote locations.",
    "price": 199.99,
    "categoryName": "Solar Products"
  },
  {
    "item": "Solar Motion Sensor Light",
    "itemID": "SMSL019",
    "description": "Motion-activated solar-powered light for enhanced security.",
    "price": 34.99,
    "categoryName": "Solar Products"
  },
  {
    "item": "Solar Electric Fence",
    "itemID": "SEF020",
    "description": "Electric fence energized by solar power, used for animal containment.",
    "price": 149.99,
    "categoryName": "Solar Products"
  }
]

// PLUMBING

const plumbingProducts = [
    {
      "item": "Faucet",
      "itemID": "FCT001",
      "description": "High-quality faucet for sinks and showers.",
      "price": 79.99,
      "categoryName": "Plumbing Products"
    },
    {
      "item": "Toilet",
      "itemID": "TOL002",
      "description": "Efficient and durable toilet for residential or commercial use.",
      "price": 199.99,
      "categoryName": "Plumbing Products"
    },
    {
      "item": "Sink",
      "itemID": "SNK003",
      "description": "Stylish and functional sink for kitchens and bathrooms.",
      "price": 149.99,
      "categoryName": "Plumbing Products"
    },
    {
      "item": "Shower Head",
      "itemID": "SH003",
      "description": "Shower head with adjustable settings for a refreshing shower experience.",
      "price": 39.99,
      "categoryName": "Plumbing Products"
    },
    {
      "item": "Pipe Fittings",
      "itemID": "PF004",
      "description": "Various fittings for connecting pipes and creating plumbing systems.",
      "price": 9.99,
      "categoryName": "Plumbing Products"
    },
    {
      "item": "Water Heater",
      "itemID": "WH005",
      "description": "Efficient water heater for providing hot water in residential or commercial settings.",
      "price": 299.99,
      "categoryName": "Plumbing Products"
    },
    {
      "item": "Sump Pump",
      "itemID": "SP006",
      "description": "Pump used to remove water from basements or crawl spaces.",
      "price": 149.99,
      "categoryName": "Plumbing Products"
    },
    {
      "item": "Plunger",
      "itemID": "PLG007",
      "description": "Basic tool for unclogging drains and toilets.",
      "price": 4.99,
      "categoryName": "Plumbing Products"
    },
    {
      "item": "Bidet",
      "itemID": "BDT008",
      "description": "Hygienic and eco-friendly device for personal cleansing.",
      "price": 99.99,
      "categoryName": "Plumbing Products"
    },
    {
      "item": "Water Filter",
      "itemID": "WF009",
      "description": "Filtering system for improving the quality of drinking water.",
      "price": 79.99,
      "categoryName": "Plumbing Products"
    },
    {
      "item": "Plumbing Snake",
      "itemID": "PS010",
      "description": "Flexible tool used for clearing clogged drains.",
      "price": 24.99,
      "categoryName": "Plumbing Products"
    },
    {
      "item": "Garbage Disposal",
      "itemID": "GD011",
      "description": "Device for grinding food waste and disposing it through the plumbing system.",
      "price": 149.99,
      "categoryName": "Plumbing Products"
    },
    {
      "item": "Piping",
      "itemID": "PP012",
      "description": "Durable and corrosion-resistant pipes for plumbing installations.",
      "price": 49.99,
      "categoryName": "Plumbing Products"
    },
    {
      "item": "Shower Enclosure",
      "itemID": "SE013",
      "description": "Enclosure for showers, providing privacy and preventing water leakage.",
      "price": 399.99,
      "categoryName": "Plumbing Products"
    },
    {
      "item": "Drain Cover",
      "itemID": "DC014",
      "description": "Cover for drains, preventing debris from clogging the plumbing system.",
      "price": 9.99,
      "categoryName": "Plumbing Products"
    },
    {
      "item": "Water Pressure Regulator",
      "itemID": "WPR015",
      "description": "Regulator for controlling water pressure in the plumbing system.",
      "price": 29.99,
      "categoryName": "Plumbing Products"
    },
    {
      "item": "Shower Valve",
      "itemID": "SV016",
      "description": "Valve used to control the flow and temperature of water in showers.",
      "price": 59.99,
      "categoryName": "Plumbing Products"
    },
    {
      "item": "Plumbing Wrench",
      "itemID": "PW017",
      "description": "Adjustable wrench for tightening or loosening plumbing fittings.",
      "price": 14.99,
      "categoryName": "Plumbing Products"
    },
    {
      "item": "Toilet Seat",
      "itemID": "TS018",
      "description": "Comfortable and durable seat for toilets.",
      "price": 34.99,
      "categoryName": "Plumbing Products"
    },
    {
      "item": "Laundry Sink",
      "itemID": "LS019",
      "description": "Sink designed for laundry rooms, facilitating washing and cleaning tasks.",
      "price": 199.99,
      "categoryName": "Plumbing Products"
    },
    {
      "item": "Plumbing Tape",
      "itemID": "PT020",
      "description": "Tape used for sealing and preventing leaks in plumbing connections.",
      "price": 5.99,
      "categoryName": "Plumbing Products"
    }
  ]

  //MEDICAL SUPPLIES
  

  const medicalEquipments = [
    {
      "item": "Digital Thermometer",
      "itemID": "DT001",
      "description": "Accurate and easy-to-use digital thermometer for measuring body temperature.",
      "price": 19.99,
      "categoryName": "Medical Products"
    },
    {
      "item": "Blood Pressure Monitor",
      "itemID": "BPM002",
      "description": "Device for measuring blood pressure at home or in medical settings.",
      "price": 49.99,
      "categoryName": "Medical Products"
    },
    {
      "item": "Pulse Oximeter",
      "itemID": "PO003",
      "description": "Portable device for measuring oxygen saturation and pulse rate.",
      "price": 39.99,
      "categoryName": "Medical Products"
    },
    {
      "item": "Stethoscope",
      "itemID": "STH004",
      "description": "Instrument used by medical professionals for auscultation and monitoring.",
      "price": 29.99,
      "categoryName": "Medical Products"
    },
    {
      "item": "Medical Face Mask",
      "itemID": "MFM005",
      "description": "Protective mask designed to prevent the spread of airborne particles.",
      "price": 9.99,
      "categoryName": "Medical Products"
    },
    {
      "item": "Gloves",
      "itemID": "GLV006",
      "description": "Disposable gloves for maintaining hygiene and preventing cross-contamination.",
      "price": 14.99,
      "categoryName": "Medical Products"
    },
    {
      "item": "Surgical Mask",
      "itemID": "SM007",
      "description": "High-quality mask used in surgical procedures for both patients and healthcare providers.",
      "price": 19.99,
      "categoryName": "Medical Products"
    },
    {
      "item": "Medical Gown",
      "itemID": "MG008",
      "description": "Protective gown worn by healthcare professionals to maintain a sterile environment.",
      "price": 39.99,
      "categoryName": "Medical Products"
    },
    {
      "item": "Wheelchair",
      "itemID": "WC009",
      "description": "Mobility device for individuals with limited mobility or disabilities.",
      "price": 199.99,
      "categoryName": "Medical Products"
    },
]

// BUILDING MATERIALS

const buildingMaterials =[
    {
      "item": "Bricks",
      "itemID": "BRK001",
      "description": "Solid blocks used for constructing walls, pavements, and other structures.",
      "price": 0.99,
      "categoryName": "Building Materials"
    },
    {
      "item": "Cement",
      "itemID": "CMNT002",
      "description": "Binding material used for creating strong and durable structures.",
      "price": 9.99,
      "categoryName": "Building Materials"
    },
    {
      "item": "Concrete Blocks",
      "itemID": "CB003",
      "description": "Hollow blocks made of concrete, commonly used in construction.",
      "price": 2.99,
      "categoryName": "Building Materials"
    },
    {
      "item": "Lumber",
      "itemID": "LM004",
      "description": "Wood material used for framing, flooring, and other structural components.",
      "price": 19.99,
      "categoryName": "Building Materials"
    },
    {
      "item": "Roofing Shingles",
      "itemID": "RS005",
      "description": "Covering material for roofs, providing protection against weather elements.",
      "price": 29.99,
      "categoryName": "Building Materials"
    },
    {
      "item": "Plywood",
      "itemID": "PLY006",
      "description": "Thin sheets of wood glued together, commonly used for construction purposes.",
      "price": 12.99,
      "categoryName": "Building Materials"
    },
    {
      "item": "Drywall",
      "itemID": "DW007",
      "description": "Panel made of gypsum plaster and paper, used for interior walls and ceilings.",
      "price": 8.99,
      "categoryName": "Building Materials"
    },
    {
      "item": "Insulation",
      "itemID": "INS008",
      "description": "Material used to prevent heat transfer, improving energy efficiency.",
      "price": 14.99,
      "categoryName": "Building Materials"
    },
    {
      "item": "Rebar",
      "itemID": "RB009",
      "description": "Steel reinforcement bars used in concrete structures for added strength.",
      "price": 6.99,
      "categoryName": "Building Materials"
    },
    {
      "item": "Windows",
      "itemID": "WN010",
      "description": "Framed openings with glass panes, providing light and ventilation.",
      "price": 99.99,
      "categoryName": "Building Materials"
    },
    {
      "item": "Doors",
      "itemID": "DR011",
      "description": "Entrance or interior doors, serving as access points and providing security.",
      "price": 79.99,
      "categoryName": "Building Materials"
    },
    {
      "item": "Tiles",
      "itemID": "TLE012",
      "description": "Flat or curved pieces used for covering surfaces such as floors, walls, and roofs.",
      "price": 2.49,
      "categoryName": "Building Materials"
    },
    {
      "item": "Plumbing Pipes",
      "itemID": "PP013",
      "description": "Tubes used for conveying water, gas, or other fluids in plumbing systems.",
      "price": 4.99,
      "categoryName": "Building Materials"
    },
    {
      "item": "Electrical Wiring",
      "itemID": "EW014",
      "description": "Conducting material used to carry electrical currents within buildings.",
      "price": 0.99,
      "categoryName": "Building Materials"
    },
    {
      "item": "Paint",
      "itemID": "PNT015",
      "description": "Liquid coating used for protecting and decorating surfaces.",
      "price": 24.99,
      "categoryName": "Building Materials"
    },
    {
      "item": "Screws",
      "itemID": "SCR016",
      "description": "Fasteners used to join materials together, typically made of metal.",
      "price": 0.25,
      "categoryName": "Building Materials"
    },
    {
      "item": "Nails",
      "itemID": "NL017",
      "description": "Small metal spikes used to fasten materials together.",
      "price": 0.10,
      "categoryName": "Building Materials"
    },
    {
      "item": "Plaster",
      "itemID": "PST018",
      "description": "Mixture of gypsum, lime, and sand, used for coating walls and ceilings.",
      "price": 9.99,
      "categoryName": "Building Materials"
    },
    {
      "item": "Siding",
      "itemID": "SD019",
      "description": "Exterior wall covering material, providing protection and aesthetic appeal.",
      "price": 19.99,
      "categoryName": "Building Materials"
    },
    {
      "item": "Caulk",
      "itemID": "CK020",
      "description": "Sealant used to fill gaps and cracks in buildings, preventing air and water leaks.",
      "price": 6.99,
      "categoryName": "Building Materials"
    },
    {
      "item": "Adhesive",
      "itemID": "ADH021",
      "description": "Substance used to bind materials together, such as wood, tile, or metal.",
      "price": 7.99,
      "categoryName": "Building Materials"
    },
    {
      "item": "Sand",
      "itemID": "SD022",
      "description": "Granular material used in various construction applications, such as concrete.",
      "price": 2.99,
      "categoryName": "Building Materials"
    },
    {
      "item": "Gravel",
      "itemID": "GRV023",
      "description": "Coarse fragments of rock used in construction, such as for driveways or foundations.",
      "price": 4.99,
      "categoryName": "Building Materials"
    },
    {
      "item": "PVC Pipes",
      "itemID": "PVCP024",
      "description": "Plastic pipes made of polyvinyl chloride, commonly used for plumbing and drainage.",
      "price": 3.49,
      "categoryName": "Building Materials"
    },
    {
      "item": "Insulated Panels",
      "itemID": "IP025",
      "description": "Composite panels with insulating foam core, used for walls and roofs.",
      "price": 39.99,
      "categoryName": "Building Materials"
    },
    {
      "item": "Ceramic Floor Tiles",
      "itemID": "CFT026",
      "description": "Durable and stylish tiles specifically designed for flooring applications.",
      "price": 4.99,
      "categoryName": "Building Materials"
    },
]


// FURNITURE

const furnitureProducts = [
    {
      "item": "Sofa",
      "itemID": "SF001",
      "description": "Comfortable seating furniture for the living room.",
      "price": 499.99,
      "categoryName": "Furniture",
      "image": "https://example.com/sofa.jpg",
      "url": "https://example.com/sofa"
    },
    {
      "item": "Dining Table",
      "itemID": "DT002",
      "description": "Table used for dining or gathering in the dining room or kitchen.",
      "price": 299.99,
      "categoryName": "Furniture",
      "image": "https://example.com/dining_table.jpg",
      "url": "https://example.com/dining_table"
    },
    {
      "item": "Bed Frame",
      "itemID": "BF003",
      "description": "Supportive structure for mattresses, providing a comfortable sleeping surface.",
      "price": 599.99,
      "categoryName": "Furniture",
      "image": "https://example.com/bed_frame.jpg",
      "url": "https://example.com/bed_frame"
    },
    {
      "item": "Wardrobe",
      "itemID": "WRD004",
      "description": "Large closet-like furniture for storing clothes and personal items.",
      "price": 699.99,
      "categoryName": "Furniture",
      "image": "https://example.com/wardrobe.jpg",
      "url": "https://example.com/wardrobe"
    },
    {
      "item": "Coffee Table",
      "itemID": "CT005",
      "description": "Low table placed in the living room, often used to hold drinks or display items.",
      "price": 199.99,
      "categoryName": "Furniture",
      "image": "https://example.com/coffee_table.jpg",
      "url": "https://example.com/coffee_table"
    },
    {
      "item": "Bookshelf",
      "itemID": "BS006",
      "description": "Shelving unit designed for storing and displaying books and other items.",
      "price": 249.99,
      "categoryName": "Furniture",
      "image": "https://example.com/bookshelf.jpg",
      "url": "https://example.com/bookshelf"
    },
    {
      "item": "TV Stand",
      "itemID": "TVS007",
      "description": "Furniture piece designed to hold a television and related equipment.",
      "price": 179.99,
      "categoryName": "Furniture",
      "image": "https://example.com/tv_stand.jpg",
      "url": "https://example.com/tv_stand"
    },
    {
      "item": "Desk",
      "itemID": "DSK008",
      "description": "Work surface furniture typically used for studying or working.",
      "price": 299.99,
      "categoryName": "Furniture",
      "image": "https://example.com/desk.jpg",
      "url": "https://example.com/desk"
    },
    {
      "item": "Armchair",
      "itemID": "AC009",
      "description": "Comfortable chair with armrests, suitable for relaxing or reading.",
      "price": 349.99,
      "categoryName": "Furniture",
      "image": "https://example.com/armchair.jpg",
      "url": "https://example.com/armchair"
    },
    {
      "item": "Dresser",
      "itemID": "DRS010",
      "description": "Chest of drawers used for storing clothes and personal items.",
      "price": 399.99,
      "categoryName": "Furniture",
      "image": "https://example.com/dresser.jpg",
      "url": "https://example.com/dresser"
    },
    {
      "item": "Side Table",
      "itemID": "ST011",
      "description": "Small table placed next to furniture pieces, providing additional surface.",
      "price": 129.99,
      "categoryName": "Furniture",
      "image": "https://example.com/side_table.jpg",
      "url": "https://example.com/side_table"
    },
    {
      "item": "Cabinet",
      "itemID": "CBT012",
      "description": "Storage furniture with doors or drawers, used for various purposes.",
      "price": 349.99,
      "categoryName": "Furniture",
      "image": "https://example.com/cabinet.jpg",
      "url": "https://example.com/cabinet"
    },
    {
      "item": "Shoe Rack",
      "itemID": "SR013",
      "description": "Furniture designed to organize and store shoes in an orderly manner.",
      "price": 79.99,
      "categoryName": "Furniture",
      "image": "https://example.com/shoe_rack.jpg",
      "url": "https://example.com/shoe_rack"
    },
    {
      "item": "Sleeper Sofa",
      "itemID": "SS014",
      "description": "Convertible sofa that can be transformed into a bed for guests.",
      "price": 799.99,
      "categoryName": "Furniture",
      "image": "https://example.com/sleeper_sofa.jpg",
      "url": "https://example.com/sleeper_sofa"
    },
    {
      "item": "Bar Stool",
      "itemID": "BST015",
      "description": "Tall chair used for seating at a bar or high countertop.",
      "price": 89.99,
      "categoryName": "Furniture",
      "image": "https://example.com/bar_stool.jpg",
      "url": "https://example.com/bar_stool"
    },
    {
      "item": "Bench",
      "itemID": "BNCH016",
      "description": "Long seat furniture piece often placed in entryways or outdoor areas.",
      "price": 149.99,
      "categoryName": "Furniture",
      "image": "https://example.com/bench.jpg",
      "url": "https://example.com/bench"
    },
    {
      "item": "Vanity Table",
      "itemID": "VT017",
      "description": "Table used for applying makeup and storing beauty products.",
      "price": 249.99,
      "categoryName": "Furniture",
      "image": "https://example.com/vanity_table.jpg",
      "url": "https://example.com/vanity_table"
    },
    {
      "item": "Rocking Chair",
      "itemID": "RC018",
      "description": "Chair with curved legs, allowing backward and forward rocking motion.",
      "price": 199.99,
      "categoryName": "Furniture",
      "image": "https://example.com/rocking_chair.jpg",
      "url": "https://example.com/rocking_chair"
    },
    {
      "item": "Folding Table",
      "itemID": "FT019",
      "description": "Collapsible table that can be easily stored or transported when not in use.",
      "price": 99.99,
      "categoryName": "Furniture",
      "image": "https://example.com/folding_table.jpg",
      "url": "https://example.com/folding_table"
    },
    {
      "item": "Bean Bag Chair",
      "itemID": "BBC020",
      "description": "Soft chair filled with small polystyrene beads, providing a relaxed seating experience.",
      "price": 79.99,
      "categoryName": "Furniture",
      "image": "https://example.com/bean_bag_chair.jpg",
      "url": "https://example.com/bean_bag_chair"
    },
    {
      "item": "Office Chair",
      "itemID": "OC021",
      "description": "Ergonomic chair designed for use in offices, providing comfort and support.",
      "price": 249.99,
      "categoryName": "Furniture",
      "image": "https://example.com/office_chair.jpg",
      "url": "https://example.com/office_chair"
    },
    {
      "item": "Console Table",
      "itemID": "CNT022",
      "description": "Narrow table often placed against a wall, used for displaying decorative items.",
      "price": 149.99,
      "categoryName": "Furniture",
      "image": "https://example.com/console_table.jpg",
      "url": "https://example.com/console_table"
    },
    {
      "item": "Patio Set",
      "itemID": "PTS023",
      "description": "Outdoor furniture set consisting of a table and chairs, suitable for patio or garden.",
      "price": 799.99,
      "categoryName": "Furniture",
      "image": "https://example.com/patio_set.jpg",
      "url": "https://example.com/patio_set"
    },
    {
      "item": "Buffet Table",
      "itemID": "BT024",
      "description": "Long, low cabinet used for serving and storing dining essentials.",
      "price": 399.99,
      "categoryName": "Furniture",
      "image": "https://example.com/buffet_table.jpg",
      "url": "https://example.com/buffet_table"
    },
    {
      "item": "Hanging Chair",
      "itemID": "HC025",
      "description": "Suspended chair designed for relaxing and swinging movements.",
      "price": 299.99,
      "categoryName": "Furniture",
      "image": "https://example.com/hanging_chair.jpg",
      "url": "https://example.com/hanging_chair"
    },
    {
      "item": "Couch",
      "itemID": "CH026",
      "description": "Plush seating furniture suitable for lounging and entertaining.",
      "price": 599.99,
      "categoryName": "Furniture",
      "image": "https://example.com/couch.jpg",
      "url": "https://example.com/couch"
    },
    {
      "item": "Bunk Bed",
      "itemID": "BB027",
      "description": "Two-tiered bed with one bed frame stacked on top of another.",
      "price": 799.99,
      "categoryName": "Furniture",
      "image": "https://example.com/bunk_bed.jpg",
      "url": "https://example.com/bunk_bed"
    },
    {
      "item": "Accent Chair",
      "itemID": "AC028",
      "description": "Stylish chair used to add visual interest and complement the overall decor.",
      "price": 299.99,
      "categoryName": "Furniture",
      "image": "https://example.com/accent_chair.jpg",
      "url": "https://example.com/accent_chair"
    },
    {
      "item": "Ottoman",
      "itemID": "OTM029",
      "description": "Padded footstool or low seat used for resting feet or additional seating.",
      "price": 149.99,
      "categoryName": "Furniture",
      "image": "https://example.com/ottoman.jpg",
      "url": "https://example.com/ottoman"
    },
    {
      "item": "Futon",
      "itemID": "FTN030",
      "description": "Convertible sofa that can be transformed into a bed.",
      "price": 399.99,
      "categoryName": "Furniture",
      "image": "https://example.com/futon.jpg",
      "url": "https://example.com/futon"
    },
    {
      "item": "Dressing Table",
      "itemID": "DT031",
      "description": "Table used for grooming, often equipped with a mirror and storage compartments.",
      "price": 199.99,
      "categoryName": "Furniture",
      "image": "https://example.com/dressing_table.jpg",
      "url": "https://example.com/dressing_table"
    },
    {
      "item": "Counter Stool",
      "itemID": "CS032",
      "description": "Tall chair used for seating at a kitchen counter or high table.",
      "price": 109.99,
      "categoryName": "Furniture",
      "image": "https://example.com/counter_stool.jpg",
      "url": "https://example.com/counter_stool"
    },
    {
      "item": "Credenza",
      "itemID": "CDZ033",
      "description": "Long, low cabinet used for storage or displaying decorative items.",
      "price": 349.99,
      "categoryName": "Furniture",
      "image": "https://example.com/credenza.jpg",
      "url": "https://example.com/credenza"
    },
    {
      "item": "Gaming Chair",
      "itemID": "GC034",
      "description": "Ergonomic chair designed for comfortable gaming sessions.",
      "price": 299.99,
      "categoryName": "Furniture",
      "image": "https://example.com/gaming_chair.jpg",
      "url": "https://example.com/gaming_chair"
    },
    {
      "item": "Vanity Mirror",
      "itemID": "VM035",
      "description": "Mirror used for personal grooming, often accompanied by lights or magnification.",
      "price": 79.99,
      "categoryName": "Furniture",
      "image": "https://example.com/vanity_mirror.jpg",
      "url": "https://example.com/vanity_mirror"
    },
    {
      "item": "Pouf",
      "itemID": "PF036",
      "description": "Low seat or footrest without a backrest, typically stuffed and upholstered.",
      "price": 69.99,
      "categoryName": "Furniture",
      "image": "https://example.com/pouf.jpg",
      "url": "https://example.com/pouf"
    },
    {
      "item": "Hall Tree",
      "itemID": "HT037",
      "description": "Furniture piece used for hanging coats, hats, and storing other outdoor accessories.",
      "price": 199.99,
      "categoryName": "Furniture",
      "image": "https://example.com/hall_tree.jpg",
      "url": "https://example.com/hall_tree"
    },
    {
      "item": "Chaise Lounge",
      "itemID": "CL038",
      "description": "Long chair with a backrest and extended seat, providing a comfortable lounging experience.",
      "price": 499.99,
      "categoryName": "Furniture",
      "image": "https://example.com/chaise_lounge.jpg",
      "url": "https://example.com/chaise_lounge"
    },
    {
      "item": "Bar Cabinet",
      "itemID": "BC039",
      "description": "Furniture piece designed for storing and serving beverages and glassware.",
      "price": 399.99,
      "categoryName": "Furniture",
      "image": "https://example.com/bar_cabinet.jpg",
      "url": "https://example.com/bar_cabinet"
    },
    {
      "item": "Trundle Bed",
      "itemID": "TB040",
      "description": "Bed frame with a low-profile second bed that can be pulled out or tucked away.",
      "price": 599.99,
      "categoryName": "Furniture",
      "image": "https://example.com/trundle_bed.jpg",
      "url": "https://example.com/trundle_bed"
    },
    {
      "item": "Corner Shelf",
      "itemID": "CS041",
      "description": "Shelf designed to fit in the corner of a room, maximizing storage space.",
      "price": 79.99,
      "categoryName": "Furniture",
      "image": "https://example.com/corner_shelf.jpg",
      "url": "https://example.com/corner_shelf"
    },
    {
      "item": "Storage Bench",
      "itemID": "SB042",
      "description": "Seating furniture with built-in storage space, ideal for entryways or bedrooms.",
      "price": 149.99,
      "categoryName": "Furniture",
      "image": "https://example.com/storage_bench.jpg",
      "url": "https://example.com/storage_bench"
    },
    {
      "item": "Accent Table",
      "itemID": "AT043",
      "description": "Small table used for decorative purposes or as an additional surface.",
      "price": 99.99,
      "categoryName": "Furniture",
      "image": "https://example.com/accent_table.jpg",
      "url": "https://example.com/accent_table"
    },
    {
      "item": "Sofa Bed",
      "itemID": "SB044",
      "description": "Convertible sofa that can be transformed into a bed for guests.",
      "price": 699.99,
      "categoryName": "Furniture",
      "image": "https://example.com/sofa_bed.jpg",
      "url": "https://example.com/sofa_bed"
    },
    {
      "item": "Wall Shelf",
      "itemID": "WS045",
      "description": "Shelf mounted on a wall, used for displaying decorative items or storing essentials.",
      "price": 49.99,
      "categoryName": "Furniture",
      "image": "https://example.com/wall_shelf.jpg",
      "url": "https://example.com/wall_shelf"
    },
    {
      "item": "Glider",
      "itemID": "GL046",
      "description": "Rocking chair with a smooth gliding motion, often used in nurseries or living rooms.",
      "price": 199.99,
      "categoryName": "Furniture",
      "image": "https://example.com/glider.jpg",
      "url": "https://example.com/glider"
    },
    {
      "item": "Bookshelf",
      "itemID": "BS047",
      "description": "Shelving unit designed to store books and other items.",
      "price": 249.99,
      "categoryName": "Furniture",
      "image": "https://example.com/bookshelf.jpg",
      "url": "https://example.com/bookshelf"
    },
    {
      "item": "Chest",
      "itemID": "CHS048",
      "description": "Storage furniture with a hinged top and often used for storing clothes or blankets.",
      "price": 299.99,
      "categoryName": "Furniture",
      "image": "https://example.com/chest.jpg",
      "url": "https://example.com/chest"
    },
    {
      "item": "Dining Set",
      "itemID": "DS049",
      "description": "Furniture set consisting of a dining table and chairs, suitable for dining rooms.",
      "price": 999.99,
      "categoryName": "Furniture",
      "image": "https://example.com/dining_set.jpg",
      "url": "https://example.com/dining_set"
    },
    {
      "item": "Murphy Bed",
      "itemID": "MB050",
      "description": "Foldable bed that can be stored vertically against a wall when not in use.",
      "price": 1499.99,
      "categoryName": "Furniture",
      "image": "https://example.com/murphy_bed.jpg",
      "url": "https://example.com/murphy_bed"
    }
  ]
  
 // STATIONARY
 const stationaryProducts = [
    {
      "item": "Ballpoint Pens (Pack of 10)",
      "itemID": "BP001",
      "description": "Smooth-writing ballpoint pens with black ink.",
      "price": 4.99,
      "categoryName": "Stationary",
      "image": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic2.jetpens.com%2Fimages%2Fa%2F000%2F210%2F210871.jpg%3Fauto%3Dformat%26ba%3Dmiddle%252Ccenter%26balph%3D3%26blend64%3DaHR0cDovL3d3dy5qZXRwZW5zLmNvbS9pbWFnZXMvYXNzZXRzL3dhdGVybWFyazIucG5n%26bm%3Ddifference%26bs%3Dinherit%26chromasub%3D444%26fm%3Djpg%26h%3D400%26mark64%3DaHR0cDovL3d3dy5qZXRwZW5zLmNvbS9pbWFnZXMvYXNzZXRzL3dhdGVybWFyazEucG5n%26markalign%3Dtop%252Cright%26markalpha%3D30%26markscale%3D16%26q%3D90%26usm%3D20%26w%3D600%26s%3D1f09f7b3d7964638e66163ec2c86b7bd&tbnid=90d0nvhurUvX_M&vet=12ahUKEwj98ejisfP_AhWdpycCHQRCDDMQMygAegUIARDvAQ..i&imgrefurl=https%3A%2F%2Fwww.jetpens.com%2FJetPens-Black-Ballpoint-Pen-Sampler%2Fpd%2F24378&docid=F5tbSQAv56GqXM&w=600&h=400&q=ballpoint%20pens&ved=2ahUKEwj98ejisfP_AhWdpycCHQRCDDMQMygAegUIARDvAQ",
      "url": "https://example.com/ballpoint_pens"
    },
    {
      "item": "Notebook - Spiral Bound",
      "itemID": "NB002",
      "description": "Wire-bound notebook with ruled pages for easy note-taking.",
      "price": 3.99,
      "categoryName": "Stationary",
      "image": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Ffree-photo%2Fnotebook_74190-2724.jpg%3Fw%3D2000&tbnid=TwN-Nzn7PsE3DM&vet=12ahUKEwjc7pSNsvP_AhVPsCcCHZzQAFsQMygAegUIARDlAQ..i&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fnotebook-png&docid=PoOnRHGqHGn1BM&w=2000&h=1333&q=notebook%20png&ved=2ahUKEwjc7pSNsvP_AhVPsCcCHZzQAFsQMygAegUIARDlAQ",
      "url": "https://example.com/notebook"
    },
    {
      "item": "Highlighter Set (Pack of 5)",
      "itemID": "HS003",
      "description": "Set of colorful highlighters for emphasizing important text.",
      "price": 6.99,
      "categoryName": "Stationary",
      "image": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F713pG-8hVLL._AC_UF1000%2C1000_QL80_.jpg&tbnid=NGW4W3RAaYeQ-M&vet=12ahUKEwi79NmrsvP_AhUumycCHXjxD4MQMygEegUIARD6AQ..i&imgrefurl=https%3A%2F%2Fwww.amazon.in%2FMulti-Color-Highlighter-Coloring-Highlighters-Christmas%2Fdp%2FB07464QZWV&docid=q07vN3Vwul-KVM&w=1000&h=1000&q=highlighter%20pen&ved=2ahUKEwi79NmrsvP_AhUumycCHXjxD4MQMygEegUIARD6AQ",
      "url": "https://example.com/highlighter_set"
    },
    {
      "item": "Whiteboard Markers (Pack of 4)",
      "itemID": "WM004",
      "description": "Dry erase markers for writing on whiteboards.",
      "price": 5.99,
      "categoryName": "Stationary",
      "image": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmybigorder.com%2Fpublic%2Fuploads%2Fproducts%2Fmeta%2FXfkKPmyz40agsc8CViVGwJ7UETHYoEt3jixANbMM.jpeg&tbnid=vLWzRkq1nGzYKM&vet=12ahUKEwj05anRsvP_AhWmrycCHe-SD6cQMygAegUIARDqAQ..i&imgrefurl=https%3A%2F%2Fmybigorder.com%2Fproduct%2FKasuku-Whiteboard-Marker--Pack-of-10-pieces-RF83o&docid=-PZkHojdZqZzkM&w=900&h=900&q=whiteboard%20marker&ved=2ahUKEwj05anRsvP_AhWmrycCHe-SD6cQMygAegUIARDqAQ",
      "url": "https://officemart.co.ke/media/cache/c6/c5/c6c57e788c35d7b74b58e96202936362.jpg"
    },
    {
      "item": "Graphing Calculator",
      "itemID": "GC005",
      "description": "Advanced calculator with graphing capabilities for mathematical calculations.",
      "price": 49.99,
      "categoryName": "Stationary",
      "image": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.eaieducation.com%2Fimages%2Fproducts%2F561082_L.jpg&tbnid=djq2YLl4pzHfEM&vet=12ahUKEwiLvLjqsvP_AhWZnycCHVn2DJ8QMygBegUIARDpAQ..i&imgrefurl=https%3A%2F%2Fwww.eaieducation.com%2FProduct%2F561082%2FTexas_Instruments%25C2%25AE_TI-84_Plus_CE_Graphing_Calculator.aspx&docid=ATD9NRG9OZPVKM&w=1000&h=1000&q=Graphing%20Calculator&ved=2ahUKEwiLvLjqsvP_AhWZnycCHVn2DJ8QMygBegUIARDpAQ",
      "url": "https://example.com/graphing_calculator"
    },
    {
      "item": "Mechanical Pencils (Pack of 12)",
      "itemID": "MP006",
      "description": "Set of mechanical pencils for precise and consistent writing.",
      "price": 8.99,
      "categoryName": "Stationary",
      "image": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F81KkPFZHXgL.jpg&tbnid=aSyY3y5h5Sg7uM&vet=12ahUKEwiNurCfs_P_AhVxrEwKHWYbBhUQMygCegUIARDwAQ..i&imgrefurl=https%3A%2F%2Fwww.desertcart.co.ke%2Fproducts%2F136741549-mr-pen-mechanical-drawing-graphite-pencils-with-lead-and-eraser-refills-5-sizes-0-3-0-5-0-7-0-9-and-2-millimeters&docid=tZDrzAuvLv16DM&w=2560&h=2560&q=Mechanical%20Pencils&ved=2ahUKEwiNurCfs_P_AhVxrEwKHWYbBhUQMygCegUIARDwAQ",
      "url": "https://example.com/mechanical_pencils"
    },
    {
      "item": "Sticky Notes (Pack of 100)",
      "itemID": "SN007",
      "description": "Self-adhesive notes for leaving reminders or marking pages.",
      "price": 2.99,
      "categoryName": "Stationary",
      "image": "https://www.google.com/imgres?imgurl=https%3A%2F%2Frukminim2.flixcart.com%2Fimage%2F850%2F1000%2Fkkzrpu80%2Fpost-it%2Fk%2Fr%2F6%2Fmulticolor-memo-pad-sticky-notes-400-sheets-5-colors-ofixo-original-imagy7hyh8vqqcnq.jpeg%3Fq%3D90&tbnid=ZX-R_5bqB5dk_M&vet=12ahUKEwilxaC3s_P_AhUCsUwKHUH8CkAQMygCegUIARD9AQ..i&imgrefurl=https%3A%2F%2Fwww.flipkart.com%2Fofixo-sticky-notes-400-sheets-regular-5-colors%2Fp%2Fitmfg5x2zkevyuj2&docid=XBGeXwuNNyP_4M&w=783&h=1000&q=Sticky%20Notes%20&ved=2ahUKEwilxaC3s_P_AhUCsUwKHUH8CkAQMygCegUIARD9AQ",
      "url": "https://example.com/sticky_notes"
    },
    {
      "item": "Gel Pens (Pack of 8)",
      "itemID": "GP008",
      "description": "Smooth-writing gel pens with assorted colors.",
      "price": 6.99,
      "categoryName": "Stationary",
      "image": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F81rJnJ2MEnL.jpg&tbnid=ete8L4flj1HPTM&vet=12ahUKEwjw56PRs_P_AhW4sCcCHcfsBDAQMygAegUIARDpAQ..i&imgrefurl=https%3A%2F%2Fwww.desertcart.co.ke%2Fproducts%2F44291952-smart-color-art-140-colors-gel-pens-set-gel-pen-for-adult-coloring-books-drawing-painting-writing&docid=oOHYpkiYdpBHTM&w=1900&h=1900&q=Gel%20Pens%20&ved=2ahUKEwjw56PRs_P_AhW4sCcCHcfsBDAQMygAegUIARDpAQ",
      "url": "https://example.com/gel_pens"
    },
    {
      "item": "Eraser Set (Pack of 3)",
      "itemID": "ES009",
      "description": "Set of erasers for removing pencil marks cleanly.",
      "price": 2.49,
      "categoryName": "Stationary",
      "image": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fschoolmall.pk%2Fwp-content%2Fuploads%2F2022%2F12%2F2-in-1-Guai-Guai-Eraser-Set-210x210.jpg&tbnid=ncOb-BzyORUi3M&vet=12ahUKEwiUupbss_P_AhXIpicCHZjUAbQQMygRegUIARCeAg..i&imgrefurl=https%3A%2F%2Fschoolmall.pk%2Fkids-stationery%2Feraser-sets%2F&docid=9sOCR4cO9joEsM&w=210&h=210&q=Eraser%20Set&ved=2ahUKEwiUupbss_P_AhXIpicCHZjUAbQQMygRegUIARCeAg",
      "url": "https://example.com/eraser_set"
    },
    {
      "item": "Binder Clips (Pack of 30)",
      "itemID": "BC010",
      "description": "Assorted sizes of binder clips for securing papers together.",
      "price": 4.49,
      "categoryName": "Stationary",
      "image": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdnprod.mafretailproxy.com%2Fsys-master-root%2Fh48%2Fh1e%2F31872919339038%2F145609_2.jpg_480Wx480H&tbnid=guDGoYL6WpedLM&vet=12ahUKEwitusuLtPP_AhW1picCHThWBOIQMygCegUIARDuAQ..i&imgrefurl=https%3A%2F%2Fwww.carrefour.ke%2Fmafken%2Fen%2Fbinders%2Fbinder-clips-19mm-1461%2Fp%2F145609&docid=56ZlTaK6v3qeKM&w=480&h=480&q=Binder%20Clips&ved=2ahUKEwitusuLtPP_AhW1picCHThWBOIQMygCegUIARDuAQ",
      "url": "https://example.com/binder_clips"
    },
    {
      "item": "Correction Tape",
      "itemID": "CT011",
      "description": "Tape used for correcting mistakes in written or printed text.",
      "price": 3.49,
      "categoryName": "Stationary",
      "image": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F61K3f1eTHzL.jpg&tbnid=4d4xn7GNXW09oM&vet=12ahUKEwie3bKktPP_AhW9mScCHXmwCQsQMygIegUIARCFAg..i&imgrefurl=https%3A%2F%2Fwww.amazon.in%2FCamlin-CAM_Tape-Kokuyo-Correction-Tape%2Fdp%2FB01E588W70&docid=huujNn_TJ198UM&w=1100&h=1100&q=Correction%20Tape&ved=2ahUKEwie3bKktPP_AhW9mScCHXmwCQsQMygIegUIARCFAg",
      "url": "https://example.com/correction_tape"
    },
    {
      "item": "Desk Organizer",
      "itemID": "DO012",
      "description": "Container with compartments for organizing pens, pencils, and other office supplies.",
      "price": 9.99,
      "categoryName": "Stationary",
      "image": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F6c%2Fa4%2F52%2F6ca45208418b610a75bebb538214237e.jpg&tbnid=9DAw31quIWK-IM&vet=12ahUKEwjg59K_tPP_AhVIkicCHR86BTQQMygFegUIARD1AQ..i&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F444167582002480045%2F&docid=puCcXNNdN4XfZM&w=2690&h=1793&q=Desk%20Organizer&ved=2ahUKEwjg59K_tPP_AhVIkicCHR86BTQQMygFegUIARD1AQ",
      "url": "https://example.com/desk_organizer"
    },
    {
      "item": "Index Cards (Pack of 100)",
      "itemID": "IC013",
      "description": "Ruled index cards for creating flashcards or organizing information.",
      "price": 1.99,
      "categoryName": "Stationary",
      "image": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.shutterstock.com%2Fimage-vector%2Fcolorful-index-card-multicolor-study-260nw-1959334138.jpg&tbnid=gQsuyX3hRnqVWM&vet=12ahUKEwjgx9batPP_AhUwsCcCHX9wAzUQMygEegUIARDyAQ..i&imgrefurl=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Findex-card&docid=BMvVyRkT6SEgMM&w=325&h=280&q=Index%20Cards&ved=2ahUKEwjgx9batPP_AhUwsCcCHX9wAzUQMygEegUIARDyAQ",
      "url": "https://example.com/index_cards"
    },
    {
      "item": "Rollerball Pens (Pack of 6)",
      "itemID": "RP014",
      "description": "Smooth-writing rollerball pens with quick-drying ink.",
      "price": 5.99,
      "categoryName": "Stationary",
      "image": "https://www.google.com/imgres?imgurl=https%3A%2F%2Funiballco.com%2Fcdn%2Fshop%2Fproducts%2Funiball_Rollerball_Vision_0.7MM_Pink_Front_WebImages.jpg%3Fv%3D1680204552&tbnid=IoxcNkSEU4lotM&vet=12ahUKEwj51PrxtPP_AhXxpkwKHXr3BxsQMygDegUIARDwAQ..i&imgrefurl=https%3A%2F%2Funiballco.com%2Fproducts%2Fvision-rollerball-pens&docid=wQdSn83L6wC0UM&w=783&h=335&q=Rollerball%20Pens&ved=2ahUKEwj51PrxtPP_AhXxpkwKHXr3BxsQMygDegUIARDwAQ",
      "url": "https://example.com/rollerball_pens"
    },
    {
      "item": "Desk Calendar",
      "itemID": "DC015",
      "description": "Calendar designed to sit on a desk or tabletop for easy date referencing.",
      "price": 7.99,
      "categoryName": "Stationary",
      "image": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fke.jumia.is%2Funsafe%2Ffit-in%2F500x500%2Ffilters%3Afill(white)%2Fproduct%2F65%2F3624601%2F1.jpg%3F2897&tbnid=kkiqxmdSU8MNHM&vet=12ahUKEwjcvLmKtfP_AhVTvicCHWIkBwMQMygEegUIARD4AQ..i&imgrefurl=https%3A%2F%2Fwww.jumia.co.ke%2Fgeneric-mini-spiral-binding-desk-calendar-2023-gift-black-106426356.html&docid=WUc-MyRWcDUyFM&w=500&h=500&q=Desk%20Calendar&ved=2ahUKEwjcvLmKtfP_AhVTvicCHWIkBwMQMygEegUIARD4AQ",
      "url": "https://example.com/desk_calendar"
    },
    {
      "item": "Paper Clips (Pack of 100)",
      "itemID": "PC016",
      "description": "Small clips used for holding papers together.",
      "price": 1.49,
      "categoryName": "Stationary",
      "image": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F31ljbTGe2tL.jpg&tbnid=jKP-Enda_JD4eM&vet=12ahUKEwjY0aujtfP_AhVRricCHfiNA7QQMygEegUIARD2AQ..i&imgrefurl=https%3A%2F%2Fwww.desertcart.co.ke%2Fproducts%2F48477832-box-of-100-paper-clips-small-plain-25mm-979320&docid=n5w8jafbHv0bNM&w=250&h=250&q=Paper%20Clips&ved=2ahUKEwjY0aujtfP_AhVRricCHfiNA7QQMygEegUIARD2AQ",
      "url": "https://example.com/paper_clips"
    },
    {
      "item": "Felt Tip Pens (Pack of 12)",
      "itemID": "FP017",
      "description": "Pens with felt tips, ideal for coloring and drawing.",
      "price": 7.99,
      "categoryName": "Stationary",
      "image": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F81UjnlCvmDL.jpg&tbnid=zgu1Yq7aeoauNM&vet=12ahUKEwih6qK8tfP_AhW9picCHdQJDXAQMygAegUIARDuAQ..i&imgrefurl=https%3A%2F%2Fwww.amazon.com%2FPremium-Colorful-Journaling-Drawing-Colorful-Supplies%2Fdp%2FB09SG7B73K&docid=IPiB4nHBNDfl7M&w=1500&h=1500&q=Felt%20Tip%20Pens&ved=2ahUKEwih6qK8tfP_AhW9picCHdQJDXAQMygAegUIARDuAQ",
      "url": "https://example.com/felt_tip_pens"
    },
    {
      "item": "Clipboard",
      "itemID": "CB018",
      "description": "Portable writing surface with a clip for holding papers.",
      "price": 4.99,
      "categoryName": "Stationary",
      "image": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.shutterstock.com%2Fimage-photo%2Freal-photo-wooden-clipboard-blank-260nw-1385748647.jpg&tbnid=prP0Y6QGE4zkWM&vet=12ahUKEwirzObStfP_AhUhpicCHdP4AGcQMygFegUIARD1AQ..i&imgrefurl=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fclipboard&docid=YldGYhs-wf7_9M&w=390&h=280&q=Clipboard&ved=2ahUKEwirzObStfP_AhUhpicCHdP4AGcQMygFegUIARD1AQ",
      "url": "https://example.com/clipboard"
    },
    {
      "item": "Desk Lamp",
      "itemID": "DL019",
      "description": "Adjustable lamp for providing focused lighting on a desk.",
      "price": 19.99,
      "categoryName": "Stationary",
      "image": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fke.jumia.is%2Funsafe%2Ffit-in%2F500x500%2Ffilters%3Afill(white)%2Fproduct%2F32%2F972057%2F1.jpg%3F0969&tbnid=GBWBAKqNpDqWoM&vet=12ahUKEwiQr5DutfP_AhXWpycCHYEiCr0QMygCegUIARDyAQ..i&imgrefurl=https%3A%2F%2Fwww.jumia.co.ke%2Fgeneric-architect-desk-lamp-metal-swing-arm-dimmable-led-lamp-75027923.html&docid=Lpx27JyfoY1kYM&w=500&h=500&itg=1&q=Desk%20Lamp&ved=2ahUKEwiQr5DutfP_AhXWpycCHYEiCr0QMygCegUIARDyAQ",
      "url": "https://example.com/desk_lamp"
    },
    {
      "item": "Stapler",
      "itemID": "ST020",
      "description": "Office tool used for binding papers together with staples.",
      "price": 3.99,
      "categoryName": "Stationary",
      "image": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fnirvanaconnects.co.ke%2Fwp-content%2Fuploads%2F2020%2F10%2Fkangaro-stapler-23S17.jpg&tbnid=P94G6dbwU3u9vM&vet=12ahUKEwjOgtyFtvP_AhU6mScCHUjNC3sQMygBegUIARDuAQ..i&imgrefurl=https%3A%2F%2Fnirvanaconnects.co.ke%2Fproduct%2Fkangaro-stapler-23s17%2F&docid=CXKT3WOIppFetM&w=437&h=388&q=Stapler&ved=2ahUKEwjOgtyFtvP_AhU6mScCHUjNC3sQMygBegUIARDuAQ",
      "url": "https://example.com/stapler"
    }
  ]

  //CLOTHING PRODUCTS

  const clothingProducts = [
    {
      "item": "Men's T-Shirt",
      "itemID": "TS001",
      "description": "Comfortable cotton t-shirt for men.",
      "price": 19.99,
      "categoryName": "Clothing",
      "image": "https://example.com/mens_tshirt.jpg"
    },
    {
      "item": "Women's Blouse",
      "itemID": "BL002",
      "description": "Stylish blouse for women made with high-quality fabric.",
      "price": 29.99,
      "categoryName": "Clothing",
      "image": "https://example.com/womens_blouse.jpg"
    },
    {
      "item": "Men's Jeans",
      "itemID": "JE003",
      "description": "Classic denim jeans for men with a comfortable fit.",
      "price": 49.99,
      "categoryName": "Clothing",
      "image": "https://example.com/mens_jeans.jpg"
    },
    {
      "item": "Women's Dress",
      "itemID": "DR004",
      "description": "Elegant dress for women suitable for special occasions.",
      "price": 59.99,
      "categoryName": "Clothing",
      "image": "https://example.com/womens_dress.jpg"
    },
    {
      "item": "Men's Polo Shirt",
      "itemID": "PS005",
      "description": "Classic polo shirt for men with a timeless design.",
      "price": 34.99,
      "categoryName": "Clothing",
      "image": "https://example.com/mens_polo_shirt.jpg"
    },
    {
      "item": "Women's Skirt",
      "itemID": "SK006",
      "description": "Stylish skirt for women made with comfortable fabric.",
      "price": 39.99,
      "categoryName": "Clothing",
      "image": "https://example.com/womens_skirt.jpg"
    },
    {
      "item": "Men's Hoodie",
      "itemID": "HD007",
      "description": "Warm and cozy hoodie for men with a casual style.",
      "price": 44.99,
      "categoryName": "Clothing",
      "image": "https://example.com/mens_hoodie.jpg"
    },
    {
      "item": "Women's Sweater",
      "itemID": "SW008",
      "description": "Soft and comfortable sweater for women to stay cozy.",
      "price": 49.99,
      "categoryName": "Clothing",
      "image": "https://example.com/womens_sweater.jpg"
    },
    {
      "item": "Men's Shorts",
      "itemID": "SH009",
      "description": "Casual and lightweight shorts for men.",
      "price": 24.99,
      "categoryName": "Clothing",
      "image": "https://example.com/mens_shorts.jpg"
    },
    {
      "item": "Women's Jeans",
      "itemID": "JE010",
      "description": "Trendy denim jeans for women with a perfect fit.",
      "price": 54.99,
      "categoryName": "Clothing",
      "image": "https://example.com/womens_jeans.jpg"
    },
    {
      "item": "Men's Dress Shirt",
      "itemID": "DS011",
      "description": "Formal dress shirt for men suitable for business attire.",
      "price": 59.99,
      "categoryName": "Clothing",
      "image": "https://example.com/mens_dress_shirt.jpg"
    },
    {
      "item": "Women's T-Shirt",
      "itemID": "TS012",
      "description": "Comfortable and versatile t-shirt for women.",
      "price": 19.99,
      "categoryName": "Clothing",
      "image": "https://example.com/womens_tshirt.jpg"
    },
    {
      "item": "Men's Sweatshirt",
      "itemID": "SS013",
      "description": "Casual sweatshirt for men with a relaxed fit.",
      "price": 39.99,
      "categoryName": "Clothing",
      "image": "https://example.com/mens_sweatshirt.jpg"
    },
    {
      "item": "Women's Coat",
      "itemID": "CT014",
      "description": "Stylish coat for women to stay warm in colder weather.",
      "price": 79.99,
      "categoryName": "Clothing",
      "image": "https://example.com/womens_coat.jpg"
    },
    {
      "item": "Men's Jacket",
      "itemID": "JK015",
      "description": "Fashionable jacket for men with a modern design.",
      "price": 69.99,
      "categoryName": "Clothing",
      "image": "https://example.com/mens_jacket.jpg"
    },
    {
      "item": "Women's Blazer",
      "itemID": "BZ016",
      "description": "Professional blazer for women for a polished look.",
      "price": 79.99,
      "categoryName": "Clothing",
      "image": "https://example.com/womens_blazer.jpg"
    },
    {
      "item": "Men's Swim Trunks",
      "itemID": "ST017",
      "description": "Comfortable swim trunks for men for beach or poolside.",
      "price": 29.99,
      "categoryName": "Clothing",
      "image": "https://example.com/mens_swim_trunks.jpg"
    },
    {
      "item": "Women's Swimsuit",
      "itemID": "SW018",
      "description": "Stylish swimsuit for women to enjoy swimming and sunbathing.",
      "price": 39.99,
      "categoryName": "Clothing",
      "image": "https://example.com/womens_swimsuit.jpg"
    },
    {
      "item": "Men's Dress Shoes",
      "itemID": "DS019",
      "description": "Classic dress shoes for men to complete formal outfits.",
      "price": 89.99,
      "categoryName": "Clothing",
      "image": "https://example.com/mens_dress_shoes.jpg"
    },
    {
      "item": "Women's Sandals",
      "itemID": "SD020",
      "description": "Comfortable and stylish sandals for women.",
      "price": 49.99,
      "categoryName": "Clothing",
      "image": "https://example.com/womens_sandals.jpg"
    },
    {
      "item": "Men's Sneakers",
      "itemID": "SN021",
      "description": "Trendy sneakers for men with a sporty design.",
      "price": 59.99,
      "categoryName": "Clothing",
      "image": "https://example.com/mens_sneakers.jpg"
    },
    {
      "item": "Women's Running Shoes",
      "itemID": "RS022",
      "description": "Lightweight and supportive running shoes for women.",
      "price": 79.99,
      "categoryName": "Clothing",
      "image": "https://example.com/womens_running_shoes.jpg"
    },
    {
      "item": "Men's Baseball Cap",
      "itemID": "BC023",
      "description": "Stylish baseball cap for men to complete casual outfits.",
      "price": 24.99,
      "categoryName": "Clothing",
      "image": "https://example.com/mens_baseball_cap.jpg"
    },
    {
      "item": "Women's Hat",
      "itemID": "HT024",
      "description": "Fashionable hat for women to protect from the sun.",
      "price": 29.99,
      "categoryName": "Clothing",
      "image": "https://example.com/womens_hat.jpg"
    },
    {
      "item": "Men's Winter Gloves",
      "itemID": "WG025",
      "description": "Warm gloves for men to keep hands cozy in winter.",
      "price": 19.99,
      "categoryName": "Clothing",
      "image": "https://example.com/mens_winter_gloves.jpg"
    },
    {
      "item": "Women's Scarf",
      "itemID": "SF026",
      "description": "Soft and stylish scarf for women for added warmth.",
      "price": 14.99,
      "categoryName": "Clothing",
      "image": "https://example.com/womens_scarf.jpg"
    },
    {
      "item": "Men's Belt",
      "itemID": "BT027",
      "description": "Classic leather belt for men to complete outfits.",
      "price": 29.99,
      "categoryName": "Clothing",
      "image": "https://example.com/mens_belt.jpg"
    },
    {
      "item": "Women's Handbag",
      "itemID": "HB028",
      "description": "Stylish handbag for women to carry essentials.",
      "price": 59.99,
      "categoryName": "Clothing",
      "image": "https://example.com/womens_handbag.jpg"
    },
    {
      "item": "Men's Wallet",
      "itemID": "WT029",
      "description": "Classic leather wallet for men with multiple compartments.",
      "price": 39.99,
      "categoryName": "Clothing",
      "image": "https://example.com/mens_wallet.jpg"
    },
    {
      "item": "Women's Sunglasses",
      "itemID": "SG030",
      "description": "Fashionable sunglasses for women to protect eyes from the sun.",
      "price": 49.99,
      "categoryName": "Clothing",
      "image": "https://example.com/womens_sunglasses.jpg"
    },
    {
      "item": "Men's Watch",
      "itemID": "WT031",
      "description": "Elegant wristwatch for men with a stylish design.",
      "price": 99.99,
      "categoryName": "Clothing",
      "image": "https://example.com/mens_watch.jpg"
    },
    {
      "item": "Women's Bracelet",
      "itemID": "BR032",
      "description": "Beautiful bracelet for women as a fashion accessory.",
      "price": 34.99,
      "categoryName": "Clothing",
      "image": "https://example.com/womens_bracelet.jpg"
    },
    {
      "item": "Men's Tie",
      "itemID": "TI033",
      "description": "Classic necktie for men to complete formal attire.",
      "price": 24.99,
      "categoryName": "Clothing",
      "image": "https://example.com/mens_tie.jpg"
    },
    {
      "item": "Women's Earrings",
      "itemID": "ER034",
      "description": "Stylish earrings for women to enhance any outfit.",
      "price": 29.99,
      "categoryName": "Clothing",
      "image": "https://example.com/womens_earrings.jpg"
    },
    {
      "item": "Men's Socks",
      "itemID": "SK035",
      "description": "Comfortable socks for men with a variety of colors.",
      "price": 9.99,
      "categoryName": "Clothing",
      "image": "https://example.com/mens_socks.jpg"
    },
    {
      "item": "Women's Leggings",
      "itemID": "LG036",
      "description": "Stretchy and comfortable leggings for women.",
      "price": 24.99,
      "categoryName": "Clothing",
      "image": "https://example.com/womens_leggings.jpg"
    },
    {
      "item": "Men's Underwear",
      "itemID": "UW037",
      "description": "Breathable and supportive underwear for men.",
      "price": 14.99,
      "categoryName": "Clothing",
      "image": "https://example.com/mens_underwear.jpg"
    },
    {
      "item": "Women's Lingerie Set",
      "itemID": "LS038",
      "description": "Elegant lingerie set for women to feel confident.",
      "price": 39.99,
      "categoryName": "Clothing",
      "image": "https://example.com/womens_lingerie_set.jpg"
    },
    {
      "item": "Men's Pajamas",
      "itemID": "PJ039",
      "description": "Comfortable pajama set for men for a good night's sleep.",
      "price": 34.99,
      "categoryName": "Clothing",
      "image": "https://example.com/mens_pajamas.jpg"
    },
    {
      "item": "Women's Robe",
      "itemID": "RB040",
      "description": "Soft and cozy robe for women for relaxation at home.",
      "price": 49.99,
      "categoryName": "Clothing",
      "image": "https://example.com/womens_robe.jpg"
    },
    {
      "item": "Men's Bathrobe",
      "itemID": "BR041",
      "description": "Plush bathrobe for men for a luxurious bathing experience.",
      "price": 59.99,
      "categoryName": "Clothing",
      "image": "https://example.com/mens_bathrobe.jpg"
    },
    {
      "item": "Women's Sleep Mask",
      "itemID": "SM042",
      "description": "Soft sleep mask for women for undisturbed sleep.",
      "price": 9.99,
      "categoryName": "Clothing",
      "image": "https://example.com/womens_sleep_mask.jpg"
    },
    {
      "item": "Men's Cologne",
      "itemID": "CL043",
      "description": "Masculine cologne for men with a captivating scent.",
      "price": 49.99,
      "categoryName": "Clothing",
      "image": "https://example.com/mens_cologne.jpg"
    },
    {
      "item": "Women's Perfume",
      "itemID": "PF044",
      "description": "Feminine perfume for women with a floral fragrance.",
      "price": 59.99,
      "categoryName": "Clothing",
      "image": "https://example.com/womens_perfume.jpg"
    },
    {
      "item": "Men's Shaving Kit",
      "itemID": "SK045",
      "description": "Complete shaving kit for men for a smooth shave.",
      "price": 29.99,
      "categoryName": "Clothing",
      "image": "https://example.com/mens_shaving_kit.jpg"
    },
    {
      "item": "Women's Makeup Set",
      "itemID": "MS046",
      "description": "Versatile makeup set for women for various looks.",
      "price": 79.99,
      "categoryName": "Clothing",
      "image": "https://example.com/womens_makeup_set.jpg"
    },
    {
      "item": "Men's Grooming Set",
      "itemID": "GS047",
      "description": "Essential grooming set for men for a polished appearance.",
      "price": 39.99,
      "categoryName": "Clothing",
      "image": "https://example.com/mens_grooming_set.jpg"
    },
    {
      "item": "Women's Nail Polish Set",
      "itemID": "NP048",
      "description": "Trendy nail polish set for women to create beautiful nails.",
      "price": 19.99,
      "categoryName": "Clothing",
      "image": "https://example.com/womens_nail_polish_set.jpg"
    },
    {
      "item": "Men's Workout Shorts",
      "itemID": "WS049",
      "description": "Breathable shorts for men for a comfortable workout.",
      "price": 24.99,
      "categoryName": "Clothing",
      "image": "https://example.com/mens_workout_shorts.jpg"
    },
    {
      "item": "Women's Sports Bra",
      "itemID": "SB050",
      "description": "Supportive sports bra for women for an active lifestyle.",
      "price": 34.99,
      "categoryName": "Clothing",
      "image": "https://example.com/womens_sports_bra.jpg"
    }
  ]
  
  

export {
    allCategories,
    plumbingProducts,
    solarProducts,
    medicalEquipments,
    buildingMaterials,
    furnitureProducts,
    stationaryProducts,
    clothingProducts
}




