import type { ReactNode } from 'react';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';

interface RevealProps {
    children: ReactNode;
    delay?: number;
}

const Reveal = ({ children, delay = 0 }: RevealProps) => {
    const { ref, visible } = useRevealOnScroll();

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`
        transition-all duration-700 ease-out
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
        >
            {children}
        </div>
    );
};

export default Reveal;
