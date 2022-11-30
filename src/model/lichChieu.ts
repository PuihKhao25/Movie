import Conn, { pool } from "../../config/db-config";

export const CreateLichChieu = async (basic_info: any) => {
  let sql = `INSERT INTO lichchieu (ma_rap,ma_phim,ngay_gio_chieu,gia_ve,created_at,deleted_at) VALUES (?,?,?,?,?,0)`;
  let value = [
    basic_info.ma_rap,
    basic_info.ma_phim,
    basic_info.ngay_gio_chieu,
    basic_info.gia_ve,
    new Date(),
  ];
  return Conn.Excute(sql, value);
};

export const ListLichChieu = async () => {
  let sql = `SELECT ma_lich_chieu,ma_rap,ma_phim,ngay_gio_chieu,gia_ve FROM lichchieu WHERE deleted_at=false`;
  return Conn.GetList(sql, [null]);
};

export const DetailLichChieu = async (id: number) => {
  let sql = ` SELECT ma_lich_chieu,ma_rap,ma_phim,ngay_gio_chieu,gia_ve FROM lichchieu WHERE ma_lich_chieu =?`;
  let value = [id];
  return Conn.GetOne(sql, value);
};

export const DeleteLichChieu = async (id: number) => {
  let sql = `UPDATE lichchieu SET deleted_at=true WHERE ma_lich_chieu=?`;
  let value = [id];
  return Conn.Excute(sql, value);
};

export const UpdateLichChieu = async (basic_info: any, id: number) => {
  let sql = `UPDATE lichchieu SET? WHERE ma_lich_chieu=?`;
  let value = [basic_info, id];
  return Conn.Excute(sql, value);
};
