USE [compresu_vipadmin]
GO
/****** Object:  StoredProcedure [dbo].[Json_expectativa]    Script Date: 02/08/2020 8:52:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER  procedure [dbo].[Json_expectativa](@usuario varchar(30))
as
declare @fecha date
set @fecha =   CONVERT(DATETIME,'2020-07-01', 102)
SELECT        ROW_NUMBER() OVER(ORDER BY noper ASC) as ID,MovDiario_R.Unidad, PTY.dbo.Operadores.Noper, PTY.dbo.Operadores.Nombres, MovDiario_R.fecha As Fecha, MovDiario_R.efectivo as Efectivo, MovDiario_R.epago as Epago, MovDiario_R.psaldo as Psaldo, unidad_cobrador.usuario as Usuario
FROM            PTY.dbo.Operadores INNER JOIN
                         MovDiario_R ON PTY.dbo.Operadores.Noper = MovDiario_R.codigo_operador INNER JOIN
                         unidad_cobrador ON MovDiario_R.Unidad = unidad_cobrador.cod_unidad
WHERE        (MovDiario_R.fecha BETWEEN    DATEADD(DAY,-6,@Fecha) and  @fecha)  AND  (unidad_cobrador.usuario = @usuario)
ORDER BY PTY.dbo.Operadores.Unidad, MovDiario_R.fecha