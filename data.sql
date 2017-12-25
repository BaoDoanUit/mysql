
Create database testdb;

CREATE TABLE m_role (
  role_id bigint(20) NOT NULL,
  role_name varchar(50) COLLATE utf16_unicode_ci DEFAULT NULL
);

--
-- Đang đổ dữ liệu cho bảng  m_role 
--

INSERT INTO  m_role  ( role_id ,  role_name ) VALUES
(1, 'nhanvien'),
(2, 'khachhang');



CREATE TABLE  role_name  (
   user_id  bigint(20) NOT NULL,
   email  varchar(255) COLLATE utf16_unicode_ci DEFAULT NULL,
   lastname  varchar(50) COLLATE utf16_unicode_ci NOT NULL,
   firstname  varchar(50) COLLATE utf16_unicode_ci NOT NULL,
   role_id  bigint(20) NOT NULL,
   CreateDateTime  datetime DEFAULT NULL,
   UpdateDateTime  datetime DEFAULT NULL
);


INSERT INTO  role_name  ( user_id ,  email ,  lastname ,  firstname ,  role_id ,  CreateDateTime ,  UpdateDateTime ) VALUES
(1, 'baodoanuit@gmail.com', 'doan', 'bao', 1, NULL, NULL),
(2, 'baodoan@gmail.com', 'doan', 'bao', 1, NULL, NULL);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng  m_role 
--
ALTER TABLE  m_role 
  ADD PRIMARY KEY ( role_id );

--
-- Chỉ mục cho bảng  role_name 
--
ALTER TABLE  role_name 
  ADD PRIMARY KEY ( user_id );
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
