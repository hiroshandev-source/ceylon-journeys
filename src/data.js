const img = (name) => `/images/${name}.jpg`

export const heroSlides = [
  { image: img('sigiriya'), place: 'Sigiriya Lion Rock', title: 'Discover the Wonder of Asia', text: 'Ancient kingdoms, misty mountains and golden beaches – all on one magical island.' },
  { image: img('nine-arch'), place: 'Nine Arch Bridge, Ella', title: 'Journeys Through the Hills', text: 'Ride the world’s most scenic train through emerald tea country.' },
  { image: img('mirissa'), place: 'Mirissa Beach', title: 'Sun, Sand & Turquoise Seas', text: 'Palm-fringed bays, whale watching and unforgettable sunsets.' },
  { image: img('tea'), place: 'Nuwara Eliya', title: 'Sip Tea Where It Grows', text: 'Wander rolling plantations in the cool heart of the highlands.' },
  { image: img('elephants'), place: 'Minneriya National Park', title: 'Into the Wild', text: 'Witness the great elephant gathering and spot leopards on safari.' },
]

export const regions = ['All', 'Cultural Triangle', 'Hill Country', 'South Coast', 'East Coast', 'Wildlife']

export const destinations = [
  {
    id: 'sigiriya', name: 'Sigiriya', region: 'Cultural Triangle', image: img('sigiriya'),
    short: 'The legendary 5th-century Lion Rock fortress.',
    description: 'Rising 200 m above the jungle, Sigiriya is a UNESCO World Heritage fortress built by King Kashyapa. Climb past the famous frescoes and giant lion paws to the summit palace for breathtaking views.',
    highlights: ['Lion Rock climb', 'Ancient frescoes', 'Water gardens', 'Pidurangala sunrise'],
    best: 'January – April',
  },
  {
    id: 'kandy', name: 'Kandy', region: 'Hill Country', image: img('kandy-temple'),
    short: 'Sacred city of the Temple of the Tooth Relic.',
    description: 'The last royal capital of Sri Lanka, Kandy is home to the Temple of the Sacred Tooth Relic, a serene lake, cultural dance shows and the Royal Botanical Gardens in Peradeniya.',
    highlights: ['Temple of the Tooth', 'Kandy Lake', 'Peradeniya Gardens', 'Cultural dance show'],
    best: 'All year (Esala Perahera: Jul/Aug)',
  },
  {
    id: 'ella', name: 'Ella', region: 'Hill Country', image: img('nine-arch'),
    short: 'Nine Arch Bridge, hikes and mountain views.',
    description: 'A laid-back mountain village surrounded by tea estates and waterfalls. Watch the blue train cross the Nine Arch Bridge, hike Little Adam’s Peak and Ella Rock, and relax in cosy cafés.',
    highlights: ['Nine Arch Bridge', 'Little Adam’s Peak', 'Ravana Falls', 'Scenic train ride'],
    best: 'January – May',
  },
  {
    id: 'nuwara-eliya', name: 'Nuwara Eliya', region: 'Hill Country', image: img('tea'),
    short: '“Little England” among endless tea fields.',
    description: 'A cool colonial-era hill town at 1,868 m, famous for its tea factories, Gregory Lake, flower gardens and the stunning Horton Plains nearby.',
    highlights: ['Tea factory tour', 'Gregory Lake', 'Horton Plains', 'Hakgala Gardens'],
    best: 'February – May',
  },
  {
    id: 'galle', name: 'Galle Fort', region: 'South Coast', image: img('galle'),
    short: 'Colonial charm inside a UNESCO sea fort.',
    description: 'Stroll cobbled streets lined with boutiques, cafés and Dutch-era architecture, then walk the ramparts to the iconic lighthouse at sunset.',
    highlights: ['Fort ramparts walk', 'Lighthouse', 'Boutique shopping', 'Stilt fishermen'],
    best: 'November – April',
  },
  {
    id: 'mirissa', name: 'Mirissa', region: 'South Coast', image: img('mirissa'),
    short: 'Whale watching and palm-lined beaches.',
    description: 'One of the best places in the world to see blue whales. Enjoy golden beaches, Coconut Tree Hill, surfing and fresh seafood by the sea.',
    highlights: ['Blue whale watching', 'Coconut Tree Hill', 'Secret Beach', 'Surfing'],
    best: 'November – April',
  },
  {
    id: 'bentota', name: 'Bentota', region: 'South Coast', image: img('bentota'),
    short: 'Water sports, river safaris and resorts.',
    description: 'A beautiful stretch of beach perfect for relaxing, with jet-skiing, banana boats, Madu River mangrove safaris and turtle hatcheries nearby.',
    highlights: ['Water sports', 'Madu River safari', 'Turtle hatchery', 'Luxury resorts'],
    best: 'November – April',
  },
  {
    id: 'unawatuna', name: 'Unawatuna', region: 'South Coast', image: img('unawatuna'),
    short: 'Calm bay ideal for swimming and snorkelling.',
    description: 'A crescent-shaped bay with calm waters, coral reefs and the hidden Jungle Beach – perfect for families and snorkellers.',
    highlights: ['Jungle Beach', 'Snorkelling', 'Japanese Peace Pagoda', 'Beach cafés'],
    best: 'November – April',
  },
  {
    id: 'yala', name: 'Yala National Park', region: 'Wildlife', image: img('yala'),
    short: 'Highest leopard density in the world.',
    description: 'Sri Lanka’s most famous safari park. Search for leopards, sloth bears, elephants, crocodiles and hundreds of bird species on a thrilling jeep safari.',
    highlights: ['Leopard safari', 'Elephants', 'Sloth bears', 'Bird watching'],
    best: 'February – July',
  },
  {
    id: 'minneriya', name: 'Minneriya', region: 'Wildlife', image: img('elephants'),
    short: 'Home of “The Gathering” of elephants.',
    description: 'Every dry season hundreds of wild elephants gather around the ancient Minneriya tank – one of the greatest wildlife spectacles in Asia.',
    highlights: ['The Gathering', 'Jeep safari', 'Ancient reservoir', 'Birdlife'],
    best: 'July – October',
  },
  {
    id: 'pinnawala', name: 'Pinnawala', region: 'Wildlife', image: img('pinnawala'),
    short: 'Watch elephants bathe in the river.',
    description: 'Visit the elephant orphanage and watch the herd bathe in the Maha Oya river – a favourite stop between Colombo and Kandy.',
    highlights: ['River bathing', 'Feeding time', 'Spice gardens', 'Family friendly'],
    best: 'All year',
  },
  {
    id: 'anuradhapura', name: 'Anuradhapura', region: 'Cultural Triangle', image: img('anuradhapura'),
    short: 'Sri Lanka’s first ancient capital.',
    description: 'A sacred city of giant white dagobas, ancient monasteries and the Sri Maha Bodhi – the oldest documented tree in the world.',
    highlights: ['Ruwanwelisaya', 'Sri Maha Bodhi', 'Jetavanaramaya', 'Mihintale'],
    best: 'May – September',
  },
  {
    id: 'polonnaruwa', name: 'Polonnaruwa', region: 'Cultural Triangle', image: img('polonnaruwa'),
    short: 'Medieval ruins and the Gal Vihara statues.',
    description: 'Cycle through the remarkably preserved ruins of the medieval capital, home to royal palaces and the magnificent rock-carved Buddhas of Gal Vihara.',
    highlights: ['Gal Vihara', 'Royal Palace', 'Parakrama Samudra', 'Cycling tour'],
    best: 'May – September',
  },
  {
    id: 'dambulla', name: 'Dambulla', region: 'Cultural Triangle', image: img('dambulla'),
    short: 'Painted cave temples and the Golden Buddha.',
    description: 'Five sacred caves filled with over 150 Buddha statues and vivid ceiling murals dating back 2,000 years – a UNESCO World Heritage Site.',
    highlights: ['Cave temples', 'Golden Temple', 'Ancient murals', 'Village tours'],
    best: 'All year',
  },
  {
    id: 'adams-peak', name: 'Adam’s Peak', region: 'Hill Country', image: img('adams-peak'),
    short: 'A sacred night-time pilgrimage to the summit.',
    description: 'Sri Pada is climbed by pilgrims of many faiths. Start the climb at night and reach the summit for an unforgettable sunrise and the famous peak shadow.',
    highlights: ['Sunrise climb', 'Sacred footprint', 'Peak shadow', 'Pilgrim trail'],
    best: 'December – May',
  },
  {
    id: 'horton-plains', name: 'Horton Plains', region: 'Hill Country', image: img('horton'),
    short: 'Cloud forests and the edge of World’s End.',
    description: 'A high plateau of grasslands and cloud forest. Hike to World’s End, a sheer 870 m drop, and the beautiful Baker’s Falls.',
    highlights: ['World’s End', 'Baker’s Falls', 'Sambar deer', 'Morning hike'],
    best: 'January – March',
  },
  {
    id: 'arugam-bay', name: 'Arugam Bay', region: 'East Coast', image: img('arugam'),
    short: 'World-famous surf point on the east coast.',
    description: 'A relaxed surf town with consistent waves, lagoon safaris and Kumana National Park nearby. A favourite with surfers and backpackers.',
    highlights: ['Surfing', 'Lagoon safari', 'Kumana NP', 'Beach life'],
    best: 'May – September',
  },
  {
    id: 'trincomalee', name: 'Trincomalee', region: 'East Coast', image: img('trincomalee'),
    short: 'Nilaveli beaches and Pigeon Island reefs.',
    description: 'White-sand beaches, one of the world’s finest natural harbours, the clifftop Koneswaram Temple and snorkelling with reef sharks at Pigeon Island.',
    highlights: ['Nilaveli Beach', 'Pigeon Island', 'Koneswaram Temple', 'Whale & dolphin trips'],
    best: 'May – September',
  },
]

