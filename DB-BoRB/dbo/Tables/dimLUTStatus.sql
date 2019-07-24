CREATE TABLE [dbo].[dimLUTStatus] (
    [Id]     INT           IDENTITY (1, 1) NOT NULL,
    [Status] NVARCHAR (32) NOT NULL,
    CONSTRAINT [PK_LUTStatus] PRIMARY KEY CLUSTERED ([Id] ASC)
);

