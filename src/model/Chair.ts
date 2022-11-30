import Conn from '../../config/db-config';

export const CreateChair = async (basic_info: any) => {
    let sql = `INSERT INTO ghe (ten_ghe,loai_ghe,ma_rap,created_at,deleted_at) VALUE (?,?,?,?,0)`;
    let value = [basic_info.ten_ghe, basic_info.loai_ghe, basic_info.ma_rap, new Date()];
    return Conn.Excute(sql, value)
}

export const ListAllChair = async () => {
    let sql = `SELECT ma_ghe,ten_ghe,loai_ghe,ma_rap FROM ghe WHERE deleted_at=false`;
    let value = [''];
    return Conn.GetList(sql, value);
}

export const ListDetailChair = async (id: number) => {
    let sql = `SELECT ma_ghe,ten_ghe,loai_ghe,ma_rap FROM ghe WHERE ma_ghe=?`;
    let value = [id];
    return Conn.GetOne(sql, value);
}

export const UpdateChair = async (basic_info: any, id: number) => {
    let sql = `UPDATE ghe SET? WHERE ma_ghe=?`;
    let value = [basic_info, id];
    return Conn.GetOne(sql, value);
}

export const DeleteChair = async (id: number) => {
    let sql = `UPDATE ghe SET deleted_at=true WHERE ma_ghe=?`;
    let value = [id];
    return Conn.GetOne(sql, value);
}
