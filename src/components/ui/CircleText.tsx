'use client';
import React, { useEffect, useState, useMemo } from 'react';

interface CircleTextProps {
  text: string | string[];
  radius?: number | number[];
  speed?: number;
  reverse?: boolean | boolean[];
  className?: string | string[];   // For container-level classes
  textClass?: string | string[];   // Tailwind classes for text styling
  faceOutward?: boolean;           // Optional: keep letters facing outward
}

const CircleText: React.FC<CircleTextProps> = ({
  text,
  radius = 100,
  speed = 0.5,
  reverse = false,
  className = '',
  textClass = '',
  faceOutward = false,
}) => {
  const [angle, setAngle] = useState(0);

  // Animation effect
  useEffect(() => {
    let animationId: number;
    const animate = () => {
      setAngle((prev) => (prev + speed) % 360);
      animationId = requestAnimationFrame(animate);
    };
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [speed]);

  // Normalize props
  const texts = Array.isArray(text) ? text : [text];
  const radii = Array.isArray(radius) ? radius : [radius];
  const reverses = Array.isArray(reverse) ? reverse : [reverse];
  const textClasses = Array.isArray(textClass) ? textClass : [textClass];

  // Precompute text arrays to avoid recalculating
  const textArrays = useMemo(
    () => texts.map((t) => Array.from(t)),
    [texts]
  );

  const renderCircle = (
    chars: string[],
    circleRadius: number,
    isReverse: boolean,
    textClasses: string
  ) => (
    <div key={chars.join('')} className="absolute inset-0">
      {chars.map((char, i) => {
        const charAngle = angle + (i * (360 / chars.length)) * (isReverse ? -1 : 1);
        const radian = (charAngle * Math.PI) / 180;
        const x = 50 + (circleRadius * Math.cos(radian)) / 2;
        const y = 50 + (circleRadius * Math.sin(radian)) / 2;

        return (
          <span
            key={i}
            className={`absolute ${textClasses}`}
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: faceOutward
                ? `rotate(${charAngle}deg) translate(-50%, -50%)`
                : `rotate(${charAngle + 90}deg)`,
              transformOrigin: '0 0',
              whiteSpace: 'pre',
            }}
          >
            {char}
          </span>
        );
      })}
    </div>
  );

  return (
    <div className={`absolute inset-0 ${className}`}>
      {textArrays.map((chars, index) =>
        renderCircle(
          chars,
          radii[index] || radii[0],
          reverses[index] || false,
          textClasses[index] || textClasses[0]
        )
      )}
    </div>
  );
};

export default CircleText;
