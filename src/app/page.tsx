"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Code,
  DollarSign,
  Droplets,
  HandCoins,
  Users,
  Copy,
  Check,
} from "lucide-react";

import { Button } from "~/components/ui/button";
import Image from "next/image";
import { RaydiumPoolInfoResponse } from "~/types/api";
import Link from "next/link";

/**
 * 
 * 210,000,000 total supply

5% = 10,500,000 - keep

20% = 42,000,000 - dog related charities in hot countries 

60% = 126,000,000 - liquidity pools

15% = 31,500,000 - community  
 * @returns 
 */

const POOL_ID = "HCTzvLNAhE2tR2a27kwqtsKUGfq6stnqXmQ26svLQVrM";
const API_URL = "https://api-v3.raydium.io/pools/info/ids";

const getPrice = async () => {
  const url = `${API_URL}?ids=${POOL_ID}`;
  const response = await fetch(url);
  const data: RaydiumPoolInfoResponse = await response.json();
  return data?.data?.[0]?.price;
};

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [price, setPrice] = useState<number | null>(null);
  const [priceChange, setPriceChange] = useState(0);

  useEffect(() => {
    const handlePriceChange = async () => {
      const quantityPerDollar = await getPrice();
      const pricePerDollar = 1 / quantityPerDollar;

      if (pricePerDollar !== price) {
        console.log("price changed", pricePerDollar, price);
        setPrice(pricePerDollar);
        setPriceChange(pricePerDollar - (price || 0));
      }
    };

    if (price === null) {
      (async () => {
        await handlePriceChange();
      })();
    }

    const interval = setInterval(async () => {
      await handlePriceChange();
    }, 20000);

    return () => clearInterval(interval);
  }, [price]);

  return (
    <div className="pt-32 min-h-screen bg-gradient-to-br from-purple-600 via-orange-500 to-red-600 flex flex-col items-center justify-center p-4 text-white">
      <h1 className="text-6xl font-black mb-4 text-center tracking-tighter uppercase text-shadow-lg shadow-[rgba(0,0,0,0.25)]">
        Hottest Dog Token
      </h1>

      <p className="text-2xl mb-8 text-center">
        Help this dog cool the F*CK down!
      </p>

      <motion.div
        className="w-48 h-48 mb-8 shadow-lg flex items-center justify-center overflow-hidden rounded-full border-4 border-red-400"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        <motion.span
          className="text-8xl"
          animate={{ y: [-20, 0, -20] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        ></motion.span>
        <Image
          src="/hog-token.jpg"
          alt="hotdog"
          width={100}
          height={100}
          className="w-full h-full"
        />
      </motion.div>

      <div className="text-xl md:text-3xl font-bold mb-4">
        1 HOG = {!price ? "Loading..." : `${price.toFixed(8)} USD`}
        <span
          className={`ml-2 ${
            priceChange >= 0 ? "text-green-300" : "text-red-300"
          }`}
        >
          {priceChange >= 0 ? "↑" : "↓"}
        </span>
      </div>

      <Link
        href={
          "https://raydium.io/swap/?inputMint=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v&outputMint=HjVmFPNkRpobGEihfyhTxEJjrQe8R7ZZpAWTTBtZwgsH"
        }
        target="_blank"
        rel="noopener noreferrer"
        title="Buy on Raydium"
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 items-center rounded-full text-xl shadow-lg transition-transform transform hover:scale-105 whitespace-nowrap flex"
      >
        <DollarSign className="mr-2 h-6 w-6" /> Get It While It&apos;s Hot!
      </Link>

      <div className="mt-12 text-center">
        <motion.div
          className="my-8  md:text-xl lg:text-2xl font-bold uppercase"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          🔥 Total Supply: 210,000,000 🔥
        </motion.div>
        <ul className="sm:text-xl flex flex-col gap-4 text-left">
          <motion.li
            className="flex items-center gap-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className="flex shrink-0 items-center w-[60px] h-[60px] bg-gradient-to-br from-purple-400 to-purple-700 rounded-full justify-center">
              <HandCoins className="inline-block" />
            </span>
            20% (40m) of supply to charities
          </motion.li>
          <motion.li
            className="gap-6 flex items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            <span className="flex shrink-0 items-center w-[60px] h-[60px] bg-gradient-to-br from-purple-400 to-purple-700 rounded-full justify-center">
              <Droplets className="inline-block" />
            </span>
            60% (126m) of supply to liquidity pools
          </motion.li>
          <motion.li
            className="gap-6 flex items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
          >
            <span className="flex shrink-0 items-center w-[60px] h-[60px] bg-gradient-to-br from-purple-400 to-purple-700 rounded-full justify-center">
              <Users className="inline-block" />
            </span>
            15% (31.5m) of supply to community
          </motion.li>
          <motion.li
            className="gap-6 flex items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
          >
            <span className="flex shrink-0 items-center w-[60px] h-[60px] bg-gradient-to-br from-purple-400 to-purple-700 rounded-full justify-center">
              <Code className="inline-block" />
            </span>
            5% (10.5m) of supply to for development
          </motion.li>
        </ul>
      </div>

      <div className="mt-12 text-xl flex items-center overflow-hidden max-w-full">
        <div className="mr-4 min-w-10">
          <Image src="/sol-icon.png" alt="solana" width={40} height={40} />
        </div>
        <div className="flex flex-col overflow-hidden">
          <div className="flex items-center">
            <span className="text-sm">Contact Address:</span>
            <Button
              onClick={() => {
                navigator.clipboard.writeText(
                  "HCTzvLNAhE2tR2a27kwqtsKUGfq6stnqXmQ26svLQVrM"
                );
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
              disabled={copied}
              className="ml-auto p-1 h-[unset] self-center min-h-0 rounded hover:bg-secondary/80 transition-colors bg-purple-400 hover:bg-purple-300 text-white"
              title="Copy to clipboard"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </Button>
          </div>
          <span className="font-bold text-xl max-w-full overflow-x-auto">
            HCTzvLNAhE2tR2a27kwqtsKUGfq6stnqXmQ26svLQVrM
          </span>
        </div>
      </div>

      <p className="mt-40 text-sm opacity-75">
        Disclaimer: This is a meme coin. There is no guarantee of any returns.
      </p>
    </div>
  );
}
