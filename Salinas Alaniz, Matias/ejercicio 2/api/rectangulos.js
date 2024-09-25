import express from 'express'

export const rectanguloRoute = express.Router()

let rectangulos = [
    {id:1, a:4, b:2, superficie: 8,perimetro:12},

]

// GET /rectangulo
rectanguloRoute.get('/', (req, res) =>{
    res.send({data: rectangulos})
})

//GET /rectangulo/:id
rectanguloRoute.get('/:id', (req,res) =>{
    const id = req.params.id
    const rectangulo = rectangulos.find((rectangulo)=> rectangulo.id == id);
    res.send({data: rectangulo})
})
//post /rectangulo
rectanguloRoute.post('/', (req,res) => {
    const {a, b} = req.body
    if (b==0 || a == 0){
        res.status(400).send({mensaje:"Uno de los lados es 0"})
    }else{
        const id = rectangulos[rectangulos.length-1].id + 1
        const rectangulo = { id ,a ,b , perimetro: (a * 2) + (b * 2), superficie: a*b} 
        rectangulos.push(rectangulo)
        res.status(201).send({data: rectangulo})
    }
})

rectanguloRoute.delete('/:id', (req, res) => {
    const { id } = req.params;
    rectangulo = rectangulos.filter((resta)=> resta.id != id);
    res.status(202).send({id})
})

rectanguloRoute.put('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const {a , b} = req.body

        const rectanguloModificado = { id ,a ,b , perimetro: a + 2 + b * 2, superficie: a*b, fecha: new Date()}
        rectangulos = rectangulos.map((resta) => resta.id == id ? rectanguloModificado : resta)
        res.status(201).send({data: rectanguloModificado})
    
})
