package com.carloszaragozabeato.GauchoRecipe.controller;

import com.carloszaragozabeato.GauchoRecipe.model.Receta;
import com.carloszaragozabeato.GauchoRecipe.repository.RecetaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/recetas/")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})
public class RecetasController {

    RecetaRepository rctRepository;

    ArrayList<Receta> listaRecetas;

    public RecetasController(RecetaRepository rctRepository, ArrayList<Receta> listaRecetas) {
        this.rctRepository = rctRepository;
        this.listaRecetas = listaRecetas;
    }

    @RequestMapping("all")
    public List<Receta> findAll(){
        listaRecetas = (ArrayList<Receta>) rctRepository.findAll();
        return listaRecetas;
    }
    @GetMapping("{id}")
    public ResponseEntity<Receta> findById(@PathVariable Long id){
        Optional<Receta> receta = rctRepository.findById(id);
        return receta.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.badRequest().build());
    }
    @GetMapping("nombre/{nombre}")
    public ResponseEntity<List<Receta>> findByName(@PathVariable String nombre){

        List<Receta> response = filtrarRecetas(nombre);
        if(response.size()>0){return ResponseEntity.ok(response);}
        return ResponseEntity.badRequest().build();
    }
    private List<Receta> filtrarRecetas(String nombre){
        return listaRecetas.stream().filter((ingrediente) -> {
            return ingrediente.getNombre().contains(nombre);
        }).toList();
    }
    @PostMapping("create")
    public ResponseEntity<Receta> create( @RequestBody Receta receta){
        if (String.valueOf(receta.getRecetaId()).isBlank()){return ResponseEntity.badRequest().build();}
        System.out.println(receta);
        rctRepository.save(receta);
        return ResponseEntity.ok(receta);
    }
    @PutMapping("update")
    public ResponseEntity<Receta> update(@RequestBody Receta rct){
        Optional<Receta> receta = rctRepository.findById(rct.getRecetaId());
        if (receta.isEmpty())
            return ResponseEntity.badRequest().build();
        rctRepository.save(rct);
        return ResponseEntity.ok(rct);
    }
    @DeleteMapping("delete/{id}")
    public ResponseEntity<Receta> deleteById(@PathVariable Long id){
        Optional<Receta> receta = rctRepository.findById(id);

        if (receta.isEmpty()) return ResponseEntity.badRequest().build();

        rctRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
    @DeleteMapping("deleteAll")
    public ResponseEntity<String> deleteAll(){

        List<Receta> lista = rctRepository.findAll();

        if (lista.size() == 0) return ResponseEntity.badRequest().build();

        rctRepository.deleteAll();
        return ResponseEntity.noContent().build();
    }

}
