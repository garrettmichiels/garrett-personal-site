import React, { useEffect, useState, useRef } from 'react';
import Box from '@mui/joy/Box';
import { useColorScheme } from '@mui/joy/styles';

function CustomCursor() {
    const { mode } = useColorScheme();
    const cursorRef = useRef<HTMLDivElement>(null);
    const cursorDotRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const cursor = cursorRef.current;
        const cursorDot = cursorDotRef.current;

        // Hide default cursor
        document.body.style.cursor = 'none';

        const moveCursor = (e: MouseEvent) => {
            if (cursor && cursorDot) {
                const { clientX, clientY } = e;

                // Move the outer ring with a slight delay/transition handled by CSS
                cursor.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;

                // Move the inner dot instantly
                cursorDot.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
            }
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Check if the target is clickable (link, button, or has pointer cursor)
            const isClickable =
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button') ||
                window.getComputedStyle(target).cursor === 'pointer';

            setIsHovering(!!isClickable);
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
            document.body.style.cursor = 'auto';
        };
    }, []);

    // Don't render on touch devices
    if (typeof navigator !== 'undefined' && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return null;
    }

    const baseColor = mode === 'light' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)';
    const hoverColor = 'rgba(47, 113, 214, 0.9)'; // Primary blue
    const glowColor = mode === 'light' ? 'rgba(47, 113, 214, 0.4)' : 'rgba(88, 166, 255, 0.5)';

    return (
        <>
            {/* Main Cursor (Solid Glowing Circle) */}
            <Box
                ref={cursorRef}
                sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '30px',
                    height: '30px',
                    backgroundColor: baseColor,
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    transform: 'translate3d(-100px, -100px, 0)', // Initial off-screen
                    transition: 'transform 0.1s ease-out', // Keep only movement transition
                    marginTop: '-15px', // Center the cursor
                    marginLeft: '-15px',
                    boxShadow: `0 0 15px ${glowColor}, 0 0 30px ${glowColor}`, // Double glow for intensity
                    mixBlendMode: 'normal',
                }}
            />

            {/* Inner Dot (Hidden or subtle center point) */}
            <Box
                ref={cursorDotRef}
                sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '4px',
                    height: '4px',
                    backgroundColor: mode === 'light' ? '#fff' : '#000', // Contrast with outer
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 10000,
                    transform: 'translate3d(-100px, -100px, 0)',
                    marginTop: '-2px',
                    marginLeft: '-2px',
                    opacity: 0.5,
                    transition: 'transform 0s',
                }}
            />
        </>
    );
}

export default CustomCursor;
