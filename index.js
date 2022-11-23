
          document.addEventListener("DOMContentLoaded", ()=> {
            if (document.readyState !== "loading") {
                var keys=Object.keys(localStorage)
                    keys.forEach(function (key){
                        if (key.match(/expenseDetails/g)){
                        var stringifiedExpenseDetails = localStorage.getItem(key);
                        var expenseDetails = JSON.parse(stringifiedExpenseDetails);
                        addDetailsOnScreen(expenseDetails);}
                    })
                }
          })
        var submit=document.getElementById('submit')
        submit.addEventListener('click',addToLocalStorage)
        
        function addToLocalStorage(e){
            e.preventDefault();
            var amount=document.getElementById('amount').value
            var description=document.getElementById('description').value
            var category=document.getElementById('category').value
            var myObj={
                amount,
                description,
                category
            }   
            localStorage.setItem("expenseDetails"+myObj.amount, JSON.stringify(myObj))
            addDetailsOnScreen(myObj)
        }

      
           
        
        function addDetailsOnScreen(myobj){
            
            var ul=document.getElementById('expenses')
            var li=document.createElement('li')
            li.appendChild(document.createTextNode(myobj.amount+" "+myobj.description+" "+myobj.category+" "))
            var a1 = document.createElement("input");
            a1.id = "edit";
            a1.type = "button";
            a1.value = "Edit";
            a1.addEventListener('click',function(){
                localStorage.removeItem("expenseDetails"+ myobj.amount)
                li.remove()
                document.getElementById("amount").value = myobj.amount
                document.getElementById("description").value = myobj.description
                document.getElementById("catogory").value = myobj.category
                
                

            })
            li.appendChild(a1)
            var a2=document.createElement("input")
            a2.id='delete'
            a2.type='button'
            a2.value='Delete'
            a2.addEventListener('click',function(){
                localStorage.removeItem("expenseDetails" + myobj.amount)
                li.remove()
            })
            li.appendChild(a2)
            ul.appendChild(li)


        }