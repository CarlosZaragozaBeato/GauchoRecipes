package com.carloszaragozabeato.GauchoRecipe.repository;

import com.carloszaragozabeato.GauchoRecipe.model.Receta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecetaRepository extends JpaRepository<Receta, Long> {
}
