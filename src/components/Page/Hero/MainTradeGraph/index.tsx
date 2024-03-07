// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
    const container = useRef<HTMLDivElement | undefined>();

    useEffect(
        () => {
            const script = document.createElement("script");
            script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
            script.type = "text/javascript";
            script.async = true;
            script.innerHTML = `
        {
          "autosize": true,
          "symbol": "NASDAQ:AAPL",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "3",
          "locale": "en",
          "enable_publishing": false,
          "gridColor": "rgba(255, 255, 255, 0.06)",
          "hide_top_toolbar": true,
          "hide_legend": true,
          "save_image": false,
          "calendar": false,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`;
            container.current?.appendChild(script);

            return () => {
                if (container.current)
                    container.current.removeChild?.(script);
            }
        },
        []
    );

    return (
        <div className="tradingview-widget-container" ref={container as React.RefObject<HTMLDivElement>} style={{ height: "50vw", width: "100%", maxHeight: "400px" }}>
            <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
            {/* <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div> */}
        </div>
    );
}

export default memo(TradingViewWidget);
