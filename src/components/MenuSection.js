import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('appetizers');

  const menuCategories = {
    appetizers: {
      title: 'Appetizers',
      items: [
        {
          name: 'Classic Caesar Salad',
          description: 'Crisp romaine lettuce, parmesan cheese, croutons, and our signature Caesar dressing',
          price: '$14',
          image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
        },
        {
          name: 'Buffalo Wings',
          description: 'Crispy chicken wings tossed in our house buffalo sauce, served with celery and blue cheese',
          price: '$16',
          image: 'https://images.unsplash.com/photo-1567620832904-9fe5cf23db13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
        },
        {
          name: 'Loaded Nachos',
          description: 'Tortilla chips topped with melted cheese, jalapeños, sour cream, and guacamole',
          price: '$18',
          image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
        }
      ]
    },
    mains: {
      title: 'Main Courses',
      items: [
        {
          name: 'Classic Burger',
          description: 'Juicy beef patty with lettuce, tomato, onion, and our special sauce on a brioche bun',
          price: '$22',
          image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
        },
        {
          name: 'Ribeye Steak',
          description: '12oz ribeye steak grilled to perfection, served with mashed potatoes and seasonal vegetables',
          price: '$45',
          image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
        },
        {
          name: 'BBQ Ribs',
          description: 'Fall-off-the-bone pork ribs glazed with our signature BBQ sauce, served with coleslaw',
          price: '$28',
          image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
        }
      ]
    },
    desserts: {
      title: 'Desserts',
      items: [
        {
          name: 'New York Cheesecake',
          description: 'Rich and creamy cheesecake with graham cracker crust, topped with berry compote',
          price: '$12',
          image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
        },
        {
          name: 'Chocolate Lava Cake',
          description: 'Warm chocolate cake with molten center, served with vanilla ice cream',
          price: '$14',
          image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
        },
        {
          name: 'Apple Pie',
          description: 'Classic American apple pie with cinnamon and nutmeg, served warm with ice cream',
          price: '$10',
          image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
        }
      ]
    },
    drinks: {
      title: 'Beverages',
      items: [
        {
          name: 'Craft Beer Selection',
          description: 'Local and imported craft beers, rotating selection of seasonal brews',
          price: '$6-12',
          image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
        },
        {
          name: 'Wine Collection',
          description: 'Curated selection of red and white wines from American vineyards',
          price: '$8-25',
          image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
        },
        {
          name: 'Signature Cocktails',
          description: 'Handcrafted cocktails featuring premium spirits and fresh ingredients',
          price: '$14-18',
          image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
        }
      ]
    }
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="menu" className="section-padding bg-cream">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4">
            Our Menu
          </h2>
          <p className="text-lg text-warm-gray max-w-2xl mx-auto">
            Discover our carefully crafted selection of classic American dishes, 
            prepared with the finest ingredients and traditional techniques.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.keys(menuCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-warm-red text-white shadow-lg'
                  : 'bg-white text-charcoal hover:bg-warm-red hover:text-white'
              }`}
            >
              {menuCategories[category].title}
            </button>
          ))}
        </motion.div>

        {/* Menu Items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {menuCategories[activeCategory].items.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-warm-red text-white px-3 py-1 rounded-full font-semibold">
                  {item.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-charcoal mb-2">
                  {item.name}
                </h3>
                <p className="text-warm-gray leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-warm-gray mb-6">
            Want to see our full menu? Download our complete menu or visit us in person.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Download Menu
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              Make Reservation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
