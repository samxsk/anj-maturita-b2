export interface TopicSummary {
  taskId: number;        // 1–30
  taskTitle: string;
  visual: { topic: string; vocab: string[]; points: string[] };
  discussion: { topic: string; vocab: string[]; points: string[] };
  roleplay: { topic: string; keyGoal: string; usefulPhrases: string[] };
}

export const topicSummaries: TopicSummary[] = [
  {
    taskId: 1,
    taskTitle: "Education · Family · Info Centre",
    visual: {
      topic: "Education",
      vocab: ["teacher-centred", "interactive learning", "time schedule", "subjects", "assessment", "maturita", "grade 1–5", "timetable"],
      points: [
        "Past: formal, rows, memorising → Now: interactive, group work, technology",
        "My school: start 7:45, 6–7 lessons, English/Maths/History/Biology/PE",
        "Police in US schools: reaction to shootings → Not needed in Slovakia (safe environment)",
        "Use: 'school is more interactive nowadays' / 'strict discipline in the past'",
      ],
    },
    discussion: {
      topic: "Family and Society",
      vocab: ["nuclear family", "single-parent", "stepfamily", "extended family", "same-gender", "generation gap", "mutual respect", "society's impact"],
      points: [
        "Family types: nuclear / single-parent / stepfamily / extended / same-gender",
        "Generation gap: different values re. technology, career, gender roles",
        "Society impact: financial stress, long hours, social media, fast pace of life",
        "Future family: 2–3 kids, own house, open communication, mutual respect",
      ],
    },
    roleplay: {
      topic: "An Information Centre – Čadca",
      keyGoal: "Tourist from England – recommend accommodation + 3–5 places in Kysuce",
      usefulPhrases: [
        "I'd recommend Hotel Beskyd – centrally located and comfortable.",
        "You should definitely visit the Kysucký skanzen in Nová Bystrica.",
        "Veľká Rača in Oščadnica is great for skiing / hiking.",
        "Don't miss trying bryndzové halušky at a local restaurant!",
        "Take the bus from the main station – it takes about 25 minutes.",
      ],
    },
  },
  {
    taskId: 2,
    taskTitle: "Relationships · Housing · Part-time Job",
    visual: {
      topic: "Human Relationships",
      vocab: ["friendship", "romantic", "bond", "social media", "face-to-face", "digital connection", "shallow", "loneliness"],
      points: [
        "Relationships changing: social media → easier to stay in touch, but shallower",
        "Positive: connect with people far away via video calls, messaging apps",
        "Negative: less face-to-face, loneliness despite digital connections",
        "Mixed change – technology helps but can't replace real human contact",
      ],
    },
    discussion: {
      topic: "Housing",
      vocab: ["detached house", "semi-detached", "terraced house", "block of flats", "mortgage", "rent", "rural", "urban"],
      points: [
        "Types: detached / semi-detached / terraced / flat / cottage / bungalow",
        "Town: more jobs, transport, entertainment BUT noisy, polluted, expensive",
        "Village: peaceful, clean air, community BUT fewer jobs, limited transport",
        "Multi-generational: + shared costs, childcare, companionship – privacy issues",
        "Dream house: detached, garden, open-plan, large windows, cosy",
      ],
    },
    roleplay: {
      topic: "A Part-time Job (pub, 17 yrs)",
      keyGoal: "Persuade parents to let you work evening shifts at a pub",
      usefulPhrases: [
        "I understand your concern, but I've thought this through carefully.",
        "I'd only work Friday and Saturday evenings – no school the next day.",
        "It teaches responsibility and real-world skills.",
        "Work experience looks great on future applications.",
        "Could we visit the place together first so you can see what it's like?",
      ],
    },
  },
  {
    taskId: 3,
    taskTitle: "Jobs · Healthcare · Multiculturalism",
    visual: {
      topic: "Jobs",
      vocab: ["salary", "wage", "benefits", "drawbacks", "working conditions", "white-collar", "blue-collar", "self-employed"],
      points: [
        "Describe: working hours, place, conditions, salary, benefits, drawbacks",
        "Value most: doctor (saves lives), teacher (shapes generations)",
        "Wouldn't do: miner / very dangerous underground work",
        "Try for a day: film director – creative process of storytelling",
      ],
    },
    discussion: {
      topic: "Human Body and Healthcare",
      vocab: ["cardiovascular", "immune system", "diagnosis", "prevention", "obesity", "mental health", "balanced diet", "check-up"],
      points: [
        "Body: brain (controls), heart (pumps blood), lungs (breathing), liver (filters toxins)",
        "Yearly check-up: blood pressure, BMI, blood test, cholesterol, blood sugar",
        "Common illnesses: heart disease, diabetes, cancer, depression, obesity",
        "Teenagers unhealthier: fast food, screens, sedentary lifestyle, sleep deprivation",
        "Stay healthy: 30 min exercise/day, balanced diet, 8h sleep, no smoking",
      ],
    },
    roleplay: {
      topic: "Multiculturalism – Easter traditions",
      keyGoal: "Explain Slovak customs (meal times, bus) + Easter traditions to shocked English student",
      usefulPhrases: [
        "In Slovakia, lunch is the most important meal of the day – it gives you energy.",
        "Public transport here is reliable and teaches independence.",
        "On Easter Monday, boys lightly whip girls with willow branches – it's traditional, symbolising health.",
        "Then they pour cold water – girls stay young and healthy, they give back painted eggs.",
        "It sounds strange but it's all good-natured fun – everyone expects it!",
      ],
    },
  },
  {
    taskId: 4,
    taskTitle: "Hobbies · Travel · Complaint",
    visual: {
      topic: "Leisure Activities and Hobbies",
      vocab: ["leisure time", "hobby", "extreme sport", "sedentary", "addiction", "screen time", "outdoor", "creative"],
      points: [
        "Young: gaming, sports, social media / Middle-aged: gardening, DIY / Elderly: walking, knitting",
        "Art-loving hobbies: painting, drawing, photography, music, writing, theatre",
        "Harmful activities: base jumping, excessive social media → addiction, substance use",
        "My free time: music, films, cycling, reading, friends",
      ],
    },
    discussion: {
      topic: "Means of Transport, Travelling",
      vocab: ["backpacking", "package holiday", "couchsurfing", "armchair traveller", "daycation", "pros and cons", "carbon footprint", "sustainable"],
      points: [
        "History: nomads → trade routes → Silk Road → steam engine → cars → planes",
        "Cars: flexible BUT polluting / Trains: eco-friendly / Planes: fast BUT CO₂",
        "Backpacking = low budget, backpack, hostels, flexible",
        "Package holiday = all-inclusive (flights + hotel bundled)",
        "Couchsurfing = free stay at local's home / Armchair traveller = travels via books/TV",
      ],
    },
    roleplay: {
      topic: "Complaint – Clothes Shop (woollen sweater)",
      keyGoal: "Complain about defective sweater bought 2 weeks ago, get a refund",
      usefulPhrases: [
        "I bought this sweater here two weeks ago – here's my receipt.",
        "After just two washes following the care label exactly, it has shrunk and started pilling.",
        "I paid €45 – I expect it to last more than two weeks.",
        "Under consumer protection law, I'm entitled to a refund for a faulty item.",
        "I'd prefer a full refund, please.",
      ],
    },
  },
  {
    taskId: 5,
    taskTitle: "Housing · Education · Euro Grant",
    visual: {
      topic: "Housing",
      vocab: ["house vs home", "settle down", "mortgage", "property prices", "rent", "neighbourhood", "privacy", "cosy"],
      points: [
        "House = physical building / Home = where you feel safe, loved, comfortable",
        "Young people's problems: property prices too high, can't get mortgage, rents expensive",
        "Many Slovaks live with parents into their 20s due to financial reasons",
      ],
    },
    discussion: {
      topic: "Education System in Slovakia",
      vocab: ["primary school", "gymnasium", "maturita", "assessment", "grading", "A-levels", "independent learner", "alternative learning"],
      points: [
        "Slovakia: primary (6–15), secondary (15–18/19), ends with maturita (1=best, 5=fail)",
        "UK: specialise in 3–4 subjects at A-level vs. Slovak 12–15 subjects",
        "Successful student: curious, organised, persistent, good time management",
        "Good teacher: patient, enthusiastic, fair, approachable, inspiring",
        "Alternative language learning: films, podcasts, apps (Duolingo), exchange partners, travel",
      ],
    },
    roleplay: {
      topic: "Euro Grant – €10,000 for hometown",
      keyGoal: "Propose a youth community centre, persuade committee to vote for it",
      usefulPhrases: [
        "I propose we create a youth community centre.",
        "Young people have very few safe places to go after school.",
        "With €10,000 we could renovate a space with study tables, a library corner, workshops.",
        "This aligns with EU values: youth development, social inclusion.",
        "Investing in young people is investing in the future of this town.",
      ],
    },
  },
  {
    taskId: 6,
    taskTitle: "Books · Environment · Gap Year",
    visual: {
      topic: "Books and Literature",
      vocab: ["novel", "fiction", "non-fiction", "e-book", "paperback", "genre", "bestseller", "classic"],
      points: [
        "Types: novel, thriller, fantasy, biography, self-help, children's, classic",
        "Paper books: tactile pleasure, no eye strain, annotations, shelf display",
        "E-books: portable, cheaper, adjustable font, thousands of titles",
        "A book CAN be man's best friend: always there, never judges, offers wisdom",
      ],
    },
    discussion: {
      topic: "Environment",
      vocab: ["global warming", "greenhouse gas", "ozone layer", "deforestation", "biodiversity", "3Rs", "carbon footprint", "sustainable"],
      points: [
        "3Rs = Reduce, Reuse, Recycle",
        "Global warming: CO₂ traps heat → rising temps → extreme weather, melting ice",
        "Ozone layer: protects from UV radiation / damaged by CFCs / slowly recovering",
        "Testing on animals: controversial – caused medical breakthroughs BUT causes suffering",
        "ZOOs: good ONLY if focused on conservation + animal welfare",
      ],
    },
    roleplay: {
      topic: "Gap Year – persuade parents",
      keyGoal: "Convince parents to let you take a gap year + contribute money",
      usefulPhrases: [
        "After 13 years of school, I'm burnt out and need time to recharge.",
        "I'd volunteer in Portugal, travel Central Europe, work to save money.",
        "University students who took gap years often perform better.",
        "This would strengthen my university application.",
        "Even a small financial contribution would mean the world to me.",
      ],
    },
  },
  {
    taskId: 7,
    taskTitle: "Youth · Lifestyle · Subscription",
    visual: {
      topic: "Young People and Their World",
      vocab: ["generation", "social media", "peer pressure", "mental health", "anxiety", "depression", "opportunity", "global citizen"],
      points: [
        "Positives: globally connected, educated, open-minded, tech-savvy",
        "Negatives: mental health issues, social media pressure, academic stress, loneliness",
        "Average young person: online a lot, close friend group, cares about social issues",
        "Changed vs. grandparents' time: faster pace, more freedom BUT more pressure",
      ],
    },
    discussion: {
      topic: "Leisure Time, Hobbies, Lifestyle",
      vocab: ["sedentary", "work-life balance", "after-school activities", "hobbies", "relaxation", "manual work", "mental work", "wellbeing"],
      points: [
        "100 years ago: folk music, communal games, storytelling, no technology",
        "Unusual modern activities: urban foraging, wild swimming, axe throwing, escape rooms",
        "Mental workers unwind physically (gym, hiking) / Physical workers prefer sedentary leisure",
        "Schools should provide after-school activities: prevents unsupervised screen time",
      ],
    },
    roleplay: {
      topic: "Streaming Subscription – persuade parents",
      keyGoal: "Convince parents a streaming subscription is worth it, offer compromise",
      usefulPhrases: [
        "A family subscription is about €15/month – less than one cinema trip.",
        "Everyone in the family can use it: documentaries, dramas, sports.",
        "It improves my English through content in the original language.",
        "Compromise: I pay half myself for the first 3 months, then we review.",
      ],
    },
  },
  {
    taskId: 8,
    taskTitle: "Weather · Food · Technology friend",
    visual: {
      topic: "Weather and Seasons",
      vocab: ["spring", "summer", "autumn", "winter", "climate", "tropical", "typical activities", "seasons"],
      points: [
        "Spring: blossoming, hiking, cycling, fresh / Summer: holidays, swimming, BBQ",
        "Autumn: falling leaves, mushrooming, harvest / Winter: skiing, Christmas, snow",
        "Seasons vary globally: tropics = wet/dry / Arctic = months of dark or light",
        "My favourite: summer (freedom, long days) OR autumn (beauty, cosy atmosphere)",
      ],
    },
    discussion: {
      topic: "Food and Eating Habits",
      vocab: ["balanced diet", "3 white killers", "vegetarian", "vegan", "eating disorder", "anorexia", "bulimia", "nutritious"],
      points: [
        "3 white killers: white sugar, white salt, white flour (all harmful in excess)",
        "Healthy diet: right proportions carbs/protein/fat/vitamins/minerals",
        "Vegetarian: no meat/fish (eats dairy+eggs) / Vegan: NO animal products at all",
        "Anorexia: severe food restriction / Bulimia: binge + purge / both need treatment",
        "Slovak eating: heavy on pork, dumplings, cabbage / Mediterranean: fish, olive oil",
      ],
    },
    roleplay: {
      topic: "Anti-technology friend – persuade to use tech",
      keyGoal: "Convince a friend who hates technology about its genuine benefits",
      usefulPhrases: [
        "Technology itself isn't the problem – it's how you use it.",
        "Think about video calls with friends who moved abroad.",
        "Google Maps could literally save your life in an emergency.",
        "Practical: booking trains, checking hours, looking up recipes.",
        "You don't need social media to benefit from technology.",
      ],
    },
  },
  {
    taskId: 9,
    taskTitle: "USA · Multicultural Society · London trip",
    visual: {
      topic: "The USA",
      vocab: ["Declaration of Independence", "American Dream", "Thanksgiving", "Halloween", "Independence Day", "stereotype", "Statue of Liberty", "Grand Canyon"],
      points: [
        "History: colonists → independence 1776 → Civil War (slavery) → world superpower",
        "Geography: 3rd largest, borders Canada (N) and Mexico (S), 330M+ people",
        "American Dream: anyone can succeed through hard work",
        "Sights: Statue of Liberty, Grand Canyon, Golden Gate Bridge, White House, Yellowstone",
        "Traditions: Thanksgiving (November, turkey) / Independence Day (July 4, fireworks) / Halloween (Oct 31)",
      ],
    },
    discussion: {
      topic: "Multicultural Society",
      vocab: ["integration", "immigration", "tolerance", "diversity", "racism", "xenophobia", "human rights", "multicultural"],
      points: [
        "Typical multicultural society (UK, Germany, Canada): diverse food, music, religion",
        "Immigrant challenges: language barrier, housing, job recognition, children at school",
        "Benefits of multiculturalism: creativity, innovation, richer culture",
        "Civil rights heroes: Martin Luther King Jr, Rosa Parks, Abraham Lincoln, Dubček",
        "Slovakia: xenophobia exists esp. toward Roma and migrants – education is the solution",
      ],
    },
    roleplay: {
      topic: "Family talk – London trip (age 18)",
      keyGoal: "Convince worried parents to let you travel to London with a friend",
      usefulPhrases: [
        "I'm 18 – legally an adult. I've thought this through carefully.",
        "We've booked a hostel in a safe central neighbourhood.",
        "I'll share my location at all times and check in every evening.",
        "London is one of the safest, most tourist-friendly cities in Europe.",
        "This is a chance to grow into a more independent person.",
      ],
    },
  },
  {
    taskId: 10,
    taskTitle: "Media · Fashion · Doctor visit",
    visual: {
      topic: "Media",
      vocab: ["broadcast", "cartoon", "documentary", "breaking news", "streaming", "media literacy", "social media", "infotainment"],
      points: [
        "TV types: news, documentary, sports, cartoon, cookery, reality – different audiences",
        "Media's 3 purposes: inform (most important), educate, entertain",
        "TV still relevant for older generations / young people prefer streaming",
        "Media influence: advertisements shape desires, lifestyle expectations",
      ],
    },
    discussion: {
      topic: "Fashion",
      vocab: ["trend", "unisex", "school uniform", "occasion", "formal", "casual", "brand", "self-expression"],
      points: [
        "Fashion history: 1920s flapper → 1960s rebellion → 1980s bold colours → today: eclectic",
        "Occasions: formal (suit/dress) / casual (jeans, hoodie) / sport (functional) / folk (kroj)",
        "School uniform pros: removes brand pressure, equality / cons: limits self-expression",
        "Unisex clothes: acceptable – fashion norms are social constructs that change",
      ],
    },
    roleplay: {
      topic: "At the Doctor's – unhealthy patient",
      keyGoal: "As a doctor, convince an obese patient with high blood pressure to change lifestyle",
      usefulPhrases: [
        "I need to be very honest with you – I'm quite concerned about your results.",
        "Your blood pressure is 160/100 and your cholesterol is far above healthy range.",
        "If you continue this way, the risk of a heart attack is very real within 5–10 years.",
        "Start with 30 minutes of brisk walking daily and cut saturated fats.",
        "I'd like to see you again in six weeks. Deal?",
      ],
    },
  },
  {
    taskId: 11,
    taskTitle: "Family types · Sport · Eco-friendly",
    visual: {
      topic: "Family",
      vocab: ["multicultural family", "extended family", "one-parent family", "family bond", "future plans", "values", "traditions", "support"],
      points: [
        "Family types: multicultural / extended / single-parent / nuclear",
        "My family: parents + sibling, close-knit, visit grandparents regularly",
        "Future plans: finish education, become independent, then own family (2–3 kids)",
      ],
    },
    discussion: {
      topic: "Sport",
      vocab: ["individual sport", "team sport", "Olympic Games", "doping", "motto", "hooliganism", "competition", "physical and mental health"],
      points: [
        "Categories: individual/team, indoor/outdoor, water/winter, combat/extreme",
        "Olympics: began ancient Greece 776 BC, revived 1896 Athens / motto: Citius Altius Fortius",
        "Sport benefits: cardiovascular health, endorphins, reduces stress, builds discipline",
        "Negative sides: doping, corruption, match-fixing, hooliganism, eating disorders",
        "Famous Slovak: Peter Sagan – 3× cycling world champion 2015–2017",
      ],
    },
    roleplay: {
      topic: "Eco-friendly debate – convince anti-recycling friend",
      keyGoal: "Persuade a friend who thinks recycling is pointless to start recycling",
      usefulPhrases: [
        "Recycling one aluminium can saves enough energy to run a TV for 3 hours.",
        "Seven billion people doing nothing certainly destroys the planet.",
        "Sorting waste is habit within a week – just 5 bins.",
        "Reusing saves you money – buying second-hand is basically recycling.",
        "Can we start with just separating plastic and paper?",
      ],
    },
  },
  {
    taskId: 12,
    taskTitle: "Natural Disasters · Shopping · Sport friend",
    visual: {
      topic: "Natural Disasters",
      vocab: ["earthquake", "tsunami", "tornado", "volcano eruption", "forest fire", "consequences", "relief efforts", "evacuation"],
      points: [
        "Volcano: magma → lava, ash, gases / Tornado: rotating air column from storm",
        "Tsunami: underwater earthquake → massive waves (2004 Indian Ocean: 200,000 killed)",
        "Earthquake: tectonic plates moving → 2023 Turkey/Syria: 50,000+ killed",
        "Slovakia: occasional floods (Danube), avalanches in mountains, landslides",
        "Help: Red Cross donations, volunteering, EU civil protection mechanisms",
      ],
    },
    discussion: {
      topic: "Shopping and Services",
      vocab: ["online shopping", "shopping centre", "contactless payment", "quality of service", "consumer rights", "impulse buying", "refund", "loyalty card"],
      points: [
        "Online: convenient, 24/7, price comparison BUT can't try, delivery wait, returns hard",
        "Shopping centre: variety + social BUT crowded, expensive, impulse buying",
        "Modern payment: contactless card/phone, mobile pay, Apple/Google Pay, crypto (emerging)",
        "Traditional: cash still used in Slovakia esp. by older generations",
      ],
    },
    roleplay: {
      topic: "Let's Go! – motivate lazy friend to exercise",
      keyGoal: "Persuade a screen-addicted friend to go cycling with you",
      usefulPhrases: [
        "15 kilometres at a relaxed pace takes about an hour – it's actually meditative.",
        "We'll go at your pace completely – no competition, no judgment.",
        "Sitting 6–7 hours daily hurts your back and eyes – exercise helps both.",
        "Research shows regular exercise improves mental sharpness and gaming focus.",
        "Sunday morning, 10 o'clock. Just wear comfortable shoes.",
      ],
    },
  },
  {
    taskId: 13,
    taskTitle: "Waste · Countries & Places · Restaurant",
    visual: {
      topic: "Waste / Environment symbols",
      vocab: ["recycling symbol", "hazardous waste", "e-waste", "carbon footprint", "composting", "single-use plastic", "biodegradable", "landfill"],
      points: [
        "Recycling symbol (3 arrows in triangle) = material is recyclable",
        "Hazardous symbol = dangerous: chemicals, batteries, electronics, medicines",
        "E-waste (old phones/computers) = toxic, needs special disposal points",
        "Slovak bins: yellow=plastic+metal / blue=paper / green=glass / brown=organic",
        "Family eco actions: waste sorting, reusable bags, shorter showers, LED bulbs",
      ],
    },
    discussion: {
      topic: "Countries, Towns and Places",
      vocab: ["tourist attraction", "landmark", "urban", "rural", "quality of life", "vibrant", "community", "heritage"],
      points: [
        "Important places in my life: hometown, school, favourite nature spots",
        "Slovak tourism: Tatras (nature), Spiš Castle (history), Banská Štiavnica (UNESCO)",
        "Town attractions: parks, cafés, cinemas, sports centres, galleries, libraries",
        "Ideal place for rest of life: small town + nature access + community + career opportunities",
      ],
    },
    roleplay: {
      topic: "In a Restaurant – constructive feedback to friend",
      keyGoal: "Give polite but honest suggestions to improve a friend's new restaurant",
      usefulPhrases: [
        "The food is genuinely excellent – the kitchen is doing a fantastic job.",
        "However, the service was slow – I waited 20 minutes with the restaurant half-full.",
        "The harsh lighting kills the atmosphere – warmer dimmer lights would help enormously.",
        "The menu descriptions are quite brief – listing allergens and accompaniments would help.",
        "With a few tweaks, this restaurant will really succeed.",
      ],
    },
  },
  {
    taskId: 14,
    taskTitle: "Celebrations · Art & Culture · Exchange Student",
    visual: {
      topic: "Celebrations",
      vocab: ["Christmas Eve", "Easter", "Halloween", "New Year's Eve", "tradition", "carol", "fireworks", "costume"],
      points: [
        "Slovak Christmas: December 24th, fried carp + potato salad + kapustnica, gifts after dinner",
        "Easter Monday: boys whip girls with korbáč + pour water → symbolises health",
        "Halloween: not traditional Slovak holiday but popular with young people",
        "My favourite: Christmas – family, warmth, tradition, music",
      ],
    },
    discussion: {
      topic: "Art and Culture",
      vocab: ["painting", "sculpture", "architecture", "performing arts", "film festival", "Cannes", "cultural identity", "UNESCO"],
      points: [
        "Art forms: visual (painting, sculpture, photography), performing (theatre, dance), literary, music, architecture",
        "Cannes Film Festival (France) / Edinburgh Fringe (world's largest arts festival) / Glastonbury (music)",
        "Slovak: Bratislava Music Festival, Pohoda music festival, folk festivals",
        "Famous: Shakespeare, Beethoven, Mozart / Slovak: Ján L. Bella (composer), Ľudovít Štúr",
      ],
    },
    roleplay: {
      topic: "An Exchange Student – persuade parents to host",
      keyGoal: "Convince parents to be a host family for a French exchange student (6 weeks)",
      usefulPhrases: [
        "It would be an incredible opportunity to practise my English daily.",
        "There's a small monthly allowance from the programme to cover expenses.",
        "The guest room is empty all summer anyway.",
        "A school coordinator checks in regularly – any issues are handled by the school.",
        "We'd show them Slovak customs – it would be fun for us too.",
      ],
    },
  },
  {
    taskId: 15,
    taskTitle: "Inventions · Books & Literature · Hotel complaint",
    visual: {
      topic: "Inventions in Science and Technology",
      vocab: ["washing machine", "electric bulb", "mobile phone", "microwave", "PC", "vacuum cleaner", "revolutionary", "indispensable"],
      points: [
        "Washing machine: before = hours of scrubbing by hand at a river",
        "Light bulb (Edison, 1879): extended productive hours beyond sunset",
        "Mobile phone: replaced many devices – navigation, camera, banking, music",
        "Microwave, PC, vacuum cleaner: all saved enormous amounts of time",
        "Cannot live without: mobile phone (practical tool, not just entertainment)",
      ],
    },
    discussion: {
      topic: "Books and Literature – American & English authors",
      vocab: ["Shakespeare", "Dickens", "Hemingway", "Fitzgerald", "Orwell", "prose", "dystopian", "allegory"],
      points: [
        "Shakespeare: Hamlet, Macbeth, sonnets – greatest English language writer",
        "Charles Dickens: Oliver Twist – social injustice in Victorian England",
        "Hemingway: The Old Man and the Sea – minimalist masculine style",
        "Fitzgerald: The Great Gatsby – American Dream and its illusions",
        "Orwell: 1984 + Animal Farm – political allegories still relevant today",
        "E-book pros: portable, cheaper / cons: eye strain, no tactile pleasure",
      ],
    },
    roleplay: {
      topic: "Hotel Accommodation Complaint – wrong room",
      keyGoal: "Complain about getting playground view instead of paid sea-view room + other problems",
      usefulPhrases: [
        "I specifically paid a supplement for a sea-view room – my confirmation says so.",
        "The air conditioning isn't working, the bathroom tap drips, and the safe doesn't lock.",
        "Is there a sea-view room available that I can be moved to immediately?",
        "What about compensation for today – I've been in the wrong room all day.",
        "Could the move happen in the next 30 minutes?",
      ],
    },
  },
  {
    taskId: 16,
    taskTitle: "Transport · Society · Mobiles in school",
    visual: {
      topic: "Unusual Means of Transport",
      vocab: ["camel", "dog sled", "hot air balloon", "cable car", "commute", "public transport", "space travel", "emission"],
      points: [
        "Camels: desert transport – survive without water, carry heavy loads",
        "Dog sleds: Arctic/Sub-Arctic indigenous peoples – still used + sport",
        "Cable cars: mountainous areas where roads are impractical",
        "Space travel: Sputnik 1957 → Moon 1969 → SpaceX today",
        "My commute: bus (~20 min), affordable, reliable BUT crowded, must leave early",
      ],
    },
    discussion: {
      topic: "Man and Society – moral rules",
      vocab: ["moral rules", "politeness", "social norms", "volunteer", "charity", "vulnerable groups", "inequality", "responsibility"],
      points: [
        "Polite in Slovakia: greet in shops, say please/thank you, give seat to elderly",
        "Impolite: interrupting, loud in public, littering, ignoring people in need",
        "People in need: homeless, elderly, disabled, mentally ill → moral duty to help",
        "Youth issues: academic pressure, housing costs, unemployment, social media, drugs",
      ],
    },
    roleplay: {
      topic: "Mobiles in the Classroom – student parliament president",
      keyGoal: "Argue for regulated mobile use in class to the head teacher",
      usefulPhrases: [
        "I'd like to propose a revised policy rather than removing restrictions entirely.",
        "Phones as dictionaries, calculators, research tools – used when teacher permits only.",
        "Completely prohibited during any assessment – no exceptions.",
        "If a student misuses their phone, it's confiscated for a week.",
        "Several Scandinavian schools use this model with very positive results.",
      ],
    },
  },
  {
    taskId: 17,
    taskTitle: "Multiculturalism · Communication · Pet shelter",
    visual: {
      topic: "Multiculturalism",
      vocab: ["intercultural", "diversity", "tolerance", "prejudice", "multicultural society", "integration", "minority", "cultural exchange"],
      points: [
        "Intercultural couple challenges: language barrier, different customs, family resistance",
        "Intercultural couple benefits: better communication skills, bilingual children, broader worldview",
        "Multicultural society: richer food/music/art, more creative, more tolerant",
        "Key: mutual respect + genuine cultural exchange (not forced assimilation)",
      ],
    },
    discussion: {
      topic: "Communication and Its Forms",
      vocab: ["verbal", "non-verbal", "body language", "Morse code", "Braille", "sign language", "lingua franca", "alternative communication"],
      points: [
        "History: cave paintings → writing (3000 BC) → printing press → telegraph → internet",
        "Alternative: Morse code (dots/dashes), Braille (tactile for blind), flag semaphore, sign language",
        "Non-verbal = up to 70% of communication: body language, facial expressions, tone",
        "Most widespread: Mandarin (native speakers), English (global reach), Spanish, Hindi",
        "Why learn English: international business, science, diplomacy, travel, entertainment",
      ],
    },
    roleplay: {
      topic: "A Pet from a Shelter – persuade friend",
      keyGoal: "Convince friend to adopt a dog from a shelter instead of buying from a breeder",
      usefulPhrases: [
        "Most shelter dogs are there through no fault of their own.",
        "Even breed-specific rescues exist – you can find the exact type you want.",
        "When you adopt, you genuinely save a life that might otherwise be euthanised.",
        "The adoption fee is a fraction of a breeder's price – already vaccinated and microchipped.",
        "Can we go to the local shelter on Saturday – just to have a look?",
      ],
    },
  },
  {
    taskId: 18,
    taskTitle: "Food · Mass Media · Car dad",
    visual: {
      topic: "Food",
      vocab: ["nutritious", "processed food", "fast food", "exotic", "organic", "portion", "cuisine", "dietary"],
      points: [
        "Healthy: fruits, vegetables, whole grains, lean protein, healthy fats",
        "Unhealthy: fast food – high in fat, salt, sugar, low in nutrients → obesity, diabetes",
        "Never try: very spicy foods causing pain, live seafood, very pungent fermented dishes",
        "Exotic food is normal in other cultures – try before deciding you don't like it",
      ],
    },
    discussion: {
      topic: "Mass Media",
      vocab: ["printing press", "broadcasting", "fake news", "media literacy", "censorship", "social media", "advertisement", "freedom of the press"],
      points: [
        "Media history: printing press (1440) → radio → TV → internet → social media",
        "Internet: time-saving (research, banking, shopping) BUT time-slaving (addictive, misinformation)",
        "Advertising influence: 1000s of commercial messages daily → shapes desires",
        "Should NOT publish: privacy violations, hate speech, dangerous misinformation",
        "Freedom of press = essential for democracy, but responsibility is required",
      ],
    },
    roleplay: {
      topic: "Don't be Lazy – dad drives to bakery 200m away",
      keyGoal: "Convince father to stop driving for short errands, suggest alternatives",
      usefulPhrases: [
        "Short cold-start trips actually use more fuel per kilometre than longer journeys.",
        "They also accelerate engine wear – you're damaging the car.",
        "The bakery is literally 200 metres – walking takes 3 minutes.",
        "For bigger shopping, absolutely use the car – that makes sense.",
        "Small changes like this: better for environment, health, and saves money.",
      ],
    },
  },
  {
    taskId: 19,
    taskTitle: "Shops · Youth & Society · Charity",
    visual: {
      topic: "Shops and Services",
      vocab: ["supermarket", "market", "online shopping", "consumer rights", "quality", "refund", "second-hand", "service"],
      points: [
        "Local shops: personal service, local economy / Supermarkets: variety, competitive prices",
        "Online: 24/7, price comparison, home delivery / Issues: can't try, returns complicated",
        "Slovak shops: improved variety, but customer service and consumer rights still developing",
        "What I buy: food (market/supermarket), clothes (in-person to try), electronics (online)",
      ],
    },
    discussion: {
      topic: "The Youth and Their World",
      vocab: ["teenager", "generation gap", "peer pressure", "social media", "substance abuse", "career", "identity", "independence"],
      points: [
        "Typical teenager: significant time online, fashion-conscious, passionate about social issues",
        "Young people's position: future of society but often not heard in politics",
        "Generation gap: we grew up digital, parents didn't → different values re. tech, gender, career",
        "Start drinking/smoking: peer pressure, curiosity, rebellion, escapism, accessibility",
        "Myself in 10 years: university done, career in field I love, own flat, travelling",
      ],
    },
    roleplay: {
      topic: "Charity – homeless vs. elderly",
      keyGoal: "Argue why you want to help homeless people (not elderly) and persuade friends",
      usefulPhrases: [
        "Homelessness is usually caused by factors outside one's control: mental illness, job loss, domestic violence.",
        "Homeless people face immediate life-threatening conditions – especially in winter.",
        "They have the least access to healthcare, food, and basic dignity.",
        "I've signed up to distribute hot meals twice a week.",
        "Both causes matter – why don't you volunteer with elderly care and we share experiences?",
      ],
    },
  },
  {
    taskId: 20,
    taskTitle: "Sports types · Jobs & Employment · Love problem",
    visual: {
      topic: "Sports",
      vocab: ["professional athlete", "figure skating", "cycling", "hockey", "gymnastics", "endurance", "competition", "career longevity"],
      points: [
        "Sports in pictures: figure skating (artistry + athleticism), cycling (endurance), ice hockey (team + speed)",
        "Pro athlete pros: paid to do what you love, fit, travel, recognition",
        "Pro athlete cons: brutal training, injury risk, short career, mental pressure, public scrutiny",
        "I've tried: swimming, cycling / Would try: rock climbing – strength + problem solving",
      ],
    },
    discussion: {
      topic: "Jobs and Employment",
      vocab: ["brain drain", "CV", "interview", "white-collar", "blue-collar", "freelancer", "work-life balance", "unemployment"],
      points: [
        "Mental jobs: programmer, lawyer, teacher / Physical: builder, farmer, mechanic",
        "Brain drain: skilled Slovaks leave for Germany/UK/Austria for higher wages",
        "Companies attract employees: salary + remote work + flexible hours + meaningful work",
        "Dream job + hard work + happy family: possible with clear boundaries and passion",
      ],
    },
    roleplay: {
      topic: "Love Problem Solving – discourage early marriage",
      keyGoal: "Sympathetically discourage best friend from marrying immediately after finishing school",
      usefulPhrases: [
        "I know you love him – I respect that. But I'm worried this might be too soon.",
        "You haven't yet seen how you both handle real adult pressures.",
        "You've talked about university, travelling, finding your own path.",
        "The strongest marriages are between two complete, independent people.",
        "If he's truly the one, your relationship will only be stronger for waiting.",
      ],
    },
  },
  {
    taskId: 21,
    taskTitle: "Man & Society · Science & Tech · Town vs. Country",
    visual: {
      topic: "Man and Society – people in difficult situations",
      vocab: ["poverty", "disability", "homeless", "elderly", "unemployment", "resilience", "social support", "welfare"],
      points: [
        "Ups: family bonds, recovery, achieving goals, community support",
        "Downs: illness, poverty, unemployment, loneliness, addiction",
        "We should help all → social safety nets: welfare, healthcare, housing support",
        "If choosing one group: children in poverty – breaks the cycle across generations",
      ],
    },
    discussion: {
      topic: "Science and Technology",
      vocab: ["invention", "penicillin", "artificial intelligence", "renewable energy", "automation", "biotechnology", "nuclear", "dual-use"],
      points: [
        "Life-changing inventions: printing press, penicillin (1928, Fleming), electricity, internet, vaccines",
        "Misuse: nuclear energy → bombs / internet → surveillance, misinformation / chemistry → weapons",
        "AI threatens jobs: automates routine and increasingly complex tasks",
        "Future: AI, biotech, renewables, space exploration – adaptability will be crucial",
      ],
    },
    roleplay: {
      topic: "Town or Countryside? – compromise with partner",
      keyGoal: "Negotiate where to live with a partner – you want city, they want countryside",
      usefulPhrases: [
        "For me, it's career opportunities and not needing to commute far.",
        "For you, it's space, nature, peace, and community.",
        "What about a small town or suburb with good transport links to the city?",
        "We'd have peace and a garden at home, plus city access on weekends.",
        "Let's spend weekends exploring areas like that and see what appeals. Deal?",
      ],
    },
  },
  {
    taskId: 22,
    taskTitle: "Media types · Role Models · Sponsoring",
    visual: {
      topic: "The Media – types and pros/cons",
      vocab: ["television", "newspaper", "radio", "internet", "smartphone", "streaming", "media consumption", "passive vs active"],
      points: [
        "TV: visual, accessible BUT passive, sensationalist",
        "Newspaper: in-depth BUT declining, printed = not up-to-the-minute",
        "Radio: portable, background BUT audio only / Internet: unlimited BUT addictive, misinformation",
        "Cannot live without: smartphone (navigation, banking, communication, information)",
        "Alternatives to media: physical books, nature walks, cooking, music, board games",
      ],
    },
    discussion: {
      topic: "Role Models, Idols, Ideals",
      vocab: ["integrity", "perseverance", "humility", "celebrity", "influence", "inspiration", "role model", "real hero"],
      points: [
        "True role model qualities: integrity, genuine achievement, humility, positive impact",
        "Celebrities: not always true role models – often reward superficiality",
        "Literary heroes: Atticus Finch (justice), Hermione Granger (loyalty+intelligence), Frodo (ordinary person, extraordinary feat)",
        "Real everyday heroes: paramedics, teachers, firefighters, social workers, parents",
        "Person I look up to: my parents – sustained quiet dedication over years",
      ],
    },
    roleplay: {
      topic: "Sponsoring – company visit for orphanage trip",
      keyGoal: "Ask a local company boss to sponsor class visit to orphanage with toys (~€300)",
      usefulPhrases: [
        "We'd like to organise a Christmas visit to the local children's home.",
        "We need approximately €300 for age-appropriate toys and books for 20 children.",
        "In return: your logo on all materials, featured in our school newsletter and social media.",
        "I have a letter from the orphanage director confirming the visit.",
        "We're planning the visit for December 20th.",
      ],
    },
  },
  {
    taskId: 23,
    taskTitle: "Art types · Human Relationships · Language School",
    visual: {
      topic: "Art",
      vocab: ["painting", "sculpture", "street art", "photography", "architecture", "Banksy", "gallery", "contemporary"],
      points: [
        "Art forms: painting, sculpture, photography, street art, architecture, cinema",
        "Street art (Banksy) brought art out of galleries into everyday life",
        "Architecture: 'the art we cannot avoid' – shapes spaces where we live",
        "Art is NOT a luxury – it's a necessity for societies to process and understand human experience",
      ],
    },
    discussion: {
      topic: "Human Relationships",
      vocab: ["conflict", "resolution", "empathy", "generation", "disability", "tolerance", "selfishness", "aggression"],
      points: [
        "Relationships: family (support), schoolmates (shared experience), neighbours (polite)",
        "Conflict with grandparents: different values re. technology, politics, gender roles",
        "Multi-generational family: + shared costs, companionship / – privacy, lifestyle conflict",
        "Society treats vulnerable groups insufficiently – stigma toward homeless, disabled, elderly",
        "Are people more selfish? Complex – social media encourages it, but also enormous generosity exists",
      ],
    },
    roleplay: {
      topic: "Language School – introduce your school",
      keyGoal: "As owner, present your English language school to a prospective student",
      usefulPhrases: [
        "We've been running for 12 years with 8 qualified teachers, several native speakers.",
        "We start with a free placement test so you don't waste time on content you know.",
        "Maximum 8 students per group – enough for individual attention and conversation practice.",
        "We're a certified preparation centre for Cambridge FCE (B2) exams.",
        "A standard course is €80/month. The first lesson is free to try us out.",
      ],
    },
  },
  {
    taskId: 24,
    taskTitle: "Fashion Trends · Slovakia · Bookshop",
    visual: {
      topic: "Fashion Trends",
      vocab: ["formal", "casual", "streetwear", "folk costume (kroj)", "avant-garde", "occasion", "trend", "timeless"],
      points: [
        "Business suit: professional settings, job interviews / Evening gown: galas, weddings",
        "Streetwear (jeans, hoodie, trainers): everyday casual / Slovak kroj: folk festivals",
        "Fashion matters moderately to me – comfort and confidence over blind trend-following",
        "Most important: wear what makes you feel comfortable and confident",
      ],
    },
    discussion: {
      topic: "Slovakia",
      vocab: ["Spiš Castle", "Banská Štiavnica", "Ľudovít Štúr", "Alexander Dubček", "Milan Rastislav Štefánik", "UNESCO", "Slovak traditions", "Bratislava"],
      points: [
        "Geography: landlocked, Central Europe, 5.5M people, capital Bratislava, Tatras mountains",
        "EU member 2004, Euro adopted 2009, parliamentary republic",
        "UNESCO sites: Spiš Castle, Banská Štiavnica, Bardejov, Vlkolínec",
        "Štúr: codified Slovak language (1840s) / Štefánik: co-founded Czechoslovakia / Dubček: Prague Spring 1968",
        "Tourist recommendations: Tatras, Bratislava old town, Bojnice Castle, Slovak Paradise",
      ],
    },
    roleplay: {
      topic: "In a Bookshop – defend books as a gift",
      keyGoal: "Convince friend that a book is a better gift than something 'practical'",
      usefulPhrases: [
        "A book is one of the most thoughtful gifts you can give.",
        "Reading builds vocabulary, improves focus, develops empathy – exercises your brain deeply.",
        "A film is someone else's interpretation – a book puts the story in YOUR imagination.",
        "€15 buys a book you'll read for 10–20 hours. Cinema tickets for two: €16 for 2 hours.",
        "A good book is a gift that can last a lifetime.",
      ],
    },
  },
  {
    taskId: 25,
    taskTitle: "Communication types · UK · Flatmates",
    visual: {
      topic: "Communication",
      vocab: ["handwritten letter", "sign language", "body language", "verbal", "non-verbal", "gender differences", "road signs", "pictograms"],
      points: [
        "Types: spoken, written, non-verbal (body language), sign language, symbols/pictograms",
        "Letter writing: rare but precious – shows effort and genuine care vs. text message",
        "Road signs: universal non-verbal communication regardless of language",
        "Gender differences: women = relational (connect, share feelings) / men = instrumental (info, problem-solving) – generalisations!",
      ],
    },
    discussion: {
      topic: "The United Kingdom",
      vocab: ["constitutional monarchy", "Great Britain", "Magna Carta", "Norman Conquest", "Brexit", "Parliament", "NHS", "stereotypes"],
      points: [
        "UK = England + Scotland + Wales + Northern Ireland / Great Britain excludes NI",
        "History: Romans → Normans 1066 → Magna Carta 1215 → British Empire → WW → Brexit 2020",
        "Famous sights: London (British Museum, Big Ben), Edinburgh, Scottish Highlands, Stonehenge",
        "Traditions: afternoon tea, Changing of the Guard, Guy Fawkes Night, queuing",
        "Stereotypes: reserved, polite, ironic, obsessed with tea and weather",
      ],
    },
    roleplay: {
      topic: "Flatmates – persuade them to accept you",
      keyGoal: "Convince two students to let you share their dream flat at university",
      usefulPhrases: [
        "I'm naturally quite organised – I do my dishes the same day and keep communal spaces clean.",
        "I use headphones after 10pm and am in bed by midnight on study nights.",
        "Rent is my parents' first priority – I've never missed a payment.",
        "I enjoy cooking – I'd be happy to make shared meals a couple of times a week.",
        "I prefer to talk about issues directly rather than let resentment build.",
      ],
    },
  },
  {
    taskId: 26,
    taskTitle: "Travel destinations · English language · Family discussion",
    visual: {
      topic: "Travel Destinations",
      vocab: ["beach holiday", "city break", "adventure holiday", "cruise", "eco-tourism", "itinerary", "accommodation", "sightseeing"],
      points: [
        "Beach holiday: relaxation, sun / City break: culture, history, architecture",
        "Adventure: physically active (hiking, climbing) / Cruise: comfort, multiple destinations",
        "My dream destination: Japan – Tokyo (temples, tech, food) + Kyoto (Zen, bamboo forest, tea ceremony)",
        "Japan: craftsmanship, courtesy, beauty – a culture I deeply admire",
      ],
    },
    discussion: {
      topic: "English – the Language I Learn",
      vocab: ["ENL", "ESL", "EFL", "lingua franca", "Norman Conquest", "Shakespeare", "British vs American English", "dialect"],
      points: [
        "Old English (Germanic) → Norman Conquest 1066 (French words) → Shakespeare coined hundreds of words",
        "Words from other languages: algebra (Arabic), chocolate (Aztec Nahuatl), ketchup (Malay), piano (Italian)",
        "British vs American: colour/color, theatre/theater, lift/elevator, biscuit/cookie",
        "Why learn English: global lingua franca, business, science, diplomacy, travel, entertainment",
        "EFL = English as a Foreign Language = our situation in Slovakia",
      ],
    },
    roleplay: {
      topic: "Family Discussion – study in city vs. family business",
      keyGoal: "Convince parents to let you study in a city and work abroad before joining their firm",
      usefulPhrases: [
        "The skills I'd gain working internationally would make me far more valuable to the business.",
        "I'd come back understanding international markets and modern management.",
        "You've managed brilliantly for years without me.",
        "I'm asking for 4–6 years to study and develop – then I'd return with energy and ideas.",
        "I'm doing this FOR the family, not against it.",
      ],
    },
  },
  {
    taskId: 27,
    taskTitle: "English around the world · Kysuce region · Neighbours",
    visual: {
      topic: "English Around the World",
      vocab: ["ENL", "ESL", "EFL", "bilingual", "immersion", "language school", "online learning", "fluency"],
      points: [
        "ENL = native (UK, USA, Australia) / ESL = official role in country (India, Singapore) / EFL = foreign language (Slovakia)",
        "Why learn English: career, travel, academic research, entertainment in original",
        "Best method for me: classroom structure + authentic content (films, podcasts, reading)",
        "Fastest improvement: immersion in English-speaking country",
      ],
    },
    discussion: {
      topic: "Kysuce – The Region I Live In",
      vocab: ["Kysuca river", "Čadca", "Veľká Rača", "skanzen", "Oščadnica", "Nová Bystrica", "industry", "unemployment"],
      points: [
        "Geography: NW Slovakia, borders Czech Republic (NW) and Poland (N), Kysuca river valley",
        "Čadca: regional centre, pop. ~24,000 / dominated by forested Carpathian hills",
        "Industry: automotive supply (parts for SK/CZ car industry), woodworking, food processing",
        "Tourism: Veľká Rača (skiing/hiking), Kysucký skanzen in Nová Bystrica, Rajecké Teplice spa",
        "If Mayor of Čadca: invest in youth centre with coworking, music rooms, cycle infrastructure",
      ],
    },
    roleplay: {
      topic: "Neighbours – party noise complaint",
      keyGoal: "Negotiate with a neighbour complaining about your graduation party noise",
      usefulPhrases: [
        "I just graduated after five years of hard work – this moment means a lot to me.",
        "I'll turn the music down right now to a level that won't carry through the walls.",
        "I give you my word – everything will be quiet by midnight at the latest.",
        "As a proper apology, may I bring you a bottle of wine?",
        "Thank you for coming to talk rather than calling the police.",
      ],
    },
  },
  {
    taskId: 28,
    taskTitle: "Great Britain · Seasons · My Flat",
    visual: {
      topic: "Great Britain",
      vocab: ["Tower Bridge", "Buckingham Palace", "Scottish Highlands", "Loch Ness", "double-decker bus", "monarchy", "Westminster", "Big Ben"],
      points: [
        "UK = England + Scotland + Wales + Northern Ireland / King Charles III",
        "London: British Museum, Big Ben, West End theatre, Buckingham Palace",
        "Scotland: Edinburgh Castle, Fringe Festival (August), Loch Ness, wild Highlands",
        "Wales: Welsh language still spoken by ~600,000 / dramatic coastal scenery",
        "Would most like to visit: Edinburgh Fringe in August – world's largest arts event",
      ],
    },
    discussion: {
      topic: "Seasons",
      vocab: ["spring", "autumn", "farming", "harvest", "climate change", "extreme weather", "drought", "frost"],
      points: [
        "Spring: warming, blossoming, hiking, cycling / Autumn: crisp air, leaves, mushrooms, harvest",
        "Farming depends on climate: frost dates, rainfall, temperatures (drought = lower yields)",
        "Extreme climates: Inuit (snow shelters, animal-skin clothing) / desert peoples (loose clothing, water conservation)",
        "Climate change in Slovakia: winters noticeably milder and less snowy than 30–40 years ago",
      ],
    },
    roleplay: {
      topic: "My Flat – convince parents to let you move out",
      keyGoal: "Persuade parents you're ready to live independently in a shared flat with two friends",
      usefulPhrases: [
        "I'm 20 – learning to live independently is an essential part of growing up.",
        "Making mistakes and learning from them is how I'll develop into a fully capable adult.",
        "I'll stay closely in touch – weekly dinner here, regular calls.",
        "The rent split three ways is manageable with my part-time job.",
        "Isn't this what you've been raising me for?",
      ],
    },
  },
  {
    taskId: 29,
    taskTitle: "Slovakia sights · Holidays & Celebrations · Phone call",
    visual: {
      topic: "Slovakia",
      vocab: ["High Tatras", "Bojnice Castle", "Banská Štiavnica", "Bratislava", "UNESCO", "beauty spot", "folk architecture", "tourist attraction"],
      points: [
        "Slovakia: highest density of castles per km² in Europe (180+)",
        "Tatras: peaks over 2,600m, alpine character / Slovak Paradise: gorges and waterfalls",
        "Banská Štiavnica: UNESCO historic mining town (1993) / Bojnice: fairy-tale romantic castle",
        "Would show foreign friend: Bratislava old town, Tatras, Spiš Castle, Banská Štiavnica, folk life in Kysuce",
      ],
    },
    discussion: {
      topic: "Holidays and Celebrations",
      vocab: ["national holiday", "religious holiday", "seasonal celebration", "Thanksgiving", "Christmas Eve", "zabíjačka", "Easter Monday", "Ježiško"],
      points: [
        "Types: religious (Christmas, Easter, Eid) / national (Sept 1, Nov 17) / seasonal / personal",
        "Universal: New Year's Day / national: Slovak Sept 1 (Independence) / religious where faith predominates",
        "Slovak Christmas: December 24th, carp + potato salad + kapustnica, presents from Ježiško",
        "Surprising for foreigners: Easter Monday korbáč + water / zabíjačka (pig slaughter feast)",
        "November 17: Day of Freedom and Democracy – Velvet Revolution 1989",
      ],
    },
    roleplay: {
      topic: "Phone Call – convince mum to send money home from summer camp",
      keyGoal: "Call mum from disappointing English summer camp, convince her to send €40 for ticket home",
      usefulPhrases: [
        "The teachers are unprepared – half our time is wasted with nothing useful.",
        "The food is almost entirely fast food – I've barely had a proper meal in two weeks.",
        "I'm not learning anything – I'm wasting your money being miserable here.",
        "The bus ticket home is €40 – I'll pay you back from my savings.",
        "You should also call the organiser and complain – other students feel the same.",
      ],
    },
  },
  {
    taskId: 30,
    taskTitle: "Kysuce past · Books & Literature · Computer grandma",
    visual: {
      topic: "Kysuce – life in the region in the past",
      vocab: ["traditional wooden house", "folk architecture", "rural life", "livestock", "forest", "community", "craft", "skanzen"],
      points: [
        "Past life: small farms, cows/pigs/chickens, potatoes/grain, forest for fuel and food",
        "Crafts: woodcarving, weaving, embroidery – practical and cultural",
        "Community centred on village, church, seasonal celebrations",
        "Skanzen in Nová Bystrica: best-preserved example of traditional Kysuce architecture",
        "Favourite places: Veľká Rača (hiking/skiing), Kysuca riverside in Čadca, surrounding forests",
      ],
    },
    discussion: {
      topic: "Books and Literature",
      vocab: ["prose", "Orwell", "Fitzgerald", "Shakespeare", "e-book", "film adaptation", "reading habits", "childhood favourite"],
      points: [
        "Why read: entertainment, knowledge, empathy, vocabulary, companionship, stress relief",
        "Reading to children: builds language, imagination, love of learning – huge developmental advantage",
        "Orwell 1984: totalitarian surveillance state – still deeply relevant today",
        "Great Gatsby: American Dream and its illusions – hollow pursuit of wealth",
        "Books vs films: books allow deeper detail / films bring visual immediacy (HP, LOTR both great)",
      ],
    },
    roleplay: {
      topic: "Computer Grandma – explain benefits of technology",
      keyGoal: "Convince grandma that using a computer is useful and help her find friends on Facebook",
      usefulPhrases: [
        "I use it for school – research, essays. I'd spend hours at the library otherwise.",
        "Video calling lets you see friends who moved away right here in the room.",
        "Practically: booking trains, paying bills, checking pharmacy hours – saves enormous time.",
        "Facebook – did you know people your age use it to reconnect with old classmates?",
        "Let's set up your account right now – I'll be here whenever you need help.",
      ],
    },
  },
];
