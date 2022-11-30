import Conn, { pool } from '../../config/db-config';

export const CreateFlim = async (basic_info: any) => {
    let sql = `INSERT INTO phim (ten_phim,trailer,hinh_anh,mo_ta,ngay_khoi_chieu,danh_gia,hot,
        dang_chieu,sap_chieu,created_at,deleted_at) VALUES (?,?,?,?,?,?,?,?,?,?,0)`;
    let value = [basic_info.ten_phim, basic_info.trailer, basic_info.hinh_anh, basic_info.mo_ta, basic_info.ngay_khoi_chieu,
    basic_info.danh_gia, basic_info.hot, basic_info.dang_chieu, basic_info.sap_chieu, new Date()];
    return Conn.Excute(sql, value)
};

export const ListFlim = async () => {
    let sql = `SELECT * FROM phim WHERE deleted_at=false`;
    let value = [''];
    return Conn.GetList(sql, value)
}

export const ListDetail = async (id: number) => {
    let sql = `SELECT * FROM phim WHERE ma_phim=?`;
    let value = [id];
    return Conn.GetOne(sql, value)
}

export const DeleteFlim = async (id: number) => {
    let sql = `UPDATE phim SET deleted_at =true WHERE ma_phim=?`;
    let value = [id];
    return Conn.Excute(sql, value)
}

export const UpdateFLim = async (basic_info: any, id: number) => {
    let sql = `UPDATE phim SET? WHERE ma_phim=?`;
    let value = [basic_info, id];
    return Conn.Excute(sql, value);
}

export const getURL = async (id: number) => {
    let sql = `SELECT hinh_anh FROM phim WHERE ma_phim=?`;
    let value = [id];
    return Conn.GetOne(sql,value)
}

export const ListFlimForWeb = async () => {

}