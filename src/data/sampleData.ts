import navLogo from "../../public/277-Fifth-Logo-NoMad-horizontal.svg"
import logo from "../../public/277-Fifth-Logo-NoMad-white.svg"
import cardImg1 from "../../public/TW__5764_HIGH-RES.webp"
import cardImg2 from "../../public/TW__5698_HIGH-RES.webp"
import cardImg3 from "../../public/TW__5477_HIGH-RES.webp"
import cardImg4 from "../../public/TW__5748_HIGH-RES.webp"
import cardImg5 from "../../public/Kitchens.webp"
import cardImg6 from "../../public/Bath.webp"
import cardImg7 from "../../public/Fluff_TW__5521_HIGH-RES.webp"
import aboutImg1 from "../../public/Loggia-Image-958x1440.jpg"
import amDining from "../../public/Amenity_Dining.jpg"
import amFitness from "../../public/Amenity_Fitness.jpg"
import amGames from "../../public/Amenity_Games.jpg"
import amKids from "../../public/Amenity_Kids.jpg"
import amLobby from "../../public/Amenity_Lobby.jpg"
import amSuite from "../../public/Amenity_Suite.jpg"
import amTerrace from "../../public/Amenity_Terrace.jpg"
import infoFountain from "../../public/Info-Fountain.png"
import infoFlatiron from "../../public/Info-Flatiron.png"

const amenitiesCards = [
  
  {
    imgSrc: amLobby.src,
    title: "lobby library",
    text: "A curated entry with a dramatic, double-height bookcase wall."
  },
  {
    imgSrc: amTerrace.src,
    title: "setback terrace",
    text: "A furnished and landscaped common setback Fifth Avenue terrace."
  },
  {
    imgSrc: amFitness.src,
    title: "fitness club",
    text: "An expansive fitness space with a separate training and yoga studio, in addition to men's and women's spas."
  },
  {
    imgSrc: amSuite.src,
    title: "entertaining suite",
    text: "A space to gather and entertain, complete with separate bar and kitchen pantry."
  },
  {
    imgSrc: amDining.src,
    title: "private dining room",
    text: "Gather friends and family to share an exquisite meal in this elegant setting."
  },
  {
    imgSrc: amGames.src,
    title: "games lounge",
    text: "Set a friendly match at the custom ping pong table and see who comes out on top."
  },
  {
    imgSrc: amKids.src,
    title: "kid's club",
    text: "This playful space bursting with games and activities to explore."
  },

]

