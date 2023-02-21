import Conn, { pool } from "../../config/db-config";

export const CreateFlim = async (basic_info: any) => {
  let sql = `INSERT INTO phim (ten_phim,trailer,hinh_anh,mo_ta,ngay_khoi_chieu,danh_gia,hot,
        dang_chieu,sap_chieu,created_at,deleted_at) VALUES (?,?,?,?,?,?,?,?,?,?,0)`;
  let value = [
    basic_info.tenPhim,
    basic_info.trailer,
    basic_info.hinhAnh,
    basic_info.moTa,
    basic_info.ngayKhoiChieu,
    basic_info.danhGia,
    basic_info.hot,
    basic_info.dangChieu,
    basic_info.sapChieu,
    new Date(),
  ];
  return Conn.Excute(sql, value);
};

export const ListFlim = async () => {
  let sql = `SELECT * FROM phim WHERE deleted_at=false`;
  let value = [""];
  return Conn.GetList(sql, value);
};

export const ListDetail = async (id: number) => {
  let sql = `SELECT ma_phim as maPhim, ten_phim as tenPhim,trailer,hinh_anh as hinhAnh, mo_ta as moTa,ngay_khoi_chieu as ngaykhoichieu,danh_gia as danhGia,hot, dang_chieu as dangChieu,sap_chieu as sapChieu  FROM phim WHERE ma_phim=?`;
  let value = [id];
  return Conn.GetOne(sql, value);
};

export const DeleteFlim = async (id: number) => {
  let sql = `UPDATE phim SET deleted_at =true WHERE ma_phim=?`;
  let value = [id];
  return Conn.Excute(sql, value);
};

export const UpdateFLim = async (basic: any, id: number) => {
  console.log(basic);

  let sql = `UPDATE phim SET? WHERE ma_phim=?`;
  let value = [basic, id];
  return Conn.Excute(sql, value);
};

export const getURL = async (id: number) => {
  let sql = `SELECT hinh_anh FROM phim WHERE ma_phim=?`;
  let value = [id];
  return Conn.GetOne(sql, value);
};

export const ListFlimForWeb = async (keyword: any, status: number) => {
  let sql = `SELECT ma_phim as maPhim, ten_phim as tenPhim,trailer,hinh_anh as hinhAnh, mo_ta as moTa,ngay_khoi_chieu as ngaykhoichieu,danh_gia as danhGia,hot, dang_chieu as dangChieu,sap_chieu as sapChieu  FROM phim `;
  let sqlSearch = ` WHERE deleted_at=false`;
  let value = [];

  if (keyword) {
    keyword = "%" + keyword + "%";
    switch (status) {
      case 0:
        sqlSearch += ` AND dang_chieu LIKE ?`;
        value.push(keyword);
        break;
      case 1:
        sqlSearch += ` AND sap_chieu LIKE ?`;
        value.push(keyword);
        break;
    }
  }

  sql = sql + sqlSearch;
  return Conn.GetList(sql, value);
};

export const GetCalendaPhim = (ma_phim: number) => {
  let sql = `SELECT l.ma_lich_chieu as maLichChieu,l.gia_thuong,l.gia_vip,l.ngay_gio_chieu as ngayGioChieu,h.logo,
  l.ma_rap as maRap,r.ten_rap as tenRap ,r.dia_chi as diaChi FROM phim p
  JOIN lichchieu l ON l.ma_phim = p.ma_phim
  JOIN rapphim r ON r.ma_rap = l.ma_rap
  JOIN cumrap c ON c.ma_cum_rap = r.ma_cum_rap
  JOIN hethongrap h ON h.ma_he_thong_rap = c.ma_he_thong_rap
  WHERE p.ma_phim =?`;
  return Conn.GetList(sql, [ma_phim]);
};

export const GetTime = (ma_phim: number) => {
  let sql = `SELECT l.ngay_gio_chieu as ngayGioChieu FROM phim p
  JOIN lichchieu l ON l.ma_phim = p.ma_phim
  JOIN rapphim r ON r.ma_rap = l.ma_rap
  JOIN cumrap c ON c.ma_cum_rap = r.ma_cum_rap
  JOIN hethongrap h ON h.ma_he_thong_rap = c.ma_he_thong_rap
  WHERE p.ma_phim =?`;
  return Conn.GetList(sql, [ma_phim]);
};

export const ListHistory = async (tai_khoan: number) => {
  let sql = `SELECT d.tai_khoan as taiKhoan,l.gia_vip as giaVip,l.gia_thuong as giaThuong, 
  p.ten_phim as tenPhim,p.hinh_anh as hinhAnh, d.created_at as ngayDat, d.ma_ghe,g.ten_ghe
  FROM datve d 
  JOIN lichchieu l On l.ma_lich_chieu = d.ma_lich_chieu
  JOIN phim p ON p.ma_phim = l.ma_phim
  JOIN ghe g ON g.ma_ghe = d.ma_ghe
  WHERE d.tai_khoan=? AND d.deleted_at = false`;

  return Conn.GetList(sql, [tai_khoan]);
};

export const RevenueByShowtimes = async (ma_lich_chieu: number) => {
  let sql = `SELECT d.tai_khoan, d.ma_lich_chieu,d.gia_ve, p.ten_phim FROM datve d 
  JOIN lichchieu l ON l.ma_lich_chieu =d.ma_lich_chieu
  JOIN phim p ON p.ma_phim = l.ma_phim
  WHERE d.ma_lich_chieu = ? AND d.deleted_at = false
  `;
  return Conn.GetList(sql, [ma_lich_chieu]);
};

export const RevenueByPhim = async (ma_phim: number) => {
  let sql = `SELECT l.ma_lich_chieu,d.tai_khoan,d.gia_ve,p.ten_phim FROM lichchieu l
  JOIN datve d ON d.ma_lich_chieu = l.ma_lich_chieu
  JOIN phim p ON p.ma_phim = l.ma_phim
  WHERE l.ma_phim = ? AND l.deleted_at = false
  `;
  return Conn.GetList(sql, [ma_phim]);
};

export const RevenueByTheater = async (ma_rap: number) => {
  let sql = `SELECT l.ma_lich_chieu,d.tai_khoan,d.gia_ve,p.ten_phim FROM lichchieu l
  JOIN datve d ON d.ma_lich_chieu = l.ma_lich_chieu
  JOIN phim p ON p.ma_phim = l.ma_phim
  WHERE l.ma_rap = ? AND l.deleted_at = false
  `;
  return Conn.GetList(sql, [ma_rap]);
};
