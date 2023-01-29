package com.carloszaragozabeato.GauchoRecipe.repository;

import com.carloszaragozabeato.GauchoRecipe.model.Ingrediente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IngredienteRepository extends JpaRepository<Ingrediente, Long> {
}
