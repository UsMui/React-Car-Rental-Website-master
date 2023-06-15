import api from "./api";

export const create = async (contract)=>{
    const url = "/contracts";
    try{
        const rs = await api.post(url,{numberContract:contract.numberContract, name:contract.name, emaddressail:contract.address, email:contract.email,
            tel:contract.tel, thumbnail:contract.thumbnail, cccd:contract.cccd, status:contract.status, contents:contract.contents,
            ngaykyhopdong:contract.ngaykyhopdong, ngaythue:contract.ngaythue, ngaytra:contract.ngaytra, giatrihopdong:contract.giatrihopdong, 
            giatridatcoc:contract.giatridatcoc,carsId:contract.carsId,usersId:contract.usersId,cars:null,users:null});
        alert("Thuê xe thành công");
        return rs.data;
    }catch(error){
        alert("Chưa nhập đầy đủ thông tin");
        return {};
    }
}    