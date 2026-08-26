import React, { createContext, useContext, useState } from "react";

const translations = {
  en: {
    languageName: "English",
    heroRole: "Fashion Designer  /  Cutter  /  Tailor  /  Model",
    selectedWorks: "Selected Works",
    selectedWorksHeading: "Selected collections that define my craft",
    allProjects: "All Projects",
    craft: "The Craft",
    philosophy: "I believe a garment is never just fabric  -  it is memory made wearable. Every piece begins with the cloth, continues with the hand, and resolves in how it moves on the body. The goal is never novelty. The goal is to carry heritage forward, one cut at a time.",
    readStory: "Read My Story",
    commission: "Get in Touch With Us",
    admin: "Admin",
    switchLanguage: "Language",
    home: "Home", projects: "Projects", gallery: "Gallery", about: "About", contact: "Contact",
    menu: "Menu", navigation: "Navigation", social: "Social", legal: "Legal", backHome: "Back home",
  },
  am: {
    languageName: "አማርኛ",
    heroRole: "የፋሽን ዲዛይነር  /  ቆራጭ  /  ልብስ ሰፊ  / ሞዴል",
    selectedWorks: "የተመረጡ ስራዎች",
    selectedWorksHeading: "የእጅ ጥበቤን የሚገልጹ ልዩ ስብስቦች",
    allProjects: "ሁሉም ፕሮጀክቶች",
    craft: "የእጅ ጥበብ",
    philosophy: "ልብስ ጨርቅ ብቻ አይደለም ብዬ አምናለሁ፤ ትዝታን የሚለብስ ነው። እያንዳንዱ ልብስ ከጨርቁ ይጀምራል፣ በእጅ ይቀጥላል፣ በሰውነት ላይ በሚንቀሳቀስበት መንገድም ይጠናቀቃል።",
    readStory: "ታሪኬን ያንብቡ",
    commission: "ከእኛ ጋር ይገናኙ",
    admin: "አስተዳዳሪ",
    switchLanguage: "ቋንቋ",
    home: "መነሻ", projects: "ፕሮጀክቶች", gallery: "ጋለሪ", about: "ስለ እኛ", contact: "ያግኙን",
    menu: "ምናሌ", navigation: "አሰሳ", social: "ማህበራዊ", legal: "ህጋዊ", backHome: "ወደ መነሻ",
  },
  ti: {
    languageName: "ትግርኛ",
    heroRole: "ዲዛይነር ፋሽን  /  ቀራጺ  /  ሰፋይ  /  ሞዴል",
    selectedWorks: "ዝተመርጹ ስራሕቲ",
    selectedWorksHeading: "ንኢድ ጥበበይ ዝገልጹ ፍሉያት ስብስባት",
    allProjects: "ኩሎም ፕሮጀክታት",
    craft: "ኢድ ጥበብ",
    philosophy: "ክዳን ጨርቂ ጥራይ ኣይኮነን፤ ዝለበስ ዝኽሪ እዩ። ኩሉ ክዳን ካብ ጨርቂ ይጅምር፣ ብኢድ ይቕጽል፣ ኣብ ሰብነት ብዝንቀሳቐሰሉ መንገዲ ድማ ይውዳእ።",
    readStory: "ታሪኸይ ኣንብቡ",
    commission: "ምሳና ተራኸቡ",
    admin: "ኣስተዳዳሪ",
    switchLanguage: "ቋንቋ",
    home: "መበገሲ", projects: "ፕሮጀክታት", gallery: "ጋለሪ", about: "ብዛዕባ", contact: "ርኸቡና",
    menu: "ምናሌ", navigation: "ኣሰሳ", social: "ማሕበራዊ", legal: "ሕጋዊ", backHome: "ናብ መበገሲ",
  },
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");
  return <LanguageContext.Provider value={{ language, setLanguage, text: translations[language] }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}

export const languageOptions = Object.entries(translations).map(([value, text]) => ({ value, label: text.languageName }));
