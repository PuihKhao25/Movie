import Conn from '../../config/db-config';

export const CreateBanner = async (basic_info: any) => {
    let sql = `INSERT INTO banner (hinh_anh,ma_phim,created_at,deleted_at) VALUES (?,?,?,0)`;
    let value = [basic_info.hinh_anh, basic_info.ma_phim, new Date()];
    return Conn.Excute(sql, value)
};

export const ListBanner = async () => {
    let sql = `SELECT ma_banner,hinh_anh,ma_phim FROM banner WHERE deleted_at=false`;
    let value = [''];
    return Conn.GetList(sql, value)
}

export const DeleteBanner = async (basic_info: any) => {
    let sql = `UPDATE banner SET deleted_at=true WHERE ma_banner=?`;
    let value = [basic_info];
    return Conn.GetList(sql, value)
}

export const UpdateBanner = async (basic_info: any, id: number) => {
    let sql = `UPDATE banner SET? WHERE ma_banner=?`;
    let value = [basic_info, id];
    return Conn.Excute(sql, value);
}


export const getURL = async (id: number) => {
    let sql = `SELECT hinh_anh FROM banner WHERE ma_banner=?`;
    let value = [id];
    return Conn.GetOne(sql, value)
}
