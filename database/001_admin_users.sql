-- King's Royal Spa - Admin Login Table
-- Database: kingroyalspa
-- Password: MD5 hash (32 chars)

USE kingroyalspa;

CREATE TABLE IF NOT EXISTS admin_users (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password CHAR(32) NOT NULL COMMENT 'MD5 hash',
  full_name VARCHAR(100) NOT NULL,
  role ENUM('admin', 'staff') NOT NULL DEFAULT 'admin',
  is_active TINYINT(1) NOT NULL DEFAULT 1,
  last_login_at DATETIME NULL DEFAULT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY uk_admin_users_username (username),
  UNIQUE KEY uk_admin_users_email (email),
  KEY idx_admin_users_active (is_active)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Default admin account
-- Username : admin
-- Password : admin123  (plain text — stored as MD5 below)
-- MD5(admin123) = 0192023a7bbd73250516f069df18b500

INSERT INTO admin_users (username, email, password, full_name, role, is_active)
VALUES (
  'admin',
  'admin@kingroyalspa.com',
  MD5('admin123'),
  'Administrator',
  'admin',
  1
);
