import React from 'react';
import { FaCopyright, FaHandshake, FaRegRegistered, FaFileContract, FaUserTie, FaStore } from 'react-icons/fa';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:transform hover:scale-105 hover:border-secondary border-2 border-transparent">
      <div className="text-primary text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 font-display">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <FaCopyright />,
      title: "הגנה על קניין רוחני",
      description: "ייעוץ משפטי מקיף להגנה על עיצובים, מותגים ויצירות אופנה מפני העתקה והפרת זכויות יוצרים."
    },
    {
      icon: <FaHandshake />,
      title: "משא ומתן חוזי",
      description: "ליווי מקצועי בניסוח, בדיקה וניהול משא ומתן על חוזים מול ספקים, מעצבים ושותפים עסקיים."
    },
    {
      icon: <FaRegRegistered />,
      title: "רישום סימני מסחר",
      description: "טיפול מקיף בתהליך רישום והגנה על סימני מסחר בארץ ובעולם לשמירה על המותג שלך."
    },
    {
      icon: <FaFileContract />,
      title: "הסכמי רישוי",
      description: "ניסוח וליווי בהסכמי רישוי ושיתופי פעולה לניצול מיטבי של הנכסים הרוחניים של העסק."
    },
    {
      icon: <FaUserTie />,
      title: "דיני עבודה",
      description: "ייעוץ בנושאי העסקת עובדים, חוזי עבודה, זכויות עובדים וליווי בסכסוכי עבודה בתעשיית האופנה."
    },
    {
      icon: <FaStore />,
      title: "חוזי שכירות מסחרית",
      description: "ליווי בניהול משא ומתן וחתימה על חוזי שכירות לחנויות ומרחבי תצוגה בתנאים אופטימליים."
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dir-rtl" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-gray-800">השירותים המשפטיים שלנו</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            משרד עורכי דין דלתא מתמחה במתן פתרונות משפטיים מקיפים לתעשיית האופנה, תוך הבנה מעמיקה של האתגרים הייחודיים בשוק דינמי זה
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;