'use client'
import { AnimatedText } from "./ui/animated-underline-text-one";

export default function WineTasting() {
    return (
        <div>
            <AnimatedText
                text="Say Cheese & Sip Wine"
                textClassName="text-5xl font-bold mb-2 font-serif"
                underlinePath="M 0,10 Q 75,0 150,10 Q 225,20 300,10"
                underlineHoverPath="M 0,10 Q 75,20 150,10 Q 225,0 300,10"
                underlineDuration={1.5}
            />
        </div>
    );
}
