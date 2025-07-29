export function registerWebVitals() {
  if (typeof window !== "undefined") {
    const reportWebVitals = (metric: any) => {
      // Add your analytics service here
      console.log(metric);
    };

    window.addEventListener("load", () => {
      if ("connection" in navigator) {
        const connection = (navigator as any).connection;
        if (connection) {
          console.log("Effective connection type:", connection.effectiveType);
          console.log("Data saver:", connection.saveData);
        }
      }
    });

    return reportWebVitals;
  }
}