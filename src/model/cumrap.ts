import Conn from '../../config/db-config';

export const CreateCumRap = async (basic_info: any) => {
    let sql = `INSERT INTO cumrap (ten_cum_rap,dia_chi,ma_he_thong_rap,created_at,deleted_at) VALUE (?,?,?,?,0)`;
    let value = [basic_info.ten_cum_rap, basic_info.dia_chi, basic_info.ma_he_thong_rap, new Date()];
    return Conn.Excute(sql, value)
}

export const ListCumRap = async () => {
    let sql = `SELECT ma_cum_rap ,ten_cum_rap,dia_chi,ma_he_thong_rap FROM cumrap WHERE deleted_at=false`;
    let value = [''];
    return Conn.GetList(sql, value)
}

export const DetailCumrap = async (id: number) => {
    let sql = `SELECT ma_cum_rap ,ten_cum_rap,dia_chi,ma_he_thong_rap FROM cumrap WHERE ma_cum_rap=?`;
    let value = [id];
    return Conn.GetOne(sql, value);
}

export const UpdateCumrap = async (basic_info: any, id: number) => {
    let sql = `UPDATE cumrap SET? WHERE ma_cum_rap=?`;
    let value = [basic_info, id];
    return Conn.Excute(sql, value);
}

export const DeleteCumRap = async (id: number) => {
    let sql = `UPDATE cumrap SET  deleted_at=true WHERE ma_cum_rap=?`;
    let value = [id];
    return Conn.Excute(sql, value)
}
