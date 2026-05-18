export interface PhraseCard {
  id: number;
  category: "visual" | "discussion" | "roleplay" | "connector";
  situation: string;   // front – kedy to použi
  phrase: string;      // back – samotná fráza
  example?: string;    // voliteľný príklad
}

export const phrases: PhraseCard[] = [
  // ── VISUAL INPUT ─────────────────────────────────────────────────────────
  { id: 1, category: "visual", situation: "Začni popis obrázku", phrase: "Looking at this picture / photo, I can see…", example: "Looking at this picture, I can see a group of students working together." },
  { id: 2, category: "visual", situation: "Čo obrázok zobrazuje", phrase: "The picture shows / depicts…", example: "The picture depicts everyday school life in the past." },
  { id: 3, category: "visual", situation: "Popis priestoru – popredie", phrase: "In the foreground there is / there are…", example: "In the foreground there is a young woman reading a book." },
  { id: 4, category: "visual", situation: "Popis priestoru – pozadie", phrase: "In the background I can see…", example: "In the background I can see a busy city street." },
  { id: 5, category: "visual", situation: "Keď nie si istý čo vidíš", phrase: "It appears that… / It seems as though…", example: "It appears that the people in the photo are enjoying themselves." },
  { id: 6, category: "visual", situation: "Porovnanie dvoch obrázkov", phrase: "Comparing the two pictures, I notice that…", example: "Comparing the two pictures, I notice that lifestyles have changed enormously." },
  { id: 7, category: "visual", situation: "Atmosféra obrázku", phrase: "The atmosphere / mood of the picture is…", example: "The atmosphere of the picture is warm and joyful." },
  { id: 8, category: "visual", situation: "Čo ťa obrázok privádza na myšlienku", phrase: "This picture makes me think of… / This reminds me of…", example: "This picture makes me think of my own childhood." },
  { id: 9, category: "visual", situation: "Odhadni vek / povolanie osoby", phrase: "He / she appears to be… / He looks as if he is…", example: "She appears to be in her mid-thirties and seems to be a professional." },
  { id: 10, category: "visual", situation: "Vyjadrenie celkového dojmu", phrase: "Overall, the picture gives the impression of…", example: "Overall, the picture gives the impression of a peaceful rural life." },
  { id: 11, category: "visual", situation: "Podobnosti na obrázkoch", phrase: "One thing both pictures have in common is…", example: "One thing both pictures have in common is the theme of family togetherness." },
  { id: 12, category: "visual", situation: "Rozdiely medzi obrázkami", phrase: "The main difference between the two pictures is…", example: "The main difference between the two pictures is the level of technology used." },
  { id: 13, category: "visual", situation: "Prepojenie obrázku na svoju skúsenosť", phrase: "This relates to my own experience because…", example: "This relates to my own experience because I also commute to school by bus." },
  { id: 14, category: "visual", situation: "Keď chceš špekulovať", phrase: "I would assume that… / I imagine that…", example: "I would assume that this photo was taken sometime in the 1980s." },
  { id: 15, category: "visual", situation: "Záver popisu", phrase: "To sum up what I see in the picture…", example: "To sum up what I see in the picture, it illustrates the contrast between old and new." },

  // ── DISCUSSION ───────────────────────────────────────────────────────────
  { id: 16, category: "discussion", situation: "Vyjadrenie názoru", phrase: "In my opinion / view… / I believe that…", example: "In my opinion, education is the most powerful tool we have." },
  { id: 17, category: "discussion", situation: "Silný názor", phrase: "I strongly believe / feel that…", example: "I strongly feel that every child deserves equal access to quality education." },
  { id: 18, category: "discussion", situation: "Osobný uhol pohľadu", phrase: "From my perspective… / As far as I'm concerned…", example: "From my perspective, social media has more negatives than positives for teenagers." },
  { id: 19, category: "discussion", situation: "Kontrast – na jednej strane", phrase: "On the one hand… on the other hand…", example: "On the one hand, technology saves time. On the other hand, it can be addictive." },
  { id: 20, category: "discussion", situation: "Všeobecná pravda", phrase: "It goes without saying that…", example: "It goes without saying that a healthy lifestyle improves quality of life." },
  { id: 21, category: "discussion", situation: "Odkaz na fakty alebo výskum", phrase: "Research suggests / shows that…", example: "Research suggests that regular exercise significantly reduces stress levels." },
  { id: 22, category: "discussion", situation: "Pridávanie ďalšieho bodu", phrase: "Not only… but also… / What is more…", example: "Not only does exercise improve health, but it also boosts mental wellbeing." },
  { id: 23, category: "discussion", situation: "Pripustenie opačného názoru", phrase: "I can see why some people think… however…", example: "I can see why some people prefer city life; however, villages have their charm." },
  { id: 24, category: "discussion", situation: "Súhlas s niekým", phrase: "I completely agree with that point. / That's a very valid point.", example: "I completely agree with that point — prevention is better than cure." },
  { id: 25, category: "discussion", situation: "Nesúhlas – zdvorilé", phrase: "I'm not entirely sure I agree with that. / I see it slightly differently.", example: "I'm not entirely sure I agree with that — the evidence suggests otherwise." },
  { id: 26, category: "discussion", situation: "Zvýraznenie bodu", phrase: "What I find particularly interesting / important is…", example: "What I find particularly interesting is the role of technology in modern families." },
  { id: 27, category: "discussion", situation: "Príklad na podporu názoru", phrase: "For instance… / A good example of this is…", example: "A good example of this is how Slovakia's population has embraced recycling." },
  { id: 28, category: "discussion", situation: "Záver diskusie", phrase: "To conclude / In conclusion… / All things considered…", example: "All things considered, I believe the positives outweigh the negatives." },
  { id: 29, category: "discussion", situation: "Navrhnúť riešenie", phrase: "One possible solution would be to… / I think we should…", example: "One possible solution would be to invest more in renewable energy." },
  { id: 30, category: "discussion", situation: "Keď potrebuješ čas na premýšľanie", phrase: "That's an interesting question. Let me think about that for a moment…", example: "That's an interesting question. Let me think about that for a moment before I answer." },
  { id: 31, category: "discussion", situation: "Zhrnutie dvoch strán", phrase: "There are arguments both for and against…", example: "There are arguments both for and against wearing school uniforms." },

  // ── ROLE-PLAY ────────────────────────────────────────────────────────────
  { id: 32, category: "roleplay", situation: "Začni sťažnosť", phrase: "I'm afraid I need to complain about… / I'd like to raise a concern about…", example: "I'm afraid I need to complain about the quality of the product I purchased." },
  { id: 33, category: "roleplay", situation: "Zdvorilá žiadosť", phrase: "I was wondering if you could… / Would it be possible to…?", example: "I was wondering if you could arrange a replacement as soon as possible." },
  { id: 34, category: "roleplay", situation: "Nesúhlas – zdvorilé", phrase: "I see your point, however… / I understand that, but…", example: "I see your point, however I feel that the current rules are too strict." },
  { id: 35, category: "roleplay", situation: "Návrh / riešenie", phrase: "I'd like to suggest that… / How about if we…?", example: "I'd like to suggest that we lower the music after midnight as a compromise." },
  { id: 36, category: "roleplay", situation: "Kompromis", phrase: "Let's try to find a compromise. / Could we meet each other halfway?", example: "Let's try to find a compromise — what if I moved to a sea-view room today?" },
  { id: 37, category: "roleplay", situation: "Presviedčanie", phrase: "I'm sure you'll agree that… / Surely you can see that…", example: "I'm sure you'll agree that this would benefit the entire community." },
  { id: 38, category: "roleplay", situation: "Začiatok role-play s cudzou osobou", phrase: "Good morning / afternoon. I'm here to discuss… / I'd like to talk to you about…", example: "Good morning. I'm here to discuss a complaint regarding my recent booking." },
  { id: 39, category: "roleplay", situation: "Vyjadriť frustráciu – zdvorilé", phrase: "I must say I'm rather disappointed with… / I'm not entirely satisfied with…", example: "I must say I'm rather disappointed with the level of service provided." },
  { id: 40, category: "roleplay", situation: "Poďakovanie za pomoc", phrase: "I really appreciate your understanding. / Thank you for resolving this so quickly.", example: "I really appreciate your understanding — this means a lot to me." },
  { id: 41, category: "roleplay", situation: "Keď si rodič a dieťa diskutujú", phrase: "I understand your concern, and I want you to know that…", example: "I understand your concern, and I want you to know that I've thought this through carefully." },
  { id: 42, category: "roleplay", situation: "Zdôraznenie dôležitosti", phrase: "This really matters to me because… / This is very important to me.", example: "This really matters to me because it's a once-in-a-lifetime opportunity." },
  { id: 43, category: "roleplay", situation: "Ponuka kompromisu", phrase: "As a compromise, what if…? / Perhaps we could agree that…?", example: "As a compromise, what if I paid half the subscription cost myself?" },
  { id: 44, category: "roleplay", situation: "Žiadosť o nápravu", phrase: "I would appreciate it if you could… / I'd be grateful if you could sort this out.", example: "I would appreciate it if you could provide a full refund as soon as possible." },
  { id: 45, category: "roleplay", situation: "Záver role-play", phrase: "I'm glad we could come to an agreement. / I'm happy we've sorted this out.", example: "I'm glad we could come to an agreement — thank you for your time." },

  // ── CONNECTORS & LINKERS ─────────────────────────────────────────────────
  { id: 46, category: "connector", situation: "Pridávanie informácie", phrase: "Furthermore / Moreover / In addition to this", example: "Furthermore, studies show that sleep deprivation affects academic performance." },
  { id: 47, category: "connector", situation: "Kontrast / napriek tomu", phrase: "Nevertheless / Nonetheless / However / Yet", example: "Nevertheless, I believe the advantages outweigh the disadvantages." },
  { id: 48, category: "connector", situation: "Hoci / aj keď", phrase: "Although / Even though / Despite the fact that", example: "Although the journey was long, the destination was worth it." },
  { id: 49, category: "connector", situation: "Dôsledok / výsledok", phrase: "As a result / Therefore / Consequently / Hence", example: "As a result, many young people feel isolated despite being digitally connected." },
  { id: 50, category: "connector", situation: "Príklad", phrase: "For instance / For example / Such as", example: "For instance, many Slovak families still celebrate traditional folk customs." },
  { id: 51, category: "connector", situation: "Na záver", phrase: "In conclusion / To sum up / All in all", example: "In conclusion, I believe that a healthy lifestyle is a personal responsibility." },
  { id: 52, category: "connector", situation: "Naopak", phrase: "On the contrary / Conversely / In contrast", example: "On the contrary, city life can feel extremely lonely despite the crowds." },
  { id: 53, category: "connector", situation: "Čo viac", phrase: "What is more / Not only that, but…", example: "What is more, the programme covers all accommodation costs." },
  { id: 54, category: "connector", situation: "Vzhľadom na / z dôvodu", phrase: "Due to / Owing to / Because of", example: "Due to rising house prices, many young people cannot afford to buy a home." },
  { id: 55, category: "connector", situation: "Pokiaľ ide o…", phrase: "As for… / Regarding… / When it comes to…", example: "When it comes to the environment, we all have a responsibility to act." },
  { id: 56, category: "connector", situation: "Napriek tomu, že", phrase: "In spite of / Despite", example: "Despite the cold weather, the hiking trip was unforgettable." },
  { id: 57, category: "connector", situation: "Postupnosť – po prvé / po druhé", phrase: "First of all / Secondly / Finally / Last but not least", example: "First of all, I'd like to describe what I can see in the picture." },
  { id: 58, category: "connector", situation: "Zhrnutie", phrase: "On balance / Taking everything into account", example: "On balance, I think living in a city offers more opportunities than the countryside." },
  { id: 59, category: "connector", situation: "Osobne", phrase: "Personally / As for me / Speaking for myself", example: "Personally, I think social media does more harm than good for teenagers." },
  { id: 60, category: "connector", situation: "Zatiaľ čo / kým", phrase: "While / Whereas / Meanwhile", example: "While cities offer more jobs, villages provide a better quality of life." },
];
