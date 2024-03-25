type Circle = {
    kind: 'circle',
    radius: number
}
type Rectangle = {
    kind: 'rectangle',
    width: number,
    height: number
}

type Shape = Circle | Rectangle

function describe_shape(shape: Shape){
    if(shape.kind == 'circle'){
        return (`This is a circle with radius ${shape.radius}`)
    } else if(shape.kind == 'rectangle'){
        return (`This is a rectangle with width ${shape.width} and height ${shape.height}`)
    } 
    throw new Error('Invalid shape type')
}
const newCircle : Shape = { kind : 'circle', radius : 5}
const newRectangle : Shape = {kind : 'rectangle', width : 5, height : 5}
console.log(describe_shape(newCircle))
console.log(describe_shape(newRectangle))