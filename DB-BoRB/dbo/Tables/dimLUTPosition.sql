CREATE TABLE [dbo].[dimLUTPosition] (
    [Id]       INT            IDENTITY (1, 1) NOT NULL,
    [Position] NVARCHAR (128) NOT NULL,
    CONSTRAINT [PK_LUTPosition] PRIMARY KEY CLUSTERED ([Id] ASC) 
);

