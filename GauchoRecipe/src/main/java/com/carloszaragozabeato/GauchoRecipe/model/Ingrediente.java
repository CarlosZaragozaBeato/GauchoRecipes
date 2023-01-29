package com.carloszaragozabeato.GauchoRecipe.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.io.Serializable;


@Entity(name="INGREDIENTES")
@Table(name = "INGREDIENTES")
public class Ingrediente  implements Serializable{


    @Id()
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long ingredienteId;
    @Column(name="tipo")
    private String tipo;
    @Column(name="nombre")
    private String nombre;
    @Column(name="calorias")
    private int kcal;
    @Column(name="proteinas")
    private int proteinas;
    @Column(name="grasas")
    private int grasas;
    @Column(name="hidratos")
    private int hidratosCarbono;
    @Column(name="calcio")
    private int calcio;
    @Column(name="magnesio")
    private int magnesio;
    @Column(name="potasio")
    private int potasio;

    @Column(name="fosforo")
    private int fosforo;

    public Ingrediente() {
    }

    public Long getIngredienteId() {
        return ingredienteId;
    }

    public void setIngredienteId(Long ingredienteId) {
        this.ingredienteId = ingredienteId;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
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

    public int getProteinas() {
        return proteinas;
    }

    public void setProteinas(int proteinas) {
        this.proteinas = proteinas;
    }

    public int getGrasas() {
        return grasas;
    }

    public void setGrasas(int grasas) {
        this.grasas = grasas;
    }

    public int getHidratosCarbono() {
        return hidratosCarbono;
    }

    public void setHidratosCarbono(int hidratosCarbono) {
        this.hidratosCarbono = hidratosCarbono;
    }

    public int getCalcio() {
        return calcio;
    }

    public void setCalcio(int calcio) {
        this.calcio = calcio;
    }

    public int getMagnesio() {
        return magnesio;
    }

    public void setMagnesio(int magnesio) {
        this.magnesio = magnesio;
    }

    public int getPotasio() {
        return potasio;
    }

    public void setPotasio(int potasio) {
        this.potasio = potasio;
    }

    public int getFosforo() {
        return fosforo;
    }

    public void setFosforo(int fosforo) {
        this.fosforo = fosforo;
    }

    @Override
    public String toString() {
        return "Ingrediente{" +
                "ingredienteId=" + ingredienteId +
                ", tipo='" + tipo + '\'' +
                ", nombre='" + nombre + '\'' +
                ", kcal=" + kcal +
                ", proteinas=" + proteinas +
                ", grasas=" + grasas +
                ", hidratosCarbono=" + hidratosCarbono +
                ", calcio=" + calcio +
                ", magnesio=" + magnesio +
                ", potasio=" + potasio +
                ", fosforo=" + fosforo +
                '}';
    }
}