const residencesCards = [
  
  {
    imgSrc: cardImg2.src,
    title: "kitchens",
    text: "Custom kitchens are tailored to your every need with white oak cabinetry, marble slab countertops, and a suite of fully-integrated stainless steel Miele appliances.",
    features: [
      "Light stained White Oak cabinetry with recessed satin brushed metal accent trims throughout kitchen counters and islands; upper cabinet doors provided in two options: metal trimmed white back-painted glass or light stained White Oak",
      "Calacatta Saccheli polished marble slab countertops, backsplash with integrated cooktop niches, and island countertop with waterfall edges, all in a polished finish",
      "Undermount Blanco stainless steel sink with Dornbracht swivel spout faucet and pull-down spray in a polished chrome finish; cold water pot filler at cooktops in the Loggia Residences and Penthouse kitchens",
      "Suite of fully-integrated stainless steel finish Miele appliances which including: refrigerator and freezer, wine cooler, gas cooktop with sealed burners and retractable ventilation hood above, 30” convection oven, 24” speed oven (microwave + convection), and full-size 24” dishwasher",
      "Sound insulated 1 H.P. food waste disposal at all kitchen sinks",
    ]
  },
  {
    imgSrc: cardImg3.src,
    title: "primary baths",
    text: "Spa-like baths are clad in floor-to-ceiling marble with custom walnut vanities and metal frame medicine cabinets with integrated lighting.",
    features: [
      "Bianco Dolomiti marble tile flooring in a honed finish",
      "San Nicola marble tile walls in a honed finish",
      "Custom walnut vanity with Bianco Dolomiti marble slab countertop with waterfall sides and backsplash in a polished finish; Kohler Kathryn sinks, Dornbracht LULU series faucets in a polished chrome finish",
      "Custom metal frame medicine cabinet with integrated lighting",
      "Kaldewei Puro Duo steel enamel tub with Bianco Dolomiti marble slab tub deck and apron in a polished finish, Dornbracht tub deck control with pull-out hand shower and waterfall tub spout in a polished chrome finish",
      "All glass shower with San Nicola stone walls and integrated wall niche shelf in a honed finish; Bianco Dolomiti mosaic tiles on shower floor with integrated “infinity-edge” drain; Dornbracht wall mounted rain shower and wall mounted hand shower in a polished chrome finish",
      "Water closet by Duravit",
      "Heated floors with pre-set timer function"
    ]
  },
  {
    imgSrc: cardImg4.src,
    title: "loggia residences",
    text: "Select residences offer expansive double-height loggias to escape from it all. Each is outfitted with lounge seating, a jacuzzi, and unbelievable views.",
    features: [
      "Double-height outdoor space",
      "Lounge seating",
      "Jacuzzi",
      "Manhattan skyline views"
    ]
  },
  {
    imgSrc: cardImg1.src,
    title: "living spaces",
    text: "Residences with luxuriously appointed interiors by Jeffrey Beers International showcase thrilling panoramic views of the Manhattan skyline.",
    features: [
      "Residential entrance door and surround casing panels in dark stained rift cut White Oak with black metal door trim detail complemented with polished nickel Valli & Valli door hardware",
      "10 to 11-foot ceiling heights in entertaining rooms in select residences; 20-foot double-height ceilings in select Loggia Residences",
      "Floor-to-ceiling windows",
      "5 1⁄2” wide American White Oak flooring",
      "Laundry closets with Bosch washer and dryer",
      "Sustainable CalGreen, CEC/Water Sense polished chrome Dornbracht plumbing fixtures",
      "Conduit provided to anticipate future electronically controlled solar shades",
      "Valli & Valli door hardware throughout"
    ]
  },
]

const slideshow = [
  cardImg1.src,
  cardImg5.src,
  cardImg6.src,
  cardImg7.src
]

const slideshowTag = "Homes designed by internationally acclaimed architect Rafael Viñoly, with thoughtfully appointed interiors by Jeffrey Beers International."

const blockLinks = [
  "residences",
  "amenities",
  "nomad",
  "availability"
]

const CTATagline = "The Tallest Residential Condominium on Fifth Avenue.\nImmediate Occupancy"

const videoSrc = "/Unbranded-277-5th-Ave-New-York-NY-100162-Fredrik-Eklund-1.mp4"

const navLinks = ["residences", "inquire"];

const aboutBlock = {
  imgSrc: aboutImg1.src,
  links: blockLinks,
  title: "Uniting Sky and Earth",
  text: "In the very heart of NoMad, where the elegance of uptown meets the energy of downtown, 277 Fifth Avenue soars toward the clouds.\n\nAward of Excellence & Winner for Best Tall Residential Building"
}

const amenitiesBlock = {
  cards: amenitiesCards,
  text: "Over 7,000 square feet of thoughtfully curated recreational spaces."
}

const residenceBlock = {
  factSheet: "/277_5TH_FactSheet.pdf",
  cards: residencesCards,
  textCard: {
    title: "Residences",
    text: "Distinguished one-to-three bedroom residences showcase panoramic views of the Manhattan skyline. Interiors are graced with oversized windows and ceilings reaching ten feet, complemented by warm woods and elegant natural stones.",
  }
}

const infoBlock = {
  title: "NoMad",
  text: "With a distinguished Fifth Avenue address and moments away from Madison Square Park, 277 Fifth Ave boasts access to Manhattan’s most elite restaurants, parks, shops, and hotels.",
  topImgSrc: infoFountain.src,
  botImgSrc: infoFlatiron.src,
}

export default {
  logo: logo.src,
  videoSrc,
  navLogo: navLogo.src,
  navLinks,
  residencesCards,
  slideshow,
  slideshowTag,
  blockLinks,
  CTATagline,
  aboutBlock,
  amenitiesBlock,
  residenceBlock,
  infoBlock
}