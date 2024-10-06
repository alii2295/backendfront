package com.vente_voiture.site_vente_voiture.controler;

import com.vente_voiture.site_vente_voiture.dto.UserDTO;
import com.vente_voiture.site_vente_voiture.model.Annonce;
import com.vente_voiture.site_vente_voiture.model.User;
import com.vente_voiture.site_vente_voiture.service.AnnonceService;
import com.vente_voiture.site_vente_voiture.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.NoSuchElementException;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200") // Specify allowed origins
public class UserControler {
    @Autowired
    private UserService us;
    @PostMapping("/ajouter")
    public User create_user(@RequestBody UserDTO u)
    {
        return us.create_user(u);
    }
    /*@DeleteMapping("/{user_id}")
    public void delete_user(@PathVariable long user_id)
    {
        us.delete_user(user_id);
    }*/
    @DeleteMapping("/delete/{user_id}")
    public ResponseEntity<String> delete_user(@PathVariable long user_id) {
        try {
            us.delete_user(user_id);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build(); // 204 No Content
        } catch (NoSuchElementException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage()); // 404 Not Found
        }
    }



}
