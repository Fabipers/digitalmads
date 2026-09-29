declare global {
  interface Window {
    dataLayer: any[];
  }
}

export type GTMEvent = {
  event: string;
  [key: string]: any;
};

export const pushToDataLayer = (data: GTMEvent) => {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(data);
  }
};
