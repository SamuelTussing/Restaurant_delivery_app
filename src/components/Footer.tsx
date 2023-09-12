import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="h-12 md:h-24 p-4 lg:p20 xl:p-40 text-red-500 flex items-center justify-between">
            <Link className="font-bold text-xl" href="/">Dolce Vita</Link>
            <p>ALL RIGHTS RESERVED.</p>
        </div>
    )
}
export default Footer