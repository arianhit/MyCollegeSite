CREATE TABLE [dbo].[Courses] (
    [ID]                   INT        IDENTITY (1, 1) NOT NULL,
    [Years_of_Study]       INT        NULL,
    [Placement_Opporunity] NCHAR (10) NULL,
    [Qualification]        VARBINARY(MAX) NULL,
    CONSTRAINT [PK_Courses] PRIMARY KEY CLUSTERED ([ID] ASC)
);

