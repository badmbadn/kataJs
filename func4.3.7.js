const app = document.getElementById('app');
const input = createElement('input','search-input')
const usersWrapper = createElement('div','users-wrapper')
const usersList = createElement('ul','users')        
usersWrapper.append(usersList)

const saveWrapper = createElement('div','save-wrapper')
const saveUsersList = createElement('ul','save-users')
saveWrapper.append(saveUsersList)

app.append(input)
app.append(usersWrapper)
app.append(saveWrapper)

const USER_PER_PAGE = 5

function debounce (fn,ms,immediate) {
    let timeout;

    return function() {
        const context = this, args = arguments;

        const later = function() {
            timeout  = null
            if(!immediate) fn.apply(context,args)
        };

        const callNow  = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later,ms);
        if(callNow) fn.apply(context,args)
    }
}

function clearUsers() {     
    usersList.innerHTML = '';     
}

function createElement(elementTag,elementClass) {
    const element = document.createElement(elementTag)
    if(elementClass) {
     element.classList.add(elementClass)
    }
    return element
}

function renderElements(userData) {
    const userElement = createElement('li','user-prev')
    
    userElement.insertAdjacentHTML('afterbegin',`${userData.name}`);
    usersList.append(userElement)    

    let prevItem = createElement('li','save-users__item')
    prevItem.insertAdjacentHTML('afterbegin',
    `<div class = "save-users__info"> <span> Name : ${userData.name} </span>
                                    <span> Owner : ${userData.owner.login} </span> 
                                    <span> Stars : ${userData.stargazers_count} </span>
     </div>`                              
    )

    let btn = createElement('button','btn')
    prevItem.append(btn)
    saveUsers(prevItem,userElement)
}

function closeBtn() {
    saveUsersList.addEventListener('click',(e) =>{        
        if (e.target.className != 'btn') return;
        let saveElement =  e.target.closest('.save-users__item');
        saveElement.remove();        
        }
    )
}

function saveUsers(user,userElement) {   
    userElement.addEventListener('click', () => {
       saveUsersList.append(user)  
       clearUsers()    
       input.value =''; 
       closeBtn()      
    })
}

async function loadUsers () {
    try {
        const usersValue = input.value;
        clearUsers()
        if(usersValue && usersValue!== ' ') {            
            let res = await fetch(`https://api.github.com/search/repositories?q=${usersValue}&per_page=${USER_PER_PAGE}`)
            let data = await res.json()
            
            if(data.items.length === 0) {   
                let searchError = createElement('li')
                searchError.insertAdjacentHTML('afterbegin',`<p class="search-error">по вашему запросу результатов нет</p>`)
                usersList.append(searchError)
            }
            return data.items.forEach(el => renderElements(el))              
        } 
         else {
            clearUsers()        
        }   

    } catch(err) {   
            let error = createElement('li','error')
            error.insertAdjacentText('afterbegin',`Error! Попробуйте позже`)
            usersList.prepend(error)
            console.warn(err)  
             
    }
        
}

input.addEventListener('keyup', debounce(loadUsers,400))