export const tours = [
  {
    id: 'classic', title: 'Classic Sri Lanka Grand Tour', days: 10, image: img('sigiriya'), tag: 'Best Seller',
    route: ['Negombo', 'Sigiriya', 'Dambulla', 'Kandy', 'Nuwara Eliya', 'Ella', 'Yala', 'Galle'],
    includes: ['Private A/C vehicle', 'English/Sinhala speaking chauffeur guide', 'Hotels with breakfast', 'Airport transfers'],
  },
  {
    id: 'culture', title: 'Cultural Triangle Explorer', days: 5, image: img('anuradhapura'), tag: 'Heritage',
    route: ['Anuradhapura', 'Polonnaruwa', 'Sigiriya', 'Dambulla', 'Kandy'],
    includes: ['5 UNESCO sites', 'Village safari & lunch', 'Cultural dance show', 'Expert guide'],
  },
  {
    id: 'hills', title: 'Hill Country & Tea Trails', days: 6, image: img('train'), tag: 'Scenic',
    route: ['Kandy', 'Nuwara Eliya', 'Horton Plains', 'Ella'],
    includes: ['Scenic train ride', 'Tea factory visit', 'World’s End hike', 'Nine Arch Bridge'],
  },
  {
    id: 'wildlife', title: 'Wildlife & Safari Adventure', days: 7, image: img('yala'), tag: 'Adventure',
    route: ['Minneriya', 'Kandy', 'Udawalawe', 'Yala', 'Mirissa'],
    includes: ['3 jeep safaris', 'Whale watching', 'Elephant Transit Home', 'Nature lodges'],
  },
  {
    id: 'beach', title: 'Southern Beach Escape', days: 6, image: img('mirissa'), tag: 'Relax',
    route: ['Bentota', 'Galle', 'Unawatuna', 'Mirissa'],
    includes: ['Beachfront hotels', 'Madu River safari', 'Galle Fort walk', 'Sunset cruise'],
  },
  {
    id: 'honeymoon', title: 'Romantic Honeymoon Retreat', days: 8, image: img('little-adams'), tag: 'Couples',
    route: ['Kandy', 'Ella', 'Nuwara Eliya', 'Bentota'],
    includes: ['Boutique hotels', 'Candle-lit dinners', 'Ayurveda spa', 'Private transfers'],
  },
]

