import api from "./api";

export const postContract = async (contract)=>{
    const url = "/contracts";
    try{
        const rs = await api.post(url,{contract});
        alert("Thuê xe thành công");
        return rs.data;
    }catch(error){
        alert("Chưa nhập đầy đủ thông tin");
        return {};
    }
} 