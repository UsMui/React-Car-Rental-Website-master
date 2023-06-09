import api from "./api";

export const post_contract = async ()=>{
    const url = "contracts";
    try{
        const contract = await api.post(url,{numberContract:contract.numberContract,name:contract.name
            ,address:contract.address,email:contract.email,tel:contract.tel,thumbnail:contract.thumbnail
            ,CCCD:contract.CCCD,ngaykihopdong:contract.ngaykihopdong,ngaythue:contract.ngaythue,ngaytra:contract.ngaytra
            ,giatrihopdong:contract.giatrihopdong,giatridatcoc:contract.giatridatcoc,cars_id:contract.cars_id,users_id:contract.users_id});
        alert("Thuê xe thành công");
        return contract.data;

    }catch(error){
        alert("Chưa nhập đầy đủ thông tin");
        return {};
    }
} 