export const experiences = [
  { icon: 'paw', title: 'Wildlife Safaris', text: 'Leopards in Yala, elephants in Minneriya and Udawalawe.' },
  { icon: 'wave', title: 'Whale Watching', text: 'Meet blue whales and dolphins off Mirissa & Trincomalee.' },
  { icon: 'train', title: 'Scenic Train Rides', text: 'The iconic Kandy to Ella journey through tea country.' },
  { icon: 'leaf', title: 'Tea Estate Tours', text: 'Pluck, taste and learn about world-famous Ceylon tea.' },
  { icon: 'temple', title: 'Temples & Heritage', text: '8 UNESCO World Heritage Sites and ancient kingdoms.' },
  { icon: 'surf', title: 'Surfing & Beaches', text: 'Arugam Bay, Weligama and hundreds of golden beaches.' },
  { icon: 'spa', title: 'Ayurveda & Wellness', text: 'Traditional healing, yoga and luxury spa retreats.' },
  { icon: 'food', title: 'Food & Culture', text: 'Rice & curry, hoppers, kottu and cooking classes.' },
]

export const whyUs = [
  { icon: 'chat', title: 'English & Sinhala Guides', text: 'Friendly, licensed chauffeur guides who speak English and Sinhala.' },
  { icon: 'route', title: 'Tailor-made Itineraries', text: 'Every tour is designed around your interests, dates and budget.' },
  { icon: 'car', title: 'Private A/C Vehicles', text: 'Clean, comfortable cars, vans and coaches for any group size.' },
  { icon: 'shield', title: 'Safe & Trusted', text: 'Local experts who know the island – your trusted travel partner.' },
  { icon: 'clock', title: '24/7 Support', text: 'We are always a call or WhatsApp message away during your trip.' },
  { icon: 'tag', title: 'Best Value', text: 'Direct local prices with no hidden costs or middlemen.' },
]

