package com.vente_voiture.site_vente_voiture.controler;

import com.vente_voiture.site_vente_voiture.dto.AnnonceDTO;
import com.vente_voiture.site_vente_voiture.model.Annonce;
import com.vente_voiture.site_vente_voiture.service.AnnonceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/annonce")
@CrossOrigin(origins = "http://localhost:4200") // Specify allowed origins
public class AnnonceControler {
    @Autowired
    private AnnonceService as;


    @PostMapping(value = "/ajouter/{id_user}")
    public ResponseEntity<String> ajouterAnnonce(
            @PathVariable("id_user") long id_user,
            @RequestPart("annonce") AnnonceDTO annoncedto,
            @RequestPart("image") MultipartFile imageFile) {
        try {
            // Assurez-vous que l'image n'est pas vide
            if (imageFile.isEmpty()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("L'image ne peut pas être vide");
            }

            as.ajouterAnnonce(id_user, annoncedto, imageFile);
            return ResponseEntity.ok("Annonce ajoutée avec succès");
        } catch (NoSuchElementException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Utilisateur non trouvé");
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erreur lors de la lecture de l'image");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erreur lors de l'ajout de l'annonce");
        }
    }
    @DeleteMapping("/delete/{annonce_id}")
    public ResponseEntity<String> delete_annonce(@PathVariable long annonce_id) {
        try {
            as.delete_annonce(annonce_id);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build(); // 204 No Content
        } catch (NoSuchElementException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage()); // 404 Not Found
        }
    }
}
