import Conn, { pool } from "../../config/db-config";

export const findByUsername = async (matKhau: string) => {
  let sql = `SELECT tai_khoan, ho_ten, mat_khau,loai_nguoi_dung,email, so_dt
            FROM nguoidung 
            WHERE ho_ten =? AND deleted_at=false`;
  let value = [matKhau];
  return Conn.GetOne(sql, value);
};
export const CreateUser = async (basic_info: any) => {
  const khach_hang = "Khách Hàng";
  let sql = `INSERT INTO nguoidung (ho_ten,email,so_dt,mat_khau,loai_nguoi_dung,create_at,deleted_at) VALUES (?,?,?,?,?,?,0)`;
  let value = [
    basic_info.ho_ten,
    basic_info.email,
    basic_info.so_dt,
    basic_info.mat_khau,
    khach_hang,
    new Date(),
  ];
  return Conn.Excute(sql, value);
};
export const AddUser = async (basic_info: any) => {
  let sql = `INSERT INTO nguoidung (ho_ten,email,so_dt,mat_khau,loai_nguoi_dung,create_at,deleted_at) VALUES (?,?,?,?,?,?,0)`;
  let value = [
    basic_info.ho_ten,
    basic_info.email,
    basic_info.so_dt,
    basic_info.mat_khau,
    basic_info.loai_nguoi_dung,
    new Date(),
  ];
  return Conn.Excute(sql, value);
};
export const CheckExistUser = async (ho_ten: string, email: string) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * From nguoidung WHERE (nguoidung.ho_ten=? OR nguoidung.email=?) AND nguoidung.deleted_at=false`,
      [email, ho_ten],
      (error, results) => {
        return results ? resolve(results) : reject(error);
      }
    );
  });
};

export const ListUser = async () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT tai_khoan as taiKhoan,ho_ten as hoTen,email,so_dt as soDT,loai_nguoi_dung as maLoaiNguoiDung From nguoidung Where deleted_at=false`,
      (error, results) => {
        return results ? resolve(results) : reject(error);
      }
    );
  });
};

export const GetUserDetail = async (id: number) => {
  let sql = `SELECT tai_khoan as taiKhoan,ho_ten as hoTen,email,so_dt as soDT,loai_nguoi_dung as maLoaiNguoiDung  FROM nguoidung WHERE tai_khoan =?`;
  let value = [id];
  return Conn.GetOne(sql, value);
};

export const DeleteUser = async (id: number) => {
  let sql = `UPDATE nguoidung SET deleted_at = true WHERE tai_khoan=?`;
  let value = [id];
  return Conn.Excute(sql, value);
};

export const UpdateUser = async (basic_info: any, id: number) => {
  let sql = `UPDATE nguoidung SET? WHERE tai_khoan=?`;
  let value = [basic_info, id];
  return Conn.Excute(sql, value);
};
