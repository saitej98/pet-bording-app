
export const loadData=(elem)=>{
    try {
        let data=localStorage.getItem(elem);
        return JSON.parse(data)
        
    } catch (error) {
        return undefined
    }
}

export const saveData=(elem,data)=>{
    data=JSON.stringify(data);
    localStorage.setItem(elem,data)
}

export const removeData=(elem)=>{
    localStorage.removeItem(elem);
    // localStorage.removeItem("token")
}








