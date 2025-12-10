"use client";

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';

export default function CVPage() {
    const [html, setHtml] = useState('');

    useEffect(() => {
        fetch('/cv-jaime.html')
            .then(res => res.text())
            .then(setHtml);
    }, []);

    return (
        <div className="min-h-screen w-full flex justify-center items-start pb-20 pt-24">
            <div className="px-4 sm:px-8 w-full max-w-6xl">
                <div className='' dangerouslySetInnerHTML={{ __html: html }} />
                {/* {html && <div className='flex mt-10'>
                    <Button asChild variant={"default"}>
                        <a
                            className={cn(
                                "mx-auto text-white/90 font-light flex items-center gap-2",
                                "hover:text-white hover:underline hover:underline-offset-4",
                                "transition-all duration-300 text-sm"
                            )}
                            href="/curriculum.pdf"
                            download="Curriculum_Jaime.pdf"
                            aria-label="Descargar Curriculum"
                        >
                            Download
                        </a>
                    </Button>
                </div>} */}
            </div>
        </div>
    );
}