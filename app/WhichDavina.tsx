'use client'

import { useState } from 'react'
import Image from 'next/image'

const traitOptions = {
    tech: [
        { label: 'Python 🐍', value: 'python' },
        { label: 'Verilog ⚡', value: 'verilog' },
        { label: 'Flutter 💫', value: 'flutter' }
    ],
    energy: [
        { label: 'Iced coffee ☕', value: 'coffee' },
        { label: 'Sleep-deprived 💤', value: 'sleep' },
        { label: 'Focused and fine 🍵', value: 'focus' }
    ],
    aesthetic: [
        { label: 'Grey’s Anatomy binge 🧺', value: 'greys' },
        { label: 'Neat notes, messy tabs 📓', value: 'neat' },
        { label: 'Midnight coder 🌙', value: 'midnight' }
    ],
    vibe: [
        { label: 'Spiral 🌀', value: 'spiral' },
        { label: 'Chill 🍃', value: 'chill' },
        { label: 'Head down, deep focus 🧠', value: 'deep' }
    ]
}

const variantData = {
    debug: {
        image: '/debug.png',
        title: 'Debug Mode Davina',
        quote: 'Fixing my life like I fix bugs... slowly and with coffee.',
        desc: 'Hoodie on, VS Code open, eyes tired but brain still compiling.'
    },
    greys: {
        image: '/greys.png',
        title: 'Grey’s Anatomy Davina',
        quote: 'Code. Cry. Repeat.',
        desc: 'Blanket burrito, iced coffee, show in the background, soft reset in progress.'
    },
    chaos: {
        image: '/chaos.png',
        title: 'Chaos Davina',
        quote: 'Running on race conditions and hope.',
        desc: 'Hair messy, energy drink nearby, 30 tabs open and no regrets.'
    },
    soft: {
        image: '/soft.png',
        title: 'Soft Dev Davina',
        quote: 'Soft on the outside, assertive in the code.',
        desc: 'Pastel hoodie, fuzzy socks, quietly fixing everything.'
    },
    focus: {
        image: '/focus.png',
        title: 'Focus Mode Davina',
        quote: 'Quietly solving problems and scheduling existential dread for later.',
        desc: 'Headphones on, Notion open, planning three weeks ahead.'
    }
}

const getMatchingVariant = (traits: any) => {
    const { tech, energy, aesthetic, vibe } = traits

    // CHAOS DAVINA (only matches this combo)
    if (
        ['python', 'verilog', 'flutter'].includes(tech) &&
        energy === 'sleep' &&
        aesthetic !== 'greys' &&
        vibe === 'spiral'
    ) return 'chaos'

    // GREYS ANATOMY DAVINA
    if (
        ['python', 'flutter'].includes(tech) &&
        aesthetic === 'greys'
    ) return 'greys'

    // DEBUG MODE DAVINA
    if (
        ['python', 'verilog'].includes(tech) &&
        energy === 'sleep' &&
        aesthetic === 'midnight' &&
        vibe !== 'spiral'
    ) return 'debug'

    // SOFT DEV DAVINA
    if (
        ['python', 'flutter'].includes(tech) &&
        energy === 'focus' &&
        aesthetic === 'neat' &&
        vibe === 'chill'
    ) return 'soft'

    // FOCUS MODE DAVINA
    if (
        ['python', 'verilog', 'flutter'].includes(tech) &&
        ['coffee', 'focus'].includes(energy) &&
        aesthetic === 'neat' &&
        vibe === 'deep'
    ) return 'focus'

    return 'debug' // fallback default
}



export default function WhichDavina() {
    const [traits, setTraits] = useState({ tech: '', energy: '', aesthetic: '', vibe: '' })
    const [resultKey, setResultKey] = useState<string | null>(null)

    const handleSelect = (category: string, value: string) => {
        setTraits((prev) => ({ ...prev, [category]: value }))
    }

    const handleSubmit = () => {
        if (Object.values(traits).some((val) => !val)) return
        const match = getMatchingVariant(traits)
        setResultKey(match)
    }

    const result = resultKey ? variantData[resultKey] : null

    return (
        <section className="mb-32">
            <h3 className="text-3xl font-semibold mb-12 text-white text-center">Which Davina Are You?</h3>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                {/* Quiz (Left) */}
                <div className="space-y-10">
                    {Object.entries(traitOptions).map(([key, options]) => (
                        <div key={key} className="text-left">
                            <h4 className="text-lg font-semibold text-[#F5A8C3] capitalize mb-4">{key}</h4>
                            <div className="flex flex-wrap gap-3">
                                {options.map((option) => (
                                    <button
                                        key={option.value}
                                        className={`px-4 py-2 rounded-full text-sm border transition duration-200 hover:scale-105
                    ${traits[key as keyof typeof traits] === option.value
                                                ? 'bg-[#F5A8C3] text-[#0D0D0D] border-[#F5A8C3]'
                                                : 'bg-[#1a1a1a] border-[#2A2A2A] text-[#E5E5E5]'}`}
                                        onClick={() => handleSelect(key, option.value)}
                                    >
                                        {option.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                    <button
                        onClick={handleSubmit}
                        className="mt-4 px-6 py-3 rounded-xl bg-gradient-to-r from-[#C7B6F1] to-[#F5A8C3] text-black text-lg font-semibold shadow-md hover:scale-105 transition"
                    >
                        Reveal Your Davina Variant ✨
                    </button>
                </div>

                {/* Result (Right) */}
                {/* Result (Right) */}
                <div className="text-center md:text-left mt-12 md:mt-32 md:ml-12 lg:ml-48">


                    {result ? (
                        <>
                            <Image
                                src={result.image}
                                alt={result.title}
                                width={280}
                                height={280}
                                className="rounded-lg border border-[#2A2A2A] mx-auto md:mx-0"
                            />
                            <p className="mt-6 text-2xl text-[#C7B6F1] font-bold">{result.title}</p>
                            <p className="mt-2 text-[#E0E0E0] text-sm italic">{result.desc}</p>
                            <p className="mt-2 text-[#888] text-sm">"{result.quote}"</p>
                        </>
                    ) : (
                        <p className="text-[#777]">Your Davina variant will appear here ✨</p>
                    )}
                </div>
            </div>
        </section>
    )
}
