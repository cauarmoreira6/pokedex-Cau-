CREATE DATABASE IF NOT EXISTS fishdex
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE fishdex;

CREATE TABLE categorias (
  id VARCHAR(30) PRIMARY KEY,
  nome VARCHAR(80) NOT NULL UNIQUE
) ENGINE = InnoDB;

CREATE TABLE especies (
  id VARCHAR(80) PRIMARY KEY,
  nome VARCHAR(120) NOT NULL,
  nome_cientifico VARCHAR(180) NOT NULL UNIQUE,
  habitat TEXT NOT NULL,
  regiao TEXT NOT NULL,
  alimentacao TEXT NOT NULL,
  tamanho_medio VARCHAR(80) NOT NULL,
  tamanho_maximo VARCHAR(80) NOT NULL,
  peso_medio VARCHAR(80) NOT NULL,
  peso_maximo VARCHAR(80) NOT NULL,
  porte ENUM('pequeno', 'medio', 'grande', 'gigante') NOT NULL,
  dificuldade ENUM('Facil', 'Medio', 'Dificil', 'Muito Dificil') NOT NULL,
  foto TEXT NOT NULL,
  descricao TEXT NOT NULL,
  melhor_epoca TEXT NOT NULL,
  tecnicas_pesca TEXT NOT NULL,
  criado_em TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE = InnoDB;

CREATE TABLE especie_categorias (
  especie_id VARCHAR(80) NOT NULL,
  categoria_id VARCHAR(30) NOT NULL,
  principal BOOLEAN NOT NULL DEFAULT FALSE,
  PRIMARY KEY (especie_id, categoria_id),
  CONSTRAINT fk_especie_categorias_especie
    FOREIGN KEY (especie_id) REFERENCES especies(id)
    ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_especie_categorias_categoria
    FOREIGN KEY (categoria_id) REFERENCES categorias(id)
    ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE = InnoDB;

CREATE TABLE especie_status (
  especie_id VARCHAR(80) PRIMARY KEY,
  forca TINYINT UNSIGNED NOT NULL,
  velocidade TINYINT UNSIGNED NOT NULL,
  tamanho TINYINT UNSIGNED NOT NULL,
  dificuldade TINYINT UNSIGNED NOT NULL,
  CONSTRAINT ck_status_forca CHECK (forca BETWEEN 0 AND 100),
  CONSTRAINT ck_status_velocidade CHECK (velocidade BETWEEN 0 AND 100),
  CONSTRAINT ck_status_tamanho CHECK (tamanho BETWEEN 0 AND 100),
  CONSTRAINT ck_status_dificuldade CHECK (dificuldade BETWEEN 0 AND 100),
  CONSTRAINT fk_especie_status_especie
    FOREIGN KEY (especie_id) REFERENCES especies(id)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB;

CREATE TABLE iscas (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(180) NOT NULL,
  tipo ENUM('natural', 'artificial') NOT NULL,
  UNIQUE KEY uq_isca_nome_tipo (nome, tipo)
) ENGINE = InnoDB;

CREATE TABLE especie_iscas (
  especie_id VARCHAR(80) NOT NULL,
  isca_id INT UNSIGNED NOT NULL,
  PRIMARY KEY (especie_id, isca_id),
  CONSTRAINT fk_especie_iscas_especie
    FOREIGN KEY (especie_id) REFERENCES especies(id)
    ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_especie_iscas_isca
    FOREIGN KEY (isca_id) REFERENCES iscas(id)
    ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE = InnoDB;

CREATE TABLE curiosidades (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  especie_id VARCHAR(80) NOT NULL,
  texto TEXT NOT NULL,
  ordem SMALLINT UNSIGNED NOT NULL DEFAULT 1,
  CONSTRAINT fk_curiosidades_especie
    FOREIGN KEY (especie_id) REFERENCES especies(id)
    ON DELETE CASCADE ON UPDATE CASCADE,
  UNIQUE KEY uq_curiosidade_ordem (especie_id, ordem)
) ENGINE = InnoDB;

CREATE TABLE favoritos (
  cliente_id VARCHAR(120) NOT NULL,
  especie_id VARCHAR(80) NOT NULL,
  criado_em TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (cliente_id, especie_id),
  CONSTRAINT fk_favoritos_especie
    FOREIGN KEY (especie_id) REFERENCES especies(id)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB;

CREATE TABLE capturas (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  especie_id VARCHAR(80) NOT NULL,
  pescador VARCHAR(120) NOT NULL,
  data_captura DATE NOT NULL,
  peso_kg DECIMAL(8, 3) NOT NULL,
  tamanho_cm DECIMAL(8, 2) NOT NULL,
  local_captura VARCHAR(255) NOT NULL,
  isca_utilizada VARCHAR(255) NOT NULL,
  criado_em TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT ck_captura_peso CHECK (peso_kg > 0),
  CONSTRAINT ck_captura_tamanho CHECK (tamanho_cm > 0),
  CONSTRAINT fk_capturas_especie
    FOREIGN KEY (especie_id) REFERENCES especies(id)
    ON DELETE RESTRICT ON UPDATE CASCADE,
  INDEX idx_capturas_data (data_captura),
  INDEX idx_capturas_especie (especie_id)
) ENGINE = InnoDB;

INSERT INTO categorias (id, nome) VALUES
  ('pesqueiro', 'Pesqueiro'),
  ('agua-doce', 'Água Doce'),
  ('agua-salgada', 'Água Salgada')
ON DUPLICATE KEY UPDATE nome = VALUES(nome);
