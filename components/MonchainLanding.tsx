"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import {
  ChevronDown,
  Shield,
  Zap,
  Globe,
  Users,
  Code,
  ArrowRight,
  Menu,
  X,
  Github,
  Twitter,
  MessageCircle,
  BookOpen,
  ExternalLink,
  Coins,
  Search,
  Database,
  Wallet,
  ArrowLeftRight,
  Sprout,
  Network,
  Copy,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const MonchainLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [copiedRPC, setCopiedRPC] = useState(false);
  const [copiedChainId, setCopiedChainId] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 90,
  });

  useEffect(() => {
    setIsClient(true);
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
    });

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copyToClipboard = (text: string, type: "rpc" | "chainId") => {
    navigator.clipboard.writeText(text);
    if (type === "rpc") {
      setCopiedRPC(true);
      setTimeout(() => setCopiedRPC(false), 2000);
    } else {
      setCopiedChainId(true);
      setTimeout(() => setCopiedChainId(false), 2000);
    }
  };

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description:
        "Sub-second finality with high throughput up to 10,000 TPS through optimized consensus mechanism",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description:
        "Military-grade security with advanced cryptographic protocols and formal verification",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "EVM Compatible",
      description:
        "Full Ethereum compatibility - deploy your existing dApps without modification",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Cosmos Interoperability",
      description:
        "Seamless cross-chain communication through IBC protocol integration",
    },
  ];

  const stats = [
    { value: "10,000+", label: "TPS Throughput" },
    { value: "<1s", label: "Block Finality" },
    { value: "$0.001", label: "Transaction Cost" },
    { value: "99.9%", label: "Uptime" },
  ];

  const roadmapItems = [
    {
      quarter: "Q2 2025",
      title: "Testnet Launch",
      description: "Public testnet with developer tools and documentation",
      status: "completed",
    },
    {
      quarter: "Q3 2025",
      title: "Mainnet Beta",
      description: "Limited mainnet launch with validator onboarding",
      status: "active",
    },
    {
      quarter: "Q4 2025",
      title: "Full Mainnet",
      description: "Complete mainnet deployment with all features",
      status: "upcoming",
    },
    {
      quarter: "Q1 2026",
      title: "Ecosystem Expansion",
      description: "DeFi protocols and cross-chain bridges integration",
      status: "upcoming",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <div className="min-h-screen overflow-hidden text-white bg-black">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 h-1 origin-left bg-gradient-to-r from-purple-500 to-cyan-500"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          scrollY > 50
            ? "bg-black/90 backdrop-blur-md border-b border-purple-500/20"
            : "bg-transparent"
        }`}
      >
        <div className="px-6 py-4 mx-auto max-w-7xl">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="flex items-center justify-center w-10 h-10 text-xl font-bold rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500"
                animate={pulseAnimation}
              >
                M
              </motion.div>
              <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text">
                Monchain
              </span>
            </motion.div>

            <div className="items-center hidden space-x-8 md:flex">
              {[
                "Features",
                "Technology",
                "Ecosystem",
                "Roadmap",
                "Community",
              ].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative transition-colors hover:text-purple-400"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {item}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
              <motion.button
                className="px-6 py-2 font-semibold transition-transform rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:scale-105"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                Get Started
              </motion.button>
            </div>

            <motion.button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden border-b md:hidden bg-black/95 backdrop-blur-md border-purple-500/20"
            >
              <motion.div
                className="px-6 py-4 space-y-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {[
                  "Features",
                  "Technology",
                  "Ecosystem",
                  "Roadmap",
                  "Community",
                ].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block transition-colors hover:text-purple-400"
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </motion.a>
                ))}
                <motion.button
                  className="w-full px-6 py-2 font-semibold rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {isClient &&
            [...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-purple-400 rounded-full"
                initial={{
                  opacity: 0,
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  y: [0, -100, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut",
                }}
              />
            ))}
        </div>

        <motion.div
          className="relative z-10 max-w-5xl px-6 mx-auto text-center"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <motion.span
              className="inline-block px-4 py-2 mb-6 text-sm font-semibold text-purple-300 border rounded-full bg-purple-500/20 border-purple-500/30"
              animate={floatingAnimation}
            >
              🚀 Next-Generation Blockchain Platform
            </motion.span>
          </motion.div>

          <motion.h1
            className="mb-6 text-5xl font-bold leading-tight md:text-7xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.span
              className="text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Monchain
            </motion.span>
            <br />
            <span className="text-white">The Future of</span>
            <br />
            <motion.span
              className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Decentralized Infrastructure
            </motion.span>
          </motion.h1>

          <motion.p
            className="max-w-3xl mx-auto mb-12 text-xl leading-relaxed text-gray-300 md:text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Monchain combines the power of EVM compatibility with Cosmos
            interoperability, delivering lightning-fast transactions and
            unlimited scalability for the next generation of dApps.
          </motion.p>

          <motion.div
            className="flex flex-col items-center justify-center gap-6 mb-16 sm:flex-row"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <motion.button
              className="flex items-center px-8 py-4 space-x-2 text-lg font-semibold transition-all duration-300 rounded-full group bg-gradient-to-r from-purple-500 to-cyan-500"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(139, 92, 246, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Build on Monchain</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.button>

            <motion.button
              className="flex items-center px-8 py-4 space-x-2 text-lg font-semibold transition-all duration-300 border-2 border-purple-500 rounded-full hover:bg-purple-500/10"
              whileHover={{ scale: 1.05, borderColor: "#8b5cf6" }}
              whileTap={{ scale: 0.95 }}
            >
              <BookOpen className="w-5 h-5" />
              <span>Documentation</span>
            </motion.button>

            <motion.button
              onClick={() =>
                window.open("https://faucet.monchain.org", "_blank")
              }
              className="flex items-center px-8 py-4 space-x-2 text-lg font-semibold transition-all duration-300 border-2 rounded-full border-cyan-500 hover:bg-cyan-500/10"
              whileHover={{ scale: 1.05, borderColor: "#06b6d4" }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Coins className="w-5 h-5" />
              </motion.div>
              <span>Get Testnet Tokens</span>
            </motion.button>
          </motion.div>

          {/* Animated Stats */}
          <motion.div
            className="grid max-w-4xl grid-cols-2 gap-8 mx-auto md:grid-cols-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
              >
                <motion.div
                  className="mb-2 text-3xl font-bold text-transparent md:text-4xl bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 1.5 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-gray-400 md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute transform -translate-x-1/2 bottom-8 left-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-purple-400" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-20">
        <div className="px-6 mx-auto max-w-7xl">
          <div className="mb-16 text-center" data-aos="fade-up">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text">
                Revolutionary Features
              </span>
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-300">
              Built for the future of decentralized applications with
              cutting-edge technology and developer-first approach
            </p>
          </div>

          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="p-8 transition-all duration-300 border group bg-gray-900/50 border-purple-500/20 rounded-2xl hover:border-purple-500/50 hover:bg-gray-900/80"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(139, 92, 246, 0.1)",
                }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <motion.div
                  className="mb-6 text-purple-400 transition-transform duration-300"
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    color: "#06b6d4",
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="mb-4 text-xl font-bold">{feature.title}</h3>
                <p className="leading-relaxed text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section id="ecosystem" className="py-20 bg-gray-900/30">
        <div className="px-6 mx-auto max-w-7xl">
          <div className="mb-16 text-center" data-aos="fade-up">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text">
                Monchain Ecosystem
              </span>
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-300">
              Complete suite of tools and services to help developers build,
              test, and deploy applications on Monchain
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Ecosystem cards with enhanced animations */}
            {[
              {
                title: "Testnet Faucet",
                description:
                  "Get free testnet tokens instantly to start building and testing your dApps on Monchain testnet.",
                icon: <Coins className="w-12 h-12" />,
                color: "cyan",
                url: "https://faucet.monchain.org",
                stats: [
                  { label: "Daily Limit:", value: "1,000 MON" },
                  { label: "Request Cooldown:", value: "24 hours" },
                  { label: "Network:", value: "Testnet" },
                ],
              },
              {
                title: "Block Explorer",
                description:
                  "Explore transactions, blocks, and smart contracts on Monchain with our comprehensive blockchain explorer.",
                icon: <Search className="w-12 h-12" />,
                color: "purple",
                url: "https://explorer.monchain.org",
                stats: [
                  { label: "Real-time Data:", value: "✓ Live" },
                  { label: "API Access:", value: "Available" },
                  { label: "Contract Verification:", value: "Supported" },
                ],
              },
              {
                title: "MonSwap DEX",
                description:
                  "Trade tokens seamlessly with our native DEX. Low fees, high liquidity, and instant swaps on Monchain.",
                icon: <ArrowLeftRight className="w-12 h-12" />,
                color: "orange",
                url: "https://monswap.org",
                stats: [
                  { label: "Trading Fee:", value: "0.3%" },
                  { label: "Supported Pairs:", value: "50+" },
                  { label: "24h Volume:", value: "$2.5M" },
                ],
              },
              {
                title: "MonFarm DeFi",
                description:
                  "Stake MON tokens and provide liquidity to earn rewards. Multiple farming pools with competitive APY rates.",
                icon: <Sprout className="w-12 h-12" />,
                color: "green",
                url: "https://monfarm.org",
                stats: [
                  { label: "Max APY:", value: "125%" },
                  { label: "Active Pools:", value: "12" },
                  { label: "TVL:", value: "$8.2M" },
                ],
              },
              {
                title: "Network Config",
                description:
                  "Add Monchain Testnet to your wallet with these configuration details.",
                icon: <Network className="w-12 h-12" />,
                color: "indigo",
                stats: [
                  { label: "RPC URL:", value: "https://rpc.monchain.org/" },
                  { label: "Chain ID:", value: "16789" },
                  { label: "Currency Symbol:", value: "MON" },
                ],
              },
              {
                title: "Developer Suite",
                description:
                  "Complete development toolkit with SDKs, APIs, and documentation for building on Monchain.",
                icon: <Code className="w-12 h-12" />,
                color: "teal",
                features: [
                  "JSON-RPC API",
                  "JavaScript SDK",
                  "Smart Contract Templates",
                  "Testing Framework",
                ],
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                className={`group bg-gradient-to-br from-${
                  card.color
                }-500/10 to-${
                  card.color === "orange"
                    ? "red"
                    : card.color === "green"
                    ? "emerald"
                    : card.color
                }-500/10 border border-${
                  card.color
                }-500/30 rounded-2xl p-8 hover:border-${
                  card.color
                }-500/60 transition-all duration-300 cursor-pointer`}
                onClick={() => card.url && window.open(card.url, "_blank")}
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 20px 40px rgba(${
                    card.color === "cyan"
                      ? "6, 182, 212"
                      : card.color === "purple"
                      ? "139, 92, 246"
                      : card.color === "orange"
                      ? "249, 115, 22"
                      : card.color === "green"
                      ? "34, 197, 94"
                      : card.color === "indigo"
                      ? "99, 102, 241"
                      : "20, 184, 166"
                  }, 0.2)`,
                }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center justify-between mb-6">
                  <motion.div
                    className={`text-${card.color}-400`}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {card.icon}
                  </motion.div>
                  {card.url && (
                    <motion.div
                      initial={{ opacity: 0.5 }}
                      whileHover={{ opacity: 1, x: 5 }}
                    >
                      <ExternalLink
                        className={`w-5 h-5 text-gray-500 group-hover:text-${card.color}-400 transition-colors`}
                      />
                    </motion.div>
                  )}
                </div>

                <h3
                  className={`text-2xl font-bold mb-4 text-${card.color}-300`}
                >
                  {card.title}
                </h3>
                <p className="mb-6 leading-relaxed text-gray-300">
                  {card.description}
                </p>

                {card.stats && (
                  <div className="space-y-3">
                    {card.stats.map((stat, statIndex) => (
                      <motion.div
                        key={statIndex}
                        className="flex items-center justify-between"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: statIndex * 0.1 }}
                      >
                        <span className="text-sm text-gray-400">
                          {stat.label}
                        </span>
                        <span
                          className={`text-${card.color}-400 font-semibold`}
                        >
                          {stat.value}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                )}

                {card.features && (
                  <div className="space-y-3">
                    {card.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                      >
                        <div
                          className={`w-2 h-2 bg-${card.color}-400 rounded-full`}
                        ></div>
                        <span className="text-sm text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                )}

                {card.url && (
                  <div className="pt-6 mt-6 border-t border-gray-700">
                    <motion.div
                      className={`inline-flex items-center space-x-2 text-${card.color}-400 font-semibold`}
                      whileHover={{ x: 5 }}
                    >
                      <span>
                        {card.title.includes("Faucet")
                          ? "Visit Faucet"
                          : card.title.includes("Explorer")
                          ? "Explore Blockchain"
                          : card.title.includes("Swap")
                          ? "Start Trading"
                          : "Start Farming"}
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Quick Access Section with enhanced animations */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h3 className="mb-8 text-2xl font-bold" data-aos="fade-up">
              Quick Access
            </motion.h3>
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  name: "faucet.monchain.org",
                  icon: Coins,
                  color: "cyan",
                  url: "https://faucet.monchain.org",
                },
                {
                  name: "explorer.monchain.org",
                  icon: Search,
                  color: "purple",
                  url: "https://explorer.monchain.org",
                },
                {
                  name: "monswap.org",
                  icon: ArrowLeftRight,
                  color: "orange",
                  url: "https://monswap.org",
                },
                {
                  name: "monfarm.org",
                  icon: Sprout,
                  color: "green",
                  url: "https://monfarm.org",
                },
              ].map((link, index) => (
                <motion.button
                  key={index}
                  onClick={() => window.open(link.url, "_blank")}
                  className={`group bg-${link.color}-500/10 border border-${link.color}-500/30 px-6 py-3 rounded-full hover:bg-${link.color}-500/20 transition-all duration-300 flex items-center space-x-2`}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: `0 10px 20px rgba(${
                      link.color === "cyan"
                        ? "6, 182, 212"
                        : link.color === "purple"
                        ? "139, 92, 246"
                        : link.color === "orange"
                        ? "249, 115, 22"
                        : "34, 197, 94"
                    }, 0.3)`,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <link.icon className={`w-4 h-4 text-${link.color}-400`} />
                  </motion.div>
                  <span className={`text-${link.color}-400 font-semibold`}>
                    {link.name}
                  </span>
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ExternalLink
                      className={`w-3 h-3 text-${link.color}-400`}
                    />
                  </motion.div>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20">
        <div className="px-6 mx-auto max-w-7xl">
          <div className="mb-16 text-center" data-aos="fade-up">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
                Advanced Technology Stack
              </span>
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-300">
              Monchain leverages the best of both worlds - Ethereum's
              battle-tested EVM and Cosmos' innovative interoperability
            </p>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {[
                {
                  title: "EVM Compatibility",
                  description:
                    "Full Ethereum Virtual Machine compatibility means developers can deploy existing Solidity smart contracts without any modifications. Use familiar tools like MetaMask, Remix, and Hardhat.",
                  features: [
                    "Solidity & Vyper support",
                    "Ethereum JSON-RPC API",
                    "Web3 libraries compatibility",
                  ],
                  color: "purple",
                  icon: Code,
                },
                {
                  title: "Cosmos Interoperability",
                  description:
                    "Built on Cosmos SDK with IBC protocol support, enabling seamless communication with the entire Cosmos ecosystem and beyond.",
                  features: [
                    "IBC cross-chain transfers",
                    "Tendermint consensus",
                    "Modular architecture",
                  ],
                  color: "cyan",
                  icon: Globe,
                },
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  className={`bg-gradient-to-r from-${tech.color}-500/10 to-${
                    tech.color === "purple" ? "purple" : "cyan"
                  }-500/10 border border-${tech.color}-500/20 rounded-2xl p-8`}
                  data-aos="fade-right"
                  data-aos-delay={index * 200}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: `0 20px 40px rgba(${
                      tech.color === "purple" ? "139, 92, 246" : "6, 182, 212"
                    }, 0.1)`,
                  }}
                >
                  <div className="flex items-center mb-6 space-x-4">
                    <motion.div
                      className={`w-12 h-12 bg-gradient-to-r from-${tech.color}-500 to-${tech.color}-600 rounded-xl flex items-center justify-center`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <tech.icon className="w-6 h-6" />
                    </motion.div>
                    <h3 className="text-2xl font-bold">{tech.title}</h3>
                  </div>
                  <p className="mb-4 leading-relaxed text-gray-300">
                    {tech.description}
                  </p>
                  <motion.ul
                    className="space-y-2 text-sm text-gray-400"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {tech.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        variants={itemVariants}
                        className="flex items-center space-x-2"
                      >
                        <motion.div
                          className={`w-1 h-1 bg-${tech.color}-400 rounded-full`}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: featureIndex * 0.1 }}
                        />
                        <span>• {feature}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="p-8 border bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-3xl border-purple-500/30">
                <div className="space-y-6 text-center">
                  <motion.div
                    className="relative inline-block"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      className="flex items-center justify-center w-32 h-32 text-4xl font-bold rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"
                      animate={{
                        rotate: [0, 360],
                        background: [
                          "linear-gradient(45deg, #8b5cf6, #06b6d4)",
                          "linear-gradient(45deg, #06b6d4, #8b5cf6)",
                          "linear-gradient(45deg, #8b5cf6, #06b6d4)",
                        ],
                      }}
                      transition={{
                        rotate: {
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        },
                        background: { duration: 3, repeat: Infinity },
                      }}
                    >
                      M
                    </motion.div>
                    <motion.div
                      className="absolute flex items-center justify-center w-8 h-8 bg-green-500 rounded-full -top-4 -right-4"
                      animate={pulseAnimation}
                    >
                      <motion.div
                        className="w-3 h-3 bg-white rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    </motion.div>
                  </motion.div>
                  <h4 className="text-2xl font-bold">Monchain Core</h4>
                  <p className="text-gray-300">
                    Hybrid architecture combining EVM execution with Cosmos
                    consensus for optimal performance and interoperability
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 bg-gray-900/30">
        <div className="px-6 mx-auto max-w-7xl">
          <div className="mb-16 text-center" data-aos="fade-up">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text">
                Development Roadmap
              </span>
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-300">
              Our journey to revolutionize blockchain infrastructure with clear
              milestones and transparent progress
            </p>
          </div>

          <div className="relative">
            <motion.div
              className="absolute w-1 h-full transform -translate-x-1/2 left-1/2 bg-gradient-to-b from-purple-500 to-cyan-500"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{ originY: 0 }}
            />

            <div className="space-y-12">
              {roadmapItems.map((item, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    <motion.div
                      className={`bg-gray-900/50 border rounded-2xl p-6 transition-all duration-300 ${
                        item.status === "completed"
                          ? "border-green-500/50"
                          : item.status === "active"
                          ? "border-purple-500/50"
                          : "border-gray-500/30"
                      }`}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: `0 20px 40px rgba(${
                          item.status === "completed"
                            ? "34, 197, 94"
                            : item.status === "active"
                            ? "139, 92, 246"
                            : "107, 114, 128"
                        }, 0.2)`,
                      }}
                    >
                      <div className="flex items-center mb-3 space-x-2">
                        <motion.span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            item.status === "completed"
                              ? "bg-green-500/20 text-green-400"
                              : item.status === "active"
                              ? "bg-purple-500/20 text-purple-400"
                              : "bg-gray-500/20 text-gray-400"
                          }`}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          {item.quarter}
                        </motion.span>
                        {item.status === "completed" && (
                          <motion.span
                            className="text-green-400"
                            initial={{ scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            transition={{ delay: 0.5, type: "spring" }}
                          >
                            ✓
                          </motion.span>
                        )}
                        {item.status === "active" && (
                          <motion.span
                            className="text-purple-400"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                          >
                            ⚡
                          </motion.span>
                        )}
                      </div>
                      <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </motion.div>
                  </div>

                  <motion.div
                    className="relative z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.5, type: "spring" }}
                  >
                    <motion.div
                      className={`w-4 h-4 rounded-full ${
                        item.status === "completed"
                          ? "bg-green-500"
                          : item.status === "active"
                          ? "bg-purple-500"
                          : "bg-gray-500"
                      }`}
                      animate={
                        item.status === "active" ? { scale: [1, 1.3, 1] } : {}
                      }
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>

                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20">
        <div className="px-6 mx-auto max-w-7xl">
          <div className="mb-16 text-center" data-aos="fade-up">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
                Join Our Community
              </span>
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-300">
              Connect with developers, validators, and enthusiasts building the
              future of decentralized infrastructure
            </p>
          </div>

          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              {
                icon: Github,
                title: "GitHub",
                desc: "Contribute to open source",
                members: "2.5K+",
                color: "gray",
              },
              {
                icon: MessageCircle,
                title: "Discord",
                desc: "Join daily discussions",
                members: "15K+",
                color: "indigo",
              },
              {
                icon: Twitter,
                title: "Twitter",
                desc: "Latest updates & news",
                members: "25K+",
                color: "blue",
              },
              {
                icon: BookOpen,
                title: "Documentation",
                desc: "Technical resources",
                members: "Always Updated",
                color: "green",
              },
            ].map((social, index) => (
              <motion.div
                key={index}
                className="p-8 transition-all duration-300 border cursor-pointer group bg-gray-900/50 border-purple-500/20 rounded-2xl hover:border-purple-500/50 hover:bg-gray-900/80"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(139, 92, 246, 0.1)",
                }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <motion.div
                  className="mb-6 text-purple-400 transition-transform duration-300"
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    color: "#06b6d4",
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <social.icon className="w-8 h-8" />
                </motion.div>
                <h3 className="mb-2 text-xl font-bold">{social.title}</h3>
                <p className="mb-4 text-gray-400">{social.desc}</p>
                <motion.div
                  className="font-semibold text-cyan-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {social.members}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <ExternalLink className="w-4 h-4 mt-2 text-gray-500 transition-colors group-hover:text-purple-400" />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-cyan-900/50"></div>
        <motion.div
          className="relative z-10 max-w-4xl px-6 mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="mb-6 text-4xl font-bold md:text-5xl"
            data-aos="fade-up"
          >
            Ready to Build the Future?
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto mb-12 text-xl text-gray-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Join thousands of developers already building on Monchain. Get
            started today with our comprehensive developer tools and
            documentation.
          </motion.p>
          <motion.div
            className="flex flex-col justify-center gap-6 sm:flex-row"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.button
              className="flex items-center justify-center px-10 py-4 space-x-2 text-lg font-semibold transition-all duration-300 rounded-full group bg-gradient-to-r from-purple-500 to-cyan-500"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(139, 92, 246, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start Building</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.button>
            <motion.button
              onClick={() => window.open("https://monswap.org", "_blank")}
              className="flex items-center justify-center px-10 py-4 space-x-2 text-lg font-semibold transition-all duration-300 border-2 border-orange-500 rounded-full hover:bg-orange-500/10"
              variants={itemVariants}
              whileHover={{ scale: 1.05, borderColor: "#f97316" }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowLeftRight className="w-5 h-5" />
              </motion.div>
              <span>Trade on MonSwap</span>
            </motion.button>
            <motion.button
              onClick={() =>
                window.open("https://faucet.monchain.org", "_blank")
              }
              className="flex items-center justify-center px-10 py-4 space-x-2 text-lg font-semibold transition-all duration-300 border-2 rounded-full border-cyan-500 hover:bg-cyan-500/10"
              variants={itemVariants}
              whileHover={{ scale: 1.05, borderColor: "#06b6d4" }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Coins className="w-5 h-5" />
              </motion.div>
              <span>Get Test Tokens</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-purple-500/20">
        <motion.div
          className="px-6 mx-auto max-w-7xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col items-center justify-between md:flex-row">
            <motion.div
              className="flex items-center mb-6 space-x-2 md:mb-0"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="flex items-center justify-center w-10 h-10 text-xl font-bold rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500"
                animate={pulseAnimation}
              >
                M
              </motion.div>
              <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text">
                Monchain
              </span>
            </motion.div>
            <div className="text-center text-gray-400 md:text-right">
              <p>© 2025 Monchain. All rights reserved.</p>
              <p className="mt-2 text-sm">
                Building the future of decentralized infrastructure
              </p>
            </div>
          </div>
        </motion.div>
      </footer>
    </div>
  );
};

export default MonchainLanding;
