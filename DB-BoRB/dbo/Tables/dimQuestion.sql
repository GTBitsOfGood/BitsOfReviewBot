CREATE TABLE [dbo].[dimQuestion] (
    [Id]           INT            IDENTITY (1, 1) NOT NULL,
    [Question]     NVARCHAR (512) NOT NULL,
    [QuestionType] NVARCHAR (128) NOT NULL,
    CONSTRAINT [PK_LUTTimeCommitment] PRIMARY KEY CLUSTERED ([Id] ASC)
);

