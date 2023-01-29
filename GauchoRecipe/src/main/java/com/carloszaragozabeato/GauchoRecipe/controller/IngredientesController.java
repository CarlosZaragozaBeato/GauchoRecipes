package com.carloszaragozabeato.GauchoRecipe.controller;

import com.carloszaragozabeato.GauchoRecipe.model.Ingrediente;
import com.carloszaragozabeato.GauchoRecipe.repository.IngredienteRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.Optional;

@RestController
@RequestMapping("/api/ingredientes/")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})
public class IngredientesController {


    IngredienteRepository ingRepository;

    List<Ingrediente> lstIngredientes;

    public IngredientesController(List<Ingrediente> lstIngredientes, IngredienteRepository ingRepository) {
        this.lstIngredientes = lstIngredientes;
        this.ingRepository = ingRepository;
    }

    @RequestMapping("all")
    public List<Ingrediente> findAll(){
        lstIngredientes = (ArrayList<Ingrediente>) ingRepository.findAll();
        return lstIngredientes;
    }

    @PostMapping("create")
    public ResponseEntity<Ingrediente> create( @RequestBody Ingrediente ingrediente){
        if (String.valueOf(ingrediente.getIngredienteId()).isBlank()){return ResponseEntity.badRequest().build();}

        ingRepository.save(ingrediente);
        return ResponseEntity.ok(ingrediente);
    }

    @GetMapping("{id}")
    public ResponseEntity<Ingrediente> findById(@PathVariable Long id){
        Optional<Ingrediente> ingrediente = ingRepository.findById(id);
        return ingrediente.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.badRequest().build());
    }
    @GetMapping("nombre/{nombre}")
    public ResponseEntity<List<Ingrediente>> findByName(@PathVariable String nombre){

        List<Ingrediente> response = filtrarIngredientes(nombre);
        if(response.size()>0){return ResponseEntity.ok(response);}
        return ResponseEntity.badRequest().build();
    }
    private List<Ingrediente> filtrarIngredientes(String nombre){
        return lstIngredientes.stream().filter((ingrediente) -> {
            return ingrediente.getNombre().contains(nombre);
        }).toList();
    }
    @PutMapping("update")
    public ResponseEntity<Ingrediente> update(@RequestBody Ingrediente ing){
        Optional<Ingrediente> ingrediente = ingRepository.findById(ing.getIngredienteId());
        if (ingrediente.isEmpty())
            return ResponseEntity.badRequest().build();
        ingRepository.save(ing);
        return ResponseEntity.ok(ing);
    }
    @DeleteMapping("delete/{id}")
    public ResponseEntity<Ingrediente> deleteById(@PathVariable Long id){
        Optional<Ingrediente> ingrediente = ingRepository.findById(id);

        if (ingrediente.isEmpty()) return ResponseEntity.badRequest().build();

        ingRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
    @DeleteMapping("deleteAll")
    public ResponseEntity<String> deleteAll(){

        List<Ingrediente> lista = ingRepository.findAll();

        if (lista.size() == 0) return ResponseEntity.badRequest().build();

        ingRepository.deleteAll();
        return ResponseEntity.noContent().build();
    }















}