export const steps = [
  { n: '01', title: 'Send an Inquiry', text: 'Tell us your dream destinations and travel dates.' },
  { n: '02', title: 'Get Your Plan', text: 'We craft a personalised itinerary and quote within 24 hours.' },
  { n: '03', title: 'Confirm & Relax', text: 'Fine-tune every detail with us, then confirm your booking.' },
  { n: '04', title: 'Enjoy Sri Lanka', text: 'We meet you at the airport and take care of everything.' },
]

export const gallery = [
  { image: img('little-adams'), caption: 'Little Adam’s Peak, Ella' },
  { image: img('stilt'), caption: 'Stilt fishermen near Galle' },
  { image: img('tea-picking'), caption: 'Tea pluckers, Nuwara Eliya' },
  { image: img('kandy-view'), caption: 'Kandy from Arthur’s Seat' },
  { image: img('pinnawala'), caption: 'Elephants bathing, Pinnawala' },
  { image: img('galle'), caption: 'Galle Fort lighthouse' },
  { image: img('polonnaruwa'), caption: 'Gal Vihara, Polonnaruwa' },
  { image: img('dambulla'), caption: 'Golden Temple, Dambulla' },
  { image: img('train'), caption: 'Hill country train, Demodara' },
  { image: img('horton'), caption: 'Horton Plains National Park' },
]

