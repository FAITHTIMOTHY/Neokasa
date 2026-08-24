export const PROJECTS = [
  {
    id: "uniuyo-entrepreneurial-skill-hub",
    repoName: "neokasa / uniuyo-skill-hub",
    title: "UNIUYO ENTREPRENEURIAL SKILL HUB",
    subtitle: "Tropical Climate-Adaptive Educational Incubation Center",
    category: "Institutional",
    year: "2024",
    location: "Uyo, Akwa Ibom, Nigeria",
    area: "4,850 m² / 52,200 sq.ft",
    status: "Completed Working Drawings",
    featured: true,
    image: "/assets/uniuyo/uniuyo_approach_front.jpg",
    blueprintImage: "/assets/uniuyo/uniuyo_working_drawings.png",
    materialAnalysisImage: "/assets/uniuyo/uniuyo_material_analysis.png",
    interiorPerspectivesImage: "/assets/uniuyo/uniuyo_interior_perspectives.png",
    gallery: [
      "/assets/uniuyo/uniuyo_approach_front.jpg",
      "/assets/uniuyo/uniuyo_perspective_left.jpg",
      "/assets/uniuyo/uniuyo_perspective_right.jpg",
      "/assets/uniuyo/interior_classroom.png",
      "/assets/uniuyo/interior_library.png",
      "/assets/uniuyo/interior_cafeteria.png",
      "/assets/uniuyo/interior_multipurpose_hall.png"
    ],
    client: "University of Uyo (Faculty of Environmental Studies)",
    awards: [],
    materials: [
      "Brown Emulsion Paint (Central Facade Accent)",
      "White Render (Wave Balconies & Structure)",
      "Perforated Terracotta Clay Screen",
      "Decorative Geometric Aluminium Lattice",
      "Toughened Laminated Glass Railings",
      "Powder-Coated Aluminium Window Frames",
      "Terrelocking Concrete Paver Driveway"
    ],
    description: "The UNIUYO Entrepreneurial Skill Hub is a landmark multi-story academic facility designed to harmonize modern sculptural forms with tropical climate performance. Featuring sweeping wave-form balconies, dual-layer perforated solar shading screens, and a central open-air atrium, the hub houses state-of-the-art incubation workshops, digital classrooms, resource centers, and student collaboration lounges.",
    designIntent: "To create an inspiring, energy-efficient educational incubator that uses passive stack ventilation, terracotta heat reduction, and porous geometric shading to maintain thermal comfort in humid tropical climates while maximizing natural daylight.",
    specs: {
      structure: "5-Story Reinforced Concrete Frame with Undulating Cantilevered Balconies",
      sustainability: "Passive Stack Ventilation Courtyard + 40% Solar Heat Gain Reduction via Terracotta Screen",
      leed: "Excellence in Design for Greater Efficiencies (EDGE) Certified",
      glazing: "Powder-Coated Aluminium Frames with Dark Grey Low-E Tinted Glazing"
    },
    repoFiles: [
      {
        folder: "01_Working_Drawings",
        files: [
          { name: "ground_floor_plan_A101.dwg", type: "dwg", size: "28.4 MB", preview: "/assets/uniuyo/uniuyo_working_drawings.png", desc: "Ground floor layout detailing Reception, Central Courtyard Atrium, Cafeteria, and Security Control." },
          { name: "transverse_section_BB.dwg", type: "dwg", size: "22.1 MB", preview: "/assets/uniuyo/uniuyo_working_drawings.png", desc: "Building cross-section showing 5-level atrium stack ventilation, Fashion Workshop, & Media Room." },
          { name: "elevations_approach_and_rear.dwg", type: "dwg", size: "31.5 MB", preview: "/assets/uniuyo/uniuyo_working_drawings.png", desc: "Complete working drawings for Approach, Rear, Left, and Right architectural elevations." }
        ]
      },
      {
        folder: "02_Material_Specifications",
        files: [
          { name: "exterior_materials_breakdown.spec", type: "spec", size: "4.2 MB", preview: "/assets/uniuyo/uniuyo_material_analysis.png", desc: "Comprehensive specification sheet for Terracotta screens, Aluminium lattice, and Glass Railings." },
          { name: "interior_finish_schedule.spec", type: "spec", size: "3.1 MB", preview: "/assets/uniuyo/uniuyo_material_analysis.png", desc: "Material specs for Gypsum soffits, Terrelocking pavers, and acoustic drywall." }
        ]
      },
      {
        folder: "03_3D_BIM_Renders",
        files: [
          { name: "exterior_approach_perspective.png", type: "image", size: "16.8 MB", preview: "/assets/uniuyo/uniuyo_approach_front.jpg", desc: "High-resolution 3D approach render showing brown central massing and wave balconies." },
          { name: "interior_multipurpose_hall.png", type: "image", size: "12.4 MB", preview: "/assets/uniuyo/interior_multipurpose_hall.png", desc: "Interior perspective of open-plan Multipurpose Hall with wood seating and glazed curtain wall." },
          { name: "interior_library_resource.png", type: "image", size: "14.2 MB", preview: "/assets/uniuyo/interior_library.png", desc: "Resource center & library with modular oak cubicles and acoustic ceiling panels." },
          { name: "interior_classroom_incubator.png", type: "image", size: "11.9 MB", preview: "/assets/uniuyo/interior_classroom.png", desc: "Collaborative classroom with smart whiteboard, timber desks, and acoustic wall art." },
          { name: "interior_cafeteria.png", type: "image", size: "13.1 MB", preview: "/assets/uniuyo/interior_cafeteria.png", desc: "Student cafeteria featuring vibrant red booth seating, brick accent wall, and display counters." }
        ]
      }
    ],
    commits: [
      { hash: "u9f3a1", msg: "Finalized Terracotta solar screen geometry for 40% thermal load reduction", date: "Jan 18, 2024", author: "NEO KASA Principal" },
      { hash: "e8b2c4", msg: "Approved Working Drawings (Page 1-3) & Ground Floor Plan A-101", date: "Dec 04, 2023", author: "Lead BIM Engineer" },
      { hash: "a7d10e", msg: "Completed interior perspective renders for Multipurpose Hall & Library", date: "Oct 15, 2023", author: "Interior Specialist" }
    ],
    floorPlanPins: [
      { id: 1, x: 50, y: 50, title: "Central Courtyard Atrium", desc: "Open-air central courtyard facilitating natural stack ventilation across all 5 levels.", image: "/assets/uniuyo/uniuyo_working_drawings.png" },
      { id: 2, x: 25, y: 35, title: "Multipurpose Hall & Auditorium", desc: "Flexible dining and seminar hall with full-height glazed curtain wall framing outdoor greenery.", image: "/assets/uniuyo/interior_multipurpose_hall.png" },
      { id: 3, x: 78, y: 35, title: "Student Cafeteria & Dining Suite", desc: "Ground floor cafeteria with prep kitchen, cold storage, display counters, and comfortable booth dining.", image: "/assets/uniuyo/interior_cafeteria.png" },
      { id: 4, x: 25, y: 70, title: "Library & Resource Center", desc: "Quiet study hub with modular timber reading cubicles and computer research stations.", image: "/assets/uniuyo/interior_library.png" },
      { id: 5, x: 75, y: 70, title: "Collaborative Learning Classroom", desc: "Modern interactive classroom equipped for skill workshops, group incubators, and smart board presentations.", image: "/assets/uniuyo/interior_classroom.png" }
    ],
    beforeAfter: {
      render: "/assets/uniuyo/uniuyo_perspective_left.jpg",
      built: "/assets/uniuyo/uniuyo_approach_front.jpg",
      renderLabel: "3D BIM Working Model",
      builtLabel: "Final Approach Perspective"
    }
  },
  {
    id: "neokasa-house-of-fashion-atelier",
    repoName: "neokasa / house-of-fashion",
    title: "THE HOUSE OF FASHION ATELIER",
    subtitle: "Cruciform Haute Couture Atelier & Flagship Retail Complex with Perforated Pod Facades",
    category: "Commercial",
    year: "2024",
    location: "Abuja, Nigeria",
    area: "1,420 m² / 15,300 sq.ft",
    status: "Completed Working Drawings & BIM Model",
    featured: true,
    isConceptOnly: false,
    image: "/assets/fashion_house/fashion_house_day_perspective.jpg",
    blueprintImage: "/assets/fashion_house/fashion_house_ground_floor.png",
    materialAnalysisImage: "/assets/fashion_house/fashion_house_material_analysis.jpg",
    gallery: [
      "/assets/fashion_house/fashion_house_front_night_signage.jpg",
      "/assets/fashion_house/fashion_house_day_skyview.jpg",
      "/assets/fashion_house/fashion_house_clerestory_day.jpg",
      "/assets/fashion_house/fashion_house_day_perspective.jpg",
      "/assets/fashion_house/fashion_house_dusk_perspective.jpg",
      "/assets/fashion_house/fashion_house_night_perspective.jpg",
      "/assets/fashion_house/fashion_house_material_analysis.jpg",
      "/assets/fashion_house/fashion_house_ground_floor.png",
      "/assets/fashion_house/fashion_house_first_floor.png",
      "/assets/fashion_house/fashion_house_elevations.png",
      "/assets/fashion_house/fashion_house_roof_plan.png"
    ],
    client: "House of Fashion Luxury Brand",
    awards: [],
    materials: [
      "Light Silver / White Single-Ply EPDM Membrane Roof",
      "Off-White Perforated Aluminium Pod Fascia Panels",
      "Double-Glazed Low-E Clear & Tinted Curtain Wall Glass",
      "Powder-Coated Matte Black Aluminium Framing",
      "Smooth Off-White Silicone Acrylic Render",
      "Glazed Commercial Entrance Doors with Black Metal Trim",
      "Light Grey Interlocking Concrete Courtyard Pavers",
      "Rendered Concrete Perimeter Piers with Black Metal Slats",
      "Integrated Tropical Palm & Greenery Landscaping"
    ],
    description: "The House of Fashion is a landmark commercial and haute couture production center master-planned by NEO KASA in a dynamic 4-wing cruciform layout. Sculptural pod-like curved roof canopies clad in light silver EPDM single-ply membrane wrap around dramatic organic perforated aluminum fascia panels that filter natural daylight while projecting intricate shadow patterns. The ground floor accommodates twin high-fashion retail halls (Male & Female retail zones), a complete garment manufacturing atelier with cutting/sewing lines, delivery sorting, and quality control. The upper floor hosts an executive management suite, creative design studio, client fitting lounges, and a dedicated beauty & cosmetics showcase.",
    designIntent: "To express the fluidity, draping, and tailoring precision of haute couture through sculptural architecture—contrasting soft, curved pod envelopes and perforated light-filtering screens with crisp black-framed structural curtain wall glazing.",
    specs: {
      structure: "2-Story Structural Steel & Reinforced Concrete Frame with Cantilevered Curved Pod Canopy Fascias",
      sustainability: "Dual-Layer Perforated Solar Shading Screens + High-Reflectance UV-Resistant EPDM Membrane",
      leed: "EDGE Advanced Certified Commercial Standard",
      glazing: "Double-Glazed Low-E Structural Curtain Wall in Black Powder-Coated Aluminum Sections"
    },
    materialBreakdown: [
      {
        name: "EPDM Membrane Roof",
        element: "01 • Sculptural Curved Canopy Roof",
        finish: "Light Silver / White single-ply synthetic rubber membrane over rigid insulation",
        purpose: "Provides exceptional weatherproofing, UV resistance, and high solar reflectance over complex double-curved roof pods."
      },
      {
        name: "Perforated Aluminium Panels",
        element: "02 • Feature Pod Fascia & Shading Screen",
        finish: "Off-white powder-coated aluminum panels with varied circular perforations",
        purpose: "Acts as an iconic aesthetic signature while serving as a passive solar baffle, diffusing harsh tropical glare."
      },
      {
        name: "Architectural Glass",
        element: "03 • Floor-to-Ceiling Curtain Wall",
        finish: "Clear and slightly tinted Low-E structural glazing with thermal breaks",
        purpose: "Maximizes interior daylighting, fosters visual connection, and creates high-visibility retail window displays."
      },
      {
        name: "Aluminium Window Frames",
        element: "04 • Glazing Envelope Trims",
        finish: "Slim-profile structural aluminum sections powder-coated in matte black",
        purpose: "Provides rigid structural wind-load support with crisp graphic definition against the white render."
      },
      {
        name: "External Wall Finish",
        element: "05 • Core Building Envelope",
        finish: "Smooth silicone-resin acrylic render in off-white on reinforced blockwork",
        purpose: "Durable, dirt-resistant exterior finish with high thermal reflectance and seamless aesthetic continuity."
      },
      {
        name: "Commercial Entrance Doors",
        element: "06 • Main Rotunda Thresholds",
        finish: "Toughened frameless glass doors with slim black aluminum stiles and panic hardware",
        purpose: "Creates a welcoming, transparent portal into the central double-height reception lobby."
      },
      {
        name: "Interlocking Paving Slabs",
        element: "07 • Forecourt & Driveway Hardscape",
        finish: "Light grey textured interlocking concrete pavers on compacted aggregate bed",
        purpose: "Permeable, high-durability vehicular and pedestrian circulation with efficient site drainage."
      },
      {
        name: "Perimeter Enclosure System",
        element: "08 • Boundary Fence & Security",
        finish: "Smooth off-white rendered concrete piers with horizontal black powder-coated steel slats",
        purpose: "Provides site security and privacy while maintaining airflow and street-level elegance."
      }
    ],
    repoFiles: [
      {
        folder: "01_CAD_Architectural_Drawings",
        files: [
          { name: "ground_floor_retail_and_atelier_plan_A101.dwg", type: "dwg", size: "38.2 MB", preview: "/assets/fashion_house/fashion_house_ground_floor.png", desc: "Complete ground floor working drawings detailing Entrance Lobby, Female Retail, Male Retail, Sewing Atelier, Delivery, and Stockroom." },
          { name: "first_floor_executive_and_design_studio_A102.dwg", type: "dwg", size: "34.6 MB", preview: "/assets/fashion_house/fashion_house_first_floor.png", desc: "First floor architectural layout detailing Manager Suite, Design Studio, Beauty Store, Production Manager, and Conference." },
          { name: "roof_plan_and_clerestory_geometry_A103.dwg", type: "dwg", size: "26.4 MB", preview: "/assets/fashion_house/fashion_house_roof_plan.png", desc: "Curved 4-pod cloverleaf roof geometry, central clerestory rainwater drainage, and fall vectors." },
          { name: "architectural_elevations_all_four_facades_A201.dwg", type: "dwg", size: "42.1 MB", preview: "/assets/fashion_house/fashion_house_elevations.png", desc: "Full CAD elevation sheets for Approach View (with signage), Rear View, Left View, and Right View." }
        ]
      },
      {
        folder: "02_Technical_Material_Specifications",
        files: [
          { name: "fashion_house_material_analysis_board.spec", type: "spec", size: "18.5 MB", preview: "/assets/fashion_house/fashion_house_material_analysis.jpg", desc: "Complete technical material analysis sheet specifying EPDM roof build-up, curved fascia edge detail, wall sections, and paving assemblies." }
        ]
      },
      {
        folder: "03_3D_BIM_Visualizations",
        files: [
          { name: "front_approach_night_signage_perspective.png", type: "image", size: "26.8 MB", preview: "/assets/fashion_house/fashion_house_front_night_signage.jpg", desc: "Frontal night approach render showing illuminated 'HOUSE OF Fashion' neon typography, entry rotunda canopy, and lit stair plaza." },
          { name: "exterior_daytime_skyview_perspective.png", type: "image", size: "24.5 MB", preview: "/assets/fashion_house/fashion_house_day_skyview.jpg", desc: "High-angle corner daytime perspective showcasing the cloverleaf curved pods, rear parking, and perimeter wall." },
          { name: "exterior_daytime_clerestory_perspective.png", type: "image", size: "23.2 MB", preview: "/assets/fashion_house/fashion_house_clerestory_day.jpg", desc: "Daytime view highlighting the corrugated central clerestory roof and curved pod canopy envelope." },
          { name: "exterior_daytime_aerial_perspective.png", type: "image", size: "22.4 MB", preview: "/assets/fashion_house/fashion_house_day_perspective.jpg", desc: "High-resolution daytime 3D perspective showcasing cruciform massing, curved pods, and perimeter landscaping." },
          { name: "exterior_sunset_dusk_illumination.png", type: "image", size: "21.8 MB", preview: "/assets/fashion_house/fashion_house_dusk_perspective.jpg", desc: "Dusk perspective render showing glowing interior retail displays and backlight effects through perforated fascia." },
          { name: "exterior_night_street_corner_render.png", type: "image", size: "24.1 MB", preview: "/assets/fashion_house/fashion_house_night_perspective.jpg", desc: "Night aerial view highlighting urban road frontage, entry plaza lighting, and cloverleaf roof canopy." }
        ]
      }
    ],
    floorPlanPins: [
      { id: 1, x: 50, y: 56, title: "Central Entrance Rotunda & Reception Lobby", desc: "Monumental welcoming lobby connecting all four specialized wings with double-height circulation and reception counter.", image: "/assets/fashion_house/fashion_house_front_night_signage.jpg" },
      { id: 2, x: 27, y: 68, title: "Female Haute Couture Retail Hall", desc: "Expansive luxury retail wing with floor-to-ceiling display vitrines, fitting lounges, and en-suite facilities.", image: "/assets/fashion_house/fashion_house_dusk_perspective.jpg" },
      { id: 3, x: 67, y: 65, title: "Male Tailoring & Menswear Gallery", desc: "Dedicated menswear boutique showroom with bespoke fitting rooms and direct courtyard garden views.", image: "/assets/fashion_house/fashion_house_night_perspective.jpg" },
      { id: 4, x: 33, y: 36, title: "Garment Atelier, Sewing & Finishing Wing", desc: "Specialized production workshop equipped for pattern drafting, sewing lines, and ironing/packaging stations.", image: "/assets/fashion_house/fashion_house_ground_floor.png" },
      { id: 5, x: 66, y: 31, title: "Logistics, Delivery Sorting & Quality Control", desc: "Back-of-house sorting bay, raw textile stockroom, and quality inspection node with dedicated service egress.", image: "/assets/fashion_house/fashion_house_material_analysis.jpg" }
    ],
    beforeAfter: {
      render: "/assets/fashion_house/fashion_house_ground_floor.png",
      built: "/assets/fashion_house/fashion_house_day_perspective.jpg",
      renderLabel: "CAD Architectural Working Plan",
      builtLabel: "3D BIM Curvilinear Facade Render"
    }
  },
  {
    id: "neokasa-azure-terrace-residences",
    repoName: "neokasa / azure-terrace-estate",
    title: "THE AZURE TERRACE RESIDENCES",
    subtitle: "Modern Multi-Unit Luxury Townhouse Estate with Grooved Facades & Timber Louvers",
    category: "Design Showcase",
    year: "2025",
    location: "Lagos, Nigeria",
    area: "1,850 m² / 19,900 sq.ft",
    status: "Approved CAD Drawings",
    featured: true,
    isConceptOnly: false,
    image: "/assets/concepts/azure_terrace_twin_facade_render.jpg",
    blueprintImage: "/assets/concepts/azure_terrace_cad_twin_floorplans.jpg",
    materialAnalysisImage: "/assets/concepts/azure_terrace_material_analysis.jpg",
    gallery: [
      "/assets/concepts/azure_terrace_twin_facade_render.jpg",
      "/assets/concepts/azure_terrace_angled_render.jpg",
      "/assets/concepts/azure_terrace_unit04_render.jpg",
      "/assets/concepts/azure_terrace_unit05_render.jpg",
      "/assets/concepts/azure_terrace_streetview_render.jpg",
      "/assets/concepts/azure_terrace_cad_twin_floorplans.jpg",
      "/assets/concepts/azure_terrace_cad_single_floorplans.jpg",
      "/assets/concepts/azure_terrace_cad_twin_elevations.jpg",
      "/assets/concepts/azure_terrace_cad_unit05_section.jpg",
      "/assets/concepts/azure_terrace_cad_master_plan.jpg",
      "/assets/concepts/azure_terrace_material_analysis.jpg"
    ],
    client: "NEO KASA Development Atelier Showcase",
    awards: [],
    materials: [
      "Horizontal Grooved Blue-Grey Stucco Render Panels",
      "Crisp White Cantilevered Balcony Box Framing (RAL 9016)",
      "Vertical Natural Oak Timber Louver Privacy Screens",
      "Dark Standing Seam Metal Roofing Tiles",
      "Toughened Frameless Glass Balcony Guardrails",
      "Warm White Recessed Exterior LED Soffit Lighting",
      "Interlocking Granite Courtyard Pavers with Marked Bays"
    ],
    description: "A contemporary luxury residential estate master-planned by NEO KASA comprising 5 multi-level terrace townhouses. The design features a signature slate blue-grey grooved stucco central wall column, crisp white cantilevered balcony boxes framing upper floor outdoor living terraces, and vertical warm oak timber louver privacy screens. The estate forecourt features paved courtyard parking, tropical palm landscaping, and secure perimeter boundary walls.",
    designIntent: "To create a cohesive, high-density luxury residential community that balances private outdoor balcony sanctuaries with shared architectural elegance, utilizing cool grooved stucco textures contrasted against warm vertical wood louvers.",
    specs: {
      structure: "Multi-Unit Reinforced Concrete Frame Estate with Cantilevered Balcony Boxes",
      sustainability: "Integrated Vertical Timber Louver Solar Shading + Permeable Paver Courtyard",
      leed: "EDGE Green Building Certified Development Standard",
      glazing: "Dark Powder-Coated Aluminum Window Frames with Frameless Glass Railings"
    },
    materialBreakdown: [
      {
        name: "Horizontal Grooved Stucco Render",
        element: "Central Vertical Facade Column",
        finish: "Silicone-resin acrylic stucco with 50mm horizontal score grooves, slate blue-grey finish",
        purpose: "Provides strong vertical rhythm and linear texture anchoring each townhouse unit."
      },
      {
        name: "White Cantilever Balcony Frame",
        element: "Upper Floor Terrace Frame",
        finish: "Alucobond composite paneling / smooth acrylic render in pure white (RAL 9016)",
        purpose: "Frames upper floor balconies, creating high-contrast geometric light play."
      },
      {
        name: "Vertical Oak Timber Louvers",
        element: "Balcony Privacy & Shading Screen",
        finish: "40x40mm FSC-certified treated oak slats with clear matte weather sealant",
        purpose: "Filters afternoon sunlight while offering privacy between neighboring townhouse balconies."
      },
      {
        name: "Dark Standing Seam Metal Roofing",
        element: "Roofing System",
        finish: "Zinc-titanium standing seam roofing in anthracite dark grey",
        purpose: "Durable, lightweight roof covering engineered for rapid tropical rainwater shedding."
      },
      {
        name: "Frameless Glass Guardrails",
        element: "Balcony Perimeter Safety",
        finish: "12mm toughened laminated safety glass with recessed aluminum base shoe channel",
        purpose: "Ensures occupant safety while providing unobstructed views of the courtyard."
      },
      {
        name: "Interlocking Courtyard Pavers",
        element: "Shared Estate Driveway & Parking",
        finish: "Heavy-duty 80mm interlocking concrete pavers with yellow bay demarcations",
        purpose: "Durable permeable paving allowing efficient site drainage and clean vehicle access."
      }
    ],
    repoFiles: [
      {
        folder: "01_CAD_Working_Drawings",
        files: [
          { name: "semi_detached_twin_floor_plans_A101.dwg", type: "dwg", size: "36.5 MB", preview: "/assets/concepts/azure_terrace_cad_twin_floorplans.jpg", desc: "Complete ground & first floor working drawings for symmetrical twin terrace blocks." },
          { name: "single_terrace_unit_layout_A102.dwg", type: "dwg", size: "22.4 MB", preview: "/assets/concepts/azure_terrace_cad_single_floorplans.jpg", desc: "Individual townhouse unit floor plan detailing Ground Porch/Living/Dining/Maid's Room & First Floor Bedrooms." },
          { name: "twin_elevations_sheet_01_A201.dwg", type: "dwg", size: "28.3 MB", preview: "/assets/concepts/azure_terrace_cad_twin_elevations.jpg", desc: "South 1, North 1, West 1, and East 1 CAD architectural elevation sheet." },
          { name: "unit05_elevations_and_section_A202.dwg", type: "dwg", size: "31.8 MB", preview: "/assets/concepts/azure_terrace_cad_unit05_section.jpg", desc: "Full transverse building cross-section and South 2/North 2/East 2/West 2 CAD elevation sheets." },
          { name: "estate_master_floor_plans_A100.dwg", type: "dwg", size: "34.1 MB", preview: "/assets/concepts/azure_terrace_cad_master_plan.jpg", desc: "Master estate floor plan layout with colored zoning." }
        ]
      },
      {
        folder: "02_3D_BIM_Visualizations",
        files: [
          { name: "twin_facade_symmetrical_approach.png", type: "image", size: "28.6 MB", preview: "/assets/concepts/azure_terrace_twin_facade_render.jpg", desc: "Symmetrical front approach render of twin units 01 & 02 with vertical timber louvers and grooved stucco." },
          { name: "angled_driveway_perspective.png", type: "image", size: "26.4 MB", preview: "/assets/concepts/azure_terrace_angled_render.jpg", desc: "Angled corner perspective showing paved courtyard, parking bay, and cantilever balcony box." },
          { name: "unit_04_forecourt_perspective.png", type: "image", size: "24.2 MB", preview: "/assets/concepts/azure_terrace_unit04_render.jpg", desc: "Perspective render of Townhouse Unit 04 with entrance gate and vehicle." },
          { name: "unit_05_single_facade_render.png", type: "image", size: "25.1 MB", preview: "/assets/concepts/azure_terrace_unit05_render.jpg", desc: "Full frontal facade render of standalone Townhouse Unit 05." },
          { name: "estate_master_streetview_render.png", type: "image", size: "29.8 MB", preview: "/assets/concepts/azure_terrace_streetview_render.jpg", desc: "Full panoramic streetview of all 5 townhouses with boundary wall and streetscape." }
        ]
      }
    ],
    floorPlanPins: [
      { id: 1, x: 28, y: 60, title: "Ground Floor Living Room & Ante Room", desc: "Spacious ground floor living room with ante room, guest WC, and front porch.", image: "/assets/concepts/azure_terrace_twin_facade_render.jpg" },
      { id: 2, x: 72, y: 65, title: "First Floor Master Bedroom & Outdoor Balcony", desc: "Master suite with private balcony framed by white cantilever box and oak timber louvers.", image: "/assets/concepts/azure_terrace_angled_render.jpg" },
      { id: 3, x: 50, y: 55, title: "Townhouse Unit 04 Facade & Forecourt", desc: "Perspective render of Townhouse Unit 04 with paved forecourt and vehicle parking.", image: "/assets/concepts/azure_terrace_unit04_render.jpg" },
      { id: 4, x: 75, y: 30, title: "Townhouse Unit 05 Facade & Forecourt", desc: "Single townhouse unit facade with front garden, parking bay, and clean entrance.", image: "/assets/concepts/azure_terrace_unit05_render.jpg" },
      { id: 5, x: 50, y: 20, title: "Estate Courtyard & Full Facade Streetview", desc: "Full estate view of all 5 townhouse units with palm landscaping and paved access.", image: "/assets/concepts/azure_terrace_streetview_render.jpg" }
    ],
    beforeAfter: {
      render: "/assets/concepts/azure_terrace_cad_twin_floorplans.jpg",
      built: "/assets/concepts/azure_terrace_twin_facade_render.jpg",
      renderLabel: "CAD Estate Floor Plans",
      builtLabel: "3D Modern Building Facade"
    }
  },
  {
    id: "neokasa-contemporary-duplex-residence",
    repoName: "neokasa / contemporary-duplex",
    title: "THE GRAND PORTICO DUPLEX",
    subtitle: "4-Bedroom Detached Duplex with Boys Quarters",
    category: "Residential",
    year: "2020",
    location: "Lagos, Nigeria",
    area: "620 m² / 6,670 sq.ft",
    status: "Approved CAD Drawings",
    featured: true,
    isConceptOnly: false,
    image: "/assets/residences/heritage_duplex_front.jpg",
    blueprintImage: "/assets/residences/heritage_duplex_floor_plans.jpg",
    materialAnalysisImage: "/assets/residences/heritage_duplex_material_analysis.jpg",
    gallery: [
      "/assets/residences/heritage_duplex_front.jpg",
      "/assets/residences/heritage_duplex_perspective_left.jpg",
      "/assets/residences/heritage_duplex_perspective_right.jpg",
      "/assets/residences/heritage_duplex_floor_plans.jpg",
      "/assets/residences/heritage_duplex_cad_section.jpg",
      "/assets/residences/heritage_duplex_cad_bq.jpg",
      "/assets/residences/heritage_duplex_cad_elevations_sn.jpg",
      "/assets/residences/heritage_duplex_cad_elevations_we.jpg",
      "/assets/residences/heritage_duplex_material_analysis.jpg"
    ],
    client: "Private Estate",
    awards: [],
    materials: [
      "Smooth Render (Painted Finish - Off-White/Cream)",
      "Stone Cladding (Feature Columns - Natural Beige Veneer)",
      "Dark Brick Cladding (Dark Grey/Charcoal Brick Slips)",
      "Timber-Look Panels (Medium Brown Composite)",
      "Roof Tiles (Charcoal Grey Concrete)",
      "Cornice / Fascia (White Moulded Concrete)",
      "Windows (Black Powder-Coated Aluminium)",
      "Balcony Railing (Glass & Black Metal Infill)",
      "Canopy / Carport (Light Grey Concrete & Roof)",
      "Boundary Fence (Steel Slats & Concrete Posts)",
      "Paving / Driveway (Interlocking Dark Grey Pavers)",
      "Landscape (Hedges, Shrubs & Natural Flora)"
    ],
    description: "A contemporary two-storey residential development designed with a refined blend of clean geometry, textured wall finishes, expansive glazing, and strong horizontal roof detailing. The façade balances warm neutral materials with darker accents to create a sophisticated and welcoming character, while the landscaped frontage and covered parking enhance functionality and outdoor living.",
    designIntent: "The design expresses a balance of warmth and sophistication through the careful selection of durable, low-maintenance materials. Texture, colour and form work together to create visual hierarchy and a contemporary, timeless character.",
    specs: {
      structure: "2-Story Reinforced Concrete Frame with Precast Facade Bands & Stone Portico",
      sustainability: "Solar PV Carport Canopy + High Thermal Mass Stone Entrance Portico",
      leed: "EDGE Certified Residential Green Building Standard",
      glazing: "Dark Grey Powder-Coated Aluminum Sections with Double-Glazed Low-E Glass"
    },
    materialBreakdown: [
      {
        name: "Smooth Render (Painted Finish)",
        element: "01 • Main Wall Envelope",
        finish: "Cement sand plaster, smooth painted off-white / cream",
        purpose: "Provides a clean background, reflects heat, weather resistant and easy to maintain."
      },
      {
        name: "Stone Cladding (Feature Columns)",
        element: "02 • Entrance Portico Columns",
        finish: "Natural stone veneer, rough textured beige / warm mix",
        purpose: "Adds richness and depth, enhances the entrance, very durable and weather resistant."
      },
      {
        name: "Dark Brick Cladding",
        element: "03 • Accent Wall & Spandrels",
        finish: "Brick slips / clay bricks, textured dark grey / charcoal",
        purpose: "Strong visual contrast, durable, resists staining and adds weight to the facade."
      },
      {
        name: "Timber-Look Panels",
        element: "04 • Facade Accent Planes",
        finish: "Wood-look composite panels / aluminium composite, medium brown horizontal lines",
        purpose: "Adds warmth, breaks up large wall planes, low maintenance and moisture resistant."
      },
      {
        name: "Roof Tiles",
        element: "05 • Hipped Roof System",
        finish: "Concrete roof tiles, textured charcoal grey",
        purpose: "Durable, fire resistant, provides excellent weather protection and thermal comfort."
      },
      {
        name: "Cornice / Fascia",
        element: "06 • Eaves & Roof Edge",
        finish: "Reinforced concrete moulded cornice, smooth painted white",
        purpose: "Provides a clean transition, conceals roof edge and adds architectural detail."
      },
      {
        name: "Windows",
        element: "07 • Glazing Envelope",
        finish: "Aluminium framed windows, powder-coated black",
        purpose: "Strong, lightweight, corrosion resistant and allows maximum daylight."
      },
      {
        name: "Balcony Railing",
        element: "08 • Upper Floor Balcony",
        finish: "Aluminium / mild steel with clear glass infill, powder-coated black",
        purpose: "Durable, rust resistant, provides safety without blocking views."
      },
      {
        name: "Canopy / Carport",
        element: "09 • Covered Parking",
        finish: "Reinforced concrete structure with metal roofing, light grey / white",
        purpose: "Provides shade and weather protection for vehicles, strong and durable."
      },
      {
        name: "Boundary Fence",
        element: "10 • Perimeter Security",
        finish: "Reinforced concrete posts + mild steel horizontal black slats, light grey posts",
        purpose: "Secure, modern appearance, allows ventilation and visibility."
      },
      {
        name: "Paving / Driveway",
        element: "11 • Hardscaping Forecourt",
        finish: "Interlocking concrete pavers, textured dark grey",
        purpose: "Durable, slip resistant, easy to replace and allows for proper drainage."
      },
      {
        name: "Landscape",
        element: "12 • Site Perimeter & Flora",
        finish: "Hedges, shrubs and trees, natural green flora",
        purpose: "Softens the architecture, improves microclimate, enhances curb appeal."
      }
    ],
    repoFiles: [
      {
        folder: "01_CAD_Working_Drawings",
        files: [
          { name: "ground_and_first_floor_plans_A101.dwg", type: "dwg", size: "34.2 MB", preview: "/assets/residences/heritage_duplex_floor_plans.jpg", desc: "Complete ground & first floor architectural floor plans detailing living room, master suite, and study." },
          { name: "transverse_section_AA.dwg", type: "dwg", size: "24.8 MB", preview: "/assets/residences/heritage_duplex_cad_section.jpg", desc: "Building cross-section A-A showing structural ceiling heights (+3750, +7050) & timber roof truss." },
          { name: "elevations_south_north.dwg", type: "dwg", size: "28.1 MB", preview: "/assets/residences/heritage_duplex_cad_elevations_sn.jpg", desc: "Working drawings for South and North architectural elevations with material finishes." },
          { name: "elevations_west_east.dwg", type: "dwg", size: "29.5 MB", preview: "/assets/residences/heritage_duplex_cad_elevations_we.jpg", desc: "Working drawings for West and East architectural elevations showing window schedule." },
          { name: "boys_quarters_layout.dwg", type: "dwg", size: "18.6 MB", preview: "/assets/residences/heritage_duplex_cad_bq.jpg", desc: "Full floor plan and 4-side elevation drawings for the detached 2-unit Boys Quarters." }
        ]
      }
    ],
    floorPlanPins: [
      { id: 1, x: 28, y: 75, title: "Ground Floor Living Room & Ante Room", desc: "Formal reception ante room opening into the main double-height living room bay.", image: "/assets/residences/heritage_duplex_front.jpg" },
      { id: 2, x: 78, y: 70, title: "First Floor Master Suite & WIC", desc: "Spacious master bedroom with private walk-in closet (WIC), luxury bath, and front balcony.", image: "/assets/residences/heritage_duplex_perspective_left.jpg" },
      { id: 3, x: 50, y: 55, title: "Private Study & Family Lounge", desc: "Upper floor family lounge and private study overlooking the central entrance portico.", image: "/assets/residences/heritage_duplex_cad_section.jpg" },
      { id: 4, x: 50, y: 25, title: "Section A-A Roof Truss Structure", desc: "Structural cross-section showing foundation levels, floor heights (+3.75m), and timber roof truss.", image: "/assets/residences/heritage_duplex_cad_section.jpg" },
      { id: 5, x: 20, y: 25, title: "Detached Boys Quarters (BQ)", desc: "2-unit detached service quarters with private porches, kitchens, and en-suite bedrooms.", image: "/assets/residences/heritage_duplex_cad_bq.jpg" }
    ],
    beforeAfter: {
      render: "/assets/residences/heritage_duplex_floor_plans.jpg",
      built: "/assets/residences/heritage_duplex_front.jpg",
      renderLabel: "CAD Floor Plans (Ground & First)",
      builtLabel: "3D BIM Facade Render"
    }
  },
  {
    id: "neokasa-masonry-timber-residence",
    repoName: "neokasa / masonry-timber-residence",
    title: "THE MASONRY & TIMBER VILLA",
    subtitle: "Modern Sculptural Facade with Polygonal Stone & Teak Louvers",
    category: "Design Showcase",
    year: "2025",
    location: "Abuja, Nigeria",
    area: "540 m² / 5,800 sq.ft",
    status: "3D Visual Concept",
    featured: true,
    isConceptOnly: true,
    image: "/assets/concepts/stone_timber_residence_angled.jpg",
    materialAnalysisImage: "/assets/concepts/stone_timber_material_analysis.jpg",
    gallery: [
      "/assets/concepts/stone_timber_residence_angled.jpg",
      "/assets/concepts/stone_timber_residence_front.jpg",
      "/assets/concepts/stone_timber_material_analysis.jpg"
    ],
    client: "NEO KASA Architectural Studio",
    awards: [],
    materials: [
      "Polygonal Natural Stone Masonry (Grey Slate)",
      "Warm Teak Vertical Timber Battens (40x40mm)",
      "Crisp White Acrylic Stucco Render (RAL 9016)",
      "Geometric CNC-Milled Wooden Lattice Screen",
      "Matte Black Powder-Coated Aluminum Fins",
      "Dark Tinted Low-E Frameless Glazing",
      "Interlocking Concrete Paver Driveway"
    ],
    description: "A commanding multi-volume modern luxury residence designed by NEO KASA, exemplifying structural juxtaposition between rugged polygonal stone masonry, warm vertical teak timber louvers, and crisp white cantilevered stucco framing. Designed specifically for tropical and warm-climate urban sites, the entrance features vertical solar fins and an intricate CNC-cut wooden privacy screen framing the upper balcony.",
    designIntent: "To harmonize tactile raw stonework with refined warm timber joinery and clean geometric modernist massing, creating a commanding street presence while maximizing natural shade and spatial privacy.",
    specs: {
      structure: "Reinforced Concrete Frame with Cantilevered Stucco Frame & Stone Cladding Accent",
      sustainability: "Dual-Layer Passive Solar Fins + Natural Timber Temperature Regulation",
      leed: "EDGE Certified Green Building Standards",
      glazing: "Matte Black Powder-Coated Aluminum Frames with Tinted Low-E Glazing"
    },
    materialBreakdown: [
      {
        name: "Polygonal Stone Masonry",
        element: "Accent Tower Facade",
        finish: "Natural slate & granite polygonal stone with recessed dark mortar joints",
        purpose: "Establishes grounding structural presence, thermal mass, and natural stone contrast."
      },
      {
        name: "Vertical Teak Timber Battens",
        element: "Recessed Central Entrance",
        finish: "40x40mm natural oiled teak slats with 20mm negative reveals",
        purpose: "Accentuates vertical entrance scale and provides warm organic texture."
      },
      {
        name: "Crisp White Acrylic Stucco",
        element: "Geometric Upper Frame & Balcony",
        finish: "Smooth fine-grain weather-resistant acrylic render (RAL 9016)",
        purpose: "Frames the upper cantilever box and reflects direct solar radiation."
      },
      {
        name: "Geometric CNC Wooden Screen",
        element: "Upper Balcony Privacy Panel",
        finish: "CNC-milled exterior oak lattice with marine grade clear sealant",
        purpose: "Filters direct sunlight while projecting intricate geometric shadow patterns into the interior."
      },
      {
        name: "Matte Black Aluminum Fins",
        element: "Vertical Solar Shading",
        finish: "50x150mm powder-coated extruded aluminum sections",
        purpose: "Protects ground-to-ceiling glass envelope from low-angle solar heat gain."
      }
    ]
  },
  {
    id: "neokasa-sculptural-monolith-villa",
    repoName: "neokasa / sculptural-monolith-residence",
    title: "THE SCULPTURAL MONOLITH PAVILION",
    subtitle: "Single-Story Contemporary Residence with Integrated GFRC Wall Relief & Ledger Stone",
    category: "Design Showcase",
    year: "2025",
    location: "Lagos, Nigeria",
    area: "380 m² / 4,090 sq.ft",
    status: "3D Visual Concept",
    featured: true,
    isConceptOnly: true,
    image: "/assets/concepts/sculptural_bungalow_front.jpg",
    blueprintImage: "/assets/concepts/sculptural_bungalow_working_drawings.jpg",
    materialAnalysisImage: "/assets/concepts/sculptural_bungalow_material_analysis.jpg",
    gallery: [
      "/assets/concepts/sculptural_bungalow_front.jpg",
      "/assets/concepts/sculptural_bungalow_blossoms.jpg",
      "/assets/concepts/sculptural_bungalow_angled.jpg",
      "/assets/concepts/sculptural_bungalow_working_drawings.jpg",
      "/assets/concepts/sculptural_bungalow_material_analysis.jpg"
    ],
    client: "NEO KASA Architectural Studio",
    awards: [],
    materials: [
      "Hammered Charcoal Granite Stucco Monolith",
      "Organic White GFRC Wall Relief Sculpture",
      "Earthy Quartzite Stacked Ledger Stone Veneer",
      "Crisp White Cantilevered Acrylic Porch Canopy",
      "Anthracite Metallic Entryway Door & Hardware",
      "Flamed Grey Granite Permeable Pavers",
      "Landscaped Magnolia & Blossom Gardens"
    ],
    description: "A single-story modern luxury pavilion designed by NEO KASA, centered around a dramatic hammered charcoal granite monolith featuring an integrated white fluid GFRC relief sculpture. Complete approved CAD working drawings include full floor plan layout, Approach View elevation, and Rear View elevation drawings.",
    designIntent: "To elevate residential facade design into a fine art canvas, combining tactile rough-hammered stone textures with smooth organic architectural sculpture and warm natural ledger stonework.",
    specs: {
      structure: "Single-Level Reinforced Concrete Slab with Monolithic Feature Wall & Cantilever Portico",
      sustainability: "Deep Overhanging Porch Canopy for Direct Solar Heat Gain Reduction",
      leed: "EDGE Certified Thermal Performance",
      glazing: "High-Performance Powder-Coated Aluminum Glazing Frames with Low-E Coating"
    },
    materialBreakdown: [
      {
        name: "Hammered Charcoal Granite Stucco",
        element: "Monolithic Feature Tower",
        finish: "Rough hand-hammered charcoal granite texture with matte weather-seal coating",
        purpose: "Establishes a dramatic vertical focal point and background canvas for wall sculpture."
      },
      {
        name: "Organic White GFRC Relief Sculpture",
        element: "Integrated Wall Art Motif",
        finish: "Glassfiber Reinforced Concrete (GFRC) with matte white architectural finish",
        purpose: "Transforms structural wall into an outdoor sculptural art piece reflecting natural daylight and shadows."
      },
      {
        name: "Stacked Quartzite Ledger Stone",
        element: "Entrance Accent Column",
        finish: "Natural dry-stack quartzite ledgestone in warm ochre & earth tones",
        purpose: "Provides warm organic stone texture adjacent to the entry threshold."
      },
      {
        name: "Crisp White Acrylic Canopy",
        element: "Portico & Roof Accent",
        finish: "Alucobond composite paneling with UV-resistant smooth white finish",
        purpose: "Creates a sharp architectural shadow box framing the main entrance stairs."
      },
      {
        name: "Flamed Granite Permeable Pavers",
        element: "Driveway & Plaza Hardscaping",
        finish: "600x600mm flamed grey granite slabs with turf permeable joints",
        purpose: "Ensures sustainable stormwater drainage while offering a clean, reflective forecourt."
      }
    ],
    repoFiles: [
      {
        folder: "01_CAD_Working_Drawings",
        files: [
          { name: "bungalow_floor_plan_and_elevations_A101.dwg", type: "dwg", size: "28.4 MB", preview: "/assets/concepts/sculptural_bungalow_working_drawings.jpg", desc: "Complete CAD working drawings detailing 3-bedroom floor plan layout, Approach View elevation, and Rear View." }
        ]
      }
    ],
    floorPlanPins: [
      { id: 1, x: 68, y: 78, title: "Hammered Granite Monolith & Entrance Porch", desc: "Front porch and entrance threshold framed by the hammered charcoal granite feature wall.", image: "/assets/concepts/sculptural_bungalow_front.jpg" },
      { id: 2, x: 72, y: 60, title: "Main Living Room & Verandah Bay", desc: "Open-plan main living lounge with full-height glazing looking out onto the front garden.", image: "/assets/concepts/sculptural_bungalow_angled.jpg" },
      { id: 3, x: 75, y: 32, title: "Master Bedroom Suite & En-Suite Bath", desc: "Private master bedroom suite with walk-in closet (WIC) and en-suite luxury bathroom.", image: "/assets/concepts/sculptural_bungalow_blossoms.jpg" },
      { id: 4, x: 52, y: 45, title: "Dining & Kitchen Suite", desc: "Central dining space adjacent to the kitchen, store room, and outdoor patio exit.", image: "/assets/concepts/sculptural_bungalow_material_analysis.jpg" },
      { id: 5, x: 28, y: 45, title: "Bedrooms 1 & 2 Wing", desc: "Private residential wing comprising 2 additional bedrooms with shared en-suite facilities.", image: "/assets/concepts/sculptural_bungalow_angled.jpg" }
    ],
    beforeAfter: {
      render: "/assets/concepts/sculptural_bungalow_working_drawings.jpg",
      built: "/assets/concepts/sculptural_bungalow_front.jpg",
      renderLabel: "CAD Working Drawings (Floor Plan & Elevations)",
      builtLabel: "3D BIM Facade Render"
    }
  },
  {
    id: "neokasa-azure-arch-bungalow",
    repoName: "neokasa / azure-arch-residence",
    title: "THE AZURE ARCH BUNGALOW",
    subtitle: "Neo-Classical Contemporary Residence with Ashlar Stone Pillar & Arched Portico",
    category: "Design Showcase",
    year: "2025",
    location: "Uyo, Akwa Ibom, Nigeria",
    area: "320 m² / 3,440 sq.ft",
    status: "3D Visual & Facade Showcase",
    featured: true,
    isConceptOnly: true,
    image: "/assets/concepts/azure_arch_bungalow_front.jpg",
    gallery: [
      "/assets/concepts/azure_arch_bungalow_front.jpg",
      "/assets/concepts/azure_arch_bungalow_perspective.jpg",
      "/assets/concepts/azure_arch_bungalow_close.jpg"
    ],
    client: "NEO KASA Architectural Studio",
    awards: [],
    materials: [
      "Periwinkle Blue Fine-Grain Acrylic Render",
      "Variegated Ashlar Stone Veneer (Feature Chimney Column)",
      "Textured Dark Charcoal Brick Accent Bands",
      "Crisp White Arched Portico & Tuscan Columns",
      "Charcoal Shingle Concrete Roof Tiles",
      "Black Powder-Coated Aluminium Window Frames",
      "Interlocking Concrete Paver Driveway"
    ],
    description: "A neo-classical contemporary single-family bungalow designed by NEO KASA, distinguished by its soft periwinkle blue facade, welcoming white arched portico entrance, and an iconic vertical ashlar stone feature pillar. Symmetrical dark brick accent lintels anchor the glazing, while a manicured forecourt and landscaped stone planters complete a warm, sophisticated residential retreat.",
    designIntent: "To blend classical elegance with clean modern detailing, pairing soft periwinkle tones and tactile rustic masonry with crisp architectural white mouldings and arched entry circulation.",
    specs: {
      structure: "Single-Story Reinforced Concrete Frame with Masonry Feature Column",
      sustainability: "Deep Recessed Arch Entry for Solar Shade & Thermal Mass Buffering",
      leed: "EDGE Residential Energy Standard",
      glazing: "Powder-Coated Black Aluminum Frames with Low-E Clear Glass"
    },
    materialBreakdown: [
      {
        name: "Variegated Ashlar Stone Cladding",
        element: "Feature Vertical Pillar / Chimney",
        finish: "Natural split-face ashlar stone in multi-toned grey and white with dark mortar",
        purpose: "Provides strong vertical anchor, rich rustic texture, and high thermal mass."
      },
      {
        name: "Periwinkle Blue Stucco",
        element: "Main Facade Envelope",
        finish: "Fine-grain weather-resistant silicone acrylic render in soothing periwinkle blue",
        purpose: "Establishes a distinctive, calming modern aesthetic with high solar reflectance."
      },
      {
        name: "Dark Charcoal Brick Accent Bands",
        element: "Window Header & Base Perimeter",
        finish: "Linear charcoal brick slips with recessed raked joints",
        purpose: "Frames window apertures and grounds the base perimeter against the courtyard."
      },
      {
        name: "Arched Portico & Tuscan Columns",
        element: "Main Entrance Canopy",
        finish: "Precast reinforced concrete arch and twin columns in pure white (RAL 9016)",
        purpose: "Creates a welcoming neoclassical portal that shelters the front entrance from tropical rainfall."
      },
      {
        name: "Charcoal Concrete Roof Tiles",
        element: "Pitched Gable & Hip Roof",
        finish: "High-durability interlocking concrete roof tiles in deep slate charcoal",
        purpose: "Provides rapid rainwater runoff and superior storm resistance."
      }
    ],
    repoFiles: [
      {
        folder: "01_3D_BIM_Visualizations",
        files: [
          { name: "front_approach_elevation.png", type: "image", size: "18.2 MB", preview: "/assets/concepts/azure_arch_bungalow_front.jpg", desc: "Frontal approach render showing arched entrance, ashlar stone column, and landscaped yard." },
          { name: "angled_corner_perspective.png", type: "image", size: "16.5 MB", preview: "/assets/concepts/azure_arch_bungalow_perspective.jpg", desc: "Perspective view highlighting the hipped roof geometry, side fenestration, and boundary wall." },
          { name: "entrance_portico_close.png", type: "image", size: "15.8 MB", preview: "/assets/concepts/azure_arch_bungalow_close.jpg", desc: "Detailed perspective showcasing the arched entry portico, twin columns, and stone texture." }
        ]
      }
    ],
    floorPlanPins: [
      { id: 1, x: 42, y: 58, title: "Arched Entrance Portico & Verandah", desc: "Covered entryway with classic arch and twin columns leading to the main foyer.", image: "/assets/concepts/azure_arch_bungalow_front.jpg" },
      { id: 2, x: 68, y: 55, title: "Ashlar Stone Feature Column", desc: "Monumental stone column anchoring the right facade and dining bay.", image: "/assets/concepts/azure_arch_bungalow_perspective.jpg" },
      { id: 3, x: 28, y: 62, title: "Living Room Bay & Dark Brick Header", desc: "Spacious front lounge with symmetrical dark brick lintel windows.", image: "/assets/concepts/azure_arch_bungalow_close.jpg" }
    ]
  },
  {
    id: "neokasa-sculpture-timber-pavilion",
    repoName: "neokasa / sculpture-timber-pavilion",
    title: "THE SCULPTURE & TIMBER PAVILION VILLA",
    subtitle: "Minimalist Luxury Residence with Integrated Bronze Sculpture & Teak Screens",
    category: "Design Showcase",
    year: "2025",
    location: "Abuja, Nigeria",
    area: "460 m² / 4,950 sq.ft",
    status: "3D Visual & Facade Showcase",
    featured: true,
    isConceptOnly: true,
    image: "/assets/concepts/sculpture_pavilion_residence_front.jpg",
    gallery: [
      "/assets/concepts/sculpture_pavilion_residence_front.jpg",
      "/assets/concepts/sculpture_pavilion_residence_lawn.jpg",
      "/assets/concepts/sculpture_pavilion_residence_drive.jpg"
    ],
    client: "NEO KASA Architectural Studio",
    awards: [],
    materials: [
      "Crisp White Geometric Stucco Parapets & Cantilevers",
      "Rough-Hewn Polygonal Stone Accent Walls",
      "Vertical Teak Timber Louver Privacy Screens",
      "Sculptural Cast Bronze Figure with Golden Sphere",
      "Matte Black Aluminum Glazing Mullions",
      "Lush Manicured Hedge Perimeter & Lawn"
    ],
    description: "A minimalist luxury bungalow villa master-planned by NEO KASA, characterized by sleek horizontal parapet lines, rough-hewn textured stone feature walls, and vertical teak timber solar louvers. The entrance is anchored by a monumental cast bronze humanoid sculpture holding a golden orb, uniting high architectural minimalism with contemporary outdoor fine art.",
    designIntent: "To merge modern rectilinear architecture with organic outdoor sculpture and warm natural materials, crafting an elevated residential sanctuary with seamless indoor-outdoor sightlines.",
    specs: {
      structure: "Single-Level Reinforced Concrete Frame with Cantilevered Parapet Roof",
      sustainability: "Integrated Vertical Teak Louver Shading + Deep Porch Solar Overhang",
      leed: "EDGE Certified Green Building Standards",
      glazing: "Thermally Broken Black Powder-Coated Aluminum Curtain Glazing"
    },
    materialBreakdown: [
      {
        name: "Cast Bronze Sculpture & Golden Sphere",
        element: "Entrance Art Installation",
        finish: "Dark patinated cast bronze figure with polished golden spherical centerpiece",
        purpose: "Acts as a monumental signature sculpture greeting guests and creating an unforgettable entrance."
      },
      {
        name: "Rough-Hewn Stone Cladding",
        element: "Central Facade Feature Panel",
        finish: "Natural grey stone with deep tactile relief and organic fracture texture",
        purpose: "Breaks up planar white stucco with rugged geological contrast."
      },
      {
        name: "Vertical Teak Louver Screens",
        element: "Window Shading & Corner Accents",
        finish: "50x50mm oiled natural teak timber slats with dark powder-coated frame",
        purpose: "Provides passive solar shade while introducing warm organic rhythm to the modern envelope."
      },
      {
        name: "Crisp White Parapet Cantilever",
        element: "Roofline & Floating Box Geometry",
        finish: "Smooth exterior acrylic stucco in pure white (RAL 9016)",
        purpose: "Creates strong horizontal lines and shadows that define modernist pavilion massing."
      },
      {
        name: "Manicured Hedge & Forecourt",
        element: "Site Hardscape & Landscape",
        finish: "Interlocking paving driveway bordered by dense sculpted green hedges and lawn",
        purpose: "Frames the architecture with natural greenery and maintains spatial privacy."
      }
    ],
    repoFiles: [
      {
        folder: "01_3D_BIM_Visualizations",
        files: [
          { name: "front_approach_symmetrical_perspective.png", type: "image", size: "22.6 MB", preview: "/assets/concepts/sculpture_pavilion_residence_front.jpg", desc: "Monumental front approach perspective showing driveway, bronze sculpture, white parapet, and stone facade." },
          { name: "wide_landscape_lawn_perspective.png", type: "image", size: "19.4 MB", preview: "/assets/concepts/sculpture_pavilion_residence_lawn.jpg", desc: "Wide-angle landscape render showing lawn, palm trees, timber louvers, and sculpture." },
          { name: "entry_forecourt_perspective.png", type: "image", size: "17.8 MB", preview: "/assets/concepts/sculpture_pavilion_residence_drive.jpg", desc: "Driveway forecourt view with bronze sculpture, red pickup, silver SUV, and stone facade." }
        ]
      }
    ],
    floorPlanPins: [
      { id: 1, x: 50, y: 55, title: "Central Entrance Portal & Vertical Fins", desc: "Main entrance with 3 vertical white fins, textured stone cladding, and designer front door.", image: "/assets/concepts/sculpture_pavilion_residence_front.jpg" },
      { id: 2, x: 32, y: 56, title: "Sculptural Art Feature & Golden Sphere", desc: "Monumental bronze humanoid sculpture with golden orb anchoring the entryway plaza.", image: "/assets/concepts/sculpture_pavilion_residence_drive.jpg" },
      { id: 3, x: 72, y: 58, title: "Corner Suite with Teak Louver Screens", desc: "Private wing featuring warm vertical teak slats and integrated planter boxes.", image: "/assets/concepts/sculpture_pavilion_residence_lawn.jpg" }
    ]
  }
];

