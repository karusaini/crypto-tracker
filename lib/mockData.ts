// lib/mockData.ts

export const mockAssets = [
    {
      id: 'btc',
      logo: '/logos/btc.svg',
      name: 'Bitcoin',
      symbol: 'BTC',
      price: 93759.48,
      change1h: 0.43,
      change24h: 0.93,
      change7d: 11.11,
      marketCap: 1861618902186,
      volume24h: 43874950947,
      volumeAsset: '467.81K BTC',
      circulating: '19.85M BTC',
      circulatingPercent: 94.5,
      maxSupply: '21M',
      sparkline: generateSparkline(60000),
    },
    {
      id: 'eth',
      logo: '/logos/eth.svg',
      name: 'Ethereum',
      symbol: 'ETH',
      price: 1802.46,
      change1h: 0.6,
      change24h: 3.21,
      change7d: 13.68,
      marketCap: 217581279327,
      volume24h: 23547469307,
      volumeAsset: '13.05M ETH',
      circulating: '120.71M ETH',
      circulatingPercent: 98.4,
      maxSupply: null,
      sparkline: [1790, 1800, 1815, 1810, 1800, 1795, 1800], // Sparkline example for ETH

    },


    {
      id: 'usdt',
      logo: '/logos/usdt.svg',
      name: 'Tether',
      symbol: 'USDT',
      price: 1802.46,
      change1h: 0.6,
      change24h: 3.21,
      change7d: 13.68,
      marketCap: 217581279327,
      volume24h: 23547469307,
      volumeAsset: '13.05M ETH',
      circulating: '120.71M ETH',
      circulatingPercent: 98.4,
      maxSupply: null,
      sparkline: [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0], // Sparkline for USDT (Stablecoin)

      
    },

    {
      id: 'xrp',
      logo: '/logos/xrp.svg',
      name: 'XRP',
      symbol: 'XRP',
      price: 1802.46,
      change1h: 0.6,
      change24h: 3.21,
      change7d: 13.68,
      marketCap: 217581279327,
      volume24h: 23547469307,
      volumeAsset: '13.05M ETH',
      circulating: '120.71M ETH',
      circulatingPercent: 98.4,
      maxSupply: null,
      sparkline: [0.8, 0.82, 0.83, 0.81, 0.80, 0.81, 0.82], // Sparkline for XRP

      
    },

    {
      id: 'bnb',
      logo: '/logos/bnb.svg',
      name: 'BNB',
      symbol: 'BNB',
      price: 1802.46,
      change1h: 0.6,
      change24h: 3.21,
      change7d: 13.68,
      marketCap: 217581279327,
      volume24h: 23547469307,
      volumeAsset: '13.05M ETH',
      circulating: '120.71M ETH',
      circulatingPercent: 98.4,
      maxSupply: null,
      sparkline: [0.8, 0.82, 0.83, 0.81, 0.80, 0.81, 0.82], // Sparkline for XRP

    },

    {
      id: 'sol',
      logo: '/logos/sol.svg',
      name: 'Solana',
      symbol: 'SOL',
      price: 1802.46,
      change1h: 0.6,
      change24h: 3.21,
      change7d: 13.68,
      marketCap: 217581279327,
      volume24h: 23547469307,
      volumeAsset: '13.05M ETH',
      circulating: '120.71M ETH',
      circulatingPercent: 98.4,
      maxSupply: null,
      sparkline: generateSparkline(3200),

    },

    {
      id: 'ada',
      logo: '/logos/ada.svg',
      name: 'Cardano',
      symbol: 'ADA',
      price: 0.78,
      change1h: -0.11,
      change24h: 0.73,
      change7d: 5.65,
      marketCap: 27638451792,
      volume24h: 867345193,
      volumeAsset: '1.11B ADA',
      circulating: '35.4B ADA',
      circulatingPercent: 79.9,
      maxSupply: '45B',
      sparkline: generateSparkline(3200),

    },
    {
      id: 'doge',
      logo: '/logos/doge.svg',
      name: 'Dogecoin',
      symbol: 'DOGE',
      price: 0.154,
      change1h: 0.26,
      change24h: 1.34,
      change7d: 8.29,
      marketCap: 22167543051,
      volume24h: 1543289172,
      volumeAsset: '10.01B DOGE',
      circulating: '143.2B DOGE',
      circulatingPercent: null,
      maxSupply: null,
      sparkline: generateSparkline(135),

    },
    {
      id: 'avax',
      logo: '/logos/avax.svg',
      name: 'Avalanche',
      symbol: 'AVAX',
      price: 46.73,
      change1h: 0.42,
      change24h: 2.04,
      change7d: 6.32,
      marketCap: 17492836528,
      volume24h: 1081729374,
      volumeAsset: '23.13M AVAX',
      circulating: '374M AVAX',
      circulatingPercent: 53.4,
      maxSupply: '720M',
      sparkline: generateSparkline(0.15),

    },
    {
      id: 'dot',
      logo: '/logos/dot.svg',
      name: 'Polkadot',
      symbol: 'DOT',
      price: 9.84,
      change1h: 0.19,
      change24h: 1.56,
      change7d: 4.78,
      marketCap: 12938275024,
      volume24h: 643219384,
      volumeAsset: '65.36M DOT',
      circulating: '1.31B DOT',
      circulatingPercent: null,
      maxSupply: null,
      sparkline: generateSparkline(0.15),

    },
    {
      id: 'matic',
      logo: '/logos/matic.svg',
      name: 'Polygon',
      symbol: 'MATIC',
      price: 1.29,
      change1h: -0.04,
      change24h: 1.01,
      change7d: 6.91,
      marketCap: 11923847382,
      volume24h: 732194381,
      volumeAsset: '567.23M MATIC',
      circulating: '9.25B MATIC',
      circulatingPercent: 92.5,
      maxSupply: '10B',
      sparkline: generateSparkline(0.61),

      
    }  


    
  ]


 
function generateSparkline(baseValue: number): { time: number; value: number }[] {
  const points = 30;
  const spark = [];

  for (let i = 0; i < points; i++) {
    const change = (Math.random() - 0.5) * 0.02; // ±1%
    const value = baseValue * (1 + change);
    spark.push({ time: i, value: parseFloat(value.toFixed(2)) });
  }

  return spark;
}
  