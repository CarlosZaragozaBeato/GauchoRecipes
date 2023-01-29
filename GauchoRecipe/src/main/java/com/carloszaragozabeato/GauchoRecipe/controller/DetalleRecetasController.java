package com.carloszaragozabeato.GauchoRecipe.controller;


import com.carloszaragozabeato.GauchoRecipe.model.DetalleRecetas;
import com.carloszaragozabeato.GauchoRecipe.model.Ingrediente;
import com.carloszaragozabeato.GauchoRecipe.model.Receta;
import com.carloszaragozabeato.GauchoRecipe.repository.DetalleRecetasRepository;
import com.carloszaragozabeato.GauchoRecipe.repository.IngredienteRepository;
import com.carloszaragozabeato.GauchoRecipe.repository.RecetaRepository;
import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/detallerecetas/")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})
public class DetalleRecetasController {


    DetalleRecetasRepository dtlRepository;


    IngredienteRepository ingRepository;


    RecetaRepository rctRepository;

    ArrayList<DetalleRecetas> lista;



    public DetalleRecetasController(DetalleRecetasRepository dtlRepository,
                                    IngredienteRepository ingRepository,
                                    RecetaRepository rctRepository,
                                    ArrayList<DetalleRecetas> lista) {
        this.dtlRepository = dtlRepository;
        this.ingRepository = ingRepository;
        this.rctRepository = rctRepository;
        this.lista = lista;
    }

    @GetMapping("all")
    public List<DetalleRecetas> findAll() {
        return dtlRepository.findAll();
    }


    @PostMapping("create")
    public ResponseEntity<DetalleRecetas> create(@RequestParam int cantidad, @RequestParam Long recetaId, @RequestParam Long ingredienteId) {


        Optional<Receta> rct = rctRepository.findById(recetaId);
        if (rct.isEmpty()) return ResponseEntity.noContent().build();

        Optional<Ingrediente> ing = ingRepository.findById(ingredienteId);
        if (ing.isEmpty()) return ResponseEntity.noContent().build();

        if (cantidad <= 0) return ResponseEntity.noContent().build();


        DetalleRecetas dtlReceta = new DetalleRecetas(rct.get(), ing.get(), cantidad);


        if(comprobarDetalleRecetaIngredientes(dtlReceta)) {
            DetalleRecetas newDtl = dtlRepository.findByIngredienteAndRecetaId(ingredienteId,recetaId);
            System.out.println(newDtl.getClass());
            dtlRepository.deleteById(newDtl.getId());
            dtlRepository.save(dtlReceta);
        }else{
           dtlRepository.save(dtlReceta);
        }



        return ResponseEntity.ok().build();
    }



    public boolean comprobarDetalleRecetaIngredientes(DetalleRecetas dtl){

        ArrayList<DetalleRecetas> lista = (ArrayList<DetalleRecetas>) dtlRepository.findAll();
        boolean condition = false;

        if (!lista.isEmpty()){
            for(DetalleRecetas dtlR: lista){
                if (dtlR.getIngrediente().getIngredienteId() == dtl.getIngrediente().getIngredienteId()){
                    condition = true;
                }
            }
        }
        return condition;
    }



    @PutMapping("update")
    public ResponseEntity<DetalleRecetas> updateCantidad(@RequestParam int cantidad, @RequestParam Long detalleId) {
        Optional<DetalleRecetas> dtlReceta = dtlRepository.findById(detalleId);
        if (dtlReceta.isEmpty())
            return ResponseEntity.badRequest().build();

        if (cantidad > 0) dtlReceta.get().setCantidad(cantidad);

        dtlRepository.save(dtlReceta.get());
        return ResponseEntity.ok(dtlReceta.get());
    }


    @DeleteMapping("delete/{id}")
    public ResponseEntity<DetalleRecetas> deleteById(@PathVariable Long id) {
        Optional<DetalleRecetas> dtlRecetats = dtlRepository.findById(id);

        if (dtlRecetats.isEmpty()) return ResponseEntity.badRequest().build();

        dtlRepository.deleteById(id);

        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("deleteAll")
    public ResponseEntity<String> deleteAll() {

        List<DetalleRecetas> listaDtl = dtlRepository.findAll();

        if (listaDtl.size() == 0) return ResponseEntity.badRequest().build();

        dtlRepository.deleteAll();
        return ResponseEntity.noContent().build();
    }


    @GetMapping("recetaId/{id}")
    public ResponseEntity<List<Ingrediente>> getDetalleRecetasByRecetaId(@PathVariable Long id) {

        ArrayList<DetalleRecetas> listaFiltrada = (ArrayList<DetalleRecetas>) dtlRepository.findByRecetaId(id);
        if (listaFiltrada.isEmpty())
            return ResponseEntity.noContent().build();

        ArrayList<Ingrediente> listaIngredientes = new ArrayList<>();

        for (DetalleRecetas dtl: unproxyDetalleRecetas(listaFiltrada)){
            listaIngredientes.add(dtl.getIngrediente());

        }

        return ResponseEntity.ok(listaIngredientes);
    }

    @GetMapping("ingredienteId/{id}")
    public ResponseEntity<List<Receta>> getDetalleRecetasByIngredienteId(@PathVariable Long id){

        ArrayList<DetalleRecetas> listaFiltrada = (ArrayList<DetalleRecetas>) dtlRepository.findByIngredienteId(id);
       if (listaFiltrada.isEmpty())
            return ResponseEntity.noContent().build();

       ArrayList<Receta> listaRecetas = new ArrayList<>();

       for (DetalleRecetas dtl: unproxyDetalleRecetas(listaFiltrada)){
           listaRecetas.add(dtl.getReceta());

           System.out.println(dtl.getReceta().getClass());
       }

       return ResponseEntity.ok(listaRecetas);
    }





    public List<DetalleRecetas> unproxyDetalleRecetas(List<DetalleRecetas> listaSinFiltrar){
        ArrayList<DetalleRecetas> listaFiltrada = new ArrayList<>();

        for (DetalleRecetas dtl: listaSinFiltrar){
            DetalleRecetas newDtl = new DetalleRecetas();

            newDtl.setId(dtl.getId());
            newDtl.setCantidad(dtl.getCantidad());
            newDtl.setReceta((Receta) Hibernate.unproxy(dtl.getReceta()));
            newDtl.setIngrediente((Ingrediente) Hibernate.unproxy(dtl.getIngrediente()));

            listaFiltrada.add(newDtl);
        }
        return listaFiltrada;
    }

}
