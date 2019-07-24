CREATE TABLE Application 
(
  ApplicationId INT IDENTITY primary key,
  FName NVARCHAR(128) NOT NULL,
  LName NVARCHAR(128) NOT NULL,
  GTEmail NVARCHAR(256) NOT NULL,
  RegEmail NVARCHAR(256),
  Major NVARCHAR(256) NOT NULL,
  GradYear int NOT NULL,
  Position int FOREIGN KEY REFERENCES LUTPosition(Position),
  TimeCommitmentValue int NOT NULL,
  TCQ1 int DEFAULT 1 FOREIGN KEY REFERENCES LUTTimeCommitment(TCQ1), -- Time Commitment Question 1
  TCQ1A NVARCHAR(512) TEXT NOT NULL -- Time Commitment Question 1 Answer
  TCQ2 int FOREIGN KEY REFERENCES LUTTimeCommitment(TCQ2),
  TCQ2A NVARCHAR(512) TEXT NOT NULL -- Time Commitment Question 2 Answer
  TCQ3 int FOREIGN KEY REFERENCES LUTTimeCommitment(TCQ3),
  TCQ3A NVARCHAR(512) TEXT NOT NULL -- Time Commitment Question 3 Answer
  TCQ4 int FOREIGN KEY REFERENCES LUTTimeCommitment(TCQ4),
  TCQ4A NVARCHAR(512) TEXT NOT NULL -- Time Commitment Question 4 Answer
  TCQ5 int FOREIGN KEY REFERENCES LUTTimeCommitment(TCQ5),
  TCQ5A NVARCHAR(512) TEXT NOT NULL -- Time Commitment Question 5 Answer
  Essay1Value int NOT NULL,
  Essay1Q int FOREIGN KEY REFERENCES LUTPositionEssayQuestions(Position),-- Essay one question
  Essay1A TEXT NOT NULL,
  Essay2Value int NOT NULL,
  Essay2Q int FOREIGN KEY REFERENCES LUTEssayQuestions(1),-- Essay one question
  Essay2A TEXT NOT NULL,
  Essay3Value int NOT NULL,
  Essay3Q int FOREIGN KEY REFERENCES LUTEssayQuestions(2),-- Essay one question
  Essay3A TEXT NOT NULL,
  Linkedin NVARCHAR(256),
  Github NVARCHAR(256),
)

CREATE TABLE LUTPosition 
(
  id int primary key,
  position NVARCHAR(128) NOT NULL
)

INSERT INTO LUTPosition VALUES (1, "Developer");
INSERT INTO LUTPosition VALUES (2, "Designer");
INSERT INTO LUTPosition VALUES (3, "Bootcamper"); 
INSERT INTO LUTPosition VALUES (4, "Operations");
INSERT INTO LUTPosition VALUES (5, "Marketing");

CREATE TABLE LUTTimeCommitment
(
  id int primary key, 
  question NVARCHAR(512)
)

INSERT INTO LUTPosition VALUES (1, "What is your time commitment during the semester to the organization? Hrs/Wk");
INSERT INTO LUTPosition VALUES (2, "What else are you involved in? ");
INSERT INTO LUTPosition VALUES (3, "How many credits will you be taking during the semester?");
INSERT INTO LUTPosition VALUES (4, "Are you available on Tuesdays from 6:30pm to 8pm?");
INSERT INTO LUTPosition VALUES (5, "Are you available on Thursdays from 6:30pm to 8pm?");


CREATE TABLE LUTPositionEssayQuestions
(
  id int primary key, 
  question NVARCHAR(512)
)

INSERT INTO LUTPositionEssayQuestions VALUES (1, "Developer");
INSERT INTO LUTPositionEssayQuestions VALUES (2, "Designer");
INSERT INTO LUTPositionEssayQuestions VALUES (3, "Bootcamper");
INSERT INTO LUTPositionEssayQuestions VALUES (4, "Operations");
INSERT INTO LUTPositionEssayQuestions VALUES (5, "Marketing");

CREATE TABLE LUTEssayQuestions
(
  id int primary key, 
  question NVARCHAR(512)
)

INSERT INTO LUTEssayQuestions VALUES (1, "Tell us about an involvement/project you're passionate about.");
INSERT INTO LUTEssayQuestions VALUES (2, "What is a social issue you're concerned about?");