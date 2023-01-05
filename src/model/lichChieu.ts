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

export const GetCalendarSystem = async (maHeThongRap: number) => {
  let sql = `SELECT p.ten_phim,p.ma_phim,p.hot,p.dang_chieu,p.sap_chieu,p.hinh_anh FROM hethongrap h 
  JOIN cumrap c ON c.ma_he_thong_rap = h.ma_he_thong_rap
  JOIN rapphim r ON r.ma_cum_rap = c.ma_cum_rap
  JOIN lichchieu l ON l.ma_rap = r.ma_rap
  JOIN phim p On p.ma_phim = l.ma_phim
  WHERE h.ma_he_thong_rap=? AND h.deleted_at= false`;
  let lstCumRap: any = await Conn.GetList(sql, [maHeThongRap]);

  // let sql1 = `SELECT ma_phim,ten_phim FROM phim WHERE

  // deleted_at= false`;

  // let ds = danhSachPhim.map((a: any) => {
  //   return JSON.stringify(a.ma_phim);
  // });
  //  let sql3 = `SELECT p.ma_phim,l.ma_lich_chieu, l.gia_ve, l.ngay_gio_chieu,l.ma_rap,r.ten_rap
  // FROM phim p
  // JOIN lichchieu l ON l.ma_phim = p.ma_phim
  // JOIN rapphim r ON r.ma_rap = l.ma_rap
  // WHERE p.ma_phim in (?)`;
  // let lstLichChieuTheoPhim = await Conn.GetList(sql3, [ds]);
  return { lstCumRap };
  // let sql3 = `SELECT p.ma_phim,l.ma_lich_chieu, l.gia_ve, l.ngay_gio_chieu,l.ma_rap,r.ten_rap
  // FROM phim p
  // JOIN lichchieu l ON l.ma_phim = p.ma_phim
  // JOIN rapphim r ON r.ma_rap = l.ma_rap
  // WHERE p.ma_phim in (?)`;
  // let lstLichChieuTheoPhim = await Conn.GetList(sql3, [ds]);
  // return {
  //   "content": [
  //     {
  //       "lstCumRap": [
  //         {
  //          ds
  //         },
  //       ],
  //     },
  //   ],
  // };
};
