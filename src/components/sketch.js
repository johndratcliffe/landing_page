export const sketch = (p) => {
    const w = 300, h = 150
    const nodes = [
        { x: w/5, y: [2*h/5, 3*h/5], },
        { x: 2*w/5, y: [h/5, 2*h/5, 3*h/5, 4*h/5], weight: [0.2 + 0.2*Math.random(), 0.2 + 0.2*Math.random(), 0.2 + 0.2*Math.random(), 0.2 + 0.2*Math.random()] },
        { x: 3*w/5, y: [h/5, 2*h/5, 3*h/5, 4*h/5], weight: [0.2 + 0.2*Math.random(), 0.2 + 0.2*Math.random(), 0.2 + 0.2*Math.random(), 0.2 + 0.2*Math.random()] },
        { x: 4*w/5, y: [2*h/5, 3*h/5], weight: [0.2 + 0.2*Math.random(), 0.2 + 0.2*Math.random()] },
    ]
    const inverse = 0.1 + Math.random()
    let input = [inverse, 1 - inverse]
    let lineThickness = []
    let weightedSums = []

    function calculateWeights() {
        weightedSums = [...input]
        lineThickness = []

        for (let i = 0; i < nodes[0].y.length; i++) {
            for (let j = 0; j < nodes[1].y.length; j++) {
                if (i === 0) {weightedSums.push(0)}
                lineThickness.push(weightedSums[i] * nodes[1].weight[j])
                weightedSums[j + 2] = weightedSums[j + 2] + weightedSums[i] * nodes[1].weight[j]
            }
        }
        let temp = approximateNormalise(weightedSums.slice(2))
        weightedSums.splice(2)
        weightedSums.push(...temp)

        for (let i = 0; i < nodes[1].y.length; i++) {
            for (let j = 0; j < nodes[2].y.length; j++) {
                if (i === 0) {weightedSums.push(0)}
                lineThickness.push(weightedSums[i] * nodes[2].weight[j])
                weightedSums[j + 6] = weightedSums[j + 6] + weightedSums[i] * nodes[2].weight[j]
            }
        }
        temp = approximateNormalise(weightedSums.slice(6))
        weightedSums.splice(6)
        weightedSums.push(...temp)

        for (let i = 0; i < nodes[2].y.length; i++) {
            for (let j = 0; j < nodes[3].y.length; j++) {
                if (i === 0) {weightedSums.push(0)}
                lineThickness.push(weightedSums[i] * nodes[3].weight[j])
                weightedSums[j + 10] = weightedSums[j + 10] + weightedSums[i] * nodes[3].weight[j]
            }
        }
        temp = approximateNormalise(weightedSums.slice(10))
        weightedSums.splice(10)
        weightedSums.push(...temp)
    }

    function approximateNormalise(arr) {
        const normalize = function(val, max) { 
            return val / (max + 0.05)
        }
    
        const max = Math.max(...arr)
    
        const normalizedValues = []
        arr.forEach(num => {
            normalizedValues.push(normalize(num, max))
        })

        return normalizedValues
    }

    p.setup = () => {
        p.createCanvas(w, h)
        calculateWeights()
    }

    p.draw = () => {
        p.background(255)
        let nodeNum = 0
        for (let i = 0; i < nodes.length; i++) {
            for (let j = 0; j < nodes[i].y.length; j++) {
                p.fill(`rgba(64, 64, 64, ${Math.max(weightedSums[nodeNum++], 0.15)})`)
                p.noStroke()
                p.ellipse(nodes[i].x, nodes[i].y[j], 10)
            }
        }

        const dashOffset = -p.frameCount * 0.25
        p.drawingContext.lineDashOffset = dashOffset
        p.stroke('rgb(64, 64, 64)')

        let lineNum = 0
        for (let i = 0; i < nodes.length - 1; i++) {
            let currentLayer = nodes[i]
            let nextLayer = nodes[i + 1]

            for (let j = 0; j < currentLayer.y.length; j++) {
                for (let k = 0; k < nextLayer.y.length; k++) {
                    p.noFill()
                    const controlX1 = currentLayer.x + (nextLayer.x - currentLayer.x) / 2
                    const controlX2 = controlX1
                    p.drawingContext.setLineDash([5, 3])
                    p.strokeWeight(Math.max(10*lineThickness[lineNum++], 0.1))

                    p.bezier(
                        currentLayer.x, currentLayer.y[j], 
                        controlX1, currentLayer.y[j], 
                        controlX2, nextLayer.y[k], 
                        nextLayer.x, nextLayer.y[k]
                    )
                }
            }
        }
    }
}