"use client";

import {
  createContext,
  useContext,
  useId,
  useMemo,
  type ComponentProps,
  type CSSProperties,
} from "react";
import * as RechartsPrimitive from "recharts";

import { cn } from "@/lib/utils";

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const;

export type ChartConfig = Record<
  string,
  {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  )
>;

interface ChartContextProps {
  config: ChartConfig;
}

const ChartContext = createContext<ChartContextProps | null>(null);

/** @returns The chart context. */
function useChart() {
  const context = useContext(ChartContext);

  if (context == null) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }

  return context;
}

/**
 * @param props The props for the ChartContainer component.
 * @param props.id The id for the ChartContainer component.
 * @param props.className The class name for the ChartContainer component.
 * @param props.children The children for the ChartContainer component.
 * @param props.config The config for the ChartContainer component.
 * @returns The ChartContainer component.
 */
function ChartContainer({
  id,
  className,
  children,
  config,
  ...props
}: ComponentProps<"div"> & {
  config: ChartConfig;
  children: ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>["children"];
}) {
  const uniqueId = useId();
  const chartId = `chart-${id != null || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        className={cn(
          "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
          className,
        )}
        data-chart={chartId}
        data-slot="chart"
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>{children}</RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
}

/**
 * @param props The props for the ChartStyle component.
 * @param props.id The id for the ChartStyle component.
 * @param props.config The config for the ChartStyle component.
 * @returns The ChartStyle component.
 */
const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(
    ([, config]) => config.theme != null || config.color != null,
  );

  if (colorConfig.length === 0) {
    return null;
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color = itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ?? itemConfig.color;
    return color != null ? `  --color-${key}: ${color};` : null;
  })
  .join("\n")}
}
`,
          )
          .join("\n"),
      }}
    />
  );
};

const ChartTooltip = RechartsPrimitive.Tooltip;

/**
 * @param props The props for the ChartTooltipContent component.
 * @param props.active The active for the ChartTooltipContent component.
 * @param props.payload The payload for the ChartTooltipContent component.
 * @param props.className The class name for the ChartTooltipContent component.
 * @param props.indicator The indicator for the ChartTooltipContent component.
 * @param props.hideLabel The hideLabel for the ChartTooltipContent component.
 * @param props.hideIndicator The hideIndicator for the ChartTooltipContent component.
 * @param props.label The label for the ChartTooltipContent component.
 * @param props.labelFormatter The labelFormatter for the ChartTooltipContent component.
 * @param props.labelClassName The labelClassName for the ChartTooltipContent component.
 * @param props.formatter The formatter for the ChartTooltipContent component.
 * @param props.color The color for the ChartTooltipContent component.
 * @param props.nameKey The nameKey for the ChartTooltipContent component.
 * @param props.labelKey The labelKey for the ChartTooltipContent component.
 * @returns The ChartTooltipContent component.
 */
