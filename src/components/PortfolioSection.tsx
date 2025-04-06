'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCopyright, FaHandshake, FaUserTie } from 'react-icons/fa';

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'intellectual-property' | 'contracts' | 'employment' | 'litigation';
}

const PortfolioSection: React.FC = () => {
  const [filter, setFilter] = useState<string | null>(null);
  const [filteredItems, setFilteredItems] = useState<PortfolioItem[]>([]);
  
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "הגנה על זכויות יוצרים בקולקציה חדשה",
      description: "ייצגנו מעצב אופנה מוביל בהגנה על זכויות היוצרים של קולקציה חדשנית. הצלחנו למנוע העתקה לא חוקית והבטחנו פיצויים משמעותיים.",
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "intellectual-property"
    },
    {
      id: 2,
      title: "חוזה שיתוף פעולה בינלאומי",
      description: "ניסחנו והוצאנו לפועל חוזה שיתוף פעולה מורכב בין מותג ישראלי לרשת קמעונאית בינלאומית, שהוביל להרחבת פעילות הלקוח לשווקים חדשים.",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "contracts"
    },
    {
      id: 3,
      title: "סכסוך עבודה בחברת אופנה",
      description: "פתרנו סכסוך עבודה מורכב בין חברת אופנה גדולה לעובדיה, תוך שמירה על יחסי העבודה ומניעת הליכים משפטיים ממושכים.",
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "employment"
    },
    {
      id: 4,
      title: "רישום סימן מסחר למותג יוקרה",
      description: "הובלנו תהליך מוצלח של רישום סימן מסחר בינלאומי למותג יוקרה חדש, שאפשר ללקוח להתרחב לשווקים גלובליים תחת הגנה משפטית מלאה.",
      image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "intellectual-property"
    },
    {
      id: 5,
      title: "ליטיגציה בתביעת הפרת פטנט",
      description: "ייצגנו בהצלחה חברת טקסטיל בתביעת הפרת פטנט, שהובילה לפסיקה תקדימית בתחום חומרים חדשניים בתעשיית האופנה.",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "litigation"
    },
    {
      id: 6,
      title: "הסכמי הפצה לרשת חנויות",
      description: "ניסחנו מערך הסכמי הפצה מורכבים עבור רשת חנויות אופנה, שהבטיחו את האינטרסים של הלקוח תוך יצירת מערכות יחסים עסקיות יציבות.",
      image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "contracts"
    },
    {
      id: 7,
      title: "ייעוץ בנושא זכויות עובדים",
      description: "סיפקנו ייעוץ משפטי מקיף בנושא זכויות עובדים למותג אופנה מתרחב, שסייע ללקוח לבנות מערכת העסקה הוגנת ולמנוע תביעות עתידיות.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "employment"
    },
    {
      id: 8,
      title: "ליווי משפטי בהשקת קולקציה",
      description: "ליווינו משפטית השקת קולקציה שיתופית בין מעצב לחברה בינלאומית, תוך טיפול בסוגיות של קניין רוחני, חוזים והיבטים מסחריים.",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "litigation"
    }
  ];

  useEffect(() => {
    setFilteredItems(
      filter ? portfolioItems.filter(item => item.category === filter) : portfolioItems
    );
  }, [filter]);

  const filterCategories = [
    { name: 'הכל', value: null, icon: <FaBriefcase /> },
    { name: 'קניין רוחני', value: 'intellectual-property', icon: <FaCopyright /> },
    { name: 'חוזים', value: 'contracts', icon: <FaHandshake /> },
    { name: 'דיני עבודה', value: 'employment', icon: <FaUserTie /> },
    { name: 'ליטיגציה', value: 'litigation', icon: <FaBriefcase /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-16 bg-gray-50 rtl" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800 font-portfolio">תיקים נבחרים</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            משרד עורכי דין דלתא מתמחה בליווי משפטי לתעשיית האופנה. להלן מבחר מהתיקים המשמעותיים שטיפלנו בהם.
          </p>
        </div>

        <div className="flex flex-wrap justify-center mb-10 gap-3">
          {filterCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setFilter(category.value)}
              className={`flex items-center px-6 py-3 rounded-full text-lg transition-all duration-300 ${
                filter === category.value || (category.value === null && filter === null)
                  ? 'bg-primary text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-secondary hover:text-white'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <span className="px-3 py-1 bg-secondary text-white text-sm rounded-full">
                      {filterCategories.find(cat => cat.value === item.category)?.name}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                <div className="mt-6">
                  <button className="text-primary font-bold hover:text-secondary transition-colors duration-300 flex items-center">
                    קרא עוד
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 transform rotate-180" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;