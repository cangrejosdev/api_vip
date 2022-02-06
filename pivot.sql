TRANSFORM Last(dbo_unidades_status_historia_pv.razon) AS LastOfrazon
SELECT dbo_unidades_status_historia_pv.codigo_unidad, Last(dbo_unidades_status_historia_pv.usuario) AS LastOfusuario
FROM dbo_unidades_status_historia_pv
WHERE (((dbo_unidades_status_historia_pv.[fecha])>"2020-04-01"))
GROUP BY dbo_unidades_status_historia_pv.codigo_unidad
PIVOT dbo_unidades_status_historia_pv.fecha;
