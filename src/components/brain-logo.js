import React from 'react'

const BrainLogo = () => {
    const circles = [
        { cx: 30, cy: 20, animDur: '2s', dx: 3, dy: -3 },
        { cx: 30, cy: 50, animDur: '2.2s', dx: -2, dy: 2 },
        { cx: 30, cy: 80, animDur: '1.8s', dx: 4, dy: 1 },
        { cx: 100, cy: 10, animDur: '2.4s', dx: -1, dy: -4 },
        { cx: 100, cy: 50, animDur: '2s', dx: 2, dy: 3 },
        { cx: 100, cy: 90, animDur: '1.9s', dx: -3, dy: -2 },
        { cx: 170, cy: 20, animDur: '2.3s', dx: 1, dy: 4 },
        { cx: 170, cy: 50, animDur: '2.1s', dx: -4, dy: -1 },
        { cx: 170, cy: 80, animDur: '1.7s', dx: 3, dy: 2 },
    ];

    const lines = [
        { start: 0, end: 3 }, { start: 0, end: 4 }, { start: 0, end: 5 },
        { start: 1, end: 3 }, { start: 1, end: 4 }, { start: 1, end: 5 },
        { start: 2, end: 3 }, { start: 2, end: 4 }, { start: 2, end: 5 },
        { start: 3, end: 6 }, { start: 3, end: 7 }, { start: 3, end: 8 },
        { start: 4, end: 6 }, { start: 4, end: 7 }, { start: 4, end: 8 },
        { start: 5, end: 6 }, { start: 5, end: 7 }, { start: 5, end: 8 },
    ];

    return(
        <svg className='w-12 h-12' viewBox='0 0 190 90'>
            {circles.map((circle, index) => (
                <circle key={index} r='7' fill='#1D4ED8'>
                <animate
                    attributeName='cx'
                    values={`${circle.cx};${circle.cx + circle.dx};${circle.cx};${circle.cx - circle.dx};${circle.cx}`}
                    dur={circle.animDur}
                    repeatCount='indefinite'
                />
                <animate
                    attributeName='cy'
                    values={`${circle.cy};${circle.cy + circle.dy};${circle.cy};${circle.cy - circle.dy};${circle.cy}`}
                    dur={circle.animDur}
                    repeatCount='indefinite'
                />
                </circle>
            ))}

            {lines.map((line, index) => {
                const start = circles[line.start];
                const end = circles[line.end];
                return (
                <line key={index} stroke='#1D4ED8' strokeWidth='4'>
                    <animate
                        attributeName='x1'
                        values={`${start.cx};${start.cx + start.dx};${start.cx};${start.cx - start.dx};${start.cx}`}
                        dur={start.animDur}
                        repeatCount='indefinite'
                    />
                    <animate
                        attributeName='y1'
                        values={`${start.cy};${start.cy + start.dy};${start.cy};${start.cy - start.dy};${start.cy}`}
                        dur={start.animDur}
                        repeatCount='indefinite'
                    />
                    <animate
                        attributeName='x2'
                        values={`${end.cx};${end.cx + end.dx};${end.cx};${end.cx - end.dx};${end.cx}`}
                        dur={end.animDur}
                        repeatCount='indefinite'
                    />
                    <animate
                        attributeName='y2'
                        values={`${end.cy};${end.cy + end.dy};${end.cy};${end.cy - end.dy};${end.cy}`}
                        dur={end.animDur}
                        repeatCount='indefinite'
                    />
                </line>
                );
            })}
        </svg>
    )
}

export default BrainLogo