import api from "./api";
export const get = async ()=>{
    try {
        const url = "otos";
        const rs = await api.get(url);
        return rs.data;
    } catch (error) {
        return [];
    }
}
export const find = async (id) =>{
    try{
        const url ="otos/get-by-id?id="+id;
        const rs = await api.get(url);
        return rs.data;
    }catch(error){
        return {};
    }
}
export const post = async()=>{
 
}