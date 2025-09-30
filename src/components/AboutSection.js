import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const features = [
    {
      icon: '🍽️',
      title: 'Authentic American Cuisine',
      description: 'We serve traditional American dishes made with locally sourced ingredients and time-honored recipes.'
    },
    {
      icon: '👨‍🍳',
      title: 'Master Chef',
      description: 'Our head chef brings 20+ years of experience from top restaurants across America.'
    },
    {
      icon: '🏆',
      title: 'Award Winning',
      description: 'Recognized by local food critics and featured in multiple culinary publications.'
    },
    {
      icon: '🌱',
      title: 'Farm to Table',
      description: 'We partner with local farms to bring you the freshest, highest quality ingredients.'
    }
  ];

  const stats = [
    { number: '25+', label: 'Years of Excellence' },
    { number: '50K+', label: 'Happy Customers' },
    { number: '100+', label: 'Menu Items' },
    { number: '15+', label: 'Awards Won' }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        {/* Our Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6">
              Our Story
            </h2>
            <p className="text-lg text-warm-gray mb-6 leading-relaxed">
              Founded in 1998, Classic American Restaurant has been serving authentic American cuisine 
              in the heart of the city for over two decades. What started as a small family-owned 
              establishment has grown into a beloved local institution.
            </p>
            <p className="text-lg text-warm-gray mb-8 leading-relaxed">
              Our commitment to quality, tradition, and exceptional service has made us a favorite 
              destination for both locals and visitors. We believe that great food brings people 
              together, and we're proud to be part of your special moments.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Learn More About Us
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Restaurant Interior"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-warm-red text-white p-6 rounded-2xl shadow-xl">
              <div className="text-3xl font-bold">25+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </motion.div>
        </div>

        {/* Chef's Specialties */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6">
            Chef's Specialties
          </h2>
          <p className="text-lg text-warm-gray max-w-3xl mx-auto mb-12">
            Meet our talented culinary team and discover the signature dishes that have made us famous.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-cream rounded-2xl p-8 card-hover"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Chef John"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif font-semibold text-charcoal mb-2">
                Chef John Smith
              </h3>
              <p className="text-warm-gray mb-4">Head Chef & Owner</p>
              <p className="text-sm text-warm-gray">
                "Cooking is my passion. I believe in using the finest ingredients 
                to create memorable dining experiences."
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-cream rounded-2xl p-8 card-hover"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Chef Maria"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif font-semibold text-charcoal mb-2">
                Chef Maria Garcia
              </h3>
              <p className="text-warm-gray mb-4">Pastry Chef</p>
              <p className="text-sm text-warm-gray">
                "Desserts are the perfect ending to any meal. I love creating 
                sweet memories for our guests."
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-cream rounded-2xl p-8 card-hover"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Chef David"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif font-semibold text-charcoal mb-2">
                Chef David Johnson
              </h3>
              <p className="text-warm-gray mb-4">Sous Chef</p>
              <p className="text-sm text-warm-gray">
                "Every dish tells a story. I'm honored to be part of creating 
                culinary experiences that guests will remember."
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-serif font-semibold text-charcoal mb-3">
                {feature.title}
              </h3>
              <p className="text-warm-gray">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-charcoal rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-12">
            Our Achievements
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-white font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
