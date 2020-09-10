var inputValue = 0
var a =0;
var b =0;
var flag = true
var operatorElement = null
var operator = ''
var operationsArray = []
var itemsArray = []
var currVal = 0
var result =0
var equalPressed = false
var justStart = false
var flagCustom = false


function disableKeyboard(event){event.preventDefault()}
window.onload = () => {
function customReset()
{
    flagCustom = true
    setTimeout(() => {
        document.getElementById('in-number').value = '0'
        document.getElementById('in-number').readOnly = false
    },1200)
    flag='false'
    itemsArray = []
    operationsArray = []
    currVal = 0
    result =0
    operatorElement = null
    document.getElementById('equalSign').setAttribute('style','background-color: rgb(24, 68, 163);')
}
    
function doCalc()
{
   result = itemsArray[0]
   for(var i=0;i<operationsArray.length;i++)
   {
       if(operationsArray[i] === '+')
           result =  result + itemsArray[i+1] 
       if(operationsArray[i] === '*')
            result = result*itemsArray[i+1]
       if(operationsArray[i] === '/')
            result = result/itemsArray[i+1]
       if(operationsArray[i] === '-')
           result = result - itemsArray[i+1]
   } 
   if(result === Infinity)
   {
    document.getElementById('in-number').value = 'INFINITY'
    document.getElementById('in-number').readonly = true
    customReset()
   }
   else if(Number.isNaN(result))
   {
    console.log('hhhhh')
    document.getElementById('in-number').value = 'NOT DEFINED'
    console.log(document.getElementById('in-number'))
    document.getElementById('in-number').readOnly = true
    console.log(document.getElementById('in-number').readOnly)
    customReset()
   }
   else
   {
    document.getElementById('in-number').value = result
   }  
}

    document.getElementById('in-number').value = '0'
    var tdTags = document.getElementsByTagName('td')
    for(var i =0;i<tdTags.length ; i++)
    {   
        var tm= tdTags[i].innerText
        var tmp = tm.slice()
        if(tmp === 'AC')
        {
                tdTags[i].addEventListener('click', (event) => {
                document.getElementById('in-number').value = '0'
                flag='false'
                itemsArray = []
                operationsArray = []
                flagCustom = true
                currVal = 0
                if(operatorElement)
                operatorElement.setAttribute('style' , '')
                operatorElement = null
                document.getElementById('equalSign').setAttribute('style','background-color: rgb(24, 68, 163);')
              })        
        }

        else if(tmp === '*' || tmp==='/' || tmp==='+' || tmp==='-')
        {
            tdTags[i].addEventListener('click', (event) => {
                if(flagCustom)
                {
                    itemsArray.push(0)
                    flag = true
                }
                console.log(itemsArray , operationsArray)
                if(document.getElementById('in-number').value.slice(-1) === '.')
                {
                    alert('Please type the correct number')
                }
                else
                {
                  
                
                        document.getElementById('equalSign').setAttribute('style','background-color: rgb(24, 68, 163);')
                        operator = event.target.innerText
                        if(operatorElement)
                        operatorElement.setAttribute('style','')
        
                        if(flag === true)
                        {
                            document.getElementById('in-number').value = 0
                            operationsArray.push(operator)
                            if(!equalPressed)
                            {
                                itemsArray.push(currVal)
                            }
                        
                            currVal = 0
                            document.getElementById('in-number').value = ''
                            operatorElement = event.target
                            flag=false
                            event.target.setAttribute('style' , 'background-color: rgb(56, 109, 140)')
                        }
                        else
                        {
                            alert('Please type in the correct value')
                        }
                    
                }         
              })
        }
        else if(tmp === '=')
        {          
            tdTags[i].addEventListener('click', (event) => {
                if(result === Infinity)
                {   
                    itemsArray = []
                    console.log('kjkjkj')
                    operationsArray = []
                    flag='false'
                    itemsArray = []
                    operationsArray = []
                    currVal = 0
                    operatorElement = null
                    setTimeout(() => document.getElementById('in-number').value = '', 1500)
                }
                else
                {          
                if(flag===true && operationsArray.length!==0)
                {
                    
                    itemsArray.push(currVal)
                    justStart = true
                    operatorElement.setAttribute('style','')
                    event.target.setAttribute('style','background-color  : rgba(22, 145, 53)')
                     doCalc()
                     flag = true
                     equalPressed = true
                }
                else
                {
                    alert('Please give us the correct values')
                }
                }
              })
            
        }
        else
        {
            tdTags[i].addEventListener('click', (event) => {
                flagCustom = false
                var clickedButton = event.target.innerText
                
                var validateDot = document.getElementById('in-number').value
                console.log(validateDot)
                if(validateDot.length >=8)
                {
                    
                   
                    
                    alert('Digit limits Exceed or Wrong Incorrect Input!')
                    document.getElementById('in-number').value = '0'
                        customReset()
                   
                    
                    
                }
                else
                {
                    if(validateDot.includes('.') && clickedButton==='.')
                    {
                        alert('Please type the correct number')
                        
                    }
                    else
                    {
                    tmp = document.getElementById('in-number').value + clickedButton
                    document.getElementById('in-number').value = tmp
                    if(operatorElement)
                    operatorElement.setAttribute('style' , '')
                    currVal = parseFloat(tmp)
                    equalPressed = false
                    flag = true
                    
                    }
                }
            
                
              })
        }
        
    }
    
}