// Travel guidance shown in both English and Sinhala
export const tips = [
  {
    icon: 'sun',
    en: { title: 'Best Time to Visit', text: 'West & south coasts and the hill country: December – April. East coast: May – September. Sri Lanka is a year-round destination.' },
    si: { title: 'සංචාරයට හොඳම කාලය', text: 'බටහිර හා දකුණු වෙරළ තීරය සහ කඳුකරය: දෙසැම්බර් – අප්‍රේල්. නැගෙනහිර වෙරළ: මැයි – සැප්තැම්බර්. ශ්‍රී ලංකාව වසර පුරාම සංචාරය කළ හැකි රටකි.' },
  },
  {
    icon: 'passport',
    en: { title: 'Visa / ETA', text: 'Most visitors need an Electronic Travel Authorization (ETA) before arrival. Apply online through the official Sri Lanka ETA website.' },
    si: { title: 'වීසා / ETA', text: 'බොහෝ විදේශ සංචාරකයින්ට පැමිණීමට පෙර විද්‍යුත් සංචාර අවසරයක් (ETA) අවශ්‍ය වේ. නිල ශ්‍රී ලංකා ETA වෙබ් අඩවිය හරහා මාර්ගගතව අයදුම් කරන්න.' },
  },
  {
    icon: 'temple',
    en: { title: 'Temple Etiquette', text: 'Cover shoulders and knees, remove shoes and hats, and never pose for photos with your back to a Buddha statue.' },
    si: { title: 'විහාරස්ථාන ආචාර ධර්ම', text: 'උරහිස් සහ දණහිස් ආවරණය වන සේ ඇඳුම් අඳින්න, පාවහන් සහ තොප්පි ඉවත් කරන්න. බුද්ධ ප්‍රතිමාවකට පිටුපාමින් ඡායාරූප නොගන්න.' },
  },
  {
    icon: 'cash',
    en: { title: 'Money & Currency', text: 'The currency is the Sri Lankan Rupee (LKR). Cards work in hotels and larger shops; carry cash for markets and tuk-tuks.' },
    si: { title: 'මුදල්', text: 'ශ්‍රී ලංකා රුපියල (LKR) භාවිත වේ. හෝටල් සහ විශාල වෙළඳසැල්වල කාඩ්පත් භාවිත කළ හැකි අතර, වෙළඳපොළ සහ ත්‍රීරෝද රථ සඳහා මුදල් රැගෙන යන්න.' },
  },
  {
    icon: 'heart',
    en: { title: 'Health & Packing', text: 'Drink bottled water, use sunscreen and insect repellent. Pack light cotton clothes plus a warm layer for the hills.' },
    si: { title: 'සෞඛ්‍යය සහ ඇඳුම්', text: 'බෝතල් කළ ජලය පානය කරන්න, හිරු ආරක්ෂක ක්‍රීම් සහ කෘමි විකර්ෂක භාවිත කරන්න. සැහැල්ලු කපු ඇඳුම් සමඟ කඳුකරය සඳහා උණුසුම් ඇඳුමක්ද රැගෙන එන්න.' },
  },
  {
    icon: 'car',
    en: { title: 'Getting Around', text: 'Travel in comfort with our private air-conditioned vehicles and experienced chauffeur guides who speak English and Sinhala.' },
    si: { title: 'ගමන් බිමන්', text: 'ඉංග්‍රීසි සහ සිංහල භාෂා කතා කරන පළපුරුදු රියදුරු මාර්ගෝපදේශකයින් සමඟ අපගේ පුද්ගලික වායුසමීකරණ වාහනවලින් සුවපහසුව ගමන් කරන්න.' },
  },
  {
    icon: 'food',
    en: { title: 'Local Food', text: 'Don’t miss rice & curry, hoppers, kottu roti, fresh tropical fruit and a refreshing king coconut.' },
    si: { title: 'දේශීය ආහාර', text: 'බත් සහ ව්‍යංජන, ආප්ප, කොත්තු, නැවුම් නිවර්තන පලතුරු සහ තැඹිලි රස බැලීමට අමතක නොකරන්න.' },
  },
  {
    icon: 'phone',
    en: { title: 'Emergency Numbers', text: 'Police emergency: 119 · Tourist hotline: 1912 · Ceylon Journeys: +94 71 348 0470 (24/7).' },
    si: { title: 'හදිසි දුරකථන අංක', text: 'පොලිස් හදිසි ඇමතුම: 119 · සංචාරක උපකාරක අංකය: 1912 · Ceylon Journeys: +94 71 348 0470 (පැය 24 පුරා).' },
  },
]

export const stats = [
  { value: '18+', label: 'Destinations' },
  { value: '8', label: 'UNESCO Sites' },
  { value: '24/7', label: 'Support' },
  { value: '100%', label: 'Tailor-made' },
]
