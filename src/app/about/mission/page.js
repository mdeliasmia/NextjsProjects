import Button from "@/app/components/Button";
import Image from "next/image";
import React from "react";
import thumb from "@/images/Top5News.PNG";

export default function About() {
    return (
        <main className="mt-6">
            <div className="mb-6">
                This is MISSION Page This is MISSION Page This is MISSION Page This is MISSION Page This is MISSION Page This is MISSION Page This is MISSION Page
            </div>

            <div className="w-[200px]">
                <Image
                    src={thumb}
                    alt="File icon"
                    quality={100}
                    blurDataURL="data:..."
                    placeholder="blur"
                />
            </div>
            {/* <Image
                src="/images/Top5News.PNG"
                alt="File icon"
                width={446}
                height={100}
            /> */}
            <Button />
        </main>
    );
}