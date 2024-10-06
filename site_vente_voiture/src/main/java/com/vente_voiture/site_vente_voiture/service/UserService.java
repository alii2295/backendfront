package com.vente_voiture.site_vente_voiture.service;


import com.vente_voiture.site_vente_voiture.dto.UserDTO;
import com.vente_voiture.site_vente_voiture.model.Annonce;
import com.vente_voiture.site_vente_voiture.model.User;
import com.vente_voiture.site_vente_voiture.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.NoSuchElementException;

@Service
public class UserService {
    @Autowired
    private UserRepository ur;
    public User create_user(UserDTO userdto)
    {
        User user=new User();
        user.setNom(userdto.getNom());
        user.setEmail(userdto.getEmail());
        user.setPrenom(userdto.getPrenom());
        user.setPassword(userdto.getPassword());


        return ur.save(user);
    }
    /*public void delete_user(long id_user) throws IOException {
        try {
            User user = ur.findById(id_user).orElseThrow(() -> new NoSuchElementException("Utilisateur non trouvé !"));
            ur.deleteById(id_user);}
       } catch (IOException e) {
            // Gérer l'erreur d'entrée/sortie
            throw new IOException("Erreur lors de la lecture du fichier image");
        }catch (NoSuchElementException e) {
            // Gérer l'erreur de l'utilisateur non trouvé
            throw new NoSuchElementException("Utilisateur non trouvé pour l'ID : " + id_user);
        }
    }*/
    public void delete_user(long id_user) {
        User user = ur.findById(id_user)
                .orElseThrow(() -> new NoSuchElementException("Utilisateur non trouvé pour l'ID : " + id_user));
        ur.deleteById(id_user);
    }


    }

