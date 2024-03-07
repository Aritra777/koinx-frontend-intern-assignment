import { useHome } from "@/lib/Context/HomeContext";
import React from "react";
import Markdown from 'react-markdown'
import rehypeRaw from "rehype-raw";

function Brief() {
    const { CoinData } = useHome()

    if (!CoinData) return null

    return (
        <section className="flex flex-col gap-3">
            <Markdown rehypePlugins={[rehypeRaw]} >
                {CoinData.description?.en || ""}
            </Markdown>
        </section>
    );
}

export default Brief;
