'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="w-full py-4 px-6 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-secondary rounded-md"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <h3 className="text-right font-medium text-lg">{question}</h3>
        <span className="text-primary">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-6 bg-gray-50 rounded-md text-right">
              <p>{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "מהם תחומי ההתמחות של משרד עורכי דין דלתא בתעשיית האופנה?",
      answer: "משרד עורכי דין דלתא מתמחה במגוון תחומים בתעשיית האופנה, כולל הגנה על קניין רוחני, רישום סימני מסחר, הסכמי רישוי, חוזי עיצוב, הגנה מפני העתקות, סכסוכי מותגים, ייעוץ בנושא חוקי פרסום ותקנות סימון מוצרים, וליווי משפטי שוטף לחברות אופנה."
    },
    {
      question: "כיצד מתנהל תהליך העבודה עם משרד עורכי דין דלתא?",
      answer: "התהליך מתחיל בפגישת היכרות ללא עלות בה אנו מבינים את צרכיכם המשפטיים. לאחר מכן, אנו מגבשים אסטרטגיה משפטית מותאמת אישית, מציעים הצעת מחיר שקופה, ומלווים אתכם לאורך כל התהליך עם עדכונים שוטפים ותקשורת ברורה."
    },
    {
      question: "מהם המחירים של שירותי המשרד?",
      answer: "אנו מציעים מספר מודלים תמחור: ריטיינר חודשי קבוע לליווי משפטי שוטף, תמחור לפי פרויקט עבור משימות מוגדרות כמו רישום סימן מסחר, ותמחור שעתי לייעוץ ספציפי. המחירים נקבעים בהתאם למורכבות העניין, היקף העבודה והערך העסקי. אנו מקפידים על שקיפות מלאה בנושא התמחור."
    },
    {
      question: "כמה זמן לוקח לרשום סימן מסחר בתחום האופנה?",
      answer: "תהליך רישום סימן מסחר בישראל אורך בדרך כלל בין 12-18 חודשים. עם זאת, הגנה מסוימת מתחילה כבר מרגע הגשת הבקשה. לרישום בינלאומי, התהליך עשוי להימשך זמן רב יותר ותלוי במדינות היעד. אנו מלווים את התהליך מתחילתו ועד סופו ומטפלים בכל ההתנגדויות שעלולות להתעורר."
    },
    {
      question: "כיצד ניתן להגן על קולקציה חדשה מפני העתקות?",
      answer: "הגנה על קולקציה חדשה דורשת אסטרטגיה משולבת: רישום זכויות יוצרים על עיצובים ייחודיים, רישום פטנטים על חידושים טכנולוגיים באריגים או בשיטות ייצור, רישום מדגמים, הגנה על סימני מסחר, ושימוש בהסכמי סודיות עם כל הגורמים המעורבים בתהליך הפיתוח והייצור. אנו מתאימים את אסטרטגיית ההגנה לצרכים הספציפיים של כל מותג."
    },
    {
      question: "מה עליי לדעת לגבי חוקי תיוג וסימון מוצרי אופנה?",
      answer: "חוקי תיוג וסימון מוצרי אופנה בישראל מחייבים ציון מידע כמו הרכב הבד, הוראות כביסה, ארץ ייצור, ופרטי היבואן. ישנן גם דרישות ספציפיות למוצרים מסוימים כמו הלבשה תחתונה או בגדי ילדים. אי עמידה בדרישות אלו עלולה להוביל לקנסות ואף להשבתת מלאי. אנו מספקים ייעוץ מקיף להבטחת עמידה בכל הדרישות הרגולטוריות."
    },
    {
      question: "כיצד מתמודדים עם הפרת זכויות יוצרים בעידן הדיגיטלי?",
      answer: "התמודדות עם הפרות זכויות יוצרים בעידן הדיגיטלי כוללת ניטור מקוון שוטף, שליחת מכתבי התראה, הגשת בקשות להסרת תוכן מפר מפלטפורמות מקוונות, ובמקרים חמורים - נקיטת הליכים משפטיים. אנו מסייעים גם בגיבוש אסטרטגיית אכיפה יעילה ומותאמת למשאבי הלקוח ולחומרת ההפרה."
    },
    {
      question: "האם המשרד מטפל גם בהסכמים בינלאומיים?",
      answer: "כן, משרדנו מתמחה בהסכמים בינלאומיים בתחום האופנה, כולל הסכמי הפצה, זיכיון, ייצור, ושיתופי פעולה חוצי גבולות. אנו עובדים עם רשת של משרדי עורכי דין בחו\"ל כדי להבטיח שההסכמים עומדים בדרישות החוק בכל מדינה רלוונטית ומגנים על האינטרסים של לקוחותינו בשוק הגלובלי."
    }
  ];

  return (
    <div className="faq-section py-12 px-4 md:px-8 lg:px-16 max-w-4xl mx-auto" dir="rtl">
      <h2 className="text-3xl font-bold text-center mb-10 text-primary">שאלות נפוצות</h2>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            toggleOpen={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;