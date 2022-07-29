export default function result(arr)
{
    let post = toPostfix(arr)
    let stack = []
    post.forEach(element =>{

        if(!isOprator(element))
        {
            stack.push(element)
        }
        else{
            let b = parseFloat(stack.pop())
            let a = parseFloat(stack.pop())
            switch(element){
                case '+':
                    stack.push(a+b)
                    break
                case '-':
                    stack.push(a-b)
                    break
                case 'x':
                    stack.push(a*b)
                    break
                case '/':
                    stack.push(a/b)
                    break
            }
        }
    })
    return stack.pop()
}



function toPostfix(arr)
{
    let stack = []
    let output = []
    arr.forEach(element => {
        console.log(output)
        console.log(stack)
        if(!isOprator(element)){
            output.push(element)
            return
        }

        if(element == ')')
        {
            const length = stack.length
            
            
            for(let i = 0; i<=length;i++)
            {
                if(stack[stack.length-1]=='(') break
                output.push(stack.pop())
            }
            stack.pop()
            return
        }

        if(greater(element, stack[stack.length-1]))
        {  
            stack.push(element)
        }else{
            const length = stack.length
            for(let i = 0; i<length;i++)
            {
                if(greater(element, stack[stack.length-1])) break
                output.push(stack.pop())
            }
            stack.push(element)
            
        }});
        console.log(stack)
    stack.reverse()
    stack.forEach((element)=>output.push(element))

    console.log(output)

    return output

}

function isOprator(val)
{
    return "+-x/()".includes(val)
}


function greater(oprA, oprB)
// checks precedence of oprator
// true if A > B
{
    let A = 0,B = 0
    if(oprA=='+' || oprA == '-') A = 1
    if(oprA=='x' || oprA == '/') A = 2
    if(oprB=='+' || oprB == '-') B = 1
    if(oprB=='x' || oprB == '/') B = 2
    if(oprA=='(') A = 3
    return A>B
}