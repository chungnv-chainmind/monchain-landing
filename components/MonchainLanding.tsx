"use client"

import React, { useState, useEffect } from 'react';
import { ChevronDown, Shield, Zap, Globe, Users, Code, ArrowRight, Menu, X, Github, Twitter, MessageCircle, BookOpen, ExternalLink, Coins, Search, Database, Wallet, ArrowLeftRight, Sprout, Network, Copy } from 'lucide-react';

const MonchainLanding = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [copiedRPC, setCopiedRPC] = useState(false);
    const [copiedChainId, setCopiedChainId] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const copyToClipboard = (text: string, type: 'rpc' | 'chainId') => {
        navigator.clipboard.writeText(text);
        if (type === 'rpc') {
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
            description: "Sub-second finality with high throughput up to 10,000 TPS through optimized consensus mechanism"
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Enterprise Security",
            description: "Military-grade security with advanced cryptographic protocols and formal verification"
        },
        {
            icon: <Code className="w-8 h-8" />,
            title: "EVM Compatible",
            description: "Full Ethereum compatibility - deploy your existing dApps without modification"
        },
        {
            icon: <Globe className="w-8 h-8" />,
            title: "Cosmos Interoperability",
            description: "Seamless cross-chain communication through IBC protocol integration"
        }
    ];

    const stats = [
        { value: "10,000+", label: "TPS Throughput" },
        { value: "<1s", label: "Block Finality" },
        { value: "$0.001", label: "Transaction Cost" },
        { value: "99.9%", label: "Uptime" }
    ];

    const roadmapItems = [
        {
            quarter: "Q2 2025",
            title: "Testnet Launch",
            description: "Public testnet with developer tools and documentation",
            status: "completed"
        },
        {
            quarter: "Q3 2025",
            title: "Mainnet Beta",
            description: "Limited mainnet launch with validator onboarding",
            status: "active"
        },
        {
            quarter: "Q4 2025",
            title: "Full Mainnet",
            description: "Complete mainnet deployment with all features",
            status: "upcoming"
        },
        {
            quarter: "Q1 2026",
            title: "Ecosystem Expansion",
            description: "DeFi protocols and cross-chain bridges integration",
            status: "upcoming"
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white overflow-hidden">
            {/* Navigation */}
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-black/90 backdrop-blur-md border-b border-purple-500/20' : 'bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center font-bold text-xl">
                                M
                            </div>
                            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Monchain
              </span>
                        </div>

                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#features" className="hover:text-purple-400 transition-colors">Features</a>
                            <a href="#technology" className="hover:text-purple-400 transition-colors">Technology</a>
                            <a href="#ecosystem" className="hover:text-purple-400 transition-colors">Ecosystem</a>
                            <a href="#roadmap" className="hover:text-purple-400 transition-colors">Roadmap</a>
                            <a href="#community" className="hover:text-purple-400 transition-colors">Community</a>
                            <button className="bg-gradient-to-r from-purple-500 to-cyan-500 px-6 py-2 rounded-full hover:scale-105 transition-transform font-semibold">
                                Get Started
                            </button>
                        </div>

                        <button
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-black/95 backdrop-blur-md border-b border-purple-500/20">
                        <div className="px-6 py-4 space-y-4">
                            <a href="#features" className="block hover:text-purple-400 transition-colors">Features</a>
                            <a href="#technology" className="block hover:text-purple-400 transition-colors">Technology</a>
                            <a href="#ecosystem" className="block hover:text-purple-400 transition-colors">Ecosystem</a>
                            <a href="#roadmap" className="block hover:text-purple-400 transition-colors">Roadmap</a>
                            <a href="#community" className="block hover:text-purple-400 transition-colors">Community</a>
                            <button className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 px-6 py-2 rounded-full font-semibold">
                                Get Started
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"></div>

                {/* Animated Background Elements */}
                <div className="absolute inset-0">
                    {isClient && [...Array(50)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-purple-400 rounded-full animate-pulse"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 3}s`,
                                animationDuration: `${2 + Math.random() * 3}s`
                            }}
                        />
                    ))}
                </div>

                <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
                    <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-semibold mb-6">
              🚀 Next-Generation Blockchain Platform
            </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              Monchain
            </span>
                        <br />
                        <span className="text-white">The Future of</span>
                        <br />
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Decentralized Infrastructure
            </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Monchain combines the power of EVM compatibility with Cosmos interoperability,
                        delivering lightning-fast transactions and unlimited scalability for the next generation of dApps.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                        <button className="group bg-gradient-to-r from-purple-500 to-cyan-500 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                            <span>Build on Monchain</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="border-2 border-purple-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-500/10 transition-all duration-300 flex items-center space-x-2">
                            <BookOpen className="w-5 h-5" />
                            <span>Documentation</span>
                        </button>
                        <button
                            onClick={() => window.open('https://faucet.monchain.org', '_blank')}
                            className="border-2 border-cyan-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300 flex items-center space-x-2"
                        >
                            <Coins className="w-5 h-5" />
                            <span>Get Testnet Tokens</span>
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <ChevronDown className="w-8 h-8 text-purple-400" />
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Revolutionary Features
              </span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Built for the future of decentralized applications with cutting-edge technology and developer-first approach
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group bg-gray-900/50 border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/50 hover:bg-gray-900/80 transition-all duration-300 hover:scale-105"
                            >
                                <div className="text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ecosystem Section */}
            <section id="ecosystem" className="py-20 bg-gray-900/30">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Monchain Ecosystem
              </span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Complete suite of tools and services to help developers build, test, and deploy applications on Monchain
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Faucet Card */}
                        <div className="group bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-500/60 hover:scale-105 transition-all duration-300 cursor-pointer"
                             onClick={() => window.open('https://faucet.monchain.org', '_blank')}>
                            <div className="flex items-center justify-between mb-6">
                                <div className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                                    <Coins className="w-12 h-12" />
                                </div>
                                <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-cyan-300">Testnet Faucet</h3>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                Get free testnet tokens instantly to start building and testing your dApps on Monchain testnet.
                            </p>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-400">Daily Limit:</span>
                                    <span className="text-cyan-400 font-semibold">1,000 MON</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-400">Request Cooldown:</span>
                                    <span className="text-cyan-400 font-semibold">24 hours</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-400">Network:</span>
                                    <span className="text-cyan-400 font-semibold">Testnet</span>
                                </div>
                            </div>
                            <div className="mt-6 pt-6 border-t border-cyan-500/20">
                                <div className="inline-flex items-center space-x-2 text-cyan-400 font-semibold">
                                    <span>Visit Faucet</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </div>

                        {/* Explorer Card */}
                        <div className="group bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-8 hover:border-purple-500/60 hover:scale-105 transition-all duration-300 cursor-pointer"
                             onClick={() => window.open('https://explorer.monchain.org', '_blank')}>
                            <div className="flex items-center justify-between mb-6">
                                <div className="text-purple-400 group-hover:scale-110 transition-transform duration-300">
                                    <Search className="w-12 h-12" />
                                </div>
                                <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-purple-400 transition-colors" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-purple-300">Block Explorer</h3>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                Explore transactions, blocks, and smart contracts on Monchain with our comprehensive blockchain explorer.
                            </p>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-400">Real-time Data:</span>
                                    <span className="text-green-400 font-semibold">✓ Live</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-400">API Access:</span>
                                    <span className="text-purple-400 font-semibold">Available</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-400">Contract Verification:</span>
                                    <span className="text-purple-400 font-semibold">Supported</span>
                                </div>
                            </div>
                            <div className="mt-6 pt-6 border-t border-purple-500/20">
                                <div className="inline-flex items-center space-x-2 text-purple-400 font-semibold">
                                    <span>Explore Blockchain</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </div>

                        {/* MonSwap Card */}
                        <div className="group bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-2xl p-8 hover:border-orange-500/60 hover:scale-105 transition-all duration-300 cursor-pointer"
                             onClick={() => window.open('https://monswap.org', '_blank')}>
                            <div className="flex items-center justify-between mb-6">
                                <div className="text-orange-400 group-hover:scale-110 transition-transform duration-300">
                                    <ArrowLeftRight className="w-12 h-12" />
                                </div>
                                <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-orange-400 transition-colors" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-orange-300">MonSwap DEX</h3>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                Trade tokens seamlessly with our native DEX. Low fees, high liquidity, and instant swaps on Monchain.
                            </p>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-400">Trading Fee:</span>
                                    <span className="text-orange-400 font-semibold">0.3%</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-400">Supported Pairs:</span>
                                    <span className="text-orange-400 font-semibold">50+</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-400">24h Volume:</span>
                                    <span className="text-orange-400 font-semibold">$2.5M</span>
                                </div>
                            </div>
                            <div className="mt-6 pt-6 border-t border-orange-500/20">
                                <div className="inline-flex items-center space-x-2 text-orange-400 font-semibold">
                                    <span>Start Trading</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </div>

                        {/* MonFarm Card */}
                        <div className="group bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-2xl p-8 hover:border-green-500/60 hover:scale-105 transition-all duration-300 cursor-pointer"
                             onClick={() => window.open('https://monfarm.org', '_blank')}>
                            <div className="flex items-center justify-between mb-6">
                                <div className="text-green-400 group-hover:scale-110 transition-transform duration-300">
                                    <Sprout className="w-12 h-12" />
                                </div>
                                <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-green-400 transition-colors" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-green-300">MonFarm DeFi</h3>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                Stake MON tokens and provide liquidity to earn rewards. Multiple farming pools with competitive APY rates.
                            </p>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-400">Max APY:</span>
                                    <span className="text-green-400 font-semibold">125%</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-400">Active Pools:</span>
                                    <span className="text-green-400 font-semibold">12</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-400">TVL:</span>
                                    <span className="text-green-400 font-semibold">$8.2M</span>
                                </div>
                            </div>
                            <div className="mt-6 pt-6 border-t border-green-500/20">
                                <div className="inline-flex items-center space-x-2 text-green-400 font-semibold">
                                    <span>Start Farming</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </div>

                        {/* RPC Information Card */}
                        <div className="group bg-gradient-to-br from-indigo-500/10 to-blue-500/10 border border-indigo-500/30 rounded-2xl p-8 hover:border-indigo-500/60 transition-all duration-300">
                            <div className="text-indigo-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Network className="w-12 h-12" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-indigo-300">Network Config</h3>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                Add Monchain Testnet to your wallet with these configuration details.
                            </p>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-sm text-gray-400">RPC URL:</span>
                                        <button
                                            onClick={() => copyToClipboard('https://rpc.monchain.org/', 'rpc')}
                                            className="text-indigo-400 hover:text-indigo-300 transition-colors"
                                        >
                                            <Copy className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <div className="bg-gray-800/50 rounded-lg p-3 text-sm font-mono text-indigo-300 break-all">
                                        https://rpc.monchain.org/
                                    </div>
                                    {copiedRPC && <span className="text-green-400 text-xs">Copied!</span>}
                                </div>
                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-sm text-gray-400">Chain ID:</span>
                                        <button
                                            onClick={() => copyToClipboard('16789', 'chainId')}
                                            className="text-indigo-400 hover:text-indigo-300 transition-colors"
                                        >
                                            <Copy className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <div className="bg-gray-800/50 rounded-lg p-3 text-sm font-mono text-indigo-300">
                                        16789
                                    </div>
                                    {copiedChainId && <span className="text-green-400 text-xs">Copied!</span>}
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-400">Currency Symbol:</span>
                                    <span className="text-indigo-400 font-semibold">MON</span>
                                </div>
                            </div>
                        </div>

                        {/* Developer Tools Card */}
                        <div className="group bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-500/30 rounded-2xl p-8 hover:border-teal-500/60 hover:scale-105 transition-all duration-300">
                            <div className="text-teal-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Code className="w-12 h-12" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-teal-300">Developer Suite</h3>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                Complete development toolkit with SDKs, APIs, and documentation for building on Monchain.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                                    <span className="text-sm text-gray-300">JSON-RPC API</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                                    <span className="text-sm text-gray-300">JavaScript SDK</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                                    <span className="text-sm text-gray-300">Smart Contract Templates</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                                    <span className="text-sm text-gray-300">Testing Framework</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Access Section */}
                    <div className="mt-16 text-center">
                        <h3 className="text-2xl font-bold mb-8">Quick Access</h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button
                                onClick={() => window.open('https://faucet.monchain.org', '_blank')}
                                className="group bg-cyan-500/10 border border-cyan-500/30 px-6 py-3 rounded-full hover:bg-cyan-500/20 transition-all duration-300 flex items-center space-x-2"
                            >
                                <Coins className="w-4 h-4 text-cyan-400" />
                                <span className="text-cyan-400 font-semibold">faucet.monchain.org</span>
                                <ExternalLink className="w-3 h-3 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button
                                onClick={() => window.open('https://explorer.monchain.org', '_blank')}
                                className="group bg-purple-500/10 border border-purple-500/30 px-6 py-3 rounded-full hover:bg-purple-500/20 transition-all duration-300 flex items-center space-x-2"
                            >
                                <Search className="w-4 h-4 text-purple-400" />
                                <span className="text-purple-400 font-semibold">explorer.monchain.org</span>
                                <ExternalLink className="w-3 h-3 text-purple-400 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button
                                onClick={() => window.open('https://monswap.org', '_blank')}
                                className="group bg-orange-500/10 border border-orange-500/30 px-6 py-3 rounded-full hover:bg-orange-500/20 transition-all duration-300 flex items-center space-x-2"
                            >
                                <ArrowLeftRight className="w-4 h-4 text-orange-400" />
                                <span className="text-orange-400 font-semibold">monswap.org</span>
                                <ExternalLink className="w-3 h-3 text-orange-400 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button
                                onClick={() => window.open('https://monfarm.org', '_blank')}
                                className="group bg-green-500/10 border border-green-500/30 px-6 py-3 rounded-full hover:bg-green-500/20 transition-all duration-300 flex items-center space-x-2"
                            >
                                <Sprout className="w-4 h-4 text-green-400" />
                                <span className="text-green-400 font-semibold">monfarm.org</span>
                                <ExternalLink className="w-3 h-3 text-green-400 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technology Section */}
            <section id="technology" className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Advanced Technology Stack
              </span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Monchain leverages the best of both worlds - Ethereum's battle-tested EVM and Cosmos' innovative interoperability
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-2xl p-8">
                                <div className="flex items-center space-x-4 mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                                        <Code className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold">EVM Compatibility</h3>
                                </div>
                                <p className="text-gray-300 leading-relaxed mb-4">
                                    Full Ethereum Virtual Machine compatibility means developers can deploy existing Solidity smart contracts
                                    without any modifications. Use familiar tools like MetaMask, Remix, and Hardhat.
                                </p>
                                <ul className="text-sm text-gray-400 space-y-2">
                                    <li>• Solidity & Vyper support</li>
                                    <li>• Ethereum JSON-RPC API</li>
                                    <li>• Web3 libraries compatibility</li>
                                </ul>
                            </div>

                            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-8">
                                <div className="flex items-center space-x-4 mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center">
                                        <Globe className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold">Cosmos Interoperability</h3>
                                </div>
                                <p className="text-gray-300 leading-relaxed mb-4">
                                    Built on Cosmos SDK with IBC protocol support, enabling seamless communication with
                                    the entire Cosmos ecosystem and beyond.
                                </p>
                                <ul className="text-sm text-gray-400 space-y-2">
                                    <li>• IBC cross-chain transfers</li>
                                    <li>• Tendermint consensus</li>
                                    <li>• Modular architecture</li>
                                </ul>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-3xl p-8 border border-purple-500/30">
                                <div className="text-center space-y-6">
                                    <div className="relative inline-block">
                                        <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-4xl font-bold animate-spin-slow">
                                            M
                                        </div>
                                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                                        </div>
                                    </div>
                                    <h4 className="text-2xl font-bold">Monchain Core</h4>
                                    <p className="text-gray-300">
                                        Hybrid architecture combining EVM execution with Cosmos consensus for optimal performance and interoperability
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Roadmap Section */}
            <section id="roadmap" className="py-20 bg-gray-900/30">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Development Roadmap
              </span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Our journey to revolutionize blockchain infrastructure with clear milestones and transparent progress
                        </p>
                    </div>

                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-cyan-500"></div>

                        <div className="space-y-12">
                            {roadmapItems.map((item, index) => (
                                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                                        <div className={`bg-gray-900/50 border ${
                                            item.status === 'completed' ? 'border-green-500/50' :
                                                item.status === 'active' ? 'border-purple-500/50' :
                                                    'border-gray-500/30'
                                        } rounded-2xl p-6 hover:scale-105 transition-transform duration-300`}>
                                            <div className="flex items-center space-x-2 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            item.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                                item.status === 'active' ? 'bg-purple-500/20 text-purple-400' :
                                    'bg-gray-500/20 text-gray-400'
                        }`}>
                          {item.quarter}
                        </span>
                                                {item.status === 'completed' && <span className="text-green-400">✓</span>}
                                                {item.status === 'active' && <span className="text-purple-400">⚡</span>}
                                            </div>
                                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                            <p className="text-gray-400">{item.description}</p>
                                        </div>
                                    </div>

                                    <div className="relative z-10">
                                        <div className={`w-4 h-4 rounded-full ${
                                            item.status === 'completed' ? 'bg-green-500' :
                                                item.status === 'active' ? 'bg-purple-500 animate-pulse' :
                                                    'bg-gray-500'
                                        }`}></div>
                                    </div>

                                    <div className="w-1/2"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Community Section */}
            <section id="community" className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Join Our Community
              </span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Connect with developers, validators, and enthusiasts building the future of decentralized infrastructure
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: <Github className="w-8 h-8" />, title: "GitHub", desc: "Contribute to open source", members: "2.5K+" },
                            { icon: <MessageCircle className="w-8 h-8" />, title: "Discord", desc: "Join daily discussions", members: "15K+" },
                            { icon: <Twitter className="w-8 h-8" />, title: "Twitter", desc: "Latest updates & news", members: "25K+" },
                            { icon: <BookOpen className="w-8 h-8" />, title: "Documentation", desc: "Technical resources", members: "Always Updated" }
                        ].map((social, index) => (
                            <div key={index} className="group bg-gray-900/50 border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/50 hover:bg-gray-900/80 transition-all duration-300 hover:scale-105 cursor-pointer">
                                <div className="text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {social.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{social.title}</h3>
                                <p className="text-gray-400 mb-4">{social.desc}</p>
                                <div className="text-cyan-400 font-semibold">{social.members}</div>
                                <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-purple-400 transition-colors mt-2" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-cyan-900/50"></div>
                <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Ready to Build the Future?
                    </h2>
                    <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                        Join thousands of developers already building on Monchain. Get started today with our comprehensive developer tools and documentation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button className="group bg-gradient-to-r from-purple-500 to-cyan-500 px-10 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                            <span>Start Building</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={() => window.open('https://monswap.org', '_blank')}
                            className="border-2 border-orange-500 px-10 py-4 rounded-full text-lg font-semibold hover:bg-orange-500/10 transition-all duration-300 flex items-center justify-center space-x-2"
                        >
                            <ArrowLeftRight className="w-5 h-5" />
                            <span>Trade on MonSwap</span>
                        </button>
                        <button
                            onClick={() => window.open('https://faucet.monchain.org', '_blank')}
                            className="border-2 border-cyan-500 px-10 py-4 rounded-full text-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center space-x-2"
                        >
                            <Coins className="w-5 h-5" />
                            <span>Get Test Tokens</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t border-purple-500/20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center space-x-2 mb-6 md:mb-0">
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center font-bold text-xl">
                                M
                            </div>
                            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Monchain
              </span>
                        </div>
                        <p className="text-gray-400 text-center md:text-right">
                            <p>© 2025 Monchain. All rights reserved.</p>
                            <p className="text-sm mt-2">Building the future of decentralized infrastructure</p>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default MonchainLanding;