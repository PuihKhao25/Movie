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

// export const ListPhongveForWeb = async (malichchieu: number) => {

// };

export const ListPhongveForWeb = async (maLichChieu: number) => {
  let sqlBasic = ` SELECT l.ma_lich_chieu,l.ngay_gio_chieu,r.ten_rap,r.dia_chi,c.ten_cum_rap,p.ten_phim,p.hinh_anh,p.ngay_khoi_chieu
    FROM lichchieu l
    JOIN rapphim r ON r.ma_rap = l.ma_lich_chieu
    JOIN cumrap c ON c.ma_cum_rap = r.ma_rap
    JOIN phim p ON p.ma_phim = l.ma_lich_chieu
    WHERE l.ma_lich_chieu =?`;
  let thongTinPhim = await Conn.GetOne(sqlBasic, [maLichChieu]);
  // let sqlChair = `SELECT d.ma_ghe,g.ten_ghe,r.ten_rap,r.dia_chi
  //       FROM datve d
  //       JOIN ghe g ON g.ma_ghe = d.ma_ghe
  //       JOIN rapphim r ON r.ma_rap =g.ma_rap
  //       WHERE ma_lich_chieu =?`;
  let sqlChair = `SELECT  d.ma_ghe,g.ten_ghe,g.loai_ghe,l.gia_ve,r.ten_rap,n.ho_ten,g.deleted_at as daDat
  FROM lichchieu l
  JOIN datve d ON d.ma_lich_chieu = l.ma_lich_chieu
  JOIN ghe g ON g.ma_ghe = d.ma_ghe
  JOIN rapphim r ON r.ma_rap =g.ma_rap
  JOIN nguoidung n ON n.tai_khoan = d.tai_khoan
  WHERE l.ma_lich_chieu = ?
  `;
  let danhSachGhe = await Conn.GetList(sqlChair, [maLichChieu]);
  return { thongTinPhim, danhSachGhe };
};