function ChartTooltipContent({
  active,
  payload,
  className,
  indicator = "dot",
  hideLabel = false,
  hideIndicator = false,
  label,
  labelFormatter,
  labelClassName,
  formatter,
  color,
  nameKey,
  labelKey,
}: React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
  React.ComponentProps<"div"> & {
    hideLabel?: boolean;
    hideIndicator?: boolean;
    indicator?: "line" | "dot" | "dashed";
    nameKey?: string;
    labelKey?: string;
  }) {
  const { config } = useChart();

  // eslint-disable-next-line complexity -- This is a complex component.
  const tooltipLabel = useMemo(() => {
    if (hideLabel || payload == null || payload.length === 0) {
      return null;
    }

    const [item] = payload;
    const key = `${labelKey ?? item.dataKey ?? item.name ?? "value"}`;
    const itemConfig = getPayloadConfigFromPayload(config, item, key);
    const value =
      labelKey == null && typeof label === "string"
        ? (config[label].label ?? label)
        : itemConfig?.label;

    if (labelFormatter != null) {
      return (
        <div className={cn("font-medium", labelClassName)}>{labelFormatter(value, payload)}</div>
      );
    }

    if (value == null) {
      return null;
    }

    return <div className={cn("font-medium", labelClassName)}>{value}</div>;
  }, [label, labelFormatter, payload, hideLabel, labelClassName, config, labelKey]);

  if (active == null || payload == null || payload.length === 0 || payload.length === 1) {
    return null;
  }

  const nestLabel = payload.length === 1 && indicator !== "dot";

  return (
    <div
      className={cn(
        "grid min-w-fit items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
        className,
      )}
    >
      {!nestLabel ? tooltipLabel : null}
      <div className="grid gap-1.5">
        {/* eslint-disable-next-line complexity -- This is a complex component. */}
        {payload.map((item, index) => {
          const key = `${nameKey ?? item.name ?? item.dataKey ?? "value"}`;
          const itemConfig = getPayloadConfigFromPayload(config, item, key);
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access -- TODO: Fix this
          const indicatorColor = color ?? item.payload?.fill ?? item.color;

          return (
            <div
              className={cn(
                "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                indicator === "dot" && "items-center",
              )}
              key={item.dataKey as string}
            >
              {formatter != null && item.value != null && item.name != null ? (
                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- TODO: Fix this
                formatter(item.value, item.name, item, index, item.payload)
              ) : (
                <>
                  {itemConfig?.icon != null ? (
                    <itemConfig.icon />
                  ) : (
                    !hideIndicator && (
                      <div
                        className={cn(
                          "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
                          {
                            "h-2.5 w-2.5": indicator === "dot",
                            "w-1": indicator === "line",
                            "w-0 border-[1.5px] border-dashed bg-transparent":
                              indicator === "dashed",
                            "my-0.5": nestLabel && indicator === "dashed",
                          },
                        )}
                        style={
                          {
                            /* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- TODO: Fix this */ // @ts-expect-error -- TODO: Fix this
                            "--color-bg": indicatorColor,
                            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- TODO: Fix this
                            "--color-border": indicatorColor,
                          } satisfies CSSProperties
                        }
                      />
                    )
                  )}
                  <div
                    className={cn(
                      "flex flex-1 justify-between space-x-1 leading-none",
                      nestLabel ? "items-end" : "items-center",
                    )}
                  >
                    <div className="grid gap-1.5">
                      {nestLabel ? tooltipLabel : null}
                      <span className="text-muted-foreground">
                        {itemConfig?.label ?? item.name}
                      </span>
                    </div>
                    {item.value != null && (
                      <span className="font-mono font-medium text-foreground tabular-nums">
                        {item.value.toLocaleString()}
                      </span>
                    )}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

const ChartLegend = RechartsPrimitive.Legend;

/**
 * @param props The props for the ChartLegendContent component.
 * @param props.className The class name for the ChartLegendContent component.
 * @param props.hideIcon Whether to hide the icon for the ChartLegendContent component.
 * @param props.payload The payload for the ChartLegendContent component.
 * @param props.verticalAlign The vertical alignment for the ChartLegendContent component.
 * @param props.nameKey The name key for the ChartLegendContent component.
 * @returns The ChartLegendContent component.
 */
function ChartLegendContent({
  className,
  hideIcon = false,
  payload,
  verticalAlign = "bottom",
  nameKey,
}: React.ComponentProps<"div"> &
  Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> & {
    hideIcon?: boolean;
    nameKey?: string;
  }) {
  const { config } = useChart();

  if (payload == null || payload.length === 0) {
    return null;
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-4",
        verticalAlign === "top" ? "pb-3" : "pt-3",
        className,
      )}
    >
      {payload.map((item) => {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions -- TODO: Fix this
        const key = `${nameKey ?? item.dataKey ?? "value"}`;
        const itemConfig = getPayloadConfigFromPayload(config, item, key);

        return (
          <div
            className={cn(
              "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground",
            )}
            key={item.value as string}
          >
            {itemConfig?.icon != null && !hideIcon ? (
              <itemConfig.icon />
            ) : (
              <div
                className="h-2 w-2 shrink-0 rounded-[2px]"
                style={{
                  backgroundColor: item.color,
                }}
              />
            )}
            {itemConfig?.label}
          </div>
        );
      })}
    </div>
  );
}

// Helper to extract item config from a payload.

/**
 * @param config The config for the getPayloadConfigFromPayload function.
 * @param payload The payload for the getPayloadConfigFromPayload function.
 * @param key The key for the getPayloadConfigFromPayload function.
 * @returns The payload config for the getPayloadConfigFromPayload function.
 */
// eslint-disable-next-line complexity -- This is a complex component.
function getPayloadConfigFromPayload(config: ChartConfig, payload: unknown, key: string) {
  if (typeof payload !== "object" || payload == null) {
    return undefined;
  }

  const payloadPayload =
    "payload" in payload && typeof payload.payload === "object" && payload.payload !== null
      ? payload.payload
      : undefined;

  let configLabelKey: string = key;

  if (key in payload && typeof payload[key as keyof typeof payload] === "string") {
    configLabelKey = payload[key as keyof typeof payload] as string;
  } else if (
    payloadPayload != null &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
  ) {
    configLabelKey = payloadPayload[key as keyof typeof payloadPayload] as string;
  }

  return configLabelKey in config ? config[configLabelKey] : config[key];
}

export {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
};
