export const config = {
  plausible: {
    domain: import.meta.env.VITE_PLAUSIBLE_DOMAIN as string,
    apiHost: import.meta.env.VITE_PLAUSIBLE_API_HOST as string,
  },
} as const;

export type Config = typeof config;
