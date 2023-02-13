import Conn, { pool } from "../../config/db-config";

export const CreateSystem = async (basic_info: any) => {
  let sql = `INSERT INTO hethongrap (ten_he_thong_rap,logo,created_at,deleted_at) VALUES (?,?,?,0)`;
  let value = [basic_info.ten_he_thong_rap, basic_info.logo, new Date()];
  return Conn.Excute(sql, value);
};

export const ListSystem = async () => {
  let sql = `SELECT ma_he_thong_rap,ten_he_thong_rap,logo FROM hethongrap WHERE deleted_at=false`;
  let value = [""];
  return Conn.GetList(sql, value);
};

export const DetailSystem = async (id: number) => {
  let sql = ` SELECT ma_he_thong_rap,ten_he_thong_rap,logo FROM hethongrap WHERE ma_he_thong_rap =?`;
  let value = [id];
  return Conn.GetOne(sql, value);
};

export const DeleteSystem = async (id: number) => {
  let sql = `UPDATE hethongrap SET deleted_at=true WHERE ma_he_thong_rap=?`;
  let value = [id];
  return Conn.Excute(sql, value);
};

export const UpdateSystem = async (basic_info: any, id: number) => {
  let sql = `UPDATE hethongrap SET? WHERE ma_he_thong_rap=?`;
  let value = [basic_info, id];
  return Conn.Excute(sql, value);
};

export const getURL = async (id: number) => {
  let sql = `SELECT logo FROM hethongrap WHERE ma_he_thong_rap=?`;
  let value = [id];
  return Conn.GetOne(sql, value);
};

export const CreateRapPhim = async (
  ten_rap: string,
  dia_chi: string,
  ma_cum_rap: number
) => {
  let sql = `INSERT INTO rapphim(ten_rap,dia_chi,ma_cum_rap,created_at,deleted_at) VALUE (?,?,?,?,0)`;
  let value = [ten_rap, dia_chi, ma_cum_rap, new Date()];
  return Conn.Excute(sql, value);
};

export const GetAllRapPhim = async () => {
  let sql = `SELECT ten_rap,dia_chi,ma_cum_rap FROM rapphim WHERE deleted_at =false`;
  return Conn.GetList(sql, [null]);
};

export const GetDetailRapPhim = async (id: number) => {
  let sql = `SELECT ten_rap,dia_chi,ma_cum_rap FROM rapphim WHERE ma_rap = ? AND deleted_at =false `;
  let value = [id];
  return Conn.GetOne(sql, value);
};

export const DeleteRapPhim = async (id: number) => {
  let sql = `UPDATE rapphim SET deleted_at=true  WHERE ma_rap = ? `;
  let value = [id];
  return Conn.GetOne(sql, value);
};

export const UpdateRapPhim = async (basic_info: any, id: number) => {
  let sql = `UPDATE rapphim SET? WHERE ma_rap=?`;
  let value = [basic_info, id];
  return Conn.Excute(sql, value);
};

export const GetAllRapPhimForWeb = async (ma_he_thong_rap: any) => {
  let sql = `SELECT ma_he_thong_rap,ten_he_thong_rap,logo FROM hethongrap`;
  let sqlSearch = ` WHERE deleted_at =false`;
  let value: any = [];
  if (ma_he_thong_rap) {
    ma_he_thong_rap = "%" + ma_he_thong_rap + "%";
    sqlSearch += ` AND ma_he_thong_rap LIKE?`;
    value.push(ma_he_thong_rap);
  }
  sql = sql + sqlSearch;
  return Conn.GetList(sql, value);
};

export const ListDetailFlim = async (ma_lich_chieu: number) => {
  let sql = `SELECT p.ten_phim,p.hinh_anh,l.ngay_gio_chieu 
  FROM lichchieu l JOIN phim p ON p.ma_phim = l.ma_phim 
  WHERE l.ma_lich_chieu = ?`;
  return Conn.GetOne(sql, [ma_lich_chieu]);
};
