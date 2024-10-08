export type RaydiumPoolInfoResponse = {
  id: string;
  success: boolean;
  data: RaydiumPoolInfo[];
};

export type RaydiumPoolInfo = {
  type: string;
  programId: string;
  id: string;
  mintA: Mint;
  mintB: Mint;
  rewardDefaultPoolInfos: string;
  rewardDefaultInfos: unknown[];
  price: number;
  mintAmountA: number;
  mintAmountB: number;
  feeRate: number;
  openTime: string;
  tvl: number;
  day: Day;
  week: Day;
  month: Day;
  pooltype: unknown[];
  farmUpcomingCount: number;
  farmOngoingCount: number;
  farmFinishedCount: number;
  config: Config;
  burnPercent: number;
};

export type Config = {
  id: string;
  index: number;
  protocolFeeRate: number;
  tradeFeeRate: number;
  tickSpacing: number;
  fundFeeRate: number;
  defaultRange: number;
  defaultRangePoint: number[];
};

export type Day = {
  volume: number;
  volumeQuote: number;
  volumeFee: number;
  apr: number;
  feeApr: number;
  priceMin: number;
  priceMax: number;
  rewardApr: unknown[];
};

export type Mint = {
  chainId: number;
  address: string;
  programId: string;
  logoURI: string;
  symbol: string;
  name: string;
  decimals: number;
  tags: string[];
  extensions: Record<string, unknown>;
};
