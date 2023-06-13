import api from "./api";

export const postContract = async (contract)=>{
    const url = "/contracts";
    try{
        const rs = await api.post(url,{numberContract:contract.numberContract,name:contract.name
            ,address:contract.address,email:contract.email,tel:contract.tel,thumbnail:contract.thumbnail
            ,CCCD:contract.CCCD,ngaykihopdong:contract.ngaykihopdong,ngaythue:contract.ngaythue,ngaytra:contract.ngaytra
            ,giatrihopdong:contract.giatrihopdong,giatridatcoc:contract.giatridatcoc,cars_id:contract.cars_id,users_id:contract.users_id});
        alert("Thuê xe thành công");
        return rs.data;
    }catch(error){
        alert("Chưa nhập đầy đủ thông tin");
        return {};
    }
} 