export const STUDIO_STATS = [
  { label: "BIM & CAD Precision Detailing", value: "100%" },
  { label: "Commission Reach", value: "Nationwide & Global" },
  { label: "Design Philosophy", value: "Climate-Adaptive" }
];

export const TESTIMONIALS = [
  {
    quote: "NEO KASA's design for the UNIUYO Entrepreneurial Skill Hub brilliantly captures tropical climate responsiveness with stunning wave aesthetics. The natural airflow and terracotta screen heat reduction are transformative.",
    author: "Prof. N. E. Bassey",
    role: "Dean, Faculty of Environmental Studies",
    source: "University of Uyo"
  },
  {
    quote: "The House of Fashion Atelier by NEO KASA is a masterclass in modern spatial luxury. The organic perforated pod fascias and seamless daylighting give our flagship a presence unlike anything else in Abuja.",
    author: "Amara Okonkwo",
    role: "Creative Director & Brand Principal",
    source: "House of Fashion"
  },
  {
    quote: "NEO KASA represents the pinnacle of modern architectural thinking—seamlessly uniting progressive engineering with climate-adaptive spatial elegance.",
    author: "Architectural Digest",
    role: "International Review",
    source: "AD Magazine"
  }
];

export const STUDIO_VALUES = [
  {
    title: "Timeless Geometry",
    desc: "Crafting structural forms stripped of temporary trends, focusing on permanent spatial proportion, natural daylight, and shadow play."
  },
  {
    title: "Sustainable Craft",
    desc: "Pioneering carbon-negative mass timber joinery, perforated solar shading screens, low-carbon framing, and integrated climate systems."
  },
  {
    title: "Contextual Harmony",
    desc: "Designing every building to emerge organically from its specific topography, micro-climate, and regional heritage."
  }
];
