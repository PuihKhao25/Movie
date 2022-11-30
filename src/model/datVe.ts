import Conn, { pool } from "../../config/db-config";

export const CreateDatVe = async (basic_info: any) => {
  let sql = `INSERT INTO datve (tai_khoan,ma_lich_chieu,ma_ghe,created_at,deleted_at) VALUES (?,?,?,?,0)`;
  let value = [
    basic_info.tai_khoan,
    basic_info.ma_lich_chieu,
    basic_info.ma_ghe,
    new Date(),
  ];
  return Conn.Excute(sql, value);
};

export const ListDatVe = async () => {
  let sql = `SELECT id,tai_khoan,ma_lich_chieu,ma_ghe FROM datve WHERE deleted_at=false`;
  return Conn.GetList(sql, [null]);
};

export const DetailDatVe = async (id: number) => {
  let sql = ` SELECT id,tai_khoan,ma_lich_chieu,ma_ghe FROM datve WHERE id =?`;
  let value = [id];
  return Conn.GetOne(sql, value);
};

export const DeleteDatVe = async (id: number[]) => {
  let sql = `UPDATE datve SET deleted_at=true WHERE id in(?)`;
  let value = [id];
  return Conn.Excute(sql, value);
};

export const UpdateDatVe = async (basic_info: any, id: number) => {
  let sql = `UPDATE datve SET? WHERE id=?`;
  let value = [basic_info, id];
  return Conn.Excute(sql, value);
};
