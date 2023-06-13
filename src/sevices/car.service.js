import api from "./api";
export const get = async ()=>{
   try{
    const url = "cars";
    const rs = await api.get(url);
    return rs.data;
   }catch(error){
       return [];
   }
}

export const find = async (id) =>{
    try{
        const url ="cars/get-by-id?id="+id;
        const rs = await api.get(url);
        return rs.data;
    }catch(error){
        return {};
    }
}
export const post = async()=>{
 
}
export const search = async(car)=>{
    const url="cars/search?t="+car.type+"||b="+car.brand+"||q="+car.name;
    try{
        const rs = await api.get(url);
        return rs.data;     
    }catch(error){
        alert("Khong tim thay ket qua nao vui long tim kiem lai");
        return [];
    }
    
}