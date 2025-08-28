"use client";

import { motion } from "framer-motion";
import {
  Search,
  MapPin,
  Calendar,
  Users,
  Star,
  Heart,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

export default function HomePage() {
  const [searchFocused, setSearchFocused] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const featuredListings = [
    {
      id: 1,
      title: "Luxury Villa with Ocean View",
      location: "Malibu, California",
      price: "$450",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 2,
      title: "Cozy Mountain Cabin",
      location: "Aspen, Colorado",
      price: "$280",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    },
    {
      id: 3,
      title: "Modern Downtown Loft",
      location: "New York, NY",
      price: "$320",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    },
    {
      id: 4,
      title: "Tropical Beach House",
      location: "Maui, Hawaii",
      price: "$520",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
    },
    {
      id: 5,
      title: "Historic City Apartment",
      location: "Paris, France",
      price: "$380",
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 6,
      title: "Desert Oasis Retreat",
      location: "Sedona, Arizona",
      price: "$290",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
  ];

  // Optimized animation variants for better performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const heroVariants = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const floatingVariants2 = {
    animate: {
      y: [0, 15, 0],
      opacity: [0.2, 0.5, 0.2],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1,
      },
    },
  };

  // Ultra-smooth hero content animations with perfect easing
  const heroContentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smooth finish
        type: "tween", // Ensures smooth interpolation
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "tween",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AirbnbClone
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {["Stays", "Experiences", "Online Experiences", "Host"].map(
                (item, index) => (
                  <motion.a
                    key={item}
                    href="#"
                    className="text-gray-700 hover:text-blue-600 font-medium"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                    whileHover={{ y: -2 }}
                  >
                    {item}
                  </motion.a>
                )
              )}
            </nav>

            {/* User Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <motion.button
                className="text-gray-700 hover:text-blue-600 font-medium"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
              >
                Become a Host
              </motion.button>
              <motion.button
                className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-4 rounded-full font-medium"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                Sign In
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              whileTap={{ scale: 0.95 }}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <motion.div
            className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"}`}
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: mobileMenuOpen ? 1 : 0,
              height: mobileMenuOpen ? "auto" : 0,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="py-4 space-y-4 border-t border-gray-200 mt-4">
              {[
                "Stays",
                "Experiences",
                "Online Experiences",
                "Host",
                "Become a Host",
                "Sign In",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-gray-700 hover:text-blue-600 font-medium py-2"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 z-0"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/80 to-indigo-900/80" />
          <img
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Luxury Villa"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 bg-blue-400/20 rounded-full blur-xl"
          variants={floatingVariants2}
          animate="animate"
        />

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent"
            variants={heroContentVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            Find Your Perfect
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Getaway
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto leading-relaxed"
            variants={heroContentVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          >
            Discover extraordinary places to stay, connect with hosts, and
            create unforgettable memories around the world.
          </motion.p>

          <motion.button
            className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/25"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Journey
            <ArrowRight className="inline-block ml-2 group-hover:translate-x-1" />
          </motion.button>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </section>

      {/* Search Section */}
      <section className="relative z-20 -mt-20 px-6">
        <motion.div
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8 border border-gray-100"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative group">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 z-10" />
              <input
                type="text"
                placeholder="Where to?"
                className="w-full pl-10 pr-4 py-4 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-500"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
            </div>

            <div className="relative group">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 z-10" />
              <input
                type="date"
                className="w-full pl-10 pr-4 py-4 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 bg-gray-50 focus:bg-white text-gray-900 cursor-pointer"
                style={{
                  colorScheme: "light",
                  WebkitAppearance: "none",
                  MozAppearance: "none",
                }}
              />
            </div>

            <div className="relative group">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 z-10" />
              <input
                type="date"
                className="w-full pl-10 pr-4 py-4 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 bg-gray-50 focus:bg-white text-gray-900 cursor-pointer"
                style={{
                  colorScheme: "light",
                  WebkitAppearance: "none",
                  MozAppearance: "none",
                }}
              />
            </div>

            <div className="relative group">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 z-10" />
              <input
                type="number"
                placeholder="Guests"
                min="1"
                max="20"
                className="w-full pl-10 pr-4 py-4 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-500"
              />
            </div>
          </div>

          <motion.button
            className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Search className="inline-block mr-2" />
            Search
          </motion.button>
        </motion.div>
      </section>

      {/* Featured Listings */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handpicked properties that will make your stay unforgettable
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {featuredListings.map((listing, index) => (
              <motion.div
                key={listing.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                style={{ willChange: "transform" }}
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={listing.image}
                    alt={listing.title}
                    className="w-full h-64 object-cover group-hover:scale-110"
                    style={{ willChange: "transform" }}
                  />
                  <motion.button
                    className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-red-500"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Heart className="w-5 h-5" />
                  </motion.button>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center text-sm font-semibold text-gray-700">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    {listing.rating}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                    {listing.title}
                  </h3>
                  <p className="text-gray-600 mb-3 flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                    {listing.location}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">
                      {listing.price}
                      <span className="text-sm font-normal text-gray-600">
                        {" "}
                        / night
                      </span>
                    </span>
                    <motion.button
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Details
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Ready to Start Your Adventure?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 text-blue-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Join millions of travelers who have found their perfect stay with us
          </motion.p>
          <motion.button
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AirbnbClone
              </h3>
              <p className="text-gray-400">
                Discover extraordinary places to stay and connect with hosts
                around the world.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Safety Information
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Cancellation Options
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Disaster Relief
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Support Refugees
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Combating Discrimination
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Hosting</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Host Your Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Host an Experience
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Responsible Hosting
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AirbnbClone. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
