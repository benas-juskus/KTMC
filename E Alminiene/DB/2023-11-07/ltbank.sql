
CREATE TABLE `Customer` (
    `Personal_code` int  NOT NULL ,
    `Name` string  NOT NULL ,
    `Surname` string  NOT NULL ,
    `Telephone` int  NOT NULL ,
    PRIMARY KEY (
        `Personal_code`
    )
);

CREATE TABLE `Swedbank` (
    `Account_number` int  NOT NULL ,
    `Personal_code` int  NOT NULL ,
    `Balance` money  NOT NULL ,
    PRIMARY KEY (
        `Account_number`
    )
);

CREATE TABLE `SEB` (
    `Account_number` int  NOT NULL ,
    `Personal_code` int  NOT NULL ,
    `Balance` money  NOT NULL ,
    PRIMARY KEY (
        `Account_number`
    )
);

ALTER TABLE `Swedbank` ADD CONSTRAINT `fk_Swedbank_Personal_code` FOREIGN KEY(`Personal_code`)
REFERENCES `Customer` (`Personal_code`);

ALTER TABLE `SEB` ADD CONSTRAINT `fk_SEB_Personal_code` FOREIGN KEY(`Personal_code`)
REFERENCES `Customer` (`Personal_code`);

CREATE INDEX `idx_Customer_Name`
ON `Customer` (`Name`);

CREATE INDEX `idx_Customer_Surname`
ON `Customer` (`Surname`);

