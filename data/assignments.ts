export interface Task {
  id: number;
  type: "visual" | "discussion" | "roleplay";
  title: string;
  topic: string;
  bullets: string[];
  modelAnswer: string;
}

export interface Assignment {
  id: number;
  tasks: Task[];
}

export const assignments: Assignment[] = [
  {
    id: 1,
    tasks: [
      {
        id: 1, type: "visual", title: "Task 1 – Visual Input", topic: "Education",
        bullets: [
          "Compare the life of students in the past and now.",
          "Talk about your life at your school, your time schedule, your subjects, breaks, lessons, homework.",
          "In some American schools they have police there. Why? Would it be useful in Slovakia? Why not?"
        ],
        modelAnswer: `Looking at these pictures, I can see students in school environments from different eras. In the past, classrooms were very formal — students sat in straight rows, everything was teacher-centred, and discipline was very strict. There was no technology, and learning mainly meant memorising facts from textbooks. Today, education is much more interactive. We use laptops, projectors, work in groups, and teachers try to make lessons engaging.

As for my own school life, I attend a secondary school and my day usually starts around 7:45. I have around six or seven lessons a day, each lasting 45 minutes. My subjects include English, Slovak language, Mathematics, History, Biology, Chemistry, and PE. I particularly enjoy English because it's useful in real life and I like communicating with people from other countries. We get homework almost every day, and I try to do it right after school so I have the evenings free.

Regarding police in American schools — this is mainly a reaction to the tragic school shootings that have happened in the United States. Schools there feel they need armed security to keep students safe. Personally, I don't think this would be necessary or beneficial in Slovakia. Our schools are generally safe environments, and having police officers patrolling the halls would create unnecessary tension and fear rather than a positive learning atmosphere. I think we should focus on mental health support and better communication between students and teachers instead.`
      },
      {
        id: 2, type: "discussion", title: "Task 2 – Discussion Topic", topic: "Family and Society",
        bullets: [
          "Define a family. Compare family in the past and now.",
          "Discuss some unusual families (single parent family, mixed raced family, stepfamily, same gender family).",
          "How do you get on with your family members? Is there a generation gap?",
          "What is the impact of society on a family and what problems do your families have to face these days?",
          "What is your vision of your future family?"
        ],
        modelAnswer: `A family is a group of people who are related by blood, marriage, or adoption, and who care for and support each other. In the past, the typical family was a nuclear family — a married couple with children — and extended families often lived together under one roof. Nowadays, the definition of family has become much broader and more diverse.

Today we see many different types of families. Single-parent families, where a child is raised by one parent, are quite common now, often as a result of divorce. Stepfamilies form when divorced or widowed parents remarry and bring their children together. Mixed-race families are also becoming more accepted as societies become more multicultural. Same-gender families, where children are raised by two parents of the same sex, are becoming more recognised legally in many countries, including some European ones.

Personally, I get on quite well with my family. I'm closest to my parents and siblings. Like in most families, there is sometimes a generation gap — my parents grew up without smartphones or social media, so they sometimes don't understand why I spend time online. But we generally manage to talk things through and find a compromise.

Society puts a lot of pressure on families today. Financial stress, long working hours, social media influence, and the fast pace of modern life all create challenges. Many families struggle with finding enough quality time together. Young people face pressure to succeed academically and professionally, while parents worry about providing a stable home.

As for my future family, I'd like to have a close, supportive family where we communicate openly. I'd want to have two or three children, a stable home, and enough time to spend with my family. I think mutual respect and understanding are the most important values in a healthy family.`
      },
      {
        id: 3, type: "roleplay", title: "Task 3 – Role-play", topic: "An Information Centre",
        bullets: [
          "You work at an information centre in Čadca. A tourist from England comes and asks what places and activities you would recommend in this region.",
          "Recommend a pleasant and practically located accommodation to stay for 2–3 nights.",
          "Suggest visiting 3–5 places worth seeing and also some activities they can enjoy here."
        ],
        modelAnswer: `**You:** Good morning! Welcome to the Čadca Tourist Information Centre. How can I help you today?

**Tourist:** Hello! I've just arrived from England and I'd like to know what there is to see and do around here. Can you recommend some places?

**You:** Of course! You've come to a beautiful part of Slovakia — the Kysuce region. Let me suggest a few things.

For accommodation, I'd recommend Hotel Beskyd right here in Čadca. It's centrally located, comfortable, reasonably priced, and the staff are very helpful. Alternatively, there are some lovely pensions in the surrounding villages with a more traditional feel.

Now, for places to visit — I'd definitely recommend Kysucké múzeum, our regional museum. It has great exhibitions about the local history and traditions of the Kysuce area. Not far from there is the Kysucké village museum — it's an open-air museum called a skanzen, showing traditional wooden folk architecture. It's really unique.

You should also visit Rajecké Teplice, a beautiful spa town about 40 kilometres away — perfect if you enjoy relaxing. And if you like nature, the Kysucká vrchovina hills offer excellent hiking trails with stunning views.

For activities, cycling along the Kysuca river valley is very popular. In winter, there's skiing in Veľká Rača in Oščadnica — one of the best ski resorts in the region. And do try some traditional Slovak food — I'd recommend a local restaurant serving bryndzové halušky and kapustnica.

**Tourist:** That sounds wonderful! How do I get to the open-air museum?

**You:** It's very easy — just take the local bus from the main bus station, direction Nová Bystrica. It takes about 25 minutes. Enjoy your stay!`
      }
    ]
  },
  {
    id: 2,
    tasks: [
      {
        id: 1, type: "visual", title: "Task 1 – Visual Input", topic: "Human Relationships",
        bullets: [
          "Describe relationships shown in the pictures.",
          "Are the relationships changing nowadays? How? Is it a positive or a negative change?"
        ],
        modelAnswer: `Looking at these pictures, I can see various types of human relationships — friendships between young people, romantic couples, family bonds, and perhaps also professional relationships. The pictures seem to capture moments of connection, joy, and togetherness.

Human relationships are definitely changing in today's world. Technology and social media have had a massive impact on how we connect with each other. On one hand, we can now stay in touch with friends and family who live far away much more easily through messaging apps, video calls, and social networks. This is certainly a positive development.

However, there are also concerning changes. Many people, especially young people, spend so much time on their phones that face-to-face communication is suffering. Friendships are increasingly formed and maintained online rather than in person. Some studies suggest that despite being more "connected" digitally, many people feel lonelier than previous generations.

Romantic relationships have also changed — online dating is now very common, and relationships can start and end over a screen. This makes it easier to meet new people but can also lead to shallower connections.

I think it's a mixed change — technology gives us more ways to connect, but we need to be careful not to let it replace genuine human interaction. Nothing can truly substitute for spending quality time with the people we care about.`
      },
      {
        id: 2, type: "discussion", title: "Task 2 – Discussion Topic", topic: "Housing",
        bullets: [
          "Talk about different types of housing throughout history.",
          "Describe your dream house — location, position, size, furniture, etc.",
          "Compare living in a town and a village — give some pros and cons.",
          "Point out some positives and negatives of multi-generational living under the same roof."
        ],
        modelAnswer: `Throughout history, human housing has evolved enormously. In prehistoric times, people lived in caves or simple shelters made of branches and animal skins. As civilisations developed, people built more permanent structures — wooden houses, stone buildings, and eventually brick houses. In the Middle Ages, most people lived in modest single-room cottages, while the wealthy had large castles or manor houses. The Industrial Revolution led to the construction of terraced houses in cities for factory workers. Today, we have a huge variety of housing types — detached houses, semi-detached houses, terraced houses, flats, apartments, and even eco-friendly homes.

My dream house would be a spacious detached house in a quiet location, perhaps on the outskirts of a town where you have the best of both worlds — access to city amenities but also peace and nature nearby. It would have a large garden, at least four bedrooms, an open-plan kitchen and living area, and large windows to let in plenty of natural light. The interior would be modern but cosy, with wooden floors and comfortable furniture. A fireplace would be a must.

Comparing town and village life — towns offer more job opportunities, better schools and hospitals, more entertainment options and public transport. However, they can be noisy, polluted, and expensive. Villages, on the other hand, are peaceful, have clean air, a stronger sense of community, and property is cheaper. But they often lack good public transport and job opportunities, which can be limiting.

Multi-generational living — having grandparents, parents, and children under one roof — has both advantages and disadvantages. The positives include sharing costs, built-in childcare from grandparents, companionship for elderly family members, and passing down family traditions and values. The negatives include potential conflicts over lifestyle differences, lack of privacy, and the challenges of a noisy or crowded household.`
      },
      {
        id: 3, type: "roleplay", title: "Task 3 – Role-play", topic: "A Part-time Job",
        bullets: [
          "You are 17 and would like to earn some extra money. There is a small pub just around the corner and they have posted a vacancy for an evening help position.",
          "You would very much like to apply for it, but you have to talk to your parents first because you are almost sure they will have some strong objections to your idea."
        ],
        modelAnswer: `**You:** Mum, Dad, can I talk to you about something? I've been thinking about getting a part-time job.

**Parent:** A job? What kind of job? You should be focusing on school.

**You:** I know school is the priority, and I promise it won't affect my grades. There's a small pub around the corner looking for an evening helper — just a few evenings a week. I'd really like to apply.

**Parent:** A pub? Absolutely not. You're only 17, and that's not an appropriate environment for you.

**You:** I understand your concern, but it would just be washing up, serving soft drinks, and helping clean up. Nothing inappropriate. Lots of teenagers work in catering — it teaches you responsibility and real-world skills. And honestly, I'd love to earn my own money so I'm not always asking you for things.

**Parent:** We worry about you being around adults who are drinking late at night. What about your homework?

**You:** I've thought about that. I'd only work on Friday and Saturday evenings when I don't have school the next day. That way my studies wouldn't suffer at all. And having some work experience at my age looks really good on future applications — for university or jobs.

**Parent:** I'm still not sure. What does it pay?

**You:** I'm not sure exactly, but even a little bit of extra income would let me pay for my own things — clothes, trips with friends — without having to ask you for money all the time. That seems fair, right? Could we maybe visit the place together first so you can see what it's like?

**Parent:** Alright, we'll go have a look. But the moment your grades drop, the job stops.

**You:** That's completely fair. Thank you!`
      }
    ]
  },
  {
    id: 3,
    tasks: [
      {
        id: 1, type: "visual", title: "Task 1 – Visual Input", topic: "Jobs",
        bullets: [
          "Describe the jobs presented in the pictures. Talk about working hours, place, conditions, salary, benefits, drawbacks, etc.",
          "Which of them do you value most and least? Why?",
          "Is there any job you wouldn't do at any cost? Why? What job would you like to try just for a day?"
        ],
        modelAnswer: `Looking at these pictures, I can see people working in various professions — perhaps a doctor or nurse in a hospital setting, a construction worker outdoors, an office worker at a desk, and maybe a teacher or someone in a creative field. Each of these jobs comes with very different conditions, rewards, and challenges.

A doctor, for example, works extremely long hours, often with night shifts and weekends. The working conditions can be stressful — dealing with life and death situations — but the salary is high and the job brings enormous personal satisfaction. A construction worker has physically demanding outdoor work, often in difficult weather, with safety risks, but it's skilled practical work that produces visible results. An office worker might enjoy comfortable indoor conditions and regular hours, but the work can become repetitive and sedentary. A teacher works with people every day, shapes young minds, has holidays, but is often underappreciated and underpaid for the responsibility they carry.

The job I value most is that of a doctor or medical professional. Despite the extreme difficulty and stress, the ability to save lives and ease suffering makes it one of the most meaningful professions. I also deeply respect teachers — they shape entire generations.

The job I value least, honestly, would be a politician — not because it's unimportant, but because it seems too often linked to dishonesty.

A job I wouldn't do at any cost would be a miner or someone working in very dangerous underground conditions — the risk of injury or death is too high. Just for a day, though, I'd love to try being a film director — to experience the creative process of bringing a story to life on screen would be incredible.`
      },
      {
        id: 2, type: "discussion", title: "Task 2 – Discussion Topic", topic: "Human Body and Healthcare",
        bullets: [
          "Briefly describe different parts of the human body and explain functions of some of them.",
          "Why do people go to a doctor? What should a doctor do at a yearly check-up?",
          "What illnesses do people suffer from?",
          "Do you think teenagers are becoming unhealthier? Why?",
          "What can you do to stay healthy?"
        ],
        modelAnswer: `The human body is an incredibly complex system made up of many organs and body parts, each with a specific function. The brain controls all our thoughts, movements, and bodily functions. The heart pumps blood around the body, delivering oxygen and nutrients. The lungs allow us to breathe and exchange gases. The stomach and intestines digest food and absorb nutrients. The liver filters toxins from the blood. Our skeleton provides structure, protects organs, and enables movement with the help of muscles.

People go to a doctor for many reasons — routine check-ups, illness, injuries, or managing chronic conditions. At a yearly check-up, a doctor should measure blood pressure, check weight and BMI, take a blood test to check cholesterol, blood sugar, and other markers, listen to the heart and lungs, and ask about lifestyle habits like diet, exercise, smoking, and alcohol. Prevention is better than cure.

People suffer from a wide range of illnesses. Common ones include colds and flu, heart disease, diabetes, cancer, depression and anxiety, obesity, and respiratory diseases. In Slovakia, cardiovascular diseases are unfortunately one of the leading causes of death.

As for teenagers — I do think many are becoming unhealthier. The rise of fast food, sugary drinks, and screen time has led to more sedentary lifestyles. Many teenagers spend hours on their phones rather than exercising. Sleep deprivation due to social media is also a serious issue. Mental health problems among young people are increasing rapidly too.

To stay healthy, we should exercise regularly — at least 30 minutes a day — eat a balanced diet with plenty of fruit, vegetables, and whole grains, drink enough water, get 8 hours of sleep, avoid smoking and excessive alcohol, and manage stress through hobbies, sport, or talking to someone.`
      },
      {
        id: 3, type: "roleplay", title: "Task 3 – Role-play", topic: "Multiculturalism",
        bullets: [
          "An exchange programme student from England is staying in your family. He/she is quite shocked by different rules at home, e.g. eating warm meal at 1 pm, commuting to school by bus.",
          "Try to explain the benefits of these rules and since the friend is going to experience Easter time in a few days, explain your Easter traditions in advance to avoid another shock."
        ],
        modelAnswer: `**You:** Hey Tom, you look a bit confused. Everything okay?

**Tom:** Honestly, I'm still getting used to things here. Like — why does your family eat a hot meal at one in the afternoon? In England we just have a sandwich for lunch and eat our main meal in the evening.

**You:** I totally get why that seems strange! In Slovakia, lunch is the most important meal of the day. A warm, cooked meal at lunchtime gives you energy for the rest of the afternoon. Many schools and workplaces have canteens for exactly this reason. It's much better for your digestion than eating a big meal late in the evening before bed.

**Tom:** Fair enough. And what about taking the bus to school? Couldn't someone drive us?

**You:** Well, public transport here is actually quite reliable and affordable. It teaches you independence, and it's better for the environment. Most Slovak students use buses or trains — it's just normal here.

**Tom:** Okay, I can see that. But I heard something about Easter coming up — you said there are some unusual traditions?

**You:** Ah yes — I wanted to warn you about that! On Easter Monday, boys go around with a whip made from willow branches — called a korbáč — and they lightly whip girls on the legs. Then the boys pour cold water on the girls.

**Tom:** That sounds bizarre — won't the girls be upset?

**You:** Ha, I know it sounds strange! But it's actually a very old tradition symbolising health, beauty, and fertility. Girls are supposed to stay young and healthy because of it. In return, the girls give the boys painted Easter eggs and sometimes money or chocolate. It's all good-natured fun and everyone expects it. You're welcome to join in if you like!

**Tom:** That's... actually kind of fun. Slovak traditions are really interesting!`
      }
    ]
  },
  {
    id: 4,
    tasks: [
      {
        id: 1, type: "visual", title: "Task 1 – Visual Input", topic: "Time for Leisure Activities and Hobbies",
        bullets: [
          "How do people of different ages in the pictures spend their free time? How do you spend it?",
          "What are typical hobbies of art-loving people?",
          "Can you think of any harmful or dangerous free-time activities?"
        ],
        modelAnswer: `Looking at these pictures, I can see people of various ages enjoying different leisure activities. Younger people might be playing sports, gaming, or spending time with friends. Middle-aged people could be gardening, reading, or doing DIY projects. Older people might enjoy walking, knitting, or spending time with grandchildren. Free time activities clearly reflect different stages of life, energy levels, and interests.

As for me, I spend my free time in various ways. I enjoy listening to music and watching films or series online. I also like going for walks with friends, reading occasionally, and I try to do some sport — cycling or swimming when I can. Spending time with friends and family is very important to me too.

Typical hobbies of art-loving people include painting, drawing, sculpting, photography, writing poetry or stories, playing a musical instrument, singing, or attending theatre and gallery events. These creative activities are wonderful for self-expression and emotional wellbeing.

As for harmful or dangerous free-time activities — unfortunately, there are quite a few. Extreme sports like base jumping, free solo climbing, or motorcycle racing carry obvious physical risks. But some dangerous activities are less obvious: spending excessive time on social media or gaming can lead to addiction and isolation. Substance use — alcohol, drugs — sometimes starts as a leisure activity among teenagers. Some young people also engage in risky online challenges. I think the key is finding a healthy balance and being aware of when something fun becomes harmful.`
      },
      {
        id: 2, type: "discussion", title: "Task 2 – Discussion Topic", topic: "Means of Transport, Travelling",
        bullets: [
          "Talk about the history of travelling. When did people start to travel, why and how?",
          "What means of transport do we use now? Talk about their pros and cons.",
          "Talk about your most interesting travel experience.",
          "Explain: backpacking, package holiday, coach surfing, armchair traveller, daycation, virtual travel."
        ],
        modelAnswer: `People have been travelling since prehistoric times — early humans were nomads who moved in search of food, water, and shelter. As civilisations developed, people began trading, which required travel across great distances. The Silk Road connected Europe with Asia. Later, explorers like Columbus and Magellan sailed across oceans to discover new lands. The invention of the steam engine in the 19th century revolutionised travel with railways and steamships. Then came cars, aeroplanes, and eventually the modern high-speed trains and international flights we have today.

Today we have many means of transport. Cars offer flexibility and comfort, but contribute to pollution and traffic jams. Trains are efficient and eco-friendlier for longer journeys. Aeroplanes make international travel quick, but they have a large carbon footprint. Buses and trams are good for city transport and affordable. Bicycles are eco-friendly and healthy for short distances.

My most interesting travel experience was a trip to Prague with my class. We visited the historic city centre, walked across Charles Bridge, visited Prague Castle, and tried traditional Czech food. It was fascinating to see a neighbouring capital city and realise how much Czech and Slovak cultures share while also being distinct.

Now for the travel terms: **Backpacking** means travelling with just a backpack, usually on a low budget, staying in hostels and being flexible with plans. A **package holiday** is an all-inclusive trip where flights, hotel, and sometimes meals are all booked and paid for together — convenient but less adventurous. **Couchsurfing** means staying for free at a local person's home when travelling. An **armchair traveller** is someone who explores the world through books, documentaries, or the internet without actually going anywhere. A **daycation** is a short day trip close to home. **Virtual travel** means exploring destinations through VR technology or online tours.`
      },
      {
        id: 3, type: "roleplay", title: "Task 3 – Role-play", topic: "A Complaint in a Clothes Shop",
        bullets: [
          "You are in a clothes shop to complain about a woollen sweater you bought 2 weeks ago.",
          "Explain why you want a refund and come up with what's wrong with it."
        ],
        modelAnswer: `**You:** Excuse me, I'd like to speak with someone about a product I bought here two weeks ago.

**Shop assistant:** Of course, how can I help you?

**You:** I bought this woollen sweater here two weeks ago — here's the receipt — and I'm really quite disappointed with it. After just two washes, following the care instructions exactly, the sweater has shrunk significantly and the wool has started to pill badly. It's also started to lose its shape. It looks nothing like it did when I bought it.

**Shop assistant:** I'm sorry to hear that. Did you wash it at the correct temperature?

**You:** Absolutely. The label says hand wash at 30 degrees, and that's exactly what I did. I didn't put it in the machine. Despite that, the quality has deteriorated far too quickly for a product at this price. I paid 45 euros for this sweater — I expect it to last more than two weeks.

**Shop assistant:** I understand your frustration. Do you have the original tags as well?

**You:** Yes, I kept everything. I'd like a full refund, please. The product is clearly defective or the quality doesn't match what was advertised. Under consumer protection law, I'm entitled to a refund for a faulty item.

**Shop assistant:** Let me check with my manager, but I think we can process a refund for you. Would an exchange for a different item be acceptable?

**You:** I'd prefer a refund if possible — I've lost confidence in the quality. But if you can guarantee the replacement is of better quality, I'm open to discussing it. What can you offer?

**Shop assistant:** Let me get the manager for you right away.

**You:** Thank you, I appreciate your help.`
      }
    ]
  },
  {
    id: 5,
    tasks: [
      {
        id: 1, type: "visual", title: "Task 1 – Visual Input", topic: "Housing",
        bullets: [
          "Describe living in the types of housing in the pictures. Where would you like to live?",
          "Explain the difference between 'house' and 'home'. How important are both to you?",
          "What kinds of problems do young people have, concerning living, when they want to settle down?"
        ],
        modelAnswer: `Looking at the pictures, I can see different types of housing — perhaps a block of flats in a city, a detached house in the suburbs, and maybe a traditional country cottage. Each of these living environments has a very different character and lifestyle attached to it.

Living in a flat in a city means you're close to shops, work, schools, and entertainment. However, flats can be small, noisy, and you have neighbours on all sides with limited privacy. A detached house offers more space, a garden, and more privacy, but usually requires more maintenance and is further from city amenities. A country cottage is peaceful and surrounded by nature, ideal for those who value tranquility, but can feel isolated without a car.

Personally, I'd like to live in a house on the edge of a town — close enough to amenities but with a garden and some peace and quiet.

The difference between a "house" and a "home" is important. A house is just a physical building — bricks, walls, and a roof. A home is where you feel safe, loved, and comfortable. You can live in a beautiful house that doesn't feel like home, and you can make a modest flat feel like the warmest, most welcoming home imaginable. What makes a home is the people in it and the memories you create there.

As for young people settling down — the biggest problems are financial. Property prices have risen enormously, and many young people simply cannot afford to buy a home. Rents are also very high in cities. Many young people in Slovakia have to live with their parents well into their twenties because they can't afford their own place. Getting a mortgage requires a stable income and a large deposit, which is difficult when you're just starting your career. This is a significant source of stress for the younger generation.`
      },
      {
        id: 2, type: "discussion", title: "Task 2 – Discussion Topic", topic: "Education",
        bullets: [
          "Talk about the education system in Slovakia — schools, school year, exams, assessment, classifications, etc. How is it different from England?",
          "Tell us about your two favourite school subjects and your assessment in them. Are you an independent learner?",
          "What qualities make a successful student and a respected teacher?",
          "Mention some alternative ways of learning a foreign language."
        ],
        modelAnswer: `The Slovak education system is divided into several stages: primary school from age 6 to 15, then secondary school — which can be a gymnasium, a vocational school, or a business school — from 15 to 18 or 19. It ends with the maturita exam, which is the equivalent of A-levels in England. Students are assessed on a scale of 1 to 5, where 1 is the best grade and 5 means failing. We have two semesters per year, with holidays at Christmas, Easter, and summer.

Compared to the English system, the main difference is that in Slovakia we study more subjects simultaneously — often 12 to 15 subjects at once. In England, students at A-level typically specialise in just 3 or 4 subjects. Also, the English system uses letter grades (A–F), and GCSEs are taken at age 16 before A-levels.

My favourite subjects are English and History. In English, I enjoy learning because it's practical and opens doors globally. I'm a reasonably independent learner — I watch English films without subtitles, read articles, and practise on my own outside school. In History, I like understanding how past events shaped the world we live in today.

A successful student is curious, organised, persistent, and willing to ask for help when needed. They manage their time well and don't just study for exams but genuinely want to understand things.

A respected teacher is patient, enthusiastic about their subject, fair in their assessment, approachable, and able to explain difficult concepts clearly. They treat students as individuals and inspire them.

For learning a foreign language outside school, there are many options: watching films and series in the target language, listening to podcasts, using apps like Duolingo, finding a language exchange partner, travelling to countries where the language is spoken, or joining an online conversation group.`
      },
      {
        id: 3, type: "roleplay", title: "Task 3 – Role-play", topic: "Euro Grant",
        bullets: [
          "You are a member of a committee that has a grant of ten thousand Euros from the EU.",
          "Come up with an interesting idea how to spend it on your hometown.",
          "Persuade the other members that they should vote for your proposal."
        ],
        modelAnswer: `**You:** Good morning, everyone. I'm really glad we have this opportunity to make a real difference in our town with this 10,000 euro EU grant. I've been thinking carefully about what would have the most lasting and meaningful impact, and I'd like to present my proposal.

I propose we use the funds to create a **youth community centre** — or at least significantly upgrade an existing space for youth activities. Let me explain why.

Right now, young people in our town have very few places to go after school. There's nowhere to study quietly, nowhere to do sports indoors, and nowhere to meet and socialise safely. This leads to teenagers spending time on the streets or in unhealthy environments.

With 10,000 euros, we could renovate a space, equip it with tables for studying, a small library corner, a gaming area, and space for workshops and events. We could organise language clubs, coding workshops, art classes, and sport events there.

The benefits are enormous: we're investing in the future of our community. Young people will have a safe, positive environment. Crime and vandalism tend to decrease when youth have constructive activities. Parents will feel safer. And crucially, this project aligns perfectly with EU values — youth development, community building, and social inclusion.

I know some of you might argue for repairing roads or improving the park. Those are worthy causes too, but they don't create lasting social change. This youth centre would benefit hundreds of young people for years to come.

I urge you to vote for this proposal. Let's invest in our young people — they are the future of this town. Who has any questions?`
      }
    ]
  },
  {
    id: 6,
    tasks: [
      {
        id: 1, type: "visual", title: "Task 1 – Visual Input", topic: "Books and Literature",
        bullets: [
          "What kind of books are in the pictures? Who might read them?",
          "Are you keen on reading? Do you prefer e-books or real paper books?",
          "Can a book be the best friend of a man?"
        ],
        modelAnswer: `Looking at the pictures, I can see a variety of books — there appear to be novels, perhaps some horror or thriller titles, classic literature, and maybe some children's books. Different books appeal to very different readers: fantasy novels attract young people with vivid imaginations, crime thrillers draw in readers who enjoy suspense and mystery, classics are often read by students and literary enthusiasts, while self-help or educational books appeal to those seeking personal development.

As for me, I'm moderately keen on reading. I don't read as much as I'd like, but when I find a book that captures my attention, I find it very difficult to put down. I prefer paper books over e-books. There's something special about holding a physical book — the smell of the pages, the ability to flip through, to mark pages, to have it on a shelf as a reminder of the journey you went on. E-books are convenient, especially for travelling, but they lack that tactile, personal quality.

Can a book be a man's best friend? I genuinely believe it can. A good book can be a companion during lonely times, a source of wisdom and knowledge, an escape from everyday stress, and a window into experiences and worlds you'd never otherwise encounter. Unlike a friend who might judge you or be unavailable, a book is always there, always honest, and never tires of your company. Great literature can help you understand yourself and others more deeply, teach empathy, and offer perspectives you'd never reach on your own. In that sense, yes — books can absolutely be a person's best friend.`
      },
      {
        id: 2, type: "discussion", title: "Task 2 – Discussion Topic", topic: "Environment",
        bullets: [
          "What are ecological problems? Give examples.",
          "Talk about global warming and the thinning of the ozone layer in more details.",
          "Explain the term 3Rs in connection with the environment.",
          "What do you think of testing on animals? Is keeping animals in ZOOs a good idea?",
          "What does your family do to act more ecologically?"
        ],
        modelAnswer: `Environmental problems are among the most pressing issues of our time. The major ecological challenges include climate change, air and water pollution, deforestation, loss of biodiversity, plastic waste in the oceans, and the destruction of natural habitats. These problems are largely caused by human activity — industry, agriculture, transport, and overconsumption.

Global warming refers to the gradual increase in Earth's average temperature caused by the build-up of greenhouse gases — mainly CO2 and methane — in the atmosphere. These gases trap heat from the sun and prevent it from escaping into space. The consequences are severe: melting ice caps, rising sea levels, more frequent extreme weather events — droughts, floods, hurricanes — and threats to ecosystems worldwide. The ozone layer, found in the upper atmosphere, protects us from harmful UV radiation. Certain chemicals, particularly CFCs used in old refrigerators and aerosols, have caused holes in the ozone layer, increasing rates of skin cancer and harming marine ecosystems. Thankfully, international agreements like the Montreal Protocol have helped reduce CFC use, and the ozone layer is slowly recovering.

The 3Rs stand for Reduce, Reuse, and Recycle. Reducing means consuming less in the first place. Reusing means finding new uses for items rather than throwing them away. Recycling means processing waste materials to make new products. These principles form the foundation of sustainable living.

Testing on animals is a controversial topic. On one hand, it has contributed to many medical breakthroughs. On the other hand, it causes suffering to living creatures that cannot consent. I believe we should work towards eliminating animal testing by developing better alternatives. As for ZOOs — they do play a role in conservation and education, but only if they genuinely prioritise animal welfare and participate in breeding programmes for endangered species. Poor-quality ZOOs that just display animals for entertainment are harder to justify.

In my family, we separate waste for recycling, try to use reusable bags when shopping, take shorter showers, and turn off lights and electronics when not in use. My parents try to use public transport where possible.`
      },
      {
        id: 3, type: "roleplay", title: "Task 3 – Role-play", topic: "A Gap Year",
        bullets: [
          "You have just finished secondary school and you want to take a gap year before going to university.",
          "Your parents don't like this idea — they think you should go to university first.",
          "Try to persuade them to let you go and even contribute some money because you are sure it would be a very useful experience for you."
        ],
        modelAnswer: `**You:** Mum, Dad — I've been wanting to talk to you about something important. I know you're expecting me to start university in September, but I've been thinking about taking a gap year first.

**Parent:** A gap year? That's just delaying your future. You'd lose a whole year.

**You:** I understand why it seems that way, but I actually think it would make me a much better student. Right now, after 13 years of school, I'm honestly a bit burnt out. I'd like to travel across Europe, do some volunteering, maybe work for a few months, and really figure out what I want to study and why. Going to university without direction often leads to students dropping out or switching programmes — which wastes far more time and money.

**Parent:** But what would you actually do? Just wander around?

**You:** No, not at all. I have a plan. I want to volunteer with an environmental organisation in Portugal for three months — it's an official programme, very structured. Then I'd like to travel Central Europe on a budget, which would improve my English and German. And I'd work part-time locally in summer to save money. I'd document everything for my university application — it would actually strengthen it.

**Parent:** We'd be worried about you travelling alone.

**You:** I'd be careful and responsible. I'd stay in touch every day. And honestly, developing that independence is exactly the kind of personal growth that universities look for. Would you be willing to contribute to the travel fund? Even a small amount — I'd cover the rest myself.

**Parent:** We'll need to think about it properly...

**You:** Of course. But please consider it seriously — this could be one of the most valuable experiences of my life.`
      }
    ]
  },
  {
    id: 7,
    tasks: [
      {
        id: 1, type: "visual", title: "Task 1 – Visual Input", topic: "Young People and Their World",
        bullets: [
          "Talk about the negative and positive aspects of young people's lives as presented in the pictures.",
          "How would you describe an average young person?",
          "Do you think the world of young people has changed in comparison with the time when your parents/grandparents were the same age as you are now?"
        ],
        modelAnswer: `Looking at these pictures, I can see various aspects of young people's lives. There may be images showing teenagers socialising, using technology, perhaps engaging in sport or creative activities, but also possibly images depicting challenges like stress, peer pressure, or risky behaviour.

On the positive side, today's young people are more globally connected, better educated, more aware of social issues like climate change and equality, and have access to incredible opportunities — online learning, international travel, diverse career paths. Young people today are often more open-minded, creative, and tech-savvy than any previous generation.

However, there are real negatives too. Mental health issues — anxiety, depression, loneliness — are alarmingly common among young people today, often fuelled by social media pressure to look perfect and have an exciting life. Many teenagers struggle with identity and self-image. There's also academic pressure, uncertainty about the future, and the temptation of harmful substances.

An average young person today is probably someone who spends a significant portion of their day online, has a close friend group both online and in person, cares about social issues, feels pressure about their future, and is navigating a world that's changing faster than any generation before had to.

The world has changed enormously since my grandparents' youth. They grew up without the internet, smartphones, or social media. They had simpler entertainment — radio, cinema, outdoor games. Life was slower, communities were tighter, and young people generally had more stable expectations about their futures. Whether that was better or worse is hard to say. Today's generation has more freedom and opportunity but also more pressure, uncertainty, and complexity to navigate.`
      },
      {
        id: 2, type: "discussion", title: "Task 2 – Discussion Topic", topic: "Leisure Time, Hobbies, Lifestyle",
        bullets: [
          "Recent years have brought a lot of changes in ways of spending free time. How did people spend their time a hundred years ago?",
          "Give examples of some rare or unusual relaxing activities of the modern people.",
          "Give some examples of different free-time activities for people who work manually and those who work mentally.",
          "Talk about your hobbies and the ways you spend your free time.",
          "Should schools provide after-school activities to fill their students' free time?"
        ],
        modelAnswer: `A hundred years ago, people's leisure time was very different. There was no television, internet, or smartphones. People entertained themselves through communal activities — folk music and dancing, storytelling, outdoor games, reading, sewing, and visiting neighbours. Life was more physical and community-based. Going to the cinema or theatre was a special occasion. Most entertainment was homemade.

Today, some people have quite unusual ways of relaxing. I've heard of people who do urban foraging — collecting wild plants and mushrooms in cities. Others practice wild swimming in cold lakes all year round. There are people who relax through adult colouring books, escape rooms, axe throwing, or even competitive jigsaw puzzles. Some people find peace in extreme minimalism — decluttering and simplifying their lives as much as possible.

People with mentally demanding jobs — like programmers, teachers, doctors — often need physical activity to unwind. They might go to the gym, do yoga, garden, cook, or go hiking. Physical labour provides a mental release. People who do physical work — builders, farmers, factory workers — often prefer more sedentary leisure: reading, watching films, playing board games, or doing quiet creative activities like painting.

My own hobbies include listening to music, watching films and series, cycling, spending time with friends, and occasionally reading. I also enjoy exploring new places — day trips to nearby towns or nature spots.

I strongly believe schools should offer after-school activities. Many children come home to empty houses and spend hours unsupervised on screens. Schools could provide sports clubs, drama, art, coding, music — activities that develop skills, build friendships, and keep young people engaged in positive ways. It would benefit both individuals and the wider community.`
      },
      {
        id: 3, type: "roleplay", title: "Task 3 – Role-play", topic: "A Subscription",
        bullets: [
          "You want your parents to buy a subscription to a streaming platform but they think it is a waste of money.",
          "Disagree politely, give opposing arguments and some of your practical reasons — say what benefits all family members can receive.",
          "Suggest a compromise solution."
        ],
        modelAnswer: `**You:** Mum, I wanted to ask about getting a streaming subscription — maybe Netflix or a similar service.

**Parent:** Not again. It's a waste of money. We have television.

**You:** I understand it might seem unnecessary, but actually think about how much everyone in the family watches online content. Regular TV has so many adverts, and the shows are on at fixed times. With a streaming service, everyone can watch what they want, when they want, without interruption.

**Parent:** How much does it even cost?

**You:** A family subscription is about 15 euros a month — less than 50 cents a day. When you think about it, it's cheaper than going to the cinema once, and the whole family can use it. You could watch documentaries, Dad might enjoy sports content, you might like some drama series, and I'd use it for films and learning English through content.

**Parent:** We'd probably all just sit watching TV even more.

**You:** That's a fair point, and we could set some ground rules about screen time. But having quality content available also means less time spent on YouTube with random videos — the content is curated and often educational or cultural.

**Parent:** I'm still not convinced it's worth the money every month.

**You:** How about this for a compromise — let me pay half the subscription from my pocket money for the first three months. If after three months the whole family agrees it's been worth it, we continue and split the cost. If not, we cancel with no hard feelings. What do you think?

**Parent:** That does sound reasonable. We can try it.

**You:** Great! I'll set it up and show you how it works.`
      }
    ]
  },
  {
    id: 8,
    tasks: [
      {
        id: 1, type: "visual", title: "Task 1 – Visual Input", topic: "Weather and Seasons",
        bullets: [
          "Describe the seasons of the year in the pictures. What's your favourite and why?",
          "What are the typical activities in each season?",
          "What is your favourite season?",
          "Are the seasons the same all over the world? Can you imagine living in a different climate?"
        ],
        modelAnswer: `Looking at the pictures, I can see images representing the four seasons — perhaps a snowy winter landscape, colourful autumn leaves, blossoming spring trees, and a sunny summer scene. Each season has its own distinctive character and beauty.

Spring brings longer days and warmer temperatures after the cold winter. Trees blossom, flowers bloom, and everything feels fresh and new. Typical spring activities include gardening, hiking, cycling, and spring cleaning. Summer is the warmest season with long days, sunshine, and school holidays. People swim, travel, have barbecues, and enjoy outdoor festivals. Autumn, or fall, is characterised by shortening days, falling leaves in shades of red and gold, and cooling temperatures. It's mushroom-picking season, harvest time, and the beginning of the school year. Winter brings snow, freezing temperatures, and early darkness. Activities include skiing, snowboarding, ice skating, and of course Christmas celebrations.

My favourite season is summer. I love the freedom it brings — long days, warm weather, travelling, and not having to worry about school. There's an energy in summer that makes everything feel possible. However, I do appreciate the beauty of autumn too — there's something cosy and atmospheric about golden leaves and warm drinks.

Seasons are very different around the world. In tropical countries near the equator, there is no winter — just wet and dry seasons. In the Arctic and Antarctic, there can be months of continuous darkness or continuous daylight. Countries like Australia experience seasons in reverse — Christmas there falls in summer. I can imagine living somewhere warmer, though I think I'd miss the distinct four seasons we have in Slovakia — each one marking a different chapter of the year.`
      },
      {
        id: 2, type: "discussion", title: "Task 2 – Discussion Topic", topic: "Food and Eating Habits",
        bullets: [
          "Talk about meals of the day. What is your favourite meal and dishes connected with each?",
          "How can a healthy diet be described? What are the 3 white killers?",
          "Do you prefer eating home/eating out?",
          "Compare eating habits in Slovakia and other countries of the world.",
          "Explain the following: vegetarians, vegans, eating disorders."
        ],
        modelAnswer: `The three main meals of the day are breakfast, lunch, and dinner, with snacks in between. Breakfast should ideally be nutritious — something like porridge, eggs, wholegrain bread with cheese, or yoghurt with fruit. Lunch in Slovakia is traditionally the main meal — a warm, cooked meal, often soup followed by a main course. Dinner is usually lighter — bread, cold cuts, cheese, or salad. My favourite meal is probably Sunday lunch at home — something like roast pork with dumplings and sauerkraut, which is a classic Slovak dish.

A healthy diet is balanced — it contains the right proportions of carbohydrates, proteins, healthy fats, vitamins, and minerals. It should include plenty of fruits and vegetables, whole grains, lean proteins, and sufficient water. The 3 white killers are white sugar, white salt, and white flour. All three, when consumed in excess, can contribute to serious health problems: sugar leads to obesity and diabetes, excessive salt raises blood pressure, and refined white flour lacks nutrients and can contribute to metabolic issues.

I personally prefer eating at home most of the time — it's healthier, cheaper, and you know exactly what's in your food. But eating out occasionally is a great social experience and allows you to try different cuisines.

Slovak eating habits are quite traditional — heavy on meat, dumplings, potato dishes, and dairy products. We eat a lot of pork, cabbage, and smoked meats. By contrast, Mediterranean countries eat more fish, olive oil, fresh vegetables, and legumes, which is considered one of the healthiest diets in the world. Asian cuisines often feature rice, noodles, vegetables, and lots of spices.

Vegetarians don't eat meat or fish but do eat dairy and eggs. Vegans exclude all animal products including dairy, eggs, and honey. Eating disorders such as anorexia (severely restricting food intake), bulimia (bingeing and purging), and binge eating disorder are serious psychological illnesses that require professional treatment.`
      },
      {
        id: 3, type: "roleplay", title: "Task 3 – Role-play", topic: "Technology",
        bullets: [
          "You have a very anti-technology friend who uses a simple mobile but hates social media and thinks they kill real relationships.",
          "He doesn't use the internet either. Try to persuade him not to be ignorant of modern technology.",
          "Explain what its pros are and how it can help you in your daily life."
        ],
        modelAnswer: `**You:** Honestly, Martin, I admire that you're so independent from technology, but I think you're missing out on some genuinely useful things.

**Martin:** I just think technology is ruining real human connection. Everyone's staring at their phones instead of talking.

**You:** I get that — and I agree that people overdo it. But technology itself isn't the problem, it's how people use it. Think about what the internet has actually given us: instant access to information, the ability to learn anything for free, staying connected with people who live far away.

**Martin:** But social media is just people showing off and comparing themselves.

**You:** Some platforms are like that, for sure. But social media is also how communities organise, how activists spread awareness, how people find support groups for health issues, how local events get advertised. You can choose what you engage with and who you follow.

**Martin:** I prefer real conversations face to face.

**You:** Me too — and technology doesn't replace that. But what about when a friend moves abroad? Video calling means you can actually see their face and maintain that friendship. What about emergencies? Being able to call for help or navigate using maps could literally save your life.

**Martin:** I suppose maps are useful...

**You:** Exactly. And think about practical things: booking train tickets online, checking opening hours, looking up a recipe, translating words when you travel. These make everyday life genuinely easier. You don't have to be addicted to social media to benefit from technology.

**Martin:** Maybe I'm a bit extreme about it.

**You:** Just try using a few basic things — maybe start with Google Maps and YouTube for tutorials. I think you'll quickly see the value.`
      }
    ]
  },
  {
    id: 9,
    tasks: [
      {
        id: 1, type: "visual", title: "Task 1 – Visual Input", topic: "The USA",
        bullets: [
          "Talk about USA — include a few facts about history, geography, stereotypes and people.",
          "Suggest some sights you can see there.",
          "Mention some traditions and celebrations typical of this country."
        ],
        modelAnswer: `Looking at the pictures, I can see iconic American symbols — perhaps the Statue of Liberty, McDonald's golden arches, a map of the USA, Barack Obama, and possibly Neil Armstrong or other famous Americans. These images capture different dimensions of American identity: its history, culture, fast food culture, diversity, and achievements.

The United States of America is the world's third largest country by both area and population, with over 330 million inhabitants. It's located in North America, bordered by Canada to the north and Mexico to the south. The USA has a rich and complex history — from the arrival of European colonists, through the Declaration of Independence in 1776, the Civil War over slavery in the 1860s, up to becoming the world's leading superpower in the 20th century.

Some stereotypes associated with Americans include being loud, friendly, patriotic, and fond of large portions of food. Americans are also stereotyped as being overly optimistic — the "American Dream" idea that anyone can succeed through hard work. Of course, these are generalisations and Americans are as diverse as any population.

Famous sights include the Statue of Liberty in New York, the Grand Canyon in Arizona, the Golden Gate Bridge in San Francisco, Yellowstone National Park, the White House in Washington D.C., and Niagara Falls.

American traditions and celebrations are numerous. Thanksgiving in November is perhaps the most distinctly American — families gather to share a meal and express gratitude. Independence Day on July 4th is celebrated with fireworks and barbecues. Halloween on October 31st is enormously popular with costumes and trick-or-treating. Christmas and New Year are also widely celebrated across the country.`
      },
      {
        id: 2, type: "discussion", title: "Task 2 – Discussion Topic", topic: "Multicultural Society",
        bullets: [
          "What is typical for a multicultural society?",
          "Describe some of the complications (job possibilities, housing, religion, education of kids, food) that immigrants can experience if they want to integrate into a new society.",
          "What might influence you to leave Slovakia, and which country would you choose as your new home?",
          "What is your attitude to foreigners? Are there any forms of racism and xenophobia in Slovakia?",
          "Mention some people from history who fought for the rights of people."
        ],
        modelAnswer: `A multicultural society is one where people of different ethnic backgrounds, religions, languages, and cultures live together. Countries like Germany, Canada, and the UK are classic examples. Such societies are typically characterised by diversity in food, music, clothing, religious practices, and languages. They tend to be more innovative and creative because different perspectives challenge each other. However, they also require tolerance, mutual respect, and effective policies for integration.

Immigrants often face significant challenges when settling in a new country. Finding employment can be difficult due to language barriers or the non-recognition of foreign qualifications. Housing is often expensive and discriminatory landlords can be a problem. Children may struggle in school if they don't speak the language. Religious differences can lead to misunderstandings. Food from their home culture might be unavailable or expensive. Despite these challenges, many immigrants contribute enormously to their new countries — culturally, economically, and socially.

If I were to leave Slovakia, the country I'd choose would probably be Germany, the Netherlands, or Canada. These countries offer good job opportunities in my field of interest, high quality of life, well-functioning public services, and a relatively welcoming attitude toward immigrants.

My own attitude toward foreigners is positive. I believe cultural exchange enriches society. Unfortunately, xenophobia and racism do exist in Slovakia — there are prejudices particularly against the Roma community and, in recent years, hostility toward refugees and migrants from outside Europe. I think education and greater exposure to different cultures is the best way to combat these attitudes.

Historical figures who fought for human rights include Martin Luther King Jr., who led the civil rights movement for African Americans in the 1960s; Rosa Parks, who famously refused to give up her seat on a segregated bus; Abraham Lincoln, who abolished slavery in the United States; and Czechoslovakia's Alexander Dubček, who fought for a more humane form of socialism.`
      },
      {
        id: 3, type: "roleplay", title: "Task 3 – Role-play", topic: "A Family Talk",
        bullets: [
          "You and your friend have just bought really cheap flight tickets to London.",
          "You are just 18 and none of you have travelled alone before.",
          "Your parents are worried and are not willing to let you go.",
          "Convince them how mature and reliable you are, they can trust you and so there is no need to worry."
        ],
        modelAnswer: `**You:** Mum, Dad — I have really exciting news. My friend and I found incredibly cheap flights to London — return tickets for only 60 euros each. We'd love to go for five days over the Easter break.

**Parent:** Absolutely not. You've never travelled alone before, and London is a huge city.

**You:** I understand your concern, and I want you to know I've thought about this carefully. I'm 18 — legally an adult. I know that doesn't automatically mean I'm experienced, but I am responsible. You know I always come home on time, I manage my money well, and I keep you informed about where I am.

**Parent:** But anything could go wrong. What if you get lost or something happens?

**You:** We've already planned everything. We'll book a hostel in a safe, central neighbourhood before we go. I'll have my phone with a European data plan, so we'll always have maps and communication. I'll send you our address and daily itinerary. We'll share our location with you at all times.

**Parent:** I still worry about two young people alone in a foreign city.

**You:** Millions of young people do this every year. London is actually one of the safest and most tourist-friendly cities in Europe. Everything is in English, which I speak well. There's excellent public transport. And my friend is equally responsible.

**Parent:** What's your budget? How will you manage money?

**You:** I've already budgeted everything — flights, hostel, daily spending money. I'll take a travel card and keep some emergency cash separately. I'll also save the number of the Slovak embassy.

**Parent:** I suppose you have thought about it...

**You:** Please trust me. I promise to check in every evening. This would mean the world to me — and it's a chance to grow and become more independent.`
      }
    ]
  },
  {
    id: 10,
    tasks: [
      {
        id: 1, type: "visual", title: "Task 1 – Visual Input", topic: "Media",
        bullets: [
          "Talk about different television programmes in the pictures. Who might watch them?",
          "Which television programmes do your family members like watching?",
          "Is TV still a relevant type of media for you?",
          "What is the main reason for the media — to influence, inform, or entertain?"
        ],
        modelAnswer: `Looking at the pictures, I can see images representing different types of media content — perhaps a cartoon like Tom and Jerry, a breaking news broadcast, a wildlife documentary, a cooking show, and maybe a sport event. Each of these appeals to a very different audience.

Cartoons like Tom and Jerry attract children and nostalgic adults. Breaking news appeals to people who want to stay informed about current events — typically adults. Wildlife documentaries are popular with nature lovers and curious minds of all ages. Cooking programmes have become enormously popular with food enthusiasts. Sports broadcasts draw in passionate fans, mostly during big events like the World Cup or Olympics.

In my family, viewing habits vary. My parents tend to watch news programmes and occasionally Slovak drama series. My grandparents enjoy nature documentaries and older Slovak films. I personally don't watch much traditional TV — I prefer streaming platforms where I can choose what to watch and when.

Is TV still relevant? For me personally, less so. I get most of my information and entertainment online. However, for older generations, TV remains the primary source of news and entertainment. Live events like sports or major news stories still draw large TV audiences. Television is not dead — it's just evolving.

As for the main purpose of media — I think it's all three, but ideally in this order: first to inform, then to educate, and then to entertain. Responsible media should keep the public accurately informed about what's happening in the world, hold power to account, and provide quality entertainment. Unfortunately, the line between information and entertainment has blurred significantly, and many media outlets prioritise sensational stories that get clicks over balanced, accurate reporting.`
      },
      {
        id: 2, type: "discussion", title: "Task 2 – Discussion Topic", topic: "Fashion",
        bullets: [
          "Talk about fashion in the past and now.",
          "Discuss the types of clothes according to different seasons; clothes and accessories for different occasions.",
          "Describe your fashion style. Where do you get your clothes from?",
          "Do you accept unisex clothes?",
          "Would you like to wear a school uniform at school? Describe pros and cons."
        ],
        modelAnswer: `Fashion has changed enormously throughout history. In the Middle Ages, clothing indicated social class — nobles wore rich fabrics and bright colours while peasants wore simple, rough cloth. The 19th century saw women in corsets and elaborate gowns. The 20th century brought rapid change: the 1920s flapper dresses, the 1950s elegant femininity, the rebellious fashion of the 1960s and 70s, the bold colours of the 80s, the grunge of the 90s. Today, fashion is more eclectic and individual than ever — there is no single dominant trend, and people mix styles freely.

Different occasions call for different clothing. In winter we wear warm coats, boots, scarves, and knitwear. Summer calls for light fabrics, shorts, dresses, and sandals. For formal occasions — job interviews, weddings, presentations — smart attire is expected: suits, dresses, or smart trousers and blouses. Sports require functional, breathable clothing. Casual everyday wear tends to be comfortable — jeans, t-shirts, trainers.

My personal style is casual and comfortable. I prefer well-fitted jeans, simple t-shirts or hoodies, and clean trainers. I don't follow trends closely — I buy what I like and what suits me. I mostly shop in affordable chain stores and sometimes second-hand shops, which I appreciate for both the price and sustainability aspect.

Unisex clothing — I have no problem with it at all. If something looks good and feels comfortable, I don't think it matters whether it's traditionally "for men" or "for women." Fashion norms are social constructs that change over time anyway.

School uniforms — I can see both sides. Pros: they remove social pressure to wear expensive brands, create a sense of equality, and reduce morning decision-making. Cons: they suppress individual expression, can be uncomfortable, and don't reflect the real world. On balance, I think I'd prefer not to have a uniform — I value being able to express myself through my clothes.`
      },
      {
        id: 3, type: "roleplay", title: "Task 3 – Role-play", topic: "At the Doctors",
        bullets: [
          "You're a doctor and a patient is coming to your office for a yearly check-up.",
          "He has high blood pressure, high level of cholesterol, is obese, etc.",
          "It's obvious that the parents' problems result from an unhealthy lifestyle.",
          "Convince him to change his way of living or he might die."
        ],
        modelAnswer: `**Doctor (you):** Good morning, Mr. Novák. Please take a seat. I've just reviewed your test results and I have to be very honest with you — I'm quite concerned.

**Patient:** Is it serious?

**Doctor:** I'm afraid it is. Your blood pressure is significantly elevated — 160 over 100. Your LDL cholesterol level is far above the healthy range. And your BMI puts you in the obese category. Together, these factors put you at a very high risk of a heart attack or stroke.

**Patient:** My father had high blood pressure too, it might just be genetic.

**Doctor:** Genetics can play a role, that's true. But your lifestyle is making things dramatically worse. I need to ask you some honest questions. How often do you exercise?

**Patient:** Not much. I sit at a desk all day.

**Doctor:** And your diet?

**Patient:** I eat quite a lot of red meat, fried food, I don't really cook much at home...

**Doctor:** That's what I suspected. Mr. Novák, I want you to understand this clearly: if you continue living this way, the risk of a fatal cardiac event within the next five to ten years is very real. But the good news is — this is largely reversible through lifestyle changes.

**Patient:** What do I need to do?

**Doctor:** First, dietary changes — significantly reduce saturated fats, cut out processed food, eat more vegetables, fruits, and whole grains. Second, exercise — start with 30 minutes of brisk walking daily. Third, reduce alcohol and stop smoking if you smoke. I'll also prescribe medication to manage your blood pressure and cholesterol for now, but medication alone is not enough.

**Patient:** That sounds like a lot of changes.

**Doctor:** It is. But consider the alternative — leaving your family too early. Small, consistent changes now will make an enormous difference. I'd like to see you again in six weeks. Deal?`
      }
    ]
  },
  {
    id: 11,
    tasks: [
      {
        id: 1, type: "visual", title: "Task 1 – Visual Input", topic: "Family",
        bullets: [
          "What types of families are presented in the pictures? (multicultural, extended, one parent family)",
          "Briefly talk about your family and family members.",
          "What are your future plans concerning home and family?"
        ],
        modelAnswer: `Looking at the pictures, I can see different types of families — perhaps a multicultural family with parents and children of different ethnic backgrounds, a large extended family including grandparents, aunts, and uncles gathered together, and possibly a single-parent family with one parent and their child. These images remind us how diverse the concept of family is in today's world.

My own family is a traditional nuclear family — my parents and my sibling. We're close and spend time together, especially during weekends and holidays. My grandparents live nearby, and we visit them regularly. Family is very important in Slovak culture — we tend to maintain strong family bonds across generations. My parents are both working, and they've always emphasised the values of education, hard work, and looking out for each other.

As for my future plans regarding family — I think I'd like to build my own family one day, but there's no rush. First, I want to complete my education, establish myself professionally, and become financially independent. I'd like to have my own home — ideally a house with a garden — and eventually a family of my own, perhaps with two children. I want to be a present, involved parent who spends quality time with their children. I'd also want to maintain a close relationship with my own parents as they get older — I think caring for elderly parents is both a responsibility and a privilege.`
      },
      {
        id: 2, type: "discussion", title: "Task 2 – Discussion Topic", topic: "Sport",
        bullets: [
          "Divide sports into different categories.",
          "Present a sport you are interested in (place, equipment, rules, competitions, names).",
          "How do sports help you to be physically and mentally healthy?",
          "Talk about the Olympic Games — now and in the past, symbols, motto, etc.",
          "Sport is also connected with negative issues — discuss some of them."
        ],
        modelAnswer: `Sports can be divided into several categories. Individual sports are done alone — running, swimming, tennis, cycling. Team sports require cooperation — football, basketball, volleyball, hockey. Water sports include swimming, rowing, water polo. Winter sports include skiing, ice hockey, figure skating. Combat sports include boxing, wrestling, judo. Extreme sports include skateboarding, base jumping, surfing. We can also divide sports into indoor and outdoor, or amateur and professional.

I'm personally interested in cycling. You need a bicycle — ideally a well-maintained road or mountain bike — as well as a helmet, cycling gloves, and appropriate clothing. Cyclists ride on roads, cycle paths, or mountain trails. In competitive cycling, the most famous event is the Tour de France — a three-week stage race through France. Other famous competitions include the Giro d'Italia and Vuelta a España. Famous cyclists include Eddy Merckx, Lance Armstrong, and Peter Sagan from Slovakia.

Sport benefits us both physically and mentally. Physically, regular sport improves cardiovascular health, builds muscle, maintains healthy weight, strengthens bones, and boosts immunity. Mentally, exercise releases endorphins — natural mood-lifters — reduces stress, anxiety, and depression, improves sleep quality, and builds confidence and discipline.

The Olympic Games began in ancient Greece around 776 BC as a religious festival. The modern Olympics were revived by Pierre de Coubertin in 1896 in Athens. Today, the Summer and Winter Games are held every four years, alternating every two years. The Olympic symbol is five interlocking rings representing the five continents. The motto is "Citius, Altius, Fortius" — Faster, Higher, Stronger. Recent hosts include Tokyo 2021 and Paris 2024.

Negative aspects of sport include doping — using performance-enhancing drugs, which is cheating and dangerous to health. Corruption in sporting organisations is another issue. Match-fixing in football is a serious problem. The enormous pressure on professional athletes leads to burnout, mental health issues, and even eating disorders in sports that value leanness. Hooliganism in football also brings violence and social problems.`
      },
      {
        id: 3, type: "roleplay", title: "Task 3 – Role-play", topic: "Being Eco-friendly",
        bullets: [
          "You are a very ecological person who believes in doing everything to help the environment.",
          "However, your friend is totally against recycling, reusing and stuff like that, because nothing will help the environment — it's just the way how to charge you more money for energy and eco-friendly appliances.",
          "Give arguments to make your friend recycle and reuse."
        ],
        modelAnswer: `**You:** Hey, I noticed you just threw all your bottles into the general waste bin again. You could recycle those, you know.

**Friend:** Don't start. Recycling is a scam. The companies just use it to charge more for "eco" products while they're the ones causing all the pollution anyway.

**You:** I understand the scepticism — corporations do need to be held accountable. But individual actions do matter too. Recycling one aluminium can saves enough energy to run a TV for three hours. That's not nothing.

**Friend:** Come on, my one can won't save the planet.

**You:** No single action saves the planet alone — but seven billion people doing nothing certainly destroys it. The principle is cumulative. When millions of people recycle, it genuinely reduces the amount of raw materials extracted, cuts industrial energy use, and reduces landfill pollution.

**Friend:** It's too complicated. I'd have to sort everything separately.

**You:** It really isn't that hard once it becomes habit — just five bins: plastic, paper, glass, metal, and general waste. You get used to it within a week. And in Slovakia, many municipalities actually reward households for proper sorting.

**Friend:** What about reusing? That really does seem pointless.

**You:** Think about it economically: reusing a bag instead of buying a new one saves you money. Buying second-hand clothes — which is basically reuse — is much cheaper than buying new. Fixing things instead of replacing them saves money and reduces waste. It's actually in your own financial interest.

**Friend:** Okay, I hadn't thought of it that way.

**You:** The environment doesn't need you to be perfect. Just small, consistent improvements. Can we start with just separating plastic and paper?

**Friend:** Fine. I'll try it.`
      }
    ]
  },
  {
    id: 12,
    tasks: [
      {
        id: 1, type: "visual", title: "Task 1 – Visual Input", topic: "Natural Disasters",
        bullets: [
          "Describe the pictures and what caused these situations.",
          "Name some past or recent catastrophes and their consequences.",
          "Does Slovakia suffer from any natural disorders? How can we help people in need?",
          "Vocabulary: volcano eruption, tornado, forest fire, tsunami waves, earthquake."
        ],
        modelAnswer: `Looking at these pictures, I can see images of natural disasters — perhaps a devastating flood, burning buildings from a forest fire, collapsed structures from an earthquake, or the aftermath of a tornado. These events are caused by powerful natural forces that humans cannot prevent.

A **volcano eruption** occurs when magma from beneath the Earth's surface forces its way out, releasing lava, ash, and gases. A **tornado** is a violently rotating column of air that extends from a thunderstorm to the ground, destroying everything in its path. **Forest fires** can start naturally from lightning or be caused by human carelessness during dry periods. **Tsunami waves** are enormous ocean waves caused by underwater earthquakes or volcanic eruptions — the 2004 Indian Ocean tsunami killed over 200,000 people. **Earthquakes** are caused by the movement of tectonic plates and can collapse entire cities.

Notable recent catastrophes include the 2010 Haiti earthquake, which killed over 300,000 people and left the country devastated for years. The 2011 Tōhoku earthquake and tsunami in Japan also caused the Fukushima nuclear disaster. In 2023, earthquakes in Turkey and Syria killed over 50,000 people.

Slovakia doesn't typically experience extreme natural disasters, but we do have occasional floods — particularly along the Danube and other rivers. Heavy snowfall can cause avalanches in mountain areas, and storms can trigger landslides.

To help people in need after disasters, we can donate money to reliable humanitarian organisations like the Red Cross, volunteer in relief efforts, donate food and supplies, and support preparedness programmes in vulnerable communities. Internationally, Slovakia participates in EU civil protection mechanisms.`
      },
      {
        id: 2, type: "discussion", title: "Task 2 – Discussion Topic", topic: "Shopping and Services",
        bullets: [
          "Compare between shopping facilities. Talk about positives and negatives of shopping online and in the shopping centre.",
          "What are your shopping habits? What do you spend money on?",
          "Discuss the quality of services in our region, such as at a post office, bank, travel agency.",
          "Which are the traditional and modern ways of paying?"
        ],
        modelAnswer: `Shopping has transformed enormously in recent decades. We now have three main options: shopping in local smaller shops, in large shopping centres, or online.

Shopping centres offer a wide variety under one roof, the ability to try on clothes before buying, immediate ownership, and a social experience — you can go with friends and have lunch there too. The negatives include traffic, crowding, and the temptation to overspend.

Online shopping is incredibly convenient — available 24/7, you can compare prices instantly, deliver to your door, and often find better prices. However, you can't touch or try products, there are delivery waits, and returns can be complicated. There's also growing concern about the environmental impact of packaging waste and delivery emissions.

My personal shopping habits are fairly modest. I mainly spend money on food, clothes when needed, books, and occasionally entertainment. I use online shopping mainly for electronics or specific items that are cheaper online, and I prefer in-person shopping for clothes and food.

Regarding services in our region — post office services are generally reliable but can have long queues. Banking has improved significantly with online and mobile banking, though in-person service quality varies. Travel agencies have had to adapt significantly since people increasingly book holidays independently online.

Traditional ways of paying include cash — banknotes and coins — which is still widely used in Slovakia, especially among older generations. Modern methods include debit and credit cards, contactless payment, mobile payment via phone or smartwatch apps like Apple Pay or Google Pay, and internet banking transfers. Cryptocurrency is emerging but not yet mainstream. Contactless and mobile payments have become enormously popular, especially since the pandemic.`
      },
      {
        id: 3, type: "roleplay", title: "Task 3 – Role-play", topic: "Let's Go! (Think what you like doing)",
        bullets: [
          "You, a very sporty man/woman, have a very lazy and comfortable friend always sitting in front of their computer.",
          "Persuade him/her to join you in 'your' sport.",
          "Give him/her some reasons to make him/her follow your example."
        ],
        modelAnswer: `**You:** Hey Lukáš, seriously — another evening in front of the computer? Don't you ever want to get outside?

**Lukáš:** I'm comfortable here. I'm not a sports person.

**You:** Nobody is born a sports person — you become one. Look, I'm not asking you to run a marathon. I just want you to try cycling with me on Sunday. Just a casual ride along the river — completely flat, about 15 kilometres.

**Lukáš:** That sounds exhausting.

**You:** Fifteen kilometres at a relaxed pace takes about an hour. You cycle, the scenery passes by, you breathe fresh air — it's actually very meditative. And when you're done, you feel amazing. Trust me.

**Lukáš:** I'd be embarrassed if I can't keep up.

**You:** We'll go at your pace, completely. I'll ride beside you the whole time. No competition, no judgment. And honestly? You sit at a screen for six or seven hours a day. Your back and eyes must be suffering. Regular exercise helps with both — it reduces back pain, improves posture, and relieves eye strain from screen fatigue.

**Lukáš:** I know I should be more active, but I never seem to start.

**You:** Starting is the hardest part — you just need one good experience to want to do it again. Also, exercise improves mental sharpness. You'd probably be better at gaming after regular physical activity — better focus, less fatigue.

**Lukáš:** Now you're speaking my language...

**You:** Sunday morning, 10 o'clock. I'll bring a spare water bottle. Just wear comfortable shoes. What do you say?

**Lukáš:** Alright, one time. But if I die, I'm blaming you.`
      }
    ]
  },
  {
    id: 13,
    tasks: [
      {
        id: 1, type: "visual", title: "Task 1 – Visual Input", topic: "Waste and Environment",
        bullets: [
          "Using the pictures describe different kinds of waste people produce and suggest how they should reduce it.",
          "What does the symbol in the last picture mean? Where could you find it?",
          "Does your family separate waste? What else do you do to be eco-friendly?"
        ],
        modelAnswer: `Looking at the pictures, I can see different types of waste that modern society produces — plastic bottles and packaging, paper waste, metal cans, glass, food waste, hazardous materials, and electronic waste. The sheer volume and variety of waste we generate is one of the most pressing environmental problems today.

Plastic waste is particularly problematic because it takes hundreds of years to decompose and often ends up in oceans, harming marine life. We can reduce it by refusing single-use plastics, using reusable bags, bottles, and containers. Paper waste can be reduced by going digital where possible and recycling all paper and cardboard. Food waste — one of the biggest categories — can be reduced through better meal planning, proper food storage, and composting. Electronic waste (e-waste) from old phones and computers contains toxic materials and should be disposed of at designated collection points.

The recycling symbol — three arrows forming a triangle — means a material is recyclable and encourages consumers to recycle it properly. You'd find it on plastic bottles, cardboard packaging, tins, and most recyclable consumer products. The hazardous material symbol warns of dangerous substances — found on chemical cleaners, batteries, and electronics.

In my family, we do separate waste — we have bins for plastic, paper, glass, and mixed waste. We try to avoid unnecessary packaging when shopping, use reusable bags, and take used batteries and medicines to designated disposal points. I think we could do better — composting food scraps, for example, is something I'd like us to start doing.`
      },
      {
        id: 2, type: "discussion", title: "Task 2 – Discussion Topic", topic: "Countries, Towns and Places",
        bullets: [
          "Talk about the most important places in your life (birth place, study place, place where you spend your weekends or holidays).",
          "Which places in a country (vidiek) would be suitable tourist attractions for various types of travellers?",
          "What are the places in a town suitable for relaxation and various social activities?",
          "Describe a place where you would like to spend the rest of your life."
        ],
        modelAnswer: `The most important places in my life are the town where I grew up — which is where my home, school, and closest friends are. School itself has been central to my life for many years — it's where I've learned, formed friendships, and spent a significant portion of my waking hours. For weekends, I often head to the surrounding nature — the forests and hills near Čadca are great for walks and relaxation. For holidays, I've enjoyed visiting the Tatra mountains, which are stunningly beautiful.

When it comes to tourist attractions in the Slovak countryside, it depends on the type of traveller. Nature lovers would head to the Tatras, Slovak Paradise, Malá Fatra, or the Kysucká vrchovina region for hiking, cycling, and skiing. History and culture enthusiasts would visit Bojnice Castle, Spiš Castle — one of the largest in Europe — and the historic centres of Banská Štiavnica or Bardejov, which are UNESCO heritage sites. Spa lovers can visit Piešťany or Rajecké Teplice. Wine tourists go to the south — around Nitra and the Small Carpathians.

In a town, places for relaxation and social activities include parks and riverside walks, cafés and restaurants, cinemas and theatres, sports centres and swimming pools, libraries, galleries, and music venues. Community centres and markets also serve as important social gathering points.

The place I'd like to spend the rest of my life would be a small, beautiful town or village with access to nature — mountains or a lake — but not too far from a city. Somewhere with a strong community, clean air, good schools for future children, and enough cultural and professional life to stay stimulated. I'm still exploring what that place might be — perhaps somewhere in Slovakia or elsewhere in Central Europe.`
      },
      {
        id: 3, type: "roleplay", title: "Task 3 – Role-play", topic: "In a Restaurant",
        bullets: [
          "Your very good friend has just opened a new restaurant. You pay him/her a few visits, order meals, drinks, observe waiters' behaviour, furniture, atmosphere.",
          "However, you are not completely satisfied with everything.",
          "Talk to your friend politely and give some good suggestions how to improve the quality of the newly opened restaurant."
        ],
        modelAnswer: `**You:** Jana, congratulations again on the opening — it's really exciting. I've been coming a few times now and I wanted to have an honest chat with you as a friend, if that's okay?

**Jana:** Of course! I need real feedback, not just people being polite.

**You:** Well, the food is genuinely excellent — the portions are generous, the flavours are great. I especially loved the beef stew. So please know that the kitchen is doing a fantastic job.

**Jana:** That's good to hear. But...?

**You:** There are a few things that could be improved. The service is a bit slow — on my last visit, I waited almost 20 minutes before anyone came to take my order, and the restaurant was only half full. I think the waiting staff might need a bit more training or there simply needs to be one more person on the floor during busy hours.

**Jana:** I've heard that from one other person too. I'll address it.

**You:** Also, the lighting is quite harsh — bright fluorescent lights don't really create a warm, inviting atmosphere, especially for an evening restaurant. Some warmer, dimmer lighting would make a huge difference to the ambience.

**Jana:** That's interesting — I thought bright was better so people can see the food.

**You:** A bit of both works — focused lighting over tables but softer overall ambience. And one small thing: the menu descriptions are quite brief. Telling customers what's in each dish — whether it contains allergens, what accompaniments come with it — would be really helpful and shows attention to detail.

**Jana:** These are all really constructive points. Thank you for being honest rather than just saying it's wonderful.

**You:** I want it to succeed — and I think with a few tweaks it really will. The bones of a great restaurant are already there.`
      }
    ]
  },
  {
    id: 14,
    tasks: [
      {
        id: 1, type: "visual", title: "Task 1 – Visual Input", topic: "Celebrations",
        bullets: [
          "Talk about different celebrations in the pictures. Do you celebrate them? How?",
          "What's your favourite holiday to celebrate?"
        ],
        modelAnswer: `Looking at the pictures, I can see various celebrations — perhaps Christmas with a decorated tree, Halloween with pumpkins and costumes, a New Year's Eve fireworks display, Easter eggs, and maybe a birthday or wedding celebration. These represent both international holidays and more personal celebrations.

Christmas is celebrated in Slovakia on December 24th — Christmas Eve — when families gather for a traditional meal including fried carp, potato salad, and cabbage soup. We exchange gifts after dinner, sing carols, and attend midnight Mass. It's my favourite time of year because of the warm family atmosphere and the beautiful decorations.

Easter is another important celebration. In Slovakia, Easter Monday has the unique tradition of boys using willow whips and pouring water on girls — symbolising health and fertility. Painted Easter eggs are given as gifts.

Halloween, on October 31st, has become increasingly popular in Slovakia, especially among young people — dressing up and going to parties, though it's not a traditional Slovak holiday.

New Year's Eve is celebrated with fireworks, parties, and the tradition of watching the midnight countdown together.

Birthdays and name days are personally significant — in Slovakia, name days are taken quite seriously, and it's common to congratulate someone on their name day almost as much as their birthday.

My favourite holiday is definitely Christmas — the combination of family, tradition, special food, music, and the atmosphere of winter and candles makes it magical. It's the one time of year when everything slows down and what matters most is being together.`
      },
      {
        id: 2, type: "discussion", title: "Task 2 – Discussion Topic", topic: "Art and Culture",
        bullets: [
          "What are the main art forms?",
          "What role does the art play in your life?",
          "Name some world-known music, film and theatre festivals. Talk about well-known personalities of culture life in your life.",
          "What culture opportunities are there in your town or region?"
        ],
        modelAnswer: `The main art forms include visual arts — painting, sculpture, photography, and drawing — performing arts such as theatre, dance, opera, and cinema, literary arts including poetry and prose, music in all its genres, architecture, and more recently digital and street art. Each form communicates ideas and emotions through different mediums.

Art plays a meaningful role in my life, perhaps more indirectly than directly. Music is part of my everyday life — I listen to it when studying, commuting, or relaxing. I enjoy going to the cinema, and I appreciate good storytelling whether in films or books. I haven't been to many galleries or theatre performances, but when I have, I've always found them thought-provoking. Art, in whatever form, gives us a shared language for expressing things that are difficult to put into words.

Famous international festivals include the Cannes Film Festival in France — arguably the world's most prestigious film event. Edinburgh Fringe Festival in Scotland is the world's largest arts festival. Glastonbury in the UK is a legendary music festival. Vienna Opera Ball is a world-famous classical music event. Locally, Slovakia has the Bratislava Music Festival, the Pohoda music festival, and various folk festivals celebrating traditional culture.

Famous cultural personalities include film directors like Steven Spielberg and Alfred Hitchcock, composers like Beethoven and Mozart, writers like Shakespeare and Tolstoy, and from Slovakia — composer Ján Levoslav Bella, writer Ľudovít Štúr, or film director Juraj Jakubisko.

In the Kysuce region, cultural opportunities include the Kysucké múzeum, the Čadca cultural centre which hosts concerts and events, local theatre productions, folk festivals, and the Kysucká gallery. While it's not as rich as in larger cities, there are enough events for those who seek them out.`
      },
      {
        id: 3, type: "roleplay", title: "Task 3 – Role-play", topic: "An Exchange Student",
        bullets: [
          "Talk with your parents about the possibility of having an exchange programme student for a summer school term.",
          "Give all your pros to persuade your parents to agree to be a host family for your new schoolmate.",
          "Be prepared to answer your parents' questions."
        ],
        modelAnswer: `**You:** Mum, Dad — there's something I'd really like to discuss. Our school is looking for host families for an exchange student from France who would stay with us for six weeks over the summer. I think we should sign up.

**Parent:** Six weeks is a long time. That's a big commitment.

**You:** I know, and I've thought about it seriously. But think about the benefits. First, it would be an incredible opportunity for me to practise my English — or French — daily, in a real, natural way. Communicating with a peer my age in English every day would improve my language skills more than any classroom lesson could.

**Parent:** We'd have to make room and provide meals every day.

**You:** The school covers some of the costs — there's a small monthly allowance provided by the programme for hosting expenses. And as for room — the guest room is empty all summer anyway.

**Parent:** What if we don't get along with this person?

**You:** The programme matches families and students carefully based on interests and values. There's also a coordinator from the school who checks in regularly. If any serious issues arise, the school handles the situation.

**Parent:** What would this student actually do here all day?

**You:** There's a summer school programme during the day, so they'd be occupied. Evenings and weekends we'd show them around — the region, Slovak customs, traditional food. Honestly, it would be fun. We'd get a fresh perspective on our own home and culture through someone else's eyes.

**Parent:** That does sound quite nice actually. How do we apply?

**You:** I'll bring the forms from school tomorrow. Thank you so much!`
      }
    ]
  },
  {
    id: 15,
    tasks: [
      {
        id: 1, type: "visual", title: "Task 1 – Visual Input", topic: "Inventions in Science and Technology",
        bullets: [
          "What are the things in the pictures used for? How did people live without them in the past?",
          "Which of these devices cannot you imagine your life without?",
          "Vocabulary: washing machine, drying machine, electric bulb, mobile phone, car, microwave, PC, vacuum cleaner."
        ],
        modelAnswer: `Looking at the pictures, I can see a range of modern inventions that we rely on in everyday life: a washing machine, a light bulb, a mobile phone, a car, a microwave oven, a PC, and a vacuum cleaner.

Each of these devices has transformed daily life. Before the **washing machine**, laundry meant hours of physical scrubbing by hand or at a river — it was one of the most labour-intensive household chores, done mostly by women. The **electric light bulb**, invented by Thomas Edison, extended productive hours beyond sunset and fundamentally changed human civilisation. Before it, people relied on candles and oil lamps. The **mobile phone** has revolutionised communication — we are now reachable anywhere, anytime, and carry an entire computer in our pocket. The **car** transformed how people travel, making previously impossible distances accessible in hours. The **microwave** made reheating and preparing food dramatically faster. The **PC** changed work, education, and entertainment forever. The **vacuum cleaner** made home cleaning much faster and more effective.

If I had to choose the device I cannot imagine life without, it would be the mobile phone. Not just for communication, but for everything — navigation, photography, information, language learning, banking, music. It's essentially replaced many other devices.

People in the past managed without these things because they had different systems, habits, and expectations. Life was harder and more physically demanding, but people adapted. The key insight is that these inventions didn't just save time — they fundamentally changed what was possible in human life and society.`
      },
      {
        id: 2, type: "discussion", title: "Task 2 – Discussion Topic", topic: "Books and Literature",
        bullets: [
          "What are the most common reasons for reading books?",
          "What is your favourite author or genre of books?",
          "During your studies you come across a number of American and English writers — introduce them and talk about their works, genres and characters.",
          "What are the pros and cons of reading e-books?",
          "What do you think is the reason young people read less and how can we change the situation?"
        ],
        modelAnswer: `People read books for many reasons. The most common are entertainment and escapism — losing yourself in a good story is one of life's great pleasures. Others read to learn and gain knowledge, whether through non-fiction, biographies, or educational literature. Books build vocabulary, improve language skills, and stimulate imagination. Many people also read to broaden their perspective — to understand lives, cultures, and experiences different from their own. Books can also provide comfort, companionship, and even therapy.

My favourite genre is probably contemporary fiction or psychological thrillers — stories that are set in the real world but explore complex human emotions and moral dilemmas. I'm also interested in historical fiction. In terms of authors, I enjoy books that combine strong narrative with deeper meaning.

English and American literature is incredibly rich. William Shakespeare — perhaps the greatest writer in the English language — wrote tragedies like Hamlet and Macbeth, comedies, and 154 sonnets. Charles Dickens wrote about social injustice in Victorian England in novels like Oliver Twist and A Tale of Two Cities. Ernest Hemingway, American author, wrote The Old Man and the Sea and For Whom the Bell Tolls — known for his minimalist, masculine style. F. Scott Fitzgerald's The Great Gatsby portrays the American Dream and its illusions. George Orwell wrote 1984 and Animal Farm, both powerful political allegories still deeply relevant today.

E-books have clear advantages: they're lightweight, you can carry hundreds of books on one device, they're often cheaper, and you can adjust font size. The disadvantages are that reading on a screen causes more eye strain, you lose the tactile pleasure of a physical book, and battery dependence can be inconvenient.

Young people read less primarily due to competition from screens — social media, games, and video streaming offer faster, more immediately stimulating entertainment. To change this, we need to make reading more appealing from an early age — provide interesting, relevant books, create reading communities, connect books to films and shows young people already love, and model reading as an enjoyable activity rather than a chore.`
      },
      {
        id: 3, type: "roleplay", title: "Task 3 – Role-play", topic: "Hotel Accommodation",
        bullets: [
          "You are on a holiday abroad. The travel agency has arranged and organised your travel and accommodation.",
          "You have paid extra money for a room with a sea view, but you have got one with a playground view.",
          "What's more, there are some other problems with your room. Make a complaint to the receptionist, discuss the problems and ask them to fix it."
        ],
        modelAnswer: `**You:** Good evening. I'd like to speak with the manager on duty, please. I have some concerns about my room.

**Receptionist:** Of course, I'm the duty manager. How can I help?

**You:** Thank you. I checked into room 214 this morning. When I booked through the travel agency, I specifically paid a supplement for a sea view room — the confirmation clearly states "sea view." However, my room overlooks the children's playground, not the sea at all. That's not what I paid for.

**Receptionist:** I apologise for the confusion. Let me check the booking...

**You:** Please do. Beyond the view issue, there are several other problems. The air conditioning isn't working — it just blows warm air, which is quite uncomfortable in this heat. The bathroom tap drips continuously, which is both annoying and wasteful. And this morning I discovered that the safe in the wardrobe doesn't lock properly — the mechanism appears to be broken.

**Receptionist:** I see. Those are significant issues. I apologise sincerely.

**You:** I appreciate the apology. But I need solutions, not just apologies. Is there a sea view room available that I can be moved to? That's really my first priority.

**Receptionist:** Let me check availability right now... We do have room 318 available, which has a full sea view. I can move you there immediately and arrange for your luggage to be transferred.

**You:** That would be wonderful. And what about the extra I paid for the sea view room that I haven't been using since this morning?

**Receptionist:** I'll arrange a credit to your account for today. The new room will of course be at the sea view rate you originally booked.

**You:** Thank you. I appreciate you resolving this quickly. Can the move happen in the next 30 minutes?

**Receptionist:** Absolutely. I'll have the room ready and send a porter to assist you.`
      }
    ]
  }
];
