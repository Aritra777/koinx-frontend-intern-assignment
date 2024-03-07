import React, { useEffect, useRef, useState, memo } from 'react';

function TradingViewWidget() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [scriptLoaded, setScriptLoaded] = useState(false);
    const scriptRef = useRef<HTMLScriptElement | null>(null);

    useEffect(() => {
        console.log('useEffect')
        if (!containerRef.current) return;

        // Clean up existing script
        if (scriptRef.current && scriptLoaded) {
            containerRef.current.removeChild(scriptRef.current);
            // script.removeChild(scriptRef.current);
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
          "interval": "W",
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
          "hide_volume": true
        }`;
        containerRef.current.appendChild(script);
        scriptRef.current = script;

        return () => {
            if (containerRef.current && scriptLoaded) {
                containerRef.current.removeChild(script);
                setScriptLoaded(false);
                scriptRef.current = null;
            }
        };
    }, []);

    return (
        <div className='h-[50vw] max-h-[400px] max-w-maxScreen'>
            <div className="tradingview-widget-container" ref={containerRef} style={{ height: "100%", width: "100%" }}>
                <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
            </div>
        </div>
    );
}

export default memo(TradingViewWidget);
