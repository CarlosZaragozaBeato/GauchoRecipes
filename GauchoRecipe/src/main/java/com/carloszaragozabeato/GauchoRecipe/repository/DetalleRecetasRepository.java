package com.carloszaragozabeato.GauchoRecipe.repository;

import com.carloszaragozabeato.GauchoRecipe.model.DetalleRecetas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;


@Transactional(readOnly = true)
public interface DetalleRecetasRepository extends JpaRepository<DetalleRecetas, Long> {
    @Query(value = "SELECT * FROM DETALLE_RECETAS WHERE DETALLE_RECETAS.RECETA_ID = :id", nativeQuery = true)
    List<DetalleRecetas> findByRecetaId(@Param("id")Long id);

    @Query(value = "SELECT * FROM DETALLE_RECETAS WHERE DETALLE_RECETAS.INGREDIENTE_ID = :id", nativeQuery = true)
    List<DetalleRecetas> findByIngredienteId(@Param("id")Long id);

    @Query(value = "SELECT * FROM DETALLE_RECETAS WHERE DETALLE_RECETAS.INGREDIENTE_ID = :ingredienteId AND DETALLE_RECETAS.RECETA_ID = :recetaId", nativeQuery = true)
    DetalleRecetas findByIngredienteAndRecetaId(@Param("ingredienteId")Long ingredienteId, @Param("recetaId") Long recetaId);
}
