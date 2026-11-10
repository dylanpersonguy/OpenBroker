/**
 * OpenBroker — an embeddable trading terminal.
 *
 * ```tsx
 * import { OpenBrokerProvider, Terminal } from "@dylanpersonguy/openbroker";
 * import { createDemoAdapter } from "@dylanpersonguy/openbroker/demo";
 * import "@dylanpersonguy/openbroker/style.css";
 *
 * <OpenBrokerProvider adapter={createDemoAdapter()}>
 *   <Terminal />
 * </OpenBrokerProvider>;
 * ```
 *
 * Point it at your own backend by implementing `OpenBrokerAdapter`, and compose
 * your own layout from the individual panels. Neither requires forking.
 */
export * from "./adapter/index.ts";
export * from "./terminal/index.ts";
export type { OpenBrokerProviderProps } from "./adapter/provider.tsx";
export { onNotification, type Notification } from "./notifications.ts";
export type { Candle, Order, Position, Symbol, PlaceOrderInput } from "./services/schemas.ts";
// Types only: the Hyperliquid broker itself is not part of the core entry so
// the package does not pull wallet and exchange dependencies into every host.
// Use `createHyperliquidAdapter` from src/hyperliquid/adapter.ts when building the app.
export type { HyperliquidAdapter, HyperliquidAdapterOptions } from "./hyperliquid/adapter.ts";
