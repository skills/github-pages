import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const DougfordCoin = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                <img src="/mnt/data/IMG_0011.jpeg" alt="Dougford Coin Logo" className="w-40 h-40 rounded-full shadow-lg" />
            </motion.div>

            <Card className="w-full max-w-3xl mt-8 bg-white p-6 rounded-2xl shadow-2xl">
                <CardContent>
                    <h1 className="text-3xl font-bold text-center mb-4">Dougford Coin: To The Moon! 🚀🌕</h1>
                    <p className="text-gray-700 mb-6">Dougford Coin is the latest generational meme coin that turns chaos into fun and profit! Inspired by battles between powerful giants over tariffs and power struggles, Dougford Coin is a playful representation of how their fights impact everyone else. Now, you get to join the fight — in the trading arena!</p>
                    <p className="text-gray-700 mb-6">The goal? To bring the battle into the real world where the smartest traders compete for glory and riches. This is not just another meme coin. It’s a trading revolution! Prove your skills, dominate the market, and make it to the moon!</p>

                    <h2 className="text-xl font-bold mb-2">How to Trade:</h2>
                    <p className="text-gray-700 mb-6">You can purchase and trade Dougford Coin on <strong>Dexscreener</strong> and other popular meme coin platforms. Play your cards right and see your investment soar to the moon! 🌕💸💪</p>

                    <div className="flex flex-col items-center mt-4">
                        <a href="https://t.me/dougfordcoinsafe4u" target="_blank">
                            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 mt-4 rounded-xl">Contact our X</Button>
                        </a>
                        <a href="https://doughcoin.store" target="_blank" className="text-blue-600 mt-4">Visit our Official Website: doughcoin.store</a>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default DougfordCoin;
