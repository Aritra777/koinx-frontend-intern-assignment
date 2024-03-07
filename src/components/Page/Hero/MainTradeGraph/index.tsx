import React, { useEffect, useRef, useState, memo } from 'react';

function TradingViewWidget({ interval }: { interval: string }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [scriptLoaded, setScriptLoaded] = useState(false);
    const scriptRef = useRef<HTMLScriptElement | null>(null);

    useEffect(() => {
        console.log('useEffect')
        if (!containerRef.current) return;

        // Clean up existing script
        if (scriptRef.current && scriptLoaded) {
            containerRef.current.removeChild(scriptRef.current);
            setScriptLoaded(false);
        }

        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
        script.type = "text/javascript";
        script.async = true;
        script.onload = () => setScriptLoaded(true);
        script.innerHTML = `
        {
          "autosize": true,
          "symbol": "NASDAQ:AAPL",
          "interval": "${interval || "D"}",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "3",
          "locale": "en",
          "enable_publishing": false,
          "gridColor": "rgba(255, 255, 255, 0.06)",
          "hide_top_toolbar": true,
          "hide_legend": true,
          "save_image": false,
          "calendar": true,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`;
        containerRef.current.appendChild(script);
        scriptRef.current = script;

        return () => {
            if (containerRef.current && scriptLoaded) {
                containerRef.current.removeChild(script);
                setScriptLoaded(false);
            }
        };
    }, []);

    return (
        <div className="tradingview-widget-container w-full h-[50vw] max-h-[600px]" ref={containerRef}>
            <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
        </div>
    );
}

export default memo(TradingViewWidget);
