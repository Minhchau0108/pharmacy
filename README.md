<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h2 align="center">Đồ án môn học Phân tích Thiết kế phần mềm</h2>

  <h3 align="center">
Website nhà thuốc trực tuyến
    <br />
    Trường: Đại học Khoa học tự nhiên   <br />
    MSSV: 1988211   <br />
    Họ tên: Phạm Thị Minh Châu
  </h3>
</div>

<!-- ABOUT THE PROJECT -->

# Giới thiệu về project

Xem demo về website tại link youtube

[Link youtube](https://www.youtube.com/watch?v=plJpytcSoSs)

## Môi trường phát triển của ứng dụng:

- [Nodejs](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Sequelize ORM](https://sequelize.org/)
- [Handlebars](https://handlebarsjs.com/)

<!-- ROADMAP -->

# Các chức năng

Khách hàng:

- [x] Xem danh sách thuốc, xem thuốc theo nhóm thuốc
- [x] Quản lý giỏ hàng
- [x] Đặt hàng
- [x] Đăng ký, đăng nhập
- [x] Xem lịch sử đặt hàng

Người quản lý:

- [x] Quản lý thuốc: xem,thêm,xóa, sửa
- [x] Quản lý đơn hàng: xem, cập nhật trạng thái đơn hàng.
- [x] Quản lý người dùng.

# Cài đặt project

### Cài đặt

- NodeJs và PostgreSQL

### Set up

1. Cài đặt NPM packages:

   ```bash
   npm install
   ```

2. Tạo database với tên như file cấu hình config.js trong pgAdmin4

   ```text
   "database": "pharmacydb",
   ```

3. Tạo các bảng bằng cách thực hiện lệnh sequelize.sync() bằng cách

   ```bash
   npm start
   ```

   Truy cập URL `localhost:3000/sync`
   Nếu sync tạo bảng thành công sẽ có thông báo 'database sync complete'

4. Tạo dữ liệu mẫu bằng cách chạy tất cả các file seeders

   ```bash
   sequelize db:seed:all
   ```

5. Khởi động server

   ```bash
   npm start
   ```

Xem [http://localhost:3000](http://localhost:3000) để xem kết quả

Xem [linkyoutube](https://www.youtube.com/watch?v=plJpytcSoSs) phần demo chạy trong localhost

<p align="right">(<a href="#top">back to top</a>)</p>
