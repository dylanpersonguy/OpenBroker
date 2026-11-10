/**
 * Public entry point for embedding OpenBroker.
 *
 * Implement `OpenBrokerAdapter`, hand it to `<OpenBrokerProvider>`, and the
 * terminal runs against your backend — no fork, no patched files.
 */
export { OpenBrokerProvider } from "./provider.tsx";
export {
  getAdapter,
  hasAdapter,
  onAdapterChange,
  setAdapter,
} from "./registry.ts";
export type {
  Account,
  CandleRequest,
  Candle,
  ClosedPosition,
  ConnectionState,
  MarketDataSource,
  MarketEvent,
  OpenBrokerAdapter,
  Order,
  OrderModification,
  Page,
  PlaceOrderInput,
  Position,
  PositionModification,
  Quote,
  StorageDriver,
  Symbol,
  TradingEvent,
  TradingGateway,
  Unsubscribe,
} from "./types.ts";
