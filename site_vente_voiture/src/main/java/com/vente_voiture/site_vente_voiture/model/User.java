package com.vente_voiture.site_vente_voiture.model;

import jakarta.persistence.Entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class User {
@Id
@GeneratedValue
private Long id_user;
private String nom;
private String prenom;
private String password;
private String email;
@OneToMany(mappedBy = "user")
private List<Annonce> annonces;


}
