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
            let a = parseFloat(stack.pop())
            let b = parseFloat(stack.pop())
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
        if(!isOprator(element)){
            output.push(element)
            return
        }
        if(element == ')')
        {
            while(stack[stack.length]!=')')
            {
                output.push(stack.pop())
            }
            stack.pop()
            return
        }


        if(greater(element, stack[stack.length-1]))
        {
            stack.push(element)
            return
        }

    });

    for(let i = stack.length; i>0;i--)
    {
        output.push(stack.pop())
    }
    console.log(output)
    return output

}

function isOprator(val)
{
    return "+-x/".includes(val)
}


function greater(oprA, oprB)
// checks precedence of oprator
// true if A > B
{
    let A = 0,B = 0
    if(oprA=='+' || oprA == '-') A = 1
    if(oprA=='x' || oprA == '/') A = 2
    return true 
}