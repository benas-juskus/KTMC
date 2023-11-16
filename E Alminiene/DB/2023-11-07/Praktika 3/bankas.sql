SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
-- -----------------------------------------------------
-- Schema lietuvos_bankas
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `lietuvos_bankas` DEFAULT CHARACTER SET utf8 ;
USE `lietuvos_bankas` ;

-- -----------------------------------------------------
-- Table `lietuvos_bankas`.`asmuo`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `lietuvos_bankas`.`asmuo` ;

CREATE TABLE IF NOT EXISTS `lietuvos_bankas`.`asmuo` (
  `id` INT NOT NULL AUTO_INCREMENT, 
  `vardas` VARCHAR(45) NULL,
  `pavarde` VARCHAR(45) NULL,
  `tel` INT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) ,
  UNIQUE INDEX `tel_UNIQUE` (`tel` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lietuvos_bankas`.`swedbank`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `lietuvos_bankas`.`swedbank` ;

CREATE TABLE IF NOT EXISTS `lietuvos_bankas`.`swedbank` (
  `swed_saskaita` VARCHAR(20) NULL,
  `asmens_id` INT(11) NULL,
  `balansas` INT NULL,
  PRIMARY KEY (`swed_saskaita`),
  INDEX `fk_swedbank_1_idx` (`asmens_id` ASC),
  CONSTRAINT `id`
    FOREIGN KEY (`asmens_id`)
    REFERENCES `lietuvos_bankas`.`asmuo` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lietuvos_bankas`.`seb`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `lietuvos_bankas`.`seb` ;

CREATE TABLE IF NOT EXISTS `lietuvos_bankas`.`seb` (
  `seb_saskaita` VARCHAR(20) NULL,
  `asmens_id` INT(11) NULL,
  `balansas` INT NULL,
  PRIMARY KEY (`seb_saskaita`),
  INDEX `fk_seb_1_idx` (`asmens_id` ASC),
  CONSTRAINT `fk_seb_1`
    FOREIGN KEY (`asmens_id`)
    REFERENCES `lietuvos_bankas`.`asmuo` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE = InnoDB;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
