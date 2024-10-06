package com.vente_voiture.site_vente_voiture.service;

import com.vente_voiture.site_vente_voiture.dto.AnnonceDTO;
import com.vente_voiture.site_vente_voiture.model.User;
import com.vente_voiture.site_vente_voiture.repository.AnnonceRepository;
import com.vente_voiture.site_vente_voiture.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.vente_voiture.site_vente_voiture.model.Annonce;
import org.springframework.web.multipart.MultipartFile;


import java.io.IOException;
import java.util.NoSuchElementException;

@Service
public class AnnonceService {
    @Autowired
    private UserRepository ur;
    @Autowired
    private AnnonceRepository ar;
    /*public  Annonce create_annonce(String model , String ,long id_user)

    {
        return ar.save(an);
    }*/


    public void ajouterAnnonce(long id_user, AnnonceDTO annoncedto, MultipartFile imageFile) throws IOException {
        try {
            User user = ur.findById(id_user)
                    .orElseThrow(() -> new NoSuchElementException("Utilisateur non trouvé !"));

            byte[] imageBytes = imageFile.getBytes();
            Annonce annonce = new Annonce();
            annonce.setCarburant(annoncedto.getCarburant());
            annonce.setImage(imageBytes);
            annonce.setModel(annoncedto.getModel());
            annonce.setMatricule(annoncedto.getMatricule());
            annonce.setKilometrage(annoncedto.getKilometrage());
            annonce.setUser(user);
            ar.save(annonce);
        } catch (IOException e) {
            // Gérer l'erreur d'entrée/sortie
            throw new IOException("Erreur lors de la lecture du fichier image");
        } catch (NoSuchElementException e) {
            // Gérer l'erreur de l'utilisateur non trouvé
            throw new NoSuchElementException("Utilisateur non trouvé pour l'ID : " + id_user);
        }
    }

    public void delete_annonce(long id_annonce) {
        Annonce annoncedto = ar.findById(id_annonce).orElseThrow(() -> new NoSuchElementException("annonce non trouvé pour l'ID : " + id_annonce));
        ar.deleteById(id_annonce);
    }

}