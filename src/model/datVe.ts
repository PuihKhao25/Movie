import Conn, { pool } from "../../config/db-config";

export const CreateDatVe = async (basic_info: any) => {

  let sql = `INSERT INTO datve (tai_khoan,ten_ghe,ma_lich_chieu,tong_tien,created_at,deleted_at) VALUES (?,?,?,?,?,0)`;
  let value = [
    basic_info.tai_khoan,
    basic_info.ten_ghe,
    basic_info.ma_lich_chieu,
    basic_info.tong_tien,
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

export const ListPhongveForWeb = async (maLichChieu: number) => {
  let sqlBasic = ` SELECT l.ma_lich_chieu as lichChieu,l.ngay_gio_chieu as ngayGioChieu,
  r.ten_rap as tenRap,r.dia_chi as diaChi,c.ten_cum_rap as tenCumRap,p.ten_phim as tenPhim,p.hinh_anh as hinhAnh,p.ngay_khoi_chieu as ngayKhoiChieu
    FROM lichchieu l
    JOIN rapphim r ON r.ma_rap = l.ma_lich_chieu
    JOIN cumrap c ON c.ma_cum_rap = r.ma_rap
    JOIN phim p ON p.ma_phim = l.ma_phim
    WHERE l.ma_lich_chieu =?`;
  let sqlChair = `SELECT  l.gia_ve as giaVe,g.ten_ghe as tenGhe,g.loai_ghe as loaiGhe, d.ma_ghe as maGhe,d.tai_khoan as taiKhoan,g.deleted_at  as daDat
  FROM lichchieu l
  JOIN datve d ON d.ma_lich_chieu = l.ma_lich_chieu
  JOIN ghe g ON g.ma_ghe = d.ma_ghe
  JOIN nguoidung n ON n.tai_khoan = d.tai_khoan
  WHERE l.ma_lich_chieu = ?
  `;
  let thongTinPhim = await Conn.GetOne(sqlBasic, [maLichChieu]);
  let danhSachGhe = await Conn.GetList(sqlChair, [maLichChieu]);
  return { thongTinPhim, danhSachGhe };
};
