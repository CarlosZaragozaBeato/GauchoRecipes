package com.carloszaragozabeato.GauchoRecipe.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.List;

@Table(name="RECETA")
@Entity(name="RECETA")

public class Receta implements Serializable {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long recetaId;
    @Column(name = "NOMBRE")
    private String nombre;
    @Column(name="calorias")
    private int kcal;

    @Override
    public String toString() {
        return "Receta{" +
                "recetaId=" + recetaId +
                ", nombre='" + nombre + '\'' +
                ", kcal=" + kcal +
                '}';
    }

    public Receta() {
    }

    public Long getRecetaId() {
        return recetaId;
    }

    public void setRecetaId(Long recetaId) {
        this.recetaId = recetaId;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getKcal() {
        return kcal;
    }

    public void setKcal(int kcal) {
        this.kcal = kcal;
    }